(function(){
  'use strict';

  const DATA_URL = 'data/properties.json';

  function usd(n){
    return new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(n);
  }

  async function fetchProperties(){
    const res = await fetch(DATA_URL, {cache: 'no-cache'});
    const data = await res.json();
    if (Array.isArray(data)) return data;
    if (Array.isArray(data.properties)) return data.properties;
    if (Array.isArray(data.items)) return data.items;
    return [];
  }

  function renderCard(p){
    const img = (p.images && p.images[0]) || 'images/img_1.jpg';
    return `
    <div class="property-item">
      <a href="property.html?slug=${encodeURIComponent(p.slug)}" class="img"><img src="${img}" alt="${p.title}" class="img-fluid" /></a>
      <div class="property-content">
        <div class="price mb-2"><span>${usd(p.priceUSD)}</span></div>
        <div>
          <span class="d-block mb-2 text-black-50">${p.title}</span>
          <span class="city d-block mb-3">${p.sizeM2} m² | ${p.beds} Bed · ${p.baths} Bath</span>
          <div class="specs d-flex mb-4">
            <span class="d-block d-flex align-items-center me-3">
              <span class="icon-bed me-2"></span>
              <span class="caption">${p.beds} Bedrooms</span>
            </span>
            <span class="d-block d-flex align-items-center">
              <span class="icon-bath me-2"></span>
              <span class="caption">${p.baths} Bathrooms</span>
            </span>
          </div>
          <a href="property.html?slug=${encodeURIComponent(p.slug)}" class="btn btn-primary py-2 px-3">View details</a>
        </div>
      </div>
    </div>`;
  }

  async function renderHomepage(){
    const slider = document.querySelector('.property-slider');
    if(!slider) return;
    const props = (await fetchProperties()).filter(p=>p.status==='published' && p.featured);
    if (props.length === 0) return;
    slider.innerHTML = props.map(renderCard).join('');
  }

  async function renderRegion(){
    const regionRoot = document.querySelector('[data-region]');
    if(!regionRoot) return;
    const region = regionRoot.getAttribute('data-region');
    const wrap = regionRoot.querySelector('.region-properties');
    if(!wrap) return;
    const props = (await fetchProperties()).filter(p=>p.status==='published' && p.region===region);
    wrap.innerHTML = props.map(renderCard).join('');
  }

  function imgsHtml(imgs){
    return imgs.map(src=>`<img src="${src}" class="img-fluid" alt="">`).join('\n');
  }

  async function renderDetail(){
    const detail = document.querySelector('[data-property-detail]');
    if(!detail) return;
    const params = new URLSearchParams(location.search);
    const slug = params.get('slug');
    if(!slug) return;
    const props = await fetchProperties();
    const p = props.find(x=>x.slug===slug);
    if(!p) return;
    const h1 = detail.querySelector('[data-title]'); if(h1) h1.textContent = p.title;
    const price = detail.querySelector('[data-price]'); if(price) price.textContent = usd(p.priceUSD);
    const specs = detail.querySelector('[data-specs]'); if(specs) specs.textContent = `${p.sizeM2} m² | ${p.beds} Bed · ${p.baths} Bath`;
    const addr = detail.querySelector('[data-address]'); if(addr) addr.textContent = p.address;
    const gallery = detail.querySelector('[data-gallery]'); if(gallery) gallery.innerHTML = imgsHtml(p.images||[]);
  }

  document.addEventListener('DOMContentLoaded', function(){
    renderHomepage();
    renderRegion();
    renderDetail();
  });
})(); 