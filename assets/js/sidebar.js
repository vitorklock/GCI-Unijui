class Sidebar {

    shown;

    constructor() {
        this.close();
    }

    open() {
        if (this.shown === true) return;
        this.shown = true;

        if ($(window).width() >= 576) {
            $('.sidebar').css('width', '60px').addClass('shown');
            $('.wrapper').css('width', 'calc(100vw - 60px)');
        } else {
            $('.sidebar').css({ width: '100vw', position: 'fixed' })
                .addClass('shown');
        }
    }

    close() {
        if (this.shown === false) return;
        this.shown = false;

        $('.sidebar').css({ width: 0 })
            .removeClass('shown');
        (async () => {
            await sleep(400);
            $('.sidebar').css({ position: 'relative' });
        })()
        $('.wrapper').css('width', '100vw');
    }

    toggle() {
        this.shown ? this.close() : this.open();
    }
}


const SIDEBAR = new Sidebar();

window.addEventListener('resize', () => { SIDEBAR.close() });