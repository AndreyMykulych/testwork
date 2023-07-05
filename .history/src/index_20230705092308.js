window.onload = () => {
    const btnEl = document.getElementById('123btn')
    console.log(btnEl)
    function modifyLogo () {
        let getLogo = document.querySelector('.main-logo')
        getLogo.setAttribute('src', '')
        console.log('hi')
    }
    btnEl.onclick = modifyLogo()
}