/**
 * Thirumala Travel Agency - Core Client Logic
 * Handles Sticky Navigation, Mobile Drawer, Modals, Forms, WhatsApp Deep-links, and FAQ Accordions.
 */

document.addEventListener("DOMContentLoaded", () => {
  initStickyHeader();
  ensureMobileDrawer();
  ensureEnquiryModal();
  ensureMobileStickyBar();
  initMobileDrawer();
  initEnquiryModal();
  initFaqAccordions();
  initFloatingWhatsApp();
  bindConfigToDOM();
});

/**
 * Sticky Header on Scroll
 */
function initStickyHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }, { passive: true });
}

/**
 * Ensure Mobile Drawer is present in DOM
 */
function ensureMobileDrawer() {
  if (document.querySelector(".mobile-drawer-overlay")) return;

  const overlay = document.createElement("div");
  overlay.className = "mobile-drawer-overlay";
  overlay.innerHTML = `
    <div class="mobile-drawer">
      <div class="mobile-drawer-header">
        <a href="index.html" class="brand-logo">
          <span class="brand-title">Thirumala</span>
          <span class="brand-subtitle">Travel Agency • Andaman</span>
        </a>
        <button type="button" class="mobile-drawer-close" aria-label="Close Menu">✕</button>
      </div>
      <div class="mobile-drawer-body">
        <div class="mobile-nav-links">
          <a href="index.html" class="mobile-nav-link">Home <span>→</span></a>
          <a href="packages.html" class="mobile-nav-link">Tour Packages (5 Packages) <span>→</span></a>
          <a href="destinations.html" class="mobile-nav-link">Destinations (4 Regions) <span>→</span></a>
          <a href="services.html" class="mobile-nav-link">Travel Services <span>→</span></a>
          <a href="about.html" class="mobile-nav-link">About Thirumala <span>→</span></a>
          <a href="reviews.html" class="mobile-nav-link">Reviews & Ratings <span>→</span></a>
          <a href="contact.html" class="mobile-nav-link">Contact Us <span>→</span></a>
        </div>
      </div>
      <div class="mobile-drawer-footer">
        <button type="button" class="btn btn-accent btn-lg" style="width: 100%; margin-bottom: 12px;" data-modal-open="enquiry" data-package-name="Custom Andaman Tour">Plan My Trip</button>
        <a href="tel:+917418051084" class="btn btn-outline" style="width: 100%;" data-config="phone-link">Call Island Desk</a>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
}

/**
 * Ensure Quick Enquiry Modal is present in DOM
 */
function ensureEnquiryModal() {
  if (document.querySelector(".modal-overlay")) return;

  const modal = document.createElement("div");
  modal.className = "modal-overlay";
  modal.id = "enquiryModal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-labelledby", "enquiryModalTitle");
  modal.innerHTML = `
    <div class="modal-box">
      <div class="modal-header">
        <h3 id="enquiryModalTitle">Plan Your Andaman Vacation</h3>
        <button type="button" class="modal-close-btn" aria-label="Close Modal">✕</button>
      </div>
      <div class="modal-body">
        <form id="quickEnquiryForm">
          <input type="hidden" id="enquiryPackage" value="Custom Andaman Vacation">

          <div class="form-row">
            <div class="form-group">
              <label for="enquiryName">Full Name *</label>
              <input type="text" id="enquiryName" placeholder="e.g. Arvind Sharma" required>
            </div>
            <div class="form-group">
              <label for="enquiryPhone">Phone / WhatsApp *</label>
              <input type="tel" id="enquiryPhone" placeholder="e.g. 9876543210" required>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="enquiryEmail">Email Address</label>
              <input type="email" id="enquiryEmail" placeholder="name@domain.com">
            </div>
            <div class="form-group">
              <label for="enquiryTravelers">Number of Guests</label>
              <select id="enquiryTravelers">
                <option value="Couple (2 Adults)">Couple (2 Adults)</option>
                <option value="Family (3-4 Guests)">Family (3-4 Guests)</option>
                <option value="Large Family (5+ Guests)">Large Family (5+ Guests)</option>
                <option value="Group of Friends (4-8)">Group of Friends (4-8)</option>
                <option value="Corporate / Group (10+)">Corporate / Group (10+)</option>
              </select>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="enquiryTravelDate">Estimated Travel Month / Date</label>
              <input type="text" id="enquiryTravelDate" placeholder="e.g. Next Month / Nov 15">
            </div>
            <div class="form-group">
              <label for="enquiryDuration">Trip Duration</label>
              <select id="enquiryDuration">
                <option value="4 Nights / 5 Days">4 Nights / 5 Days</option>
                <option value="5 Nights / 6 Days" selected>5 Nights / 6 Days</option>
                <option value="6 Nights / 7 Days">6 Nights / 7 Days</option>
                <option value="7 Nights / 8 Days">7 Nights / 8 Days</option>
                <option value="Custom Duration">Custom Duration</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <label for="enquiryNotes">Special Preferences or Requests</label>
            <textarea id="enquiryNotes" rows="3" placeholder="e.g. Beachfront resort in Havelock, scuba diving session, anniversary candlelit dinner..."></textarea>
          </div>

          <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">Submit Vacation Enquiry</button>
        </form>

        <div class="form-success-msg">
          <h4>Enquiry Received Successfully</h4>
          <p style="margin-bottom: 20px;">Thank you. Our local Andaman travel specialist will prepare a customized quote and contact you shortly.</p>
          <a href="#" id="modalWhatsAppBtn" class="btn btn-whatsapp btn-lg" target="_blank" rel="noopener noreferrer">Connect on WhatsApp for Instant Quote</a>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

/**
 * Ensure Mobile Sticky Bottom Conversion Bar is present in DOM
 */
function ensureMobileStickyBar() {
  if (document.querySelector(".mobile-sticky-bar")) return;

  const bar = document.createElement("aside");
  bar.className = "mobile-sticky-bar";
  bar.setAttribute("aria-label", "Quick Mobile Actions");
  bar.innerHTML = `
    <a href="tel:+917418051084" class="mobile-bar-btn call" data-config="phone-link">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/></svg>
      <span>Call</span>
    </a>
    <a href="https://wa.me/917418051084" target="_blank" rel="noopener noreferrer" class="mobile-bar-btn whatsapp" data-config="whatsapp-link">
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67Z"/></svg>
      <span>WhatsApp</span>
    </a>
    <button type="button" class="mobile-bar-btn plan-trip" data-modal-open="enquiry" data-package-name="Island Holiday">
      <span>Plan Trip</span>
    </button>
  `;
  document.body.appendChild(bar);
}

/**
 * Mobile Navigation Drawer Toggle
 */
function initMobileDrawer() {
  const toggleBtn = document.querySelector(".mobile-nav-toggle");
  const overlay = document.querySelector(".mobile-drawer-overlay");
  if (!toggleBtn || !overlay) return;

  const closeBtn = overlay.querySelector(".mobile-drawer-close");
  const drawerLinks = overlay.querySelectorAll(".mobile-nav-link");

  const openDrawer = () => {
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  };

  toggleBtn.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeDrawer();
    }
  });

  drawerLinks.forEach(link => {
    link.addEventListener("click", closeDrawer);
  });
}

/**
 * Quick Enquiry Modal Controller
 */
function initEnquiryModal() {
  const modalOverlay = document.querySelector(".modal-overlay");
  if (!modalOverlay) return;

  const closeBtn = modalOverlay.querySelector(".modal-close-btn");
  const form = modalOverlay.querySelector("#quickEnquiryForm");
  const formSuccess = modalOverlay.querySelector(".form-success-msg");
  const packageInput = modalOverlay.querySelector("#enquiryPackage");

  // Open modal triggers across the page
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-modal-open='enquiry']");
    if (trigger) {
      e.preventDefault();
      const packageName = trigger.getAttribute("data-package-name") || "Custom Andaman Tour";
      if (packageInput) {
        packageInput.value = packageName;
      }
      openModal();
    }
  });

  const openModal = () => {
    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
    if (form) form.style.display = "block";
    if (formSuccess) formSuccess.style.display = "none";
  };

  const closeModal = () => {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  };

  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  // Handle Form Submission
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.querySelector("#enquiryName")?.value.trim() || "";
      const phone = form.querySelector("#enquiryPhone")?.value.trim() || "";
      const email = form.querySelector("#enquiryEmail")?.value.trim() || "";
      const date = form.querySelector("#enquiryDate")?.value || "";
      const travelers = form.querySelector("#enquiryTravelers")?.value || "2";
      const pkg = packageInput ? packageInput.value : "Custom Andaman Tour";
      const notes = form.querySelector("#enquiryNotes")?.value.trim() || "";

      // Validation
      if (!name || !phone) {
        alert("Please enter your name and phone/WhatsApp number.");
        return;
      }

      // Track conversion event
      trackEvent("enquiry_submit", { package: pkg, name, phone });

      // Build WhatsApp message for instant direct follow-up
      const waMsg = `Hi Thirumala Travel Agency, I submitted an enquiry for ${pkg}.\nName: ${name}\nPhone: ${phone}\nDate: ${date || 'Flexible'}\nGuests: ${travelers}\nNotes: ${notes || 'None'}`;
      const waUrl = window.SITE_CONFIG ? window.SITE_CONFIG.getWhatsAppLink(waMsg) : `https://wa.me/917418051084?text=${encodeURIComponent(waMsg)}`;

      // Show success message and direct WhatsApp button
      form.style.display = "none";
      if (formSuccess) {
        formSuccess.style.display = "block";
        const waSuccessBtn = formSuccess.querySelector("#modalWhatsAppBtn");
        if (waSuccessBtn) {
          waSuccessBtn.href = waUrl;
        }
      }
    });
  }
}

/**
 * Interactive FAQ Accordions
 */
function initFaqAccordions() {
  const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach(btn => {
    btn.addEventListener("click", () => {
      const parent = btn.parentElement;
      const isActive = parent.classList.contains("active");

      // Close all siblings
      const siblingItems = parent.parentElement.querySelectorAll(".faq-item");
      siblingItems.forEach(item => item.classList.remove("active"));

      if (!isActive) {
        parent.classList.add("active");
      }
    });
  });
}

/**
 * Configure Floating WhatsApp Button (Desktop Only)
 */
function initFloatingWhatsApp() {
  const waBtn = document.querySelector(".floating-whatsapp");
  if (!waBtn || !window.SITE_CONFIG) return;

  waBtn.href = window.SITE_CONFIG.getWhatsAppLink("Hi Thirumala Travel Agency, I want to inquire about your Andaman holiday packages.");
  waBtn.setAttribute("target", "_blank");
  waBtn.setAttribute("rel", "noopener noreferrer");

  waBtn.addEventListener("click", () => {
    trackEvent("whatsapp_click", { source: "floating_button" });
  });
}

/**
 * Bind Central Config Variables to DOM elements
 */
function bindConfigToDOM() {
  if (!window.SITE_CONFIG) return;

  const cfg = window.SITE_CONFIG;

  // Phone links
  document.querySelectorAll("[data-config='phone-link']").forEach(el => {
    el.href = cfg.getPhoneLink();
    el.addEventListener("click", () => trackEvent("phone_click", { location: "header/footer" }));
  });

  // Phone text
  document.querySelectorAll("[data-config='phone-text']").forEach(el => {
    el.textContent = cfg.phone;
  });

  // WhatsApp links
  document.querySelectorAll("[data-config='whatsapp-link']").forEach(el => {
    el.href = cfg.getWhatsAppLink();
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
    el.addEventListener("click", () => trackEvent("whatsapp_click", { location: "cta" }));
  });

  // Email links
  document.querySelectorAll("[data-config='email-link']").forEach(el => {
    el.href = cfg.getEmailLink();
  });

  // Email text
  document.querySelectorAll("[data-config='email-text']").forEach(el => {
    el.textContent = cfg.email;
  });

  // Agency name
  document.querySelectorAll("[data-config='agency-name']").forEach(el => {
    el.textContent = cfg.agencyName;
  });

  // Address text
  document.querySelectorAll("[data-config='address-text']").forEach(el => {
    el.textContent = cfg.address.formatted;
  });
  document.querySelectorAll("[data-config='address-short']").forEach(el => {
    el.textContent = `${cfg.address.locality}, ${cfg.address.city} - ${cfg.address.pincode}`;
  });
}

/**
 * Lightweight Event Tracking Dispatcher
 */
function trackEvent(eventName, payload) {
  try {
    console.log(`[Thirumala Analytics] ${eventName}:`, payload);
    // Prepared for Google Analytics 4 (gtag) or Meta Pixel
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, payload);
    }
  } catch (err) {
    // Silent fail
  }
}
