/*!
 * Emove.js
 * Version: 0.0.1
 * Author xuguanlong
 * Copyright 2015 xuguanlong
 */

import globalOptions from './defaultOption';
import Painter from './painter/painter';
import Stage from './stage/stage';
import Util from './helper/util';

export default class Emove {
    constructor() {
        let args = Array.from(arguments);
        this.context = args[0];
        this.plugins = [];
        let options = args[1] || {};
        this._options = Object.assign({}, globalOptions, options);
        this.initContext();
        this.painter = new Painter(this.context);
        this.stage = new Stage();
    }
    initContext() {
        if (typeof this.context === 'string') {
            this.canvas = document.getElementById(this.context);
            this.context = this.canvas.getContext('2d');
            let width = this.canvas.width;
            let height = this.canvas.height;
            Object.defineProperty(this, "width", {
                enumerable: true,
                configurable: true,
                set: function(value) {
                    width = !isNaN(parseFloat(value)) ? parseFloat(value) : width;
                    this.canvas.width = width;
                },
                get: function() {
                    return this.canvas.width;
                }
            });
            Object.defineProperty(this, "height", {
                enumerable: true,
                configurable: true,
                set: function(value) {
                    height = !isNaN(parseFloat(value)) ? parseFloat(value) : height;
                    this.canvas.height = height;
                },
                get: function() {
                    return this.canvas.height;
                }
            });
            this._retinaScale();
            return;
        }
        console.log('get canvas context error, please check the arguments');
    }
    _retinaScale() {
        let ctx = this.context;
        let width = this.canvas.width;
        let height = this.canvas.height;
        let ratio = this._options.retinaScale;
        if (ratio) {
            ctx.canvas.style.width = width + "px";
            ctx.canvas.style.height = height + "px";
            ctx.canvas.height = height * ratio;
            ctx.canvas.width = width * ratio;
            ctx.scale(ratio, ratio);
        }

    }
    registerPlugin(name, plugin) {
        this.plugins[name] = plugin;
        return this;
    }
    addShape(shape) {
        if (this.stage.addShape(shape)) {
            this.painter.draw(shape);
        }
        return this;
    }
    _draw() {
        let shapes = this.stage.getShapes();
        for (let shape of shapes) {
            this.painter.draw(shape);
        }
    }
    redraw() {
        this.clear();
        this._draw();
        return this;
    }
    clear() {
        this.context.clearRect(0, 0, this.width, this.height);
        return this;
    }

}
