const tabs = document.querySelectorAll('.tab')
const tabContents = document.querySelectorAll('.tabcontent')


tabs.forEach(function(el) {
    el.addEventListener('click', activateTab);
});

function activateTab(el) {
    const id = el.target.dataset.id;
    if (id) {
        tabs.forEach(tab => {
            tab.classList.remove("active");
        });
        el.target.classList.add("active");

        tabContents.forEach(tabContent => {
            tabContent.classList.remove("active");
            tabContent.classList.add('visually-hidden');
        });
        const element = document.getElementById(id);
        element.classList.remove('visually-hidden');
        element.classList.add("active");
    }
}