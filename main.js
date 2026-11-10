/**
 * Madhavan S - Academic Portfolio
 * Main Interactive Script
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. TYPING ANIMATION (Vanilla JS Implementation of Typed.js)
     ========================================================================== */
  const typedTarget = document.getElementById('typedText');
  const words = [
    'Ph.D. Scholar at IIT Bombay.',
    'Remote Sensing & GIS Specialist.',
    'Satellite Altimetry & SAR Researcher.',
    'Deep Learning & 3D Point Cloud Researcher.',
    'Photogrammetry & HBIM Specialist.'
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 70;
  const deletingSpeed = 40;
  const pauseEnd = 2000;
  const pauseStart = 400;

  function typeEffect() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
      typedTarget.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedTarget.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
      speed = pauseEnd;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      speed = pauseStart;
    }

    setTimeout(typeEffect, speed);
  }

  if (typedTarget) {
    typeEffect();
  }

  /* ==========================================================================
     2. MOBILE NAVIGATION DRAWER
     ========================================================================== */
  const mobileToggle = document.getElementById('mobileNavToggle');
  const sidebar = document.getElementById('sidebar');

  if (mobileToggle && sidebar) {
    mobileToggle.addEventListener('click', () => {
      sidebar.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (sidebar.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
      } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });

    // Close sidebar on link click (mobile)
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 868) {
          sidebar.classList.remove('active');
          const icon = mobileToggle.querySelector('i');
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      });
    });

    // Close when clicking outside sidebar on mobile
    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 868 && 
          sidebar.classList.contains('active') && 
          !sidebar.contains(e.target) && 
          !mobileToggle.contains(e.target)) {
        sidebar.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
      }
    });
  }

  /* ==========================================================================
     3. SCROLLSPY (Active Navigation Link on Scroll)
     ========================================================================== */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveNav() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);

  /* ==========================================================================
     4. PUBLICATION FILTERING & SEARCH
     ========================================================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const pubItems = document.querySelectorAll('.pub-item');
  const searchInput = document.getElementById('pubSearchInput');

  let currentCategory = 'all';
  let searchQuery = '';

  function applyFilters() {
    pubItems.forEach(item => {
      const category = item.getAttribute('data-category');
      const isFirstAuthor = item.getAttribute('data-firstauthor') === 'true';
      const text = item.textContent.toLowerCase();

      // Check category match
      let matchesCat = false;
      if (currentCategory === 'all') {
        matchesCat = true;
      } else if (currentCategory === 'first-author') {
        matchesCat = isFirstAuthor;
      } else {
        matchesCat = (category === currentCategory);
      }

      // Check search match
      const matchesSearch = !searchQuery || text.includes(searchQuery);

      if (matchesCat && matchesSearch) {
        item.style.display = 'block';
        item.style.animation = 'fadeIn 0.3s ease';
      } else {
        item.style.display = 'none';
      }
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-filter');
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      applyFilters();
    });
  }

});

/* ==========================================================================
   5. BIBTEX TOGGLE ACCORDION
   ========================================================================== */
function toggleBibtex(elementId) {
  const box = document.getElementById(elementId);
  if (!box) return;
  if (box.style.display === 'block') {
    box.style.display = 'none';
  } else {
    box.style.display = 'block';
  }
}
