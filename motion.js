/**
 * Thirumala Travel Agency - Fluid Luxury Motion Controller
 * Engineered strictly for maximum smoothness, zero jank, zero layout shift.
 */

(function () {
  'use strict';

  let scrollObserver = null;

  document.addEventListener('DOMContentLoaded', () => {
    initScrollProgress();
    initLuxuryLoader();
    initScrollObserver();
    initDynamicContentWatcher();
  });

  /**
   * 1. High-Performance Scroll Progress Bar
   */
  function initScrollProgress() {
    let progressBar = document.querySelector('.scroll-progress-bar');
    if (!progressBar) {
      progressBar = document.createElement('div');
      progressBar.className = 'scroll-progress-bar';
      progressBar.setAttribute('aria-hidden', 'true');
      document.body.prepend(progressBar);
    }

    let ticking = false;
    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100));
        progressBar.style.width = `${progress}%`;
      }
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    }, { passive: true });

    updateProgress();
  }

  /**
   * 2. Fast Elegant Entry & Hero Entrance
   */
  function initLuxuryLoader() {
    const loader = document.querySelector('.luxury-loader');
    const hero = document.querySelector('.hero-section');

    const enterHero = () => {
      if (hero && !hero.classList.contains('hero-entered')) {
        hero.classList.add('hero-entered');
      }
    };

    if (!loader) {
      enterHero();
      return;
    }

    let introSeen = false;
    try {
      introSeen = sessionStorage.getItem('thirumala_intro_seen');
    } catch (e) {
      introSeen = true;
    }

    const displayDuration = introSeen ? 100 : 450;

    setTimeout(() => {
      loader.classList.add('fade-out');
      enterHero();
      try {
        sessionStorage.setItem('thirumala_intro_seen', 'true');
      } catch (e) {}
      setTimeout(() => {
        loader.remove();
      }, 400);
    }, displayDuration);

    // Guaranteed fallback: hero enters even if timers stall
    setTimeout(enterHero, 850);
  }

  /**
   * 3. Stable, One-Shot Scroll Observer (Section 4 & 5)
   * Early preparation: triggers 80px before entering viewport for seamless arrival
   */
  function initScrollObserver() {
    const targets = document.querySelectorAll(
      '.reveal-on-scroll:not(.is-visible), .stagger-grid:not(.is-visible), .timeline-item:not(.is-visible)'
    );

    if (!targets.length) return;

    if (!('IntersectionObserver' in window)) {
      targets.forEach(el => el.classList.add('is-visible'));
      return;
    }

    if (!scrollObserver) {
      scrollObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target); // Trigger once, stay in final state
          }
        });
      }, {
        root: null,
        rootMargin: '0px 0px 80px 0px',
        threshold: 0.02
      });
    }

    targets.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('is-visible');
      } else {
        scrollObserver.observe(el);
      }
    });
  }

  /**
   * 4. Watch for Dynamic Content Injections
   */
  function initDynamicContentWatcher() {
    const containers = document.querySelectorAll(
      '#packageDetailRoot, #packagesContainer, #destinationsList, #servicesList, #allReviewsGrid'
    );

    containers.forEach(container => {
      const observer = new MutationObserver(() => {
        initScrollObserver();
      });
      observer.observe(container, { childList: true, subtree: true });
    });
  }

  // Global trigger for explicitly rendered pages
  window.initLuxuryMotion = function () {
    initScrollObserver();
  };

})();
