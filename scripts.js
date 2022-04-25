const tabs = document.querySelectorAll('.tab')
const tabContents = document.querySelectorAll('.tabcontent')
const cryptoTexts = document.querySelectorAll('.inputText')
const cryptoBtns = document.querySelectorAll('.copyText')
const cryptoAlert = document.querySelector('.contacts_crypto')


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

cryptoBtns.forEach(function(el) {
    el.addEventListener('click', copyCrypto);
});

function copyCrypto(el) {
    const id = el.target.dataset.id;

    cryptoTexts.forEach(cryptoText => {
        if (cryptoText.id == id) {
            cryptoTexts.forEach(cryptoText => {
                cryptoText.classList.remove('active');
            });
            cryptoText.classList.add('active');
            cryptoText.select();
            document.execCommand('copy');
            showAlert();
        };
    });
}

function showAlert() {
    cryptoAlert.classList.add("active-al");
    window.getSelection().removeAllRanges();
    setTimeout(function(){
        cryptoAlert.classList.remove("active-al");
    }, 700);
}