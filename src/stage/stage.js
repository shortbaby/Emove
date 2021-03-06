import Timeline from '../animate/timeline';

export default class Stage {
    constructor(emove) {
        this.shapes = [];
        this._emoveIntance = emove;
        this.animations = [];
        this.playing = false;
        this.timeline = new Timeline();

    }
    addShape(shape) {
        if (!this.hasShape(shape)) {
            shape.stage = this;
            this.shapes.push(shape);
            return shape;
        }
    }
    clearShapes() {
        this.shapes = [];
    }
    getShape(id) {
        let rst = false;
        for (let shape of this.shapes) {
            if (shape.id === id) {
                rst = shape;
                break;
            }
        }
        return rst;
    }
    removeShape() {
        let shapes = Array.from(arguments);
        let shapeRemove = shapes[0];
        let index = 0;
        let find = false;
        for (let i = 0; i < this.shapes.length; i++) {
            if (this.shapes[i].id === shapeRemove.id) {
                index = i;
                find = true;
                break;
            }
        }
        if (find) {
            this.shapes.splice(index, 1);
        }

    }
    hasShape() {
        let shapes = Array.from(arguments);
        let shapeFind = shapes[0];
        let rst = false;
        for (let shape of this.shapes) {
            if (shape.id === shapeFind.id) {
                rst = true;
                break;
            }
        }
        return rst;
    }
    getShapes() {
        return this.shapes;
    }
    playAniamtion() {
        if(this.playing) {
            return;
        } 

    }
}
