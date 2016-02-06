import {
    requestAnimFrame, cancelAnimFrame
}
from './animFrame';

class Timeline {
    constructor() {
        this.animations = [];
        this.running = false;
    }
    addAnimation() {
        let animation = Array.from(arguments)[0];
        if (Util.find(animation, this.animations) < 0) {
            this.animations.push(animation);
        }

    }
    removeAnimation() {
        let animation = Array.from(arguments)[0];
        let index = Util.find(animation, this.animations);
        if (index > -1) {
            this.animation.splice(index, 1);
        }
    }
    start() {
        if (this.running) {
            return;
        }
        for (let animation of this.animations) {
            animation.startTime = new Date().getTime();
        }
        this.running = true;
        this.step();
    }
    step() {
        if (!this.running) {
            return;
        }
        let me = this;
        let next = me.step;
        for (let animation of this.animations) {
            if (animation.complete) {
                this.removeAnimation(animation);
                continue;
            }
            animation.frame();
        }
        requestAnimFrame(next.bind(this));
    }
    stop() {
        this.running = false;
    }
}

export default timeline;
