const partials = [
  { id: 'nav', url: 'partials/nav.html' },
  { id: 'home', url: 'partials/home.html' },
  { id: 'services', url: 'partials/services.html' },
  { id: 'portfolio', url: 'partials/portfolio.html' },
  { id: 'client-review', url: 'partials/client-review.html' },
  { id: 'about', url: 'partials/about.html' },
  { id: 'get-started', url: 'partials/get-started.html' },
  { id: 'contact', url: 'partials/contact.html' },
  { id: 'testimonials', url: 'partials/testimonials.html' },
  { id: 'footer', url: 'partials/footer.html' },
  { id: 'hero-section', url: 'partials/hero-section.html' }
];

// Load each partial into its container div
partials.forEach(({ id, url }) => {
  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error(`Failed to load ${url}: ${res.statusText}`);
      return res.text();
    })
    .then(html => {
      document.getElementById(id).innerHTML = html;
    })
    .catch(err => {
      console.error(err);
    });
});
