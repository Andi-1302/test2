// main.js – Gemeinsame Funktionen für alle öffentlichen Seiten

document.addEventListener('DOMContentLoaded', function () {

  // --- Ticker Text ---
  const tickerEl = document.getElementById('tickerText');
  if (tickerEl && siteData.global) {
    tickerEl.textContent = siteData.global.lauftext;
  }

  // --- Kontaktdaten dynamisch befüllen ---
  const k = siteData.kontakt;
  document.querySelectorAll('[data-contact="telefon"]').forEach(el => {
    el.textContent = k.telefon;
    if (el.tagName === 'A') el.href = 'tel:' + k.telefon.replace(/[^+\d]/g, '');
  });
  document.querySelectorAll('[data-contact="mobil"]').forEach(el => {
    el.textContent = k.mobil;
    if (el.tagName === 'A') el.href = 'tel:' + k.mobil.replace(/[^+\d]/g, '');
  });
  document.querySelectorAll('[data-contact="email"]').forEach(el => {
    el.textContent = k.email;
    if (el.tagName === 'A') el.href = 'mailto:' + k.email;
  });
  document.querySelectorAll('[data-contact="name"]').forEach(el => el.textContent = k.name);
  document.querySelectorAll('[data-contact="adresse"]').forEach(el => {
    el.textContent = k.strasse + ', ' + k.plz + ' ' + k.ort;
  });

  // --- Mobile CTA Bar Links ---
  document.querySelectorAll('.cta-phone').forEach(el => {
    el.href = 'tel:' + k.telefon.replace(/[^+\d]/g, '');
    el.querySelector('span') && (el.querySelector('span').textContent = k.telefon);
  });
  document.querySelectorAll('.cta-email').forEach(el => {
    el.href = 'mailto:' + k.email;
    el.querySelector('span') && (el.querySelector('span').textContent = k.email);
  });

  // --- Navigation: aktive Seite markieren ---
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#mainNav .nav-link, #mainNav .dropdown-item').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href === current) {
      link.classList.add('active');
      const parent = link.closest('.dropdown');
      if (parent) parent.querySelector('.nav-link')?.classList.add('active');
    }
  });

  // --- Submenu Hover ---
  document.querySelectorAll('.dropdown-submenu').forEach(el => {
    el.addEventListener('mouseenter', function () {
      this.querySelector('.dropdown-menu')?.classList.add('show');
    });
    el.addEventListener('mouseleave', function () {
      this.querySelector('.dropdown-menu')?.classList.remove('show');
    });
  });

  // --- IntersectionObserver Fade-in ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // --- GLightbox initialisieren ---
  if (typeof GLightbox !== 'undefined') {
    GLightbox({ selector: '.glightbox', touchNavigation: true, loop: true });
  }

  // --- Map 2-Click Consent ---
  document.querySelectorAll('.map-load-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const container = this.closest('.map-container');
      const overlay = container.querySelector('.map-consent-overlay');
      const iframe = container.querySelector('iframe');
      const src = iframe.dataset.src;
      if (src) iframe.src = src;
      overlay.classList.add('hidden');
    });
  });

  // --- Video: YouTube URL → Embed ---
  document.querySelectorAll('[data-video-url]').forEach(container => {
    const url = container.dataset.videoUrl;
    if (!url) return;
    const youtubeMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
    const mp4Match = url.match(/\.mp4/i);
    if (youtubeMatch) {
      container.innerHTML = `<div class="video-embed"><iframe src="https://www.youtube.com/embed/${youtubeMatch[1]}" allowfullscreen></iframe></div>`;
    } else if (mp4Match) {
      container.innerHTML = `<div class="video-embed"><video controls><source src="${url}" type="video/mp4"></video></div>`;
    } else {
      container.innerHTML = `<div class="video-placeholder"><i class="bi bi-play-circle"></i><p>[VIDEO: ${url}]</p></div>`;
    }
  });

});

// --- Hilfsfunktionen (auch in Seiten-Scripts nutzbar) ---

function getObjekt(id) {
  return siteData.objekte.find(o => o.id === id);
}

function statusBadge(status) {
  const map = {
    frei: ['badge-frei', 'Frei'],
    vermietet: ['badge-vermietet', 'Vermietet'],
    anfrage: ['badge-anfrage', 'Anfrage möglich']
  };
  const [cls, label] = map[status] || map['frei'];
  return `<span class="badge-status ${cls}">${label}</span>`;
}

function preisText(obj) {
  if (obj.typ === 'garage') {
    return obj.preis_kalt && obj.preis_warm
      ? `${obj.preis_kalt}–${obj.preis_warm} € / Monat`
      : '[€ XX,– / Monat]';
  }
  const p = obj.preis_warm || obj.preis_kalt;
  const art = obj.preis_warm ? 'warm' : 'kalt';
  return p ? `ab ${p} € ${art}` : '[€ XX,– warm]';
}

function renderGallery(bilder, containerId) {
  const el = document.getElementById(containerId);
  if (!el || !bilder || bilder.length === 0) return;
  el.innerHTML = bilder.map(b => `
    <a href="${b.url}" class="gallery-item glightbox" data-gallery="gallery-${containerId}" data-glightbox="title: ${b.alt}">
      <img src="${b.url}" alt="${b.alt}" loading="lazy" onerror="this.parentElement.style.display='flex';this.parentElement.style.alignItems='center';this.parentElement.style.justifyContent='center';this.parentElement.innerHTML='<span style=color:#aaa;font-size:0.8rem>Bild nicht verfügbar</span>'">
      <div class="overlay"><i class="bi bi-zoom-in"></i></div>
    </a>`).join('');
  if (typeof GLightbox !== 'undefined') {
    GLightbox({ selector: `.gallery-item`, touchNavigation: true, loop: true });
  }
}

function renderVideoSlot(url, containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  if (!url) {
    el.innerHTML = `<div class="video-placeholder"><i class="bi bi-play-circle"></i><p>Video folgt – bitte im Admin-Panel eintragen.</p></div>`;
    return;
  }
  const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
  if (ytMatch) {
    el.innerHTML = `<div class="video-embed"><iframe src="https://www.youtube.com/embed/${ytMatch[1]}" allowfullscreen></iframe></div>`;
  } else if (/\.mp4/i.test(url)) {
    el.innerHTML = `<div class="video-embed"><video controls><source src="${url}" type="video/mp4"></video></div>`;
  } else {
    el.innerHTML = `<div class="video-placeholder"><i class="bi bi-play-circle"></i><p>[VIDEO: ${url}]</p></div>`;
  }
}
