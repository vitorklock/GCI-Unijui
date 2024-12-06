

const ANIMATIONS = {
    start: new AnimationController({
        steps: [
            {
                sleep: 2000,
                fn: () => QUERY.lottie.trigger('play'),
            }, {
                sleep: 2000,
                fn: () => {
                    QUERY.gciSpan.css('opacity', 0);
                    QUERY.logoImg.css('opacity', 1);
                },
            }, {
                sleep: 2000,
                fn: () => {
                    QUERY.lottie.css('display', 'none');
                    QUERY.gciSpan.css('display', 'none');
                    QUERY.logo.css({
                        top: '40px',
                        left: '20px',
                        width: '50px',
                        height: '50px',
                        transform: ' translate(0,-50%)',
                    })
                },
            }, {
                sleep: 1000,
                fn: () => QUERY.navbar.css({ width: '100%', paddingLeft: '80px' }),
            }, {
                sleep: 1000,
                fn: () => QUERY.main.css('opacity', 1),
            }, {
                fn: async () => {
                    if ($(window).width() >= 576) {
                        await sleep(3000);
                        SIDEBAR.close();
                    }
                },
            }
        ]
    })
}

$(document).ready(async () => {

    if (!(window.location.host.includes('localhost') || window.location.host.includes('127.0.0.1'))) {
        QUERY.webBtn.hide();
    }

    ANIMATIONS.start.play();
    // ANIMATIONS.start.stop();

    $(document).on('keydown', (e) => {
        console.log(e.key)
        if (e.key === 'Escape') Object.values(ANIMATIONS).forEach(a => a.stop());
    });

})