

/*
    step
    sleep: 
    fn: 


*/


class AnimationController {

    steps = [];
    #playing = false;

    constructor({ steps }) {
        this.steps = steps;
    }

    get playing() { return this.#playing }

    async play() {
        this.#playing = true;

        for (let step of this.steps) {
            if (this.playing && step.sleep) await sleep(step.sleep);
            if (step.fn) await step.fn();
        }
    }

    async stop() {
        this.#playing = false;
    }

}