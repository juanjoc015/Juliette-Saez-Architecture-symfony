console.log('hello word');
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('.toggle-btn');
    const text = document.querySelector('.text');
    
    let expanded = false;

    toggleBtn.addEventListener('click', () => {
      expanded = !expanded;
      if (expanded) {
        // Mostrar todo el texto
        text.classList.add('expanded');
        toggleBtn.textContent = 'Lire moins';
      } else {
        // Truncar el texto
        text.classList.remove('expanded');
        toggleBtn.textContent = 'Lire plus';
      }
    });
  });