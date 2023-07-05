window.onload = () => {
    const btnEl = document.getElementById('123btn')
    console.log(btnEl)
    function modifyLogo () {
        let getLogo = document.querySelector('.main-logo')
        // getLogo.setAttribute('src', '')
        getLogo.remove()
        let newLogo = document.createElement('h1')
        newLogo.innerHTML = 'Oddity'
        console.log(newLogo)
        newLogo.style.color = 'black'
    }
    btnEl.onclick = modifyLogo
}