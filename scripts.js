const tabs = document.querySelectorAll('.tab')
const tabContents = document.querySelectorAll('.tabcontent')
const cryptoTexts = document.querySelectorAll('.inputText')
const cryptoBtns = document.querySelectorAll('.copyText')
const cryptoAlert = document.querySelector('.contacts_crypto')


tabs.forEach(function(el) {
    el.addEventListener('click', activateTab);
});

cryptoBtns.forEach(function(el) {
    el.addEventListener('click', copyCrypto);
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

function copyCrypto(el) {
    const id = el.target.dataset.id;

    cryptoTexts.forEach(cryptoText => {
        if (cryptoText.id == id) {

            cryptoText.select();
            document.execCommand('copy');
            showAlert();
            cryptoTexts.forEach(cryptoText => {
                cryptoText.classList.remove('active');
            });
            cryptoText.classList.add('active');
        };
    });
}

function showAlert() {
    cryptoAlert.classList.add("active");
    window.getSelection().removeAllRanges();
    setTimeout(function(){
        cryptoAlert.classList.remove("active");
    }, 700);
}