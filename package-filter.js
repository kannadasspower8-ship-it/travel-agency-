/**
 * Thirumala Travel Agency - Tour Packages Catalog Renderer
 * Renders exactly the 5 approved tour packages, supporting optional destination or travel style query parameters.
 */

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("packagesContainer");
  if (!container || !window.TRAVEL_DATA) return;

  renderCatalogPackages(container);
});

function renderCatalogPackages(container) {
  let packages = [...window.TRAVEL_DATA.packages];

  // Optional: Read URL query parameters (e.g. ?destination=ooty or ?style=spiritual)
  const urlParams = new URLSearchParams(window.location.search);
  const destParam = urlParams.get("destination");
  const styleParam = urlParams.get("style");

  if (destParam) {
    const filtered = packages.filter(pkg => pkg.destinations && pkg.destinations.includes(destParam));
    if (filtered.length > 0) {
      packages = filtered;
    }
  }

  if (styleParam) {
    const filtered = packages.filter(pkg => pkg.travelStyle && pkg.travelStyle.includes(styleParam));
    if (filtered.length > 0) {
      packages = filtered;
    }
  }

  renderPackageCards(packages, container);
  if (window.initLuxuryMotion) {
    window.initLuxuryMotion();
  }
}

function renderPackageCards(packages, container) {
  if (!packages.length) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #FFFFFF; border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
        <h3 style="font-size: 1.3rem; color: var(--primary); margin-bottom: 8px;">No packages found for this selection</h3>
        <p style="color: var(--text-muted); margin-bottom: 20px;">Explore all 5 master tour packages or request a custom itinerary.</p>
        <a href="packages.html" class="btn btn-primary">View All 5 Tour Packages</a>
      </div>
    `;
    return;
  }

  container.innerHTML = packages.map(pkg => `
    <article class="package-card">
      <div class="package-thumb-wrap">
        <img src="${pkg.image}" alt="${pkg.name} - ${pkg.packageNumber}" loading="lazy">
        <span class="package-duration-tag">${pkg.duration}</span>
        <span class="package-promo-badge">${pkg.packageNumber}</span>
      </div>
      
      <div class="package-body">
        <div class="package-meta-row">
          <span class="package-dest-route">${pkg.destination}</span>
          <span style="font-size: 0.8rem; color: var(--secondary-dark); font-weight: 600;">${pkg.tourType ? pkg.tourType.split('|')[0].trim() : ''}</span>
        </div>

        <h3 class="package-title">${pkg.name} <span style="font-size: 0.85rem; color: var(--text-muted); font-weight: 500;">(${pkg.packageNumber})</span></h3>
        
        ${pkg.closingRouteLine ? `
          <div style="font-size: 0.82rem; color: var(--secondary-dark); font-weight: 600; margin-bottom: 12px; background: var(--secondary-light); padding: 4px 10px; border-radius: var(--radius-xs); display: inline-block;">
            📍 ${pkg.closingRouteLine}
          </div>
        ` : ''}

        <div class="package-highlights-list">
          ${pkg.highlights.slice(0, 4).map(h => `
            <div class="highlight-item">
              <span class="highlight-check">•</span>
              <span>${h}</span>
            </div>
          `).join('')}
        </div>

        ${pkg.importantNote ? `
          <p style="font-size: 0.78rem; color: #B45309; background: #FEF3C7; padding: 6px 10px; border-radius: var(--radius-xs); margin-bottom: 14px;">
            ℹ️ ${pkg.importantNote}
          </p>
        ` : ''}

        <div class="package-footer">
          <div class="package-price-box">
            <span class="price-sub">Price</span>
            <span class="price-amount" style="font-size: 0.95rem; font-weight: 700; color: var(--primary); line-height: 1.2;">${pkg.priceLabel || 'Price not provided'}</span>
          </div>
          
          <div class="package-actions">
            <a href="package-detail.html?id=${pkg.id}" class="btn btn-outline btn-sm">View Details</a>
            <button type="button" class="btn btn-accent btn-sm" data-modal-open="enquiry" data-package-name="${pkg.name} (${pkg.packageNumber})">Enquire</button>
          </div>
        </div>
      </div>
    </article>
  `).join('');
}
