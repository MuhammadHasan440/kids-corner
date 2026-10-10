/**
 * ============================================================================
 * KIDZ CORNER WITH HAVEN — OFFICIAL JAVASCRIPT
 * Brand: Dani Egalite & Kidz Corner with Haven
 * Vanilla JavaScript (No frameworks, lightweight, fast, accessible)
 * ============================================================================
 */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
   * 1. Video Catalog Data (Clearly marked & editable for the creator)
   * -------------------------------------------------------------------------- */
  const VIDEO_CATALOG = [
    {
      id: 'muffin-man',
      title: 'Do You Know The Muffin Man? Sing-Along Fun!',
      description: 'Join Haven for a sweet nursery rhyme sing-along on Drury Lane with fresh muffins, catchy rhythms, and cheerful tunes.',
      category: 'rhymes',
      categoryLabel: 'Nursery Rhymes',
      thumbnail: 'images/thumb-muffin-man.svg',
      // EDITABLE: Add your YouTube Video ID here once published (e.g., 'dQw4w9WgXcQ')
      videoId: '', 
      channelUrl: 'https://www.youtube.com/@kidzcornerwithhaven',
      badge: 'FEATURED SING-ALONG',
      duration: 'Sing-Along'
    },
    {
      id: 'bacteria',
      title: 'Good vs. Bad Bacteria Explained for Kids!',
      description: 'Haven breaks down microscopic science! Learn how friendly bacteria help make yogurt and protect our tummies while keeping bad germs away.',
      category: 'science',
      categoryLabel: 'Science & Nature',
      thumbnail: 'images/thumb-bacteria.svg',
      // EDITABLE: Add your YouTube Video ID here (e.g., 'dQw4w9WgXcQ')
      videoId: '',
      channelUrl: 'https://www.youtube.com/@kidzcornerwithhaven',
      badge: 'SCIENCE EXPLORER',
      duration: 'Learning Adventure'
    },
    {
      id: 'food-chain',
      title: 'Food Chain for Kids: From Plants to Predators!',
      description: 'Who eats who in nature? Haven guides young viewers through the sun, green producers, plant-eaters, and friendly forest predators.',
      category: 'science',
      categoryLabel: 'Science & Nature',
      thumbnail: 'images/thumb-food-chain.svg',
      // EDITABLE: Add your YouTube Video ID here
      videoId: '',
      channelUrl: 'https://www.youtube.com/@kidzcornerwithhaven',
      badge: 'NATURE LESSON',
      duration: 'Interactive'
    },
    {
      id: 'phonics-abc',
      title: 'ABC Phonics & Letter Adventures: Letters That Dance!',
      description: 'Discover letters, sounds, and first words with Haven! A colorful sing-along journey designed to spark early reading excitement.',
      category: 'learning',
      categoryLabel: 'Letters & Numbers',
      thumbnail: 'images/thumb-phonics.svg',
      // EDITABLE: Add your YouTube Video ID here
      videoId: '',
      channelUrl: 'https://www.youtube.com/@kidzcornerwithhaven',
      badge: 'EARLY READING',
      duration: 'Alphabet Song'
    },
    {
      id: 'math-riddles',
      title: 'Fun Math Riddles & Counting 1 to 20 with Haven!',
      description: 'Step along the number stones, solve cheerful riddles, and build early number confidence through playful challenges.',
      category: 'learning',
      categoryLabel: 'Letters & Numbers',
      thumbnail: 'images/thumb-numbers.svg',
      // EDITABLE: Add your YouTube Video ID here
      videoId: '',
      channelUrl: 'https://www.youtube.com/@kidzcornerwithhaven',
      badge: 'EARLY MATH',
      duration: 'Riddle Fun'
    },
    {
      id: 'power-of-yet',
      title: 'The Power of YET: A Growth Mindset Song for Kids!',
      description: 'Inspired by Haven and Dani, this musical anthem reminds every young learner: when you feel stuck, just add the magic word YET!',
      category: 'mindset',
      categoryLabel: 'Growth Mindset',
      thumbnail: 'images/thumb-yet-song.svg',
      // EDITABLE: Add your YouTube Video ID here
      videoId: '',
      channelUrl: 'https://www.youtube.com/@kidzcornerwithhaven',
      badge: 'MINDSET ANTHEM',
      duration: 'Core Message'
    }
  ];

  /* --------------------------------------------------------------------------
   * 2. Growth Mindset Activity Scenarios & Quotes
   * -------------------------------------------------------------------------- */
  const YET_SCENARIOS = [
    {
      id: 'default',
      label: 'Everything',
      stem: 'I can’t do it',
      message: 'Keep trying! You’re still learning, and mistakes are proof you are growing!'
    },
    {
      id: 'shoes',
      label: '👟 Tie Shoes',
      stem: 'I can’t tie my shoes',
      message: 'Loop, swoop, and pull! Your fingers are getting stronger every time you try!'
    },
    {
      id: 'reading',
      label: '📖 Read Big Words',
      stem: 'I can’t read this book',
      message: 'Sound it out, one letter at a time! Even the greatest readers started right here.'
    },
    {
      id: 'bike',
      label: '🚲 Ride a Bike',
      stem: 'I can’t balance on my bike',
      message: 'Wobbles are just balance in training! Keep looking forward and pedal on!'
    },
    {
      id: 'math',
      label: '🔢 Math Puzzle',
      stem: 'I can’t solve this puzzle',
      message: 'Take a deep breath! Puzzles take practice, and your brain loves a workout.'
    },
    {
      id: 'whistle',
      label: '🎵 Whistle a Tune',
      stem: 'I can’t whistle',
      message: 'Round your lips and try a gentle puff! A little more practice makes magic.'
    }
  ];

  /* --------------------------------------------------------------------------
   * 3. DOM Elements
   * -------------------------------------------------------------------------- */
  const header = document.querySelector('.site-header');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  const mobileBackdrop = document.querySelector('.mobile-drawer-backdrop');
  const mobileDrawerClose = document.querySelector('.mobile-drawer-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const navLinks = document.querySelectorAll('.nav-link');

  const videoGrid = document.getElementById('videoGrid');
  const filterPills = document.querySelectorAll('.filter-pill');
  const videoModal = document.getElementById('videoModal');
  const modalIframe = document.getElementById('modalIframe');
  const modalTitle = document.getElementById('modalTitle');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBackdrop = document.querySelector('.modal-backdrop');
  const modalFrameWrap = document.querySelector('.modal-video-frame-wrap');
  const modalNotice = document.getElementById('modalChannelNotice');

  const sentenceStem = document.getElementById('sentenceStem');
  const sentenceYet = document.getElementById('sentenceYet');
  const magicBtn = document.getElementById('magicYetBtn');
  const resetYetBtn = document.getElementById('resetYetBtn');
  const encouragementBox = document.getElementById('encouragementBox');
  const challengePillsContainer = document.getElementById('challengePills');
  const confettiCanvas = document.getElementById('confettiCanvas');

  const contactForm = document.getElementById('contactForm');
  const contactStatus = document.getElementById('contactStatus');
  const currentYearSpans = document.querySelectorAll('[data-current-year]');

  /* --------------------------------------------------------------------------
   * 4. Dynamic Current Year
   * -------------------------------------------------------------------------- */
  const currentYear = new Date().getFullYear();
  currentYearSpans.forEach(span => {
    span.textContent = currentYear;
  });

  /* --------------------------------------------------------------------------
   * 5. Sticky Header Behavior
   * -------------------------------------------------------------------------- */
  function handleScrollHeader() {
    if (!header) return;
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleScrollHeader, { passive: true });
  handleScrollHeader();

  /* --------------------------------------------------------------------------
   * 6. Mobile Navigation Drawer
   * -------------------------------------------------------------------------- */
  function openMobileMenu() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.add('open');
    if (mobileBackdrop) mobileBackdrop.classList.add('open');
    if (mobileMenuBtn) {
      mobileMenuBtn.classList.add('active');
      mobileMenuBtn.setAttribute('aria-expanded', 'true');
    }
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove('open');
    if (mobileBackdrop) mobileBackdrop.classList.remove('open');
    if (mobileMenuBtn) {
      mobileMenuBtn.classList.remove('active');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function () {
      const isOpen = mobileDrawer.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
  }

  if (mobileDrawerClose) {
    mobileDrawerClose.addEventListener('click', closeMobileMenu);
  }

  if (mobileBackdrop) {
    mobileBackdrop.addEventListener('click', closeMobileMenu);
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (mobileDrawer && mobileDrawer.classList.contains('open')) {
        closeMobileMenu();
      }
      if (videoModal && videoModal.classList.contains('open')) {
        closeVideoModal();
      }
    }
  });

  /* --------------------------------------------------------------------------
   * 7. Active Navigation Link on Scroll
   * -------------------------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');
  function highlightActiveNav() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetNav = document.querySelector(`.nav-link[href*="${sectionId}"]`);
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => link.classList.remove('active'));
        if (targetNav) targetNav.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', highlightActiveNav, { passive: true });

  /* --------------------------------------------------------------------------
   * 8. Render Videos & Category Filtering
   * -------------------------------------------------------------------------- */
  let activeFilter = 'all';

  function renderVideoCards(filterCategory) {
    if (!videoGrid) return;
    videoGrid.innerHTML = '';

    const filtered = filterCategory === 'all'
      ? VIDEO_CATALOG
      : VIDEO_CATALOG.filter(v => v.category === filterCategory);

    filtered.forEach(video => {
      const card = document.createElement('article');
      card.className = 'video-card reveal-on-scroll';
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `Watch ${video.title}`);

      card.innerHTML = `
        <div class="video-card-thumb-wrapper">
          <img src="${video.thumbnail}" alt="${video.title} thumbnail" class="video-card-thumb" loading="lazy">
          <div class="video-play-overlay">
            <div class="play-circle" aria-hidden="true">
              <svg viewBox="0 0 24 24"><polygon points="6,4 20,12 6,20"></polygon></svg>
            </div>
          </div>
          <span class="video-card-badge">${video.badge}</span>
          <span class="video-card-status">${video.duration}</span>
        </div>
        <div class="video-card-body">
          <span class="video-card-category">${video.categoryLabel}</span>
          <h3 class="video-card-title">${video.title}</h3>
          <p class="video-card-desc">${video.description}</p>
          <div class="video-card-footer">
            <span class="watch-link">
              <span>Watch Video</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
            <span class="channel-hint">@kidzcornerwithhaven</span>
          </div>
        </div>
      `;

      // Click & Keyboard triggers
      card.addEventListener('click', () => openVideoModal(video));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openVideoModal(video);
        }
      });

      videoGrid.appendChild(card);
    });

    // Re-observe newly rendered cards
    observeScrollElements();
  }

  // Setup category pills
  if (filterPills.length > 0) {
    filterPills.forEach(pill => {
      pill.addEventListener('click', function () {
        filterPills.forEach(p => p.classList.remove('active'));
        this.classList.add('active');
        activeFilter = this.getAttribute('data-filter') || 'all';
        renderVideoCards(activeFilter);
      });
    });
  }

  /* --------------------------------------------------------------------------
   * 9. Video Modal Management
   * -------------------------------------------------------------------------- */
  function openVideoModal(video) {
    if (!videoModal) return;

    if (modalTitle) {
      modalTitle.textContent = video.title;
    }

    // Check if real YouTube videoId exists
    if (video.videoId && video.videoId.trim() !== '') {
      if (modalFrameWrap) modalFrameWrap.style.display = 'block';
      if (modalNotice) modalNotice.style.display = 'none';
      if (modalIframe) {
        modalIframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(video.videoId)}?autoplay=1&rel=0`;
        modalIframe.title = video.title;
      }
    } else {
      // Graceful fallback for videos in development or channel premiere
      if (modalFrameWrap) modalFrameWrap.style.display = 'none';
      if (modalNotice) {
        modalNotice.style.display = 'block';
        modalNotice.innerHTML = `
          <div style="font-size: 3rem; margin-bottom: 12px;">🌟</div>
          <h4>${escapeHTML(video.title)}</h4>
          <p>${escapeHTML(video.description)}</p>
          <p style="font-size: 0.95rem; color: var(--color-navy-muted); margin-bottom: 24px;">
            This video is featured on our official channel. Join Dani and Haven on YouTube to watch and subscribe!
          </p>
          <a href="${video.channelUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-youtube btn-lg">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span>Watch on YouTube (@kidzcornerwithhaven)</span>
          </a>
        `;
      }
    }

    videoModal.classList.add('open');
    videoModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    if (modalCloseBtn) modalCloseBtn.focus();
  }

  function closeVideoModal() {
    if (!videoModal) return;
    videoModal.classList.remove('open');
    videoModal.setAttribute('aria-hidden', 'true');
    if (modalIframe) {
      modalIframe.src = '';
    }
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeVideoModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', closeVideoModal);
  }

  /* --------------------------------------------------------------------------
   * 10. Growth Mindset Interactive Activity ("The Power of YET!")
   * -------------------------------------------------------------------------- */
  let currentScenario = YET_SCENARIOS[0];
  let isYetApplied = false;

  function initYetActivity() {
    if (!challengePillsContainer || !sentenceStem || !sentenceYet) return;

    // Render scenario pills
    challengePillsContainer.innerHTML = '';
    YET_SCENARIOS.forEach((scenario, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `challenge-btn ${idx === 0 ? 'active' : ''}`;
      btn.textContent = scenario.label;
      btn.setAttribute('aria-label', `Select challenge: ${scenario.label}`);

      btn.addEventListener('click', function () {
        document.querySelectorAll('.challenge-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentScenario = scenario;
        resetYetState();
      });

      challengePillsContainer.appendChild(btn);
    });

    updateSentenceView();

    if (magicBtn) {
      magicBtn.addEventListener('click', applyYetMagic);
    }

    if (resetYetBtn) {
      resetYetBtn.addEventListener('click', resetYetState);
    }
  }

  function updateSentenceView() {
    if (!sentenceStem || !sentenceYet) return;
    sentenceStem.textContent = currentScenario.stem;
  }

  function applyYetMagic() {
    if (isYetApplied) return;
    isYetApplied = true;

    // 1. Play celebratory gentle sound synthesizer
    playCheerfulChime();

    // 2. Animate YET badge
    if (sentenceYet) {
      sentenceYet.classList.add('popped');
      sentenceYet.setAttribute('aria-hidden', 'false');
    }

    // 3. Show encouraging message
    if (encouragementBox) {
      encouragementBox.textContent = currentScenario.message;
      encouragementBox.classList.add('visible');
    }

    // 4. Fire sparkle confetti
    triggerConfettiParticles();

    // 5. Update buttons
    if (magicBtn) {
      magicBtn.style.display = 'none';
    }
    if (resetYetBtn) {
      resetYetBtn.style.display = 'inline-flex';
      resetYetBtn.focus();
    }
  }

  function resetYetState() {
    isYetApplied = false;
    updateSentenceView();

    if (sentenceYet) {
      sentenceYet.classList.remove('popped');
      sentenceYet.setAttribute('aria-hidden', 'true');
    }

    if (encouragementBox) {
      encouragementBox.classList.remove('visible');
    }

    if (magicBtn) {
      magicBtn.style.display = 'inline-flex';
    }
    if (resetYetBtn) {
      resetYetBtn.style.display = 'none';
    }
  }

  // Pure Web Audio API synthesized happy arpeggio chord (No external MP3 needed!)
  function playCheerfulChime() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 (Bright joyous chord)
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.08);

        gain.gain.setValueAtTime(0, ctx.currentTime + i * 0.08);
        gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + i * 0.08 + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.08 + 0.45);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + i * 0.08);
        osc.stop(ctx.currentTime + i * 0.08 + 0.5);
      });
    } catch (e) {
      // Audio autoplay restrictions or unsupported
    }
  }

  // Lightweight HTML5 Canvas Confetti Burst
  function triggerConfettiParticles() {
    if (!confettiCanvas) return;
    const ctx = confettiCanvas.getContext('2d');
    if (!ctx) return;

    const width = confettiCanvas.offsetWidth;
    const height = confettiCanvas.offsetHeight;
    confettiCanvas.width = width;
    confettiCanvas.height = height;

    const colors = ['#FF8C78', '#FFD66B', '#70C9F0', '#A9E7C4', '#C9B6F2', '#FFA827'];
    const particles = [];
    const count = 45;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: width / 2 + (Math.random() - 0.5) * 80,
        y: height / 2 + 20,
        vx: (Math.random() - 0.5) * 12,
        vy: -Math.random() * 9 - 4,
        size: Math.random() * 8 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 15,
        opacity: 1
      });
    }

    let animationFrame;
    function animate() {
      ctx.clearRect(0, 0, width, height);
      let activeCount = 0;

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35; // gravity
        p.rotation += p.vRot;
        p.opacity -= 0.018;

        if (p.opacity > 0) {
          activeCount++;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.globalAlpha = Math.max(0, p.opacity);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
          ctx.restore();
        }
      });

      if (activeCount > 0) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, width, height);
        cancelAnimationFrame(animationFrame);
      }
    }

    animate();
  }

  /* --------------------------------------------------------------------------
   * 11. Intersection Observer for Scroll Reveal
   * -------------------------------------------------------------------------- */
  function observeScrollElements() {
    const reveals = document.querySelectorAll('.reveal-on-scroll:not(.revealed)');
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            obs.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      });

      reveals.forEach(el => observer.observe(el));
    } else {
      // Fallback
      reveals.forEach(el => el.classList.add('revealed'));
    }
  }

  /* --------------------------------------------------------------------------
   * 12. Contact Form Frontend Validation & Feedback
   * -------------------------------------------------------------------------- */
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const nameInput = document.getElementById('contactName');
      const emailInput = document.getElementById('contactEmail');
      const subjectInput = document.getElementById('contactSubject');
      const messageInput = document.getElementById('contactMessage');
      const adultCheckbox = document.getElementById('contactAdultVerify');

      if (!nameInput || !emailInput || !messageInput || !adultCheckbox) return;

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const message = messageInput.value.trim();
      const isAdult = adultCheckbox.checked;

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name || name.length < 2) {
        showStatus('Please enter your full name.', 'error');
        nameInput.focus();
        return;
      }

      if (!email || !emailRegex.test(email)) {
        showStatus('Please enter a valid email address.', 'error');
        emailInput.focus();
        return;
      }

      if (!message || message.length < 10) {
        showStatus('Please include a brief message (at least 10 characters).', 'error');
        messageInput.focus();
        return;
      }

      if (!isAdult) {
        showStatus('Please confirm that you are a parent, guardian, or educator (18+).', 'error');
        adultCheckbox.focus();
        return;
      }

      // Transparent feedback: Form validated on client side
      showStatus(
        `Thank you, ${escapeHTML(name)}! Your message has been validated. As this is a static site without a direct backend, please also connect with Dani and Haven directly through our official YouTube community at youtube.com/@kidzcornerwithhaven!`,
        'success'
      );
      contactForm.reset();
    });
  }

  function showStatus(message, type) {
    if (!contactStatus) return;
    contactStatus.className = `form-status-alert ${type}`;
    contactStatus.textContent = message;
    contactStatus.style.display = 'block';
  }

  /* --------------------------------------------------------------------------
   * 13. Newsletter Form Handling
   * -------------------------------------------------------------------------- */
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const emailInput = document.getElementById('newsletterEmail');
      if (!emailInput) return;
      const email = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email || !emailRegex.test(email)) {
        alert('Please enter a valid parent/guardian email address.');
        emailInput.focus();
        return;
      }

      alert('Thank you for your interest! Newsletter updates will be published through our official channels. Be sure to subscribe on YouTube to catch every new video!');
      newsletterForm.reset();
    });
  }

  /* --------------------------------------------------------------------------
   * 14. Helper Utility
   * -------------------------------------------------------------------------- */
  function escapeHTML(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }

  /* --------------------------------------------------------------------------
   * 15. Initial Execution
   * -------------------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', function () {
    renderVideoCards('all');
    initYetActivity();
    observeScrollElements();
  });

})();
