/*
  ALORA Estate — Static portfolio demo
  Replace the data in PROPERTIES with your actual listings.
  Images are loaded from Unsplash; internet access is needed.
  The inquiry form is intentionally DEMO ONLY. See README.md for production setup.
*/

const image = (id, width = 1000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=83`;

const PROPERTIES = [
  {
    id: 'serene-villa', title: 'The Serene Villa', city: 'Bali', area: 'Ubud', type: 'Villa', price: 9500000000,
    beds: 4, baths: 4, sqm: 340, label: 'EXCLUSIVE',
    images: [image('photo-1600596542815-ffad4c1539a9',1400), image('photo-1600607687939-ce8a6c25118c',1200), image('photo-1600566753190-17f0baa2a6c3',1200)],
    description: 'A private hideaway where modern lines meet an easy, unhurried lifestyle. Spacious open-plan living, soft natural materials, and beautiful light make every corner feel effortless.',
    features: ['Private garden', 'Open-plan living', 'Poolside terrace', 'Natural finishes']
  },
  {
    id: 'park-residence', title: 'Parkside Residence', city: 'Jakarta', area: 'Kemang', type: 'House', price: 6800000000,
    beds: 3, baths: 3, sqm: 260, label: 'NEW LISTING',
    images: [image('photo-1600585154340-be6161a56a0c',1400), image('photo-1600607687920-4e2a09cf159d',1200), image('photo-1600566753086-00f18fb6b3ea',1200)],
    description: 'A warm, design-forward retreat in one of the city’s most-loved neighborhoods. Made for family dinners, slow Sundays, and the joy of having everyone together.',
    features: ['Family-friendly layout', 'Garden outlook', 'Two-car parking', 'Quiet neighborhood']
  },
  {
    id: 'the-olive-loft', title: 'The Olive Loft', city: 'Jakarta', area: 'Senopati', type: 'Apartment', price: 3200000000,
    beds: 2, baths: 2, sqm: 125, label: 'CITY FAVORITE',
    images: [image('photo-1600607687939-ce8a6c25118c',1400), image('photo-1600210492486-724fe5c67fb0',1200), image('photo-1600566753051-f0b89df2dd90',1200)],
    description: 'Understated sophistication for the modern city-dweller. An open living area, gentle palette, and intentional details create a peaceful pause above the energy of the city.',
    features: ['Prime central location', 'Sunlit interiors', 'Private balcony', 'Secure access']
  },
  {
    id: 'hillside-house', title: 'Hillside House', city: 'Bandung', area: 'Dago', type: 'House', price: 4800000000,
    beds: 4, baths: 3, sqm: 290, label: 'JUST ADDED',
    images: [image('photo-1600566752355-35792bedcfea',1400), image('photo-1600607688969-a5bfcd646154',1200), image('photo-1600566753086-00f18fb6b3ea',1200)],
    description: 'Room to breathe and space to grow. This welcoming family home pairs thoughtful architecture with a lush setting and an easy connection between indoors and out.',
    features: ['Green surroundings', 'Generous terrace', 'Flexible family spaces', 'Home workspace']
  },
  {
    id: 'coastal-retreat', title: 'The Coastal Retreat', city: 'Bali', area: 'Canggu', type: 'Villa', price: 11200000000,
    beds: 5, baths: 5, sqm: 410, label: 'SIGNATURE HOME',
    images: [image('photo-1600047509807-ba8f99d2cdde',1400), image('photo-1600607687920-4e2a09cf159d',1200), image('photo-1600566753190-17f0baa2a6c3',1200)],
    description: 'Settle into a gentler rhythm. Expansive entertaining spaces, tranquil bedrooms, and seamless indoor-outdoor moments make this a place to gather, unwind, and stay awhile.',
    features: ['Tropical garden', 'Outdoor lounge', 'Five ensuite bedrooms', 'Spacious dining area']
  },
  {
    id: 'the-linden', title: 'The Linden House', city: 'Yogyakarta', area: 'Sleman', type: 'House', price: 2750000000,
    beds: 3, baths: 2, sqm: 195, label: 'GREAT VALUE',
    images: [image('photo-1600566753190-17f0baa2a6c3',1400), image('photo-1600210492486-724fe5c67fb0',1200), image('photo-1600607688969-a5bfcd646154',1200)],
    description: 'Simple in the most beautiful way. A fresh take on contemporary family living with relaxed gathering spaces, an airy interior, and everyday comfort at its heart.',
    features: ['Bright natural light', 'Practical layout', 'Covered parking', 'Calm residential setting']
  }
];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));
const formatPrice = (number) => `Rp ${(number / 1000000000).toLocaleString('en-US', {maximumFractionDigits:2})}B`;
const bedIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M3 20v-8m18 8v-8M3 16h18M5 12V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5M3 13a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3"/></svg>`;
const bathIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M3 13h18v3a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5v-3ZM6 13V5a3 3 0 0 1 6 0v1M3 21l2-3m14 3-2-3"/></svg>`;
const areaIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M9 4H4v5m11-5h5v5M4 15v5h5m11-5v5h-5"/><rect x="8" y="8" width="8" height="8" rx="1"/></svg>`;
const heartIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/></svg>`;
const propertyGrid = $('#propertyGrid');
const locationFilter = $('#locationFilter');
const typeFilter = $('#typeFilter');
const budgetFilter = $('#budgetFilter');
const sortFilter = $('#sortFilter');
const propertyModal = $('#propertyModal');
const inquiryModal = $('#inquiryModal');
let favorites = new Set();
let favoritesOnly = false;
let currentProperty = null;
let galleryIndex = 0;
let toastTimer = null;

try {
  const saved = JSON.parse(localStorage.getItem('alora-saved-homes') || '[]');
  if (Array.isArray(saved)) favorites = new Set(saved.filter((id) => PROPERTIES.some((p) => p.id === id)));
} catch { /* Storage may be unavailable in privacy mode */ }

function persistFavorites() {
  try { localStorage.setItem('alora-saved-homes', JSON.stringify([...favorites])); } catch { /* Storage optional */ }
  const count = $('#favoritesCount');
  count.textContent = favorites.size;
  count.hidden = favorites.size === 0;
  $('#favoritesNav').setAttribute('aria-label', `Show saved properties (${favorites.size})`);
}

function getResults() {
  const city = locationFilter.value;
  const type = typeFilter.value;
  const budget = budgetFilter.value;
  const results = PROPERTIES.filter((p) =>
    (city === 'all' || p.city === city) &&
    (type === 'all' || p.type === type) &&
    (budget === 'all' || p.price <= Number(budget)) &&
    (!favoritesOnly || favorites.has(p.id))
  );
  switch (sortFilter.value) {
    case 'price-asc': return results.sort((a,b) => a.price-b.price);
    case 'price-desc': return results.sort((a,b) => b.price-a.price);
    case 'beds': return results.sort((a,b) => b.beds-a.beds);
    default: return results;
  }
}

function cardMarkup(p) {
  const liked = favorites.has(p.id);
  return `<article class="property-card">
    <div class="property-cover">
      <button class="cover-open" type="button" data-open="${p.id}" aria-label="View details for ${p.title}"><img src="${p.images[0]}" alt="${p.title} property photography" loading="lazy" /><span class="property-badge">${p.label}</span><span class="cover-view">VIEW THIS HOME <span aria-hidden="true">↗</span></span></button>
      <button class="save-btn ${liked ? 'is-saved' : ''}" type="button" data-fav="${p.id}" aria-label="${liked?'Remove':'Save'} ${p.title} ${liked?'from':'to'} favorites" aria-pressed="${liked}">${heartIcon}</button>
    </div>
    <div class="property-content"><div class="property-location"><span class="location-pin" aria-hidden="true">⌖</span> ${p.area}, ${p.city}</div>
      <button class="property-title-btn" data-open="${p.id}" type="button"><h3>${p.title}</h3><span aria-hidden="true">↗</span></button>
      <div class="property-price">${formatPrice(p.price)} <span>• FOR SALE</span></div>
      <div class="property-meta"><span>${bedIcon} ${p.beds} beds</span><span>${bathIcon} ${p.baths} baths</span><span>${areaIcon} ${p.sqm} m²</span></div>
    </div>
  </article>`;
}

function renderProperties() {
  const results = getResults();
  propertyGrid.innerHTML = results.map(cardMarkup).join('');
  $('#listingCount').textContent = `${results.length} ${results.length === 1 ? 'home' : 'homes'} ${favoritesOnly ? 'saved' : 'to discover'}`;
  $('#emptyState').hidden = results.length !== 0;
  propertyGrid.hidden = results.length === 0;
  $('#viewAll').textContent = favoritesOnly ? 'View all homes ↗' : 'View all homes ↗';
  $('#favoritesNav').classList.toggle('active', favoritesOnly);
  persistFavorites();
}

function resetFilters() {
  locationFilter.value = 'all'; typeFilter.value = 'all'; budgetFilter.value = 'all'; sortFilter.value = 'featured'; favoritesOnly = false;
  renderProperties();
}

function showToast(message) {
  const el = $('#toast'); el.textContent = message; el.classList.add('is-visible');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('is-visible'), 3000);
}

function switchGallery(index) {
  if (!currentProperty) return;
  const images = currentProperty.images;
  galleryIndex = (index + images.length) % images.length;
  $('#modalMainImage').src = images[galleryIndex];
  $('#modalMainImage').alt = `${currentProperty.title}, gallery image ${galleryIndex + 1}`;
  $('#galleryCounter').textContent = `${galleryIndex + 1} / ${images.length}`;
  $$('#modalThumbnails button').forEach((btn, i) => { btn.classList.toggle('active', i === galleryIndex); btn.setAttribute('aria-pressed',String(i === galleryIndex)); });
}

function openProperty(id) {
  const p = PROPERTIES.find((item) => item.id === id);
  if (!p) return;
  currentProperty = p;
  $('#modalKicker').textContent = `${p.label}  /  ${p.type.toUpperCase()}`;
  $('#modalTitle').textContent = p.title;
  $('#modalAddress').textContent = `${p.area}, ${p.city}, Indonesia`;
  $('#modalPrice').textContent = formatPrice(p.price);
  $('#modalSpecs').innerHTML = `<span>${bedIcon} ${p.beds} Bedrooms</span><span>${bathIcon} ${p.baths} Bathrooms</span><span>${areaIcon} ${p.sqm} m²</span>`;
  $('#modalDescription').textContent = p.description;
  $('#modalFeatures').innerHTML = p.features.map((feature) => `<span>✓ &nbsp;${feature}</span>`).join('');
  $('#modalThumbnails').innerHTML = p.images.map((url,i) => `<button type="button" data-image-index="${i}" aria-label="View image ${i+1}"><img src="${url}" alt="${p.title}, preview ${i+1}" loading="lazy" /></button>`).join('');
  switchGallery(0);
  propertyModal.showModal();
  document.body.classList.add('dialog-open');
}

function closeDialog(dialog) {
  if (dialog.open) dialog.close();
  if (!propertyModal.open && !inquiryModal.open) document.body.classList.remove('dialog-open');
}

function openInquiry(property = null) {
  if (propertyModal.open) closeDialog(propertyModal);
  $('#inquiryForm').reset();
  $('#inquiryForm').hidden = false;
  $('#inquirySuccess').hidden = true;
  $('#inquiryProperty').value = property ? `${property.title}, ${property.area}, ${property.city}` : '';
  inquiryModal.showModal();
  document.body.classList.add('dialog-open');
}

$('#searchForm').addEventListener('submit', (event) => { event.preventDefault(); favoritesOnly = false; renderProperties(); $('#homes').scrollIntoView({behavior:'smooth'}); });
for (const filter of [locationFilter, typeFilter, budgetFilter, sortFilter]) filter.addEventListener('change', () => { if (filter === sortFilter) renderProperties(); });
$('#resetFilters').addEventListener('click', resetFilters);
$('#viewAll').addEventListener('click', () => { resetFilters(); });
$('#favoritesNav').addEventListener('click', () => { favoritesOnly = !favoritesOnly; renderProperties(); $('#homes').scrollIntoView({behavior:'smooth'}); if (favoritesOnly && !favorites.size) showToast('Tap the heart on a listing to save your favorite homes.'); });
propertyGrid.addEventListener('click', (event) => {
  const fav = event.target.closest('[data-fav]');
  if (fav) { const id = fav.dataset.fav; const had = favorites.has(id); had ? favorites.delete(id) : favorites.add(id); persistFavorites(); renderProperties(); showToast(had ? 'Removed from saved homes.' : 'Added to your saved homes.'); return; }
  const open = event.target.closest('[data-open]'); if (open) openProperty(open.dataset.open);
});
$$('.location-card').forEach((button) => button.addEventListener('click', () => { resetFilters(); locationFilter.value = button.dataset.city; renderProperties(); $('#homes').scrollIntoView({behavior:'smooth'}); }));
$('#previousImage').addEventListener('click', () => switchGallery(galleryIndex - 1));
$('#nextImage').addEventListener('click', () => switchGallery(galleryIndex + 1));
$('#modalThumbnails').addEventListener('click', (e) => { const btn = e.target.closest('[data-image-index]'); if (btn) switchGallery(Number(btn.dataset.imageIndex)); });
$('#inquireProperty').addEventListener('click', () => openInquiry(currentProperty));
$('#shareProperty').addEventListener('click', async () => {
  if (!currentProperty) return;
  const url = `${location.href.split('#')[0]}#property=${encodeURIComponent(currentProperty.id)}`;
  if (navigator.share) { try { await navigator.share({title:currentProperty.title,text:`Explore ${currentProperty.title} on ALORA Estate`,url}); return; } catch { /* fallback */ } }
  if (navigator.clipboard && window.isSecureContext) { try { await navigator.clipboard.writeText(url); showToast('Property link copied to clipboard.'); return; } catch { /* fallback */ } }
  const ta = document.createElement('textarea'); ta.value = url; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); showToast('Property link copied.'); } catch { showToast('You can copy this page URL to share.'); } ta.remove();
});
$('#closeProperty').addEventListener('click', () => closeDialog(propertyModal));
$('#closeInquiry').addEventListener('click', () => closeDialog(inquiryModal));
for (const dialog of [propertyModal, inquiryModal]) {
  dialog.addEventListener('close', () => { if (!propertyModal.open && !inquiryModal.open) document.body.classList.remove('dialog-open'); });
  dialog.addEventListener('click', (e) => { if (e.target === dialog) closeDialog(dialog); });
}
for (const btn of [$('#contactButton'),$('#footerInquiry')]) btn.addEventListener('click', () => openInquiry());
$('#inquiryForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  if (!form.reportValidity()) return;
  const name = $('#inquiryName').value.trim();
  const property = $('#inquiryProperty').value.trim();
  const email = $('#inquiryEmail').value.trim();
  if (!name || !email) return;
  $('#inquirySummary').textContent = `${name}, your inquiry${property ? ` about ${property}` : ''} is ready for integration with a real contact system.`;
  form.hidden = true; $('#inquirySuccess').hidden = false;
});
$('#inquiryDone').addEventListener('click', () => closeDialog(inquiryModal));
const menuToggle = $('#menuToggle'), mobileMenu = $('#mobileMenu');
menuToggle.addEventListener('click', () => { const open = menuToggle.getAttribute('aria-expanded') === 'true'; menuToggle.setAttribute('aria-expanded', String(!open)); menuToggle.setAttribute('aria-label', open ? 'Open menu' : 'Close menu'); mobileMenu.hidden = open; });
$$('#mobileMenu a').forEach((link) => link.addEventListener('click', () => { mobileMenu.hidden = true; menuToggle.setAttribute('aria-expanded','false'); menuToggle.setAttribute('aria-label','Open menu'); }));
window.addEventListener('hashchange', () => { if (location.hash.startsWith('#property=')) { openProperty(decodeURIComponent(location.hash.slice('#property='.length))); } });
$('#year').textContent = new Date().getFullYear();
renderProperties();
if (location.hash.startsWith('#property=')) openProperty(decodeURIComponent(location.hash.slice('#property='.length)));
