function mudouTamanho() {
    if (window.innerWidth >= 560) {
        itens.style.display = 'flex'
    } else {
        itens.style.display = 'none'
    }
}

function clickMenu() {
    if (itens.style.display == 'flex') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'flex'
    }
}