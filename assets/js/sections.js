
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
        const $btn = $(`<button class="btn">${text}</button>`);

        $btn.appendTo(QUERY.sections);

        return $btn;
    }

}

const sections = new Sections();