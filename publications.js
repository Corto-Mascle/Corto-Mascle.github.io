document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.abstract-toggle').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.publication-item');
      const expanded = item.classList.toggle('expanded');
      button.setAttribute('aria-expanded', String(expanded));
      button.textContent = expanded ? 'Hide abstract' : 'Abstract';
    });
  });
});
