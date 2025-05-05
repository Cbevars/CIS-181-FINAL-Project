const tooltip = document.getElementById('tooltip');
const areas = document.querySelectorAll('area');

areas.forEach(area => {
  area.addEventListener('mouseenter', (e) => {
    tooltip.textContent = area.dataset.tooltip;
    tooltip.classList.add('show');
  });

  area.addEventListener('mousemove', (e) => {
    tooltip.style.left = e.pageX + 'px';
    tooltip.style.top = (e.pageY - 20) + 'px';
  });

  area.addEventListener('mouseleave', () => {
    tooltip.classList.remove('show');
  });
});
