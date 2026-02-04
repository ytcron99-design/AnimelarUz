const animeDatabase = [
  {
    id: 'attack-on-titan',
    title: 'Attack on Titan',
    titleUz: 'Titanlarga Hujum',
    image: 'https://cdn.bhdw.net/im/attack-on-titan-series-anime-male-warrior-character-poster-wallpaper-114497_w635.webp',
    banner: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1920',
    rating: 9.1,
    year: 2013,
    episodes: 87,
    genre: ['action', 'drama'],
    description: 'Insoniyat ulkan devorlar ichida yashaydi, ularni titan deb ataluvchi dahshatli yirtqichlardan himoya qiladi.'
  },
  {
    id: 'demon-slayer',
    title: 'Demon Slayer',
    titleUz: 'Jinlar Qotili',
    image: 'https://images.wallpapersden.com/image/wxl-4k-demon-slayer-kimetsu-no-yaiba-poster-2022_82078.jpg',
    banner: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920',
    rating: 8.9,
    year: 2019,
    episodes: 44,
    genre: ['action', 'supernatural'],
    description: 'Tanjiro oilasini o\'ldirgan jinlardan qasos olish uchun jin ovchisi bo\'lad.'
  },
    {
    id: 'demon-slayer Mugen-jō Hen',
    title: 'Demon Slayer Mugen-jō Hen',
    titleUz: 'Jinlar Qotili Cheksiz Qala ',
    image: 'https://4kwallpapers.com/images/walls/thumbs_3t/22988.jpg',
    banner: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920',
    rating: 8.4,
    year: 2025,
    episodes: 1,
    genre: ['action', 'supernatural'],
    description: 'Demon Slayer Corps a’zolari Muzan Kibutsujini yo‘q qilish uchun qasrga kiradi.'
  },
  {
    id: 'jujutsu-kaisen',
    title: 'Jujutsu Kaisen',
    titleUz: 'Jujutsu Kaysen',
    image: 'https://images5.alphacoders.com/126/thumb-1920-1262882.jpg',
    banner: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1920',
    rating: 8.8,
    year: 2020,
    episodes: 47,
    genre: ['action', 'supernatural'],
    description: 'Yuji Itadori la\'natlangan ruhlardan himoya qiluvchi sehrgarlar maktabiga qo\'shiladi.'
  },
  {
    id: 'one-piece',
    title: 'One Piece',
    titleUz: 'Van Pis',
    image: 'https://4kwallpapers.com/images/walls/thumbs_3t/18913.jpg',
    banner: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920',
    rating: 8.7,
    year: 1999,
    episodes: 1100,
    genre: ['action', 'adventure'],
    description: 'Monkey D. Luffy qaroqchilar qiroli bo\'lish orzusida dengizlarda sarguzasht qiladi.'
  },
  {
    id: 'naruto',
    title: 'Naruto Shippuden',
    titleUz: 'Naruto Shippuden',
    image: 'https://wallpapersok.com/images/high/naruto-shippuden-poster-wrvqucmh1u0z6kku.webp',
    banner: 'https://images.unsplash.com/photo-1519638399535-1b036603ac77?w=1920',
    rating: 8.6,
    year: 2007,
    episodes: 500,
    genre: ['action', 'adventure'],
    description: 'Naruto Uzumaki ninja yoʻlida davom etadi va do\'stini qaytarib olishga harakat qiladi.'
  },
  {
    id: 'my-hero-academia',
    title: 'My Hero Academia',
    titleUz: 'Mening Qahramon Akademiyam',
    image: 'https://images6.alphacoders.com/736/thumb-1920-736061.jpg',
    banner: 'https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?w=1920',
    rating: 8.4,
    year: 2016,
    episodes: 138,
    genre: ['action', 'superhero'],
    description: 'Kuchsiz tug\'ilgan Izuku Midoriya eng buyuk qahramon bo\'lish orzusida.'
  },
  {
    id: 'death-note',
    title: 'Death Note',
    titleUz: 'O\'lim Daftari',
    image: 'https://a.storyblok.com/f/178900/1920x1080/d5b3dfc071/cr_deathnote_hero.png/m/1200x0/filters:quality(95)format(webp)',
    banner: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1920',
    rating: 9.0,
    year: 2006,
    episodes: 37,
    genre: ['thriller', 'supernatural'],
    description: 'Light Yagami ismi yozilgan odamni o\'ldiradigan daftarni topadi.'
  },
  {
    id: 'fullmetal-alchemist',
    title: 'Fullmetal Alchemist: Brotherhood',
    titleUz: 'Temir Alkimyogar',
    image: 'https://mcdn.wallpapersafari.com/medium/1/14/igseUE.jpg',
    banner: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920',
    rating: 9.2,
    year: 2009,
    episodes: 64,
    genre: ['action', 'adventure'],
    description: 'Ikki aka-uka onalarini qayta tiriltirish uchun falsafa toshini qidiradi.'
  },
  {
    id: 'spy-x-family',
    title: 'SPY x FAMILY',
    titleUz: 'Josus X Oilasi',
    image: 'https://images2.alphacoders.com/123/thumb-1920-1231204.jpg',
    banner: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920',
    rating: 8.6,
    year: 2022,
    episodes: 37,
    genre: ['action', 'comedy'],
    description: 'Josus, o\'ldiruvchi va telepat qiz soxta oila sifatida birga yashaydi.'
  },
  {
    id: 'chainsaw-man',
    title: 'Chainsaw Man',
    titleUz: 'Arra Odam',
    image: 'https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/65a20c13-b27b-49d8-9040-5eb8ecaba11e/cool-poster-art-for-chainsaw-man-created-by-vincent-aseo.jpg?format=2500w',
    banner: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1920',
    rating: 8.5,
    year: 2022,
    episodes: 12,
    genre: ['action', 'supernatural'],
    description: 'Denji jinlar bilan kurashuvchi maxsus bo\'limga qo\'shiladi.'
  },
  {
    id: 'tokyo-revengers',
    title: 'Tokyo Revengers',
    titleUz: 'Tokio Qasoskorlari',
    image: 'https://wallpapers.com/images/featured/tokyo-revengers-pictures-ky84600g1zvryv2o.webp',
    banner: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=1920',
    rating: 8.2,
    year: 2021,
    episodes: 49,
    genre: ['action', 'drama'],
    description: 'Takemichi o\'tmishga sayohat qilib, o\'lgan sevgilisini saqlab qolishga harakat qiladi.'
  },
  {
    id: 'your-name',
    title: 'Your Name',
    titleUz: 'Sening Isming',
    image: 'https://abrakadabra.fun/uploads/posts/2021-12/thumbs/1640526928_7-abrakadabra-fun-p-zastavka-na-rabochii-stol-tvoe-imya-8.jpg',
    banner: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920',
    rating: 9.0,
    year: 2016,
    episodes: 1,
    genre: ['romance', 'drama'],
    description: 'Ikki bola bir-birining tanasida uyg\'onib, bir-birini topishga harakat qiladi.'
  },
  {
    id: 'sword-art-online',
    title: 'Sword Art Online',
    titleUz: 'Qilich San\'ati Onlayn',
    image: 'https://c4.wallpaperflare.com/wallpaper/382/921/173/anime-anime-boys-anime-girls-sword-sword-art-online-alternative-hd-wallpaper-preview.jpg',
    banner: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1920',
    rating: 7.5,
    year: 2012,
    episodes: 96,
    genre: ['action', 'romance'],
    description: 'O\'yinchilar virtual o\'yindan chiqish uchun o\'yinni tugatishlari kerak.'
  },
  {
    id: 'violet-evergarden',
    title: 'Violet Evergarden',
    titleUz: 'Binafsha Evergarden',
    image: 'https://w0.peakpx.com/wallpaper/276/155/HD-wallpaper-anime-violet-evergarden-violet-evergarden-character.jpg',
    banner: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1920',
    rating: 8.7,
    year: 2018,
    episodes: 13,
    genre: ['drama', 'romance'],
    description: 'Urushdan keyin Violet odamlarning his-tuyg\'ularini tushunishni o\'rganadi.'
  },
  {
    id: 'solo-leveling',
    title: 'Solo Leveling',
    titleUz: 'Yolg\'iz Kuchayish',
    image: 'https://4kwallpapers.com/images/walls/thumbs_3t/24719.jpg',
    banner: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1920',
    rating: 8.8,
    year: 2024,
    episodes: 12,
    genre: ['action', 'fantasy'],
    description: 'Eng zaif ovchi Sung Jin-Woo maxfiy kuchni kashf etadi.'
  },
  {
    id: 'bleach',
    title: 'Bleach: Thousand-Year Blood War',
    titleUz: 'Bleach',
    image: 'https://images8.alphacoders.com/139/thumb-1920-1395512.jpg',
    banner: 'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=1920',
    rating: 9.1,
    year: 2022,
    episodes: 52,
    genre: ['action', 'supernatural'],
    description: 'Ichigo Kurosaki Soul Society\'ni himoya qilish uchun kurashadi.'
  },
  {
    id: 'dragon-ball',
    title: 'Dragon Ball Super',
    titleUz: 'Ajdaho Shari',
    image: 'https://wallpapers.com/images/featured/dragon-ball-z-3izrb2kvqsbl3tun.webp',
    banner: 'https://images.unsplash.com/photo-1464802686167-b939a6910659?w=1920',
    rating: 7.5,
    year: 2015,
    episodes: 131,
    genre: ['action', 'adventure'],
    description: 'Goku yangi dushmanlar bilan jang qilib, yangi quvvatlarni egallaydi.'
  },
  {
    id: 'one-punch-man',
    title: 'One Punch Man',
    titleUz: 'Bir Musht Odam',
    image: 'https://images.alphacoders.com/741/thumb-1920-741091.jpg',
    banner: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1920',
    rating: 8.5,
    year: 2015,
    episodes: 24,
    genre: ['action', 'comedy'],
    description: 'Saitama har qanday dushmanni bir musht bilan mag\'lub etadi.'
  },
  {
    id: 'hunter-x-hunter',
    title: 'Hunter x Hunter',
    titleUz: 'Ovchi x Ovchi',
    image: 'https://www.hdwallpapers.in/thumbs/2020/hunter_x_hunter_gon_and_killua_3_hd_anime-t2.jpg',
    banner: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920',
    rating: 9.0,
    year: 2011,
    episodes: 148,
    genre: ['action', 'adventure'],
    description: 'Gon otasini topish uchun ovchi bo\'lishga qaror qiladi.'
  },
  {
    id: 'kaguya-sama',
    title: 'Kaguya-sama: Love is War',
    titleUz: 'Sevgi Jangi',
    image: 'https://wallpapers.com/images/featured/kaguya-sama-love-is-war-0im2otust4l82hmn.webp',
    banner: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1920',
    rating: 8.7,
    year: 2019,
    episodes: 37,
    genre: ['romance', 'comedy'],
    description: 'Ikki talaba bir-birini sevishini tan oldirishga harakat qiladi.'
  }
];

const ADMIN_PASSWORD = 'admin123';
let isAdmin = false;
let currentAnime = null;
let currentEpisode = 1;
let videoLinks = {};
let heroIndex = 0;
let heroInterval = null;

async function init() {
  await loadVideoLinks();
  renderAnimeRows();
  setupHeroSlider();
  setupNavbarScroll();
  setupSearch();
  setupKeyboardShortcuts();
  populateAdminAnimeSelect();
  setupScrollAnimations();
}

async function loadVideoLinks() {
  try {
    const response = await fetch('/api/videos');
    if (response.ok) {
      videoLinks = await response.json();
    }
  } catch (error) {
    console.log('Database not available, using localStorage');
    const saved = localStorage.getItem('sailanime_videos');
    if (saved) {
      videoLinks = JSON.parse(saved);
    }
  }
}

async function saveVideoLink(animeId, episode, link) {
  const key = `${animeId}_${episode}`;
  videoLinks[key] = link;
  
  try {
    await fetch('/api/videos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ anime_id: animeId, episode: episode, video_url: link })
    });
  } catch (error) {
    localStorage.setItem('sailanime_videos', JSON.stringify(videoLinks));
  }
}

async function deleteVideoLink(animeId, episode) {
  const key = `${animeId}_${episode}`;
  delete videoLinks[key];
  
  try {
    await fetch(`/api/videos/${animeId}/${episode}`, { method: 'DELETE' });
  } catch (error) {
    localStorage.setItem('sailanime_videos', JSON.stringify(videoLinks));
  }
}

function getVideoLink(animeId, episode) {
  const key = `${animeId}_${episode}`;
  return videoLinks[key] || null;
}

function setupHeroSlider() {
  const featuredAnime = animeDatabase.filter(a => a.rating >= 8.5).slice(0, 5);
  const slider = document.getElementById('heroSlider');
  const indicators = document.getElementById('heroIndicators');
  
  // Use the card image as the hero background so banner and card match
  slider.innerHTML = featuredAnime.map((anime, i) => `
    <div class="hero-slide ${i === 0 ? 'active' : ''}" style="background-image: url('${anime.image}')"></div>
  `).join('');
  
  indicators.innerHTML = featuredAnime.map((_, i) => `
    <div class="hero-indicator ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})"></div>
  `).join('');
  
  updateHeroContent(featuredAnime[0]);
  
  heroInterval = setInterval(() => {
    heroIndex = (heroIndex + 1) % featuredAnime.length;
    showSlide(heroIndex, featuredAnime);
  }, 6000);
}

function showSlide(index, animeList) {
  const slides = document.querySelectorAll('.hero-slide');
  const indicators = document.querySelectorAll('.hero-indicator');
  
  slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
  indicators.forEach((ind, i) => ind.classList.toggle('active', i === index));
  
  updateHeroContent(animeList[index]);
}

function goToSlide(index) {
  const featuredAnime = animeDatabase.filter(a => a.rating >= 8.5).slice(0, 5);
  heroIndex = index;
  showSlide(index, featuredAnime);
  
  clearInterval(heroInterval);
  heroInterval = setInterval(() => {
    heroIndex = (heroIndex + 1) % featuredAnime.length;
    showSlide(heroIndex, featuredAnime);
  }, 6000);
}

function updateHeroContent(anime) {
  const content = document.getElementById('heroContent');
  content.innerHTML = `
    <h1>${anime.titleUz || anime.title}</h1>
    <p class="description">${anime.description}</p>
    <div class="hero-meta">
      <span class="rating"><i class="bi bi-star-fill"></i> ${anime.rating}</span>
      <span><i class="bi bi-calendar3"></i> ${anime.year}</span>
      <span><i class="bi bi-collection-play"></i> ${anime.episodes} qism</span>
    </div>
    <div class="hero-buttons">
      <button class="btn btn-primary" onclick="playAnime('${anime.id}')"><i class="bi bi-play-fill"></i> Ko'rish</button>
      <button class="btn btn-secondary"><i class="bi bi-plus-lg"></i> Ro'yxatga</button>
    </div>
  `;
}

function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.anime-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.8s ease';
    observer.observe(section);
  });
}

function renderAnimeRows() {
  const trending = animeDatabase.filter(a => a.rating >= 8.5).slice(0, 10);
  renderAnimeRow('trendingAnime', trending);

  const topRated = [...animeDatabase].sort((a, b) => b.rating - a.rating).slice(0, 10);
  renderAnimeRow('topRatedAnime', topRated);

  const newAnime = [...animeDatabase].sort((a, b) => b.year - a.year).slice(0, 10);
  renderAnimeRow('newAnime', newAnime);

  const action = animeDatabase.filter(a => a.genre.includes('action')).slice(0, 10);
  renderAnimeRow('actionAnime', action);

  const romance = animeDatabase.filter(a => a.genre.includes('romance') || a.genre.includes('drama')).slice(0, 10);
  renderAnimeRow('romanceAnime', romance);
}

function renderAnimeRow(containerId, animeList) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = animeList.map(anime => `
    <div class="anime-card" onclick="openPlayer('${anime.id}')">
      <img src="${anime.image}" alt="${anime.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/200x280/161616/666?text=No+Image'">

      <!-- Quick action icons (bookmark, info, genres) -->
      <div class="card-quick-icons">
        <button class="icon-btn bookmark-btn" title="Bookmark" onclick="toggleBookmark(event, '${anime.id}')">
          <i class="bi bi-bookmark"></i>
        </button>
        <button class="icon-btn info-btn" title="Info" onclick="event.stopPropagation(); alert('${(anime.titleUz || anime.title).replace(/'/g, "\\'")} - ${anime.year}');">
          <i class="bi bi-info-circle"></i>
        </button>
        <div class="icon genre-icon" title="Genres: ${anime.genre.join(', ')}"><i class="bi bi-tags"></i></div>
      </div>

      <div class="play-icon"><i class="bi bi-play-fill"></i></div>
      <div class="anime-card-info">
        <div class="anime-card-title">${anime.titleUz || anime.title}</div>
        <div class="anime-card-meta">
          <span class="anime-card-rating"><i class="bi bi-star-fill"></i> ${anime.rating}</span>
          <span>${anime.year}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// Toggle bookmark for a card without triggering parent click
function toggleBookmark(e, animeId) {
  e.stopPropagation();
  const btn = e.currentTarget;
  btn.classList.toggle('bookmarked');
  // Simple visual feedback; in future this can persist to backend/localStorage
  if (btn.classList.contains('bookmarked')) {
    btn.title = 'Bookmarked';
  } else {
    btn.title = 'Bookmark';
  }
}

function openPlayer(animeId) {
  const anime = animeDatabase.find(a => a.id === animeId);
  if (!anime) return;

  currentAnime = anime;
  currentEpisode = 1;

  document.getElementById('playerTitle').textContent = anime.titleUz || anime.title;
  
  document.getElementById('animeDetails').innerHTML = `
    <h3>${anime.titleUz || anime.title}</h3>
    <div class="meta">
      <span><i class="bi bi-star-fill"></i> ${anime.rating}</span>
      <span><i class="bi bi-calendar3"></i> ${anime.year}</span>
      <span><i class="bi bi-collection-play"></i> ${anime.episodes} qism</span>
    </div>
    <p>${anime.description}</p>
  `;

  renderEpisodes();
  playEpisode(1);
  
  document.getElementById('playerPage').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function renderEpisodes() {
  const grid = document.getElementById('episodesGrid');
  let html = '';
  
  for (let i = 1; i <= Math.min(currentAnime.episodes, 50); i++) {
    const hasVideo = getVideoLink(currentAnime.id, i);
    html += `
      <button class="episode-btn ${i === currentEpisode ? 'active' : ''} ${hasVideo ? 'has-video' : ''}" 
              onclick="playEpisode(${i})">
        ${i}
      </button>
    `;
  }
  
  if (currentAnime.episodes > 50) {
    html += `<button class="episode-btn" style="grid-column: span 2; background: #333;">+${currentAnime.episodes - 50}</button>`;
  }
  
  grid.innerHTML = html;
}

function playEpisode(episodeNum) {
  currentEpisode = episodeNum;
  
  document.querySelectorAll('#episodesGrid .episode-btn').forEach((btn, index) => {
    btn.classList.toggle('active', index + 1 === episodeNum);
  });

  const videoLink = getVideoLink(currentAnime.id, episodeNum);
  const videoPlayer = document.getElementById('videoPlayer');
  
  if (videoLink) {
    const embedUrl = getEmbedUrl(videoLink);
    videoPlayer.innerHTML = `<iframe src="${embedUrl}" allowfullscreen allow="autoplay; encrypted-media"></iframe>`;
  } else {
    videoPlayer.innerHTML = `
      <div class="no-video-msg active">
        <i class="bi bi-film"></i>
        <h3>Video mavjud emas</h3>
        <p>${currentAnime.titleUz || currentAnime.title} - ${episodeNum}-qism</p>
      </div>
    `;
  }
}

function getEmbedUrl(url) {
  if (url.includes('youtube.com/watch')) {
    const videoId = url.match(/[?&]v=([^&]+)/);
    if (videoId) return `https://www.youtube.com/embed/${videoId[1]}`;
  }
  
  if (url.includes('youtu.be/')) {
    const videoId = url.match(/youtu\.be\/([^?]+)/);
    if (videoId) return `https://www.youtube.com/embed/${videoId[1]}`;
  }
  
  if (url.includes('youtube.com/embed/')) {
    return url;
  }
  
  if (url.includes('vk.com/video')) {
    const match = url.match(/video(-?\d+)_(\d+)/);
    if (match) return `https://vk.com/video_ext.php?oid=${match[1]}&id=${match[2]}`;
  }
  
  if (url.includes('ok.ru/video/')) {
    const videoId = url.match(/video\/(\d+)/);
    if (videoId) return `https://ok.ru/videoembed/${videoId[1]}`;
  }
  
  if (url.includes('drive.google.com')) {
    const fileId = url.match(/\/d\/([^/]+)/);
    if (fileId) return `https://drive.google.com/file/d/${fileId[1]}/preview`;
  }
  
  if (url.includes('dailymotion.com/video/')) {
    const videoId = url.match(/video\/([^_]+)/);
    if (videoId) return `https://www.dailymotion.com/embed/video/${videoId[1]}`;
  }
  
  if (url.includes('rutube.ru/video/')) {
    const videoId = url.match(/video\/([^/]+)/);
    if (videoId) return `https://rutube.ru/play/embed/${videoId[1]}`;
  }
  
  return url;
}

function closePlayer() {
  document.getElementById('playerPage').classList.remove('active');
  document.body.style.overflow = '';
  currentAnime = null;
}

function goHome() {
  closePlayer();
  closeAdminPanel();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openAdminLogin() {
  if (isAdmin) {
    openAdminPanel();
  } else {
    document.getElementById('adminLoginModal').classList.add('active');
  }
}

function closeAdminLogin() {
  document.getElementById('adminLoginModal').classList.remove('active');
  document.getElementById('adminPassword').value = '';
}

function loginAdmin(event) {
  if (event) event.preventDefault();
  const password = document.getElementById('adminPassword').value;
  
  if (password === ADMIN_PASSWORD) {
    isAdmin = true;
    closeAdminLogin();
    openAdminPanel();
  } else {
    alert('Noto\'g\'ri parol!');
  }
}

function openAdminPanel() {
  document.getElementById('adminPanel').classList.add('active');
  document.body.style.overflow = 'hidden';
  renderAdminEpisodesList();
}

function closeAdminPanel() {
  document.getElementById('adminPanel').classList.remove('active');
  document.body.style.overflow = '';
}

function populateAdminAnimeSelect() {
  const select = document.getElementById('adminAnimeSelect');
  
  animeDatabase.forEach(anime => {
    const option = document.createElement('option');
    option.value = anime.id;
    option.textContent = `${anime.titleUz || anime.title} (${anime.episodes} qism)`;
    select.appendChild(option);
  });
}

async function adminAddEpisode() {
  const animeId = document.getElementById('adminAnimeSelect').value;
  const episodeNum = parseInt(document.getElementById('adminEpisodeNum').value);
  const videoLink = document.getElementById('adminVideoLink').value.trim();

  if (!animeId) {
    alert('Anime tanlang!');
    return;
  }
  
  if (!episodeNum || episodeNum < 1) {
    alert('Qism raqamini kiriting!');
    return;
  }
  
  if (!videoLink) {
    alert('Video link kiriting!');
    return;
  }

  const anime = animeDatabase.find(a => a.id === animeId);
  if (!anime) return;

  await saveVideoLink(animeId, episodeNum, videoLink);
  
  alert(`${anime.titleUz || anime.title} - ${episodeNum}-qism qo'shildi!`);
  
  document.getElementById('adminEpisodeNum').value = '';
  document.getElementById('adminVideoLink').value = '';
  
  renderAdminEpisodesList();
}

function renderAdminEpisodesList() {
  const list = document.getElementById('adminEpisodesList');
  let html = '';
  
  for (const key in videoLinks) {
    const parts = key.split('_');
    const animeId = parts[0];
    const episode = parts[1];
    const anime = animeDatabase.find(a => a.id === animeId);
    
    if (anime) {
      html += `
        <div class="episode-item">
          <div class="episode-item-info">
            <span class="episode-item-title">${anime.titleUz || anime.title} - ${episode}-qism</span>
            <span class="episode-item-id">${videoLinks[key]}</span>
          </div>
          <button onclick="adminDeleteEpisode('${animeId}', ${episode})"><i class="bi bi-trash"></i> O'chirish</button>
        </div>
      `;
    }
  }
  
  if (!html) {
    html = '<p style="color: #a0a0a0; text-align: center; padding: 30px;">Hali video qo\'shilmagan</p>';
  }
  
  list.innerHTML = html;
}

async function adminDeleteEpisode(animeId, episode) {
  if (!confirm('Bu videoni o\'chirishni xohlaysizmi?')) return;
  
  await deleteVideoLink(animeId, episode);
  renderAdminEpisodesList();
}

function playAnime(animeId) {
  openPlayer(animeId);
}

function setupNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    
    if (query.length < 2) {
      renderAnimeRows();
      document.querySelectorAll('.anime-section').forEach(section => {
        section.style.display = 'block';
      });
      document.querySelector('.anime-section .section-title').innerHTML = '<i class="bi bi-fire"></i> Trending Anime';
      return;
    }

    const results = animeDatabase.filter(anime => 
      anime.title.toLowerCase().includes(query) ||
      (anime.titleUz && anime.titleUz.toLowerCase().includes(query))
    );

    document.querySelectorAll('.anime-section').forEach((section, index) => {
      if (index === 0) {
        section.querySelector('.section-title').innerHTML = `<i class="bi bi-search"></i> Qidiruv: "${query}"`;
        renderAnimeRow('trendingAnime', results);
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });
  });
}

function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closePlayer();
      closeAdminLogin();
      closeAdminPanel();
    }
  });
}

document.addEventListener('DOMContentLoaded', init);
