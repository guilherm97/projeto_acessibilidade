'use strict';

const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function () {

    document.body.classList.toggle('tema_claro');
    document.body.classList.toggle('tema_escuro');

    const className = document.body.className;

    if (className == "tema_claro") {

        this.textContent = "Apagar a luz";
    } else {
        this.textContent = "Acender a luz";
    }
    console.log('nome da classe atual: ' + className);
});