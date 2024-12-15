document.addEventListener('DOMContentLoaded', function() {
    images.forEach(image => {
        image.addEventListener('mouseover', function() {
            let index = 0;
            const interval = setInterval(() => {
                index = (index + 1) % imageSources.length;
                image.src = imageSources[index];
            }, 100); // Change d'image toutes les 200ms

            image.addEventListener('mouseout', function() {
                clearInterval(interval);
                image.src = imageSources[0]; // Remet l'image initiale
            }, { once: true });
        });
    });
});

window.addEventListener('load', function() {
    if (!localStorage.getItem('popupDisplayed')) {
        alert('Portfolio 100% chargé');
        localStorage.setItem('popupDisplayed', 'true');
    }
});

window.addEventListener('scroll', function() {
    const image = document.getElementById('saxo-vroum');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;
    const maxScroll = documentHeight - windowHeight;

    // Calculer la position de l'image en fonction de la position de défilement
    const newLeftPosition = (scrollPosition / maxScroll) * 140 - 35; // en pourcentage

    // Appliquer la nouvelle position à l'image
    image.style.left = `${newLeftPosition}%`;
});

let isNinePressed = false;
let isOnePressed = false;

document.addEventListener('keydown', function(event) {
    if (event.code === 'Digit9') {
        isNinePressed = true;
    }
    if (event.code === 'Digit1') {
        isOnePressed = true;
    }
    if (isNinePressed && isOnePressed) {
        const hiddenText = document.getElementById('hidden-text');
        hiddenText.style.display = 'block';

        setTimeout(() => {
            hiddenText.style.display = 'none';
        }, 1000); // Affiche le texte pendant 1 seconde
    }
});

document.addEventListener('keyup', function(event) {
    if (event.code === 'Digit9') {
        isNinePressed = false;
    }
    if (event.code === 'Digit1') {
        isOnePressed = false;
    }
});

