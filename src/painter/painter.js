import util from '../helper/util';

export default class Painter {
    constructor(context) {
        if (context instanceof CanvasRenderingContext2D) {
            this.ctx = context;
        }
    }
    draw(shape) {
        if (shape.hasOwnProperty('draw') && util.isFunction(shape.draw)) {
            shape.draw(this.ctx);
        }
    }
}
