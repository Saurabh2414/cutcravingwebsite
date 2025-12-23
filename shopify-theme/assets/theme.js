/**
 * CutCraving Theme JavaScript
 * Main theme functionality and interactions
 */

(function() {
  'use strict';

  // ============================================
  // 🛒 CART FUNCTIONALITY
  // ============================================

  const CartManager = {
    init: function() {
      this.bindEvents();
      this.updateCartCount();
    },

    bindEvents: function() {
      // Add to cart forms
      document.querySelectorAll('form[action="/cart/add"]').forEach(form => {
        form.addEventListener('submit', this.handleAddToCart.bind(this));
      });

      // Cart quantity updates
      document.querySelectorAll('.cart-quantity-input').forEach(input => {
        input.addEventListener('change', this.handleQuantityChange.bind(this));
      });
    },

    handleAddToCart: function(e) {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);

      fetch('/cart/add.js', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        this.updateCartCount();
        this.showCartNotification(data);
      })
      .catch(error => {
        console.error('Error adding to cart:', error);
      });
    },

    handleQuantityChange: function(e) {
      const input = e.target;
      const line = input.dataset.line;
      const quantity = parseInt(input.value);

      this.updateCartItem(line, quantity);
    },

    updateCartItem: function(line, quantity) {
      fetch('/cart/change.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          line: line,
          quantity: quantity
        })
      })
      .then(response => response.json())
      .then(data => {
        this.updateCartCount();
        this.refreshCart();
      })
      .catch(error => {
        console.error('Error updating cart:', error);
      });
    },

    updateCartCount: function() {
      fetch('/cart.js')
        .then(response => response.json())
        .then(cart => {
          const badges = document.querySelectorAll('.cart-badge');
          badges.forEach(badge => {
            badge.textContent = cart.item_count;
            badge.style.display = cart.item_count > 0 ? 'inline-block' : 'none';
          });
        });
    },

    showCartNotification: function(item) {
      // Simple notification
      const notification = document.createElement('div');
      notification.className = 'cart-notification';
      notification.innerHTML = `
        <p>✓ ${item.product_title} added to cart</p>
      `;
      notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #2D5F3F;
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
      `;

      document.body.appendChild(notification);

      setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
      }, 3000);
    },

    refreshCart: function() {
      // Reload cart section if needed
      if (window.location.pathname === '/cart') {
        window.location.reload();
      }
    }
  };

  // ============================================
  // 📱 MOBILE MENU
  // ============================================

  const MobileMenu = {
    init: function() {
      const menuToggle = document.querySelector('.mobile-menu-toggle');
      const mobileMenu = document.querySelector('.mobile-menu');

      if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
          mobileMenu.classList.toggle('active');
          document.body.classList.toggle('menu-open');
        });
      }
    }
  };

  // ============================================
  // 🎯 SMOOTH SCROLL
  // ============================================

  const SmoothScroll = {
    init: function() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          const href = this.getAttribute('href');
          if (href === '#') return;

          e.preventDefault();
          const target = document.querySelector(href);

          if (target) {
            const offsetTop = target.offsetTop - 100;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        });
      });
    }
  };

  // ============================================
  // 🖼️ LAZY LOADING IMAGES
  // ============================================

  const LazyLoad = {
    init: function() {
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
              }
              observer.unobserve(img);
            }
          });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
          imageObserver.observe(img);
        });
      }
    }
  };

  // ============================================
  // 📊 ANALYTICS & TRACKING
  // ============================================

  const Analytics = {
    init: function() {
      this.trackProductViews();
      this.trackAddToCart();
    },

    trackProductViews: function() {
      // Track when products come into view
      if ('IntersectionObserver' in window) {
        const productObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const productId = entry.target.dataset.productId;
              if (productId && typeof gtag !== 'undefined') {
                gtag('event', 'view_item', {
                  items: [{
                    id: productId,
                    name: entry.target.dataset.productTitle
                  }]
                });
              }
            }
          });
        }, { threshold: 0.5 });

        document.querySelectorAll('[data-product-id]').forEach(product => {
          productObserver.observe(product);
        });
      }
    },

    trackAddToCart: function() {
      document.addEventListener('submit', (e) => {
        if (e.target.action && e.target.action.includes('/cart/add')) {
          const productId = e.target.querySelector('[name="id"]')?.value;
          if (productId && typeof gtag !== 'undefined') {
            gtag('event', 'add_to_cart', {
              items: [{
                id: productId
              }]
            });
          }
        }
      });
    }
  };

  // ============================================
  // 🎨 SCROLL ANIMATIONS
  // ============================================

  const ScrollAnimations = {
    init: function() {
      if ('IntersectionObserver' in window) {
        const animationObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animated');
            }
          });
        }, {
          threshold: 0.1,
          rootMargin: '0px 0px -100px 0px'
        });

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
          animationObserver.observe(el);
        });
      }
    }
  };

  // ============================================
  // 🔍 SEARCH FUNCTIONALITY
  // ============================================

  const Search = {
    init: function() {
      const searchForm = document.querySelector('.search-form');
      if (!searchForm) return;

      const searchInput = searchForm.querySelector('input[type="search"]');
      let searchTimeout;

      searchInput?.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
          this.performSearch(e.target.value);
        }, 300);
      });
    },

    performSearch: function(query) {
      if (query.length < 2) return;

      fetch(`/search/suggest.json?q=${encodeURIComponent(query)}&resources[type]=product`)
        .then(response => response.json())
        .then(data => {
          this.displaySearchResults(data);
        })
        .catch(error => {
          console.error('Search error:', error);
        });
    },

    displaySearchResults: function(data) {
      // Implement search results display
      console.log('Search results:', data);
    }
  };

  // ============================================
  // 🎯 INITIALIZE ON DOM READY
  // ============================================

  function initTheme() {
    CartManager.init();
    MobileMenu.init();
    SmoothScroll.init();
    LazyLoad.init();
    Analytics.init();
    ScrollAnimations.init();
    Search.init();

    // Dispatch custom event for other scripts
    document.dispatchEvent(new CustomEvent('theme:loaded'));
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }

  // ============================================
  // 🌐 EXPOSE PUBLIC API
  // ============================================

  window.CutCravingTheme = {
    cart: CartManager,
    analytics: Analytics
  };

})();
