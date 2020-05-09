document.querySelector('#categories').onclick = function () {
    this.classList.toggle('active');
};

document.querySelector('.mobile-menu').onclick = function () {
    const menu = document.querySelector('.menu');

    this.classList.toggle('active');
    menu.classList.toggle('active');
};

document.querySelector('.has-children').onclick = function () {
    this.classList.toggle('open');
};

document.onclick = function (e) {
    const currentLiElement = document.querySelector('.has-children.active');
    const currentLink = document.querySelector('.has-children.active a');

    if (currentLiElement.classList.contains('open') && e.target !== currentLiElement) {
        currentLiElement.classList.toggle('open');
    }

    if(e.target === currentLink) {
        currentLiElement.classList.toggle('open');
    }

};
