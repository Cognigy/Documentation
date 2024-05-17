window.onload = function(){
    // var footer = document.getElementsByClassName('md-footer-copyright');
    // footer[0].innerHTML = `Copyright &copy; 2024 <a href="https://www.cognigy.com/">Cognigy</a>`;

    var suggestEdits = `<div class="md-header__source">${document.querySelector('body > header > nav > div.md-header__source').innerHTML}</div>`

    document.querySelector('body > div.md-container > nav > div').innerHTML += suggestEdits

    document.querySelector('body > div.md-container > main > div > div.md-sidebar.md-sidebar--primary > div > div > nav').innerHTML += suggestEdits
}