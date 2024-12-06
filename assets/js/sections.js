
const SECTION_OFFSET_PX = 20

class Sections {

    sections = [];

    constructor() {
        this.sections.push(
            ...QUERY.article.find('h3,h4').map((i, e) => ({
                button: this.createBtn(i, e.innerText),
                header: $(e),
            }))
        )

        $(document).ready(() => {
            QUERY.article.on('scroll', debounce(() => {
                console.log('-----')

                const visibilities = this.sections.map(s => {

                    const articleOffset = QUERY.article.offset().top;
                    const sectionOffset = s.header.offset().top;
                    console.log(Math.round(sectionOffset - SECTION_OFFSET_PX) - 1, articleOffset)

                    return Math.round(sectionOffset - SECTION_OFFSET_PX) - 1 > articleOffset;
                });

                console.log(visibilities)

                const index = visibilities.findIndex((bool) => bool);

                const current = (index === -1 ? visibilities.length : index) - 1;

                console.log(current)

                this.activateButton(current >= 0 && current);
            }, 600));
        });
    }

    createBtn(i, text) {
        const $btn = $(`<button class="btn shrink">
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

        QUERY.article.animate({
            scrollTop: scrollTopCalc - SECTION_OFFSET_PX,
        });
    }

    activateButton(i) {
        this.sections.forEach(s => s.button.removeClass('active'));
        if (Number.isSafeInteger(i) && this.sections[i]) this.sections[i].button.addClass('active');
    }
}

const sections = new Sections();