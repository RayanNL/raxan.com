// Ecouter l'évènement SCROLL sur l'objet window
window.addEventListener('scroll', handleScroll)


// Fonction qui gère la barre de navigation au scroll
function handleScroll(e){
    // Récupérer l'élément nav
    const nav = document.querySelector('nav')

    if (window.scrollY > 350) {
        // Si le scroll vertical est plus grand que 350 on ajoute la class .is-fixed à l'élément nav
        nav.classList.add('is-fixed')
    }else {
        // Sinon on retire la class .is-fixed
        nav.classList.remove('is-fixed')
    }
}