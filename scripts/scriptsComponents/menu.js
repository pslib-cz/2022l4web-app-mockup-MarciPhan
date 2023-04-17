const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('tab-content--active');
    });
    tabs.forEach(tab => {
      tab.classList.remove('tab--active');
    });
    tab.classList.add('tab--active');
    target.classList.add('tab-content--active');
  });
});
tabs[0].click();