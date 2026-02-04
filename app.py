import os
from flask import Flask, send_from_directory, jsonify, request
import psycopg2
from psycopg2.extras import RealDictCursor

app = Flask(__name__, static_folder='.', static_url_path='')

def get_db_connection():
    return psycopg2.connect(os.environ['DATABASE_URL'], cursor_factory=RealDictCursor)

def init_db():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('''
        CREATE TABLE IF NOT EXISTS video_links (
            id SERIAL PRIMARY KEY,
            anime_id VARCHAR(100) NOT NULL,
            episode INTEGER NOT NULL,
            video_url TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            UNIQUE(anime_id, episode)
        )
    ''')
    conn.commit()
    cur.close()
    conn.close()

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def static_files(path):
    return send_from_directory('.', path)

@app.route('/api/videos', methods=['GET'])
def get_all_videos():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('SELECT anime_id, episode, video_url FROM video_links ORDER BY anime_id, episode')
    videos = cur.fetchall()
    cur.close()
    conn.close()
    
    result = {}
    for video in videos:
        key = f"{video['anime_id']}_{video['episode']}"
        result[key] = video['video_url']
    
    return jsonify(result)

@app.route('/api/videos', methods=['POST'])
def add_video():
    data = request.json
    anime_id = data.get('anime_id')
    episode = data.get('episode')
    video_url = data.get('video_url')
    
    if not all([anime_id, episode, video_url]):
        return jsonify({'error': 'Missing fields'}), 400
    
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('''
        INSERT INTO video_links (anime_id, episode, video_url) 
        VALUES (%s, %s, %s)
        ON CONFLICT (anime_id, episode) 
        DO UPDATE SET video_url = EXCLUDED.video_url
    ''', (anime_id, episode, video_url))
    conn.commit()
    cur.close()
    conn.close()
    
    return jsonify({'success': True})

@app.route('/api/videos/<anime_id>/<int:episode>', methods=['DELETE'])
def delete_video(anime_id, episode):
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('DELETE FROM video_links WHERE anime_id = %s AND episode = %s', (anime_id, episode))
    conn.commit()
    cur.close()
    conn.close()
    
    return jsonify({'success': True})

if __name__ == '__main__':
    init_db()
    app.run(host='0.0.0.0', port=5000)