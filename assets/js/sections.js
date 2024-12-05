
class Sections {

    sections = [];

    constructor() {

        this.sections.push(
            ...$('.article .text h3').map((i, e) => ({
                button: this.createBtn(i, e.innerText),
            }))
        )
    }

    createBtn(i, text) {
        const $btn = $(`<button>${text}</button>`);

        $btn.appendTo(QUERY.sections);

        return $btn;
    }

}

const sections = new Sections();