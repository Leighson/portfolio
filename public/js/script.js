document.querySelectorAll('[data-bs-toggle="tooltip"]')
    .forEach(tooltip => {
      new bootstrap.Tooltip(tooltip)
    });

const scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: '#scrollspy-target'
    });