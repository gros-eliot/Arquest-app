function carrousel1() {
    let textes155 = document.querySelectorAll('.texte155');
    let d = 2000;
    let delta = 1000;

    textes155.forEach(function (img, indice) {
        img.style.zIndex = - indice;
    });

    let anim155 = anime.timeline({
        loop: true,
        delay: 0
    });

    anim155.add({
        targets: textes155,
        translateX: [{ value: '375px', duration: d },
        {
            value: '-375px', duration: 0, delay: function (img, ind) {
                if (ind == 1) return (4 * delta) + (3 * d);
                if (ind == 2) return (3 * delta) + (2 * d);
                if (ind == 3) return (2 * delta) + d;
                if (ind == 4) return delta;
                return 0;
            }
        },
        {
            value: '0', duration: function (img, ind) {
                if (ind == 9) return 0;
                return d;
            }
        }],
        easing: 'linear',
        delay: function (img, ind) {
            if (ind == 0) return delta;
            if (ind == 1) return (2 * delta) + d;
            if (ind == 2) return (3 * delta) + (2 * d);
            if (ind == 3) return (4 * delta) + (3 * d);

            return (3 * delta) + (2 * d);
        }
    });
}
