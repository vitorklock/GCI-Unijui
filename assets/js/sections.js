
class Sections {

    sections = [];

    constructor() {
        this.sections.push(
            ...$('.article .text').find('h2,h3,h4').map((i, e) => ({
                button: this.createBtn(i, e.innerText),
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
            $(e.target).addClass('active')
        })
        return $btn;
    }

}

const sections = new Sections();