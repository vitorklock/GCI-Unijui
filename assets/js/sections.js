
class Sections {

    sections = [];

    constructor() {
        this.sections.push(
            ...QUERY.article.find('h2,h3,h4').map((i, e) => ({
                button: this.createBtn(i, e.innerText),
                header: $(e),
            }))
        )
    }

    createBtn(i, text) {
        const $btn = $(`<button class="btn">
            <span>${text}</span>
            <span class="count">${i + 1}</span>
            </button>`);

        $btn.appendTo(QUERY.sections);

        $btn.on('click', (e) => {
            this.goToSection(i)
        });

        return $btn;
    }

    goToSection(i) {
        const section = this.sections[i];

        const articleOffset = QUERY.article.offset().top;
        const sectionOffset = section.header.offset().top;

        const scrollTop = QUERY.article.scrollTop();

        const scrollTopCalc = sectionOffset + scrollTop - articleOffset;
        const offsetPx = 20;

        QUERY.article.animate({
            scrollTop: scrollTopCalc - offsetPx,
        });

        this.sections.forEach(s => s.button.removeClass('active'));
        section.button.addClass('active');
    }

}

const sections = new Sections();