import Util from '../helper/util';
let defaultOptions = {
    color: '#000',
    width: 1,
    lineCap: 'butt',
    lineJoin: 'miter'
}

export default class Ellipse {
    constructor() {
        this.id = Util.uid();
        let args = Array.from(arguments);
        let points = args[0];
        let options = args[1] || {};
        this._options = Object.assign({}, defaultOptions, options);
        this.initEllipse(points);
    }
    initEllipse(points) {
        this.points = [];
        if (Util.isArray(points)) {
            for (let point of points) {
                if (Util.isArray(point) && point.length === 2) {
                    if (Util.isNumber(point[0]) && Util.isNumber(point[1])) {
                        this.points.push(point);
                    }
                }
            }
        }
    }
    draw(ctx) {
    	ctx.lineWidth = this._options.width;
    	ctx.strokeStyle = this._options.color;
    	ctx.lineCap = this._options.lineCap;
    	ctx.lineJoin = this._options.lineJoin;
    	ctx.beginPath();
    	if (this.points.length > 1) {
    		ctx.moveTo(points[0][0], points[0][1]);
    		let tmpPoints = this.points.slice(1);
    		for(let pt of tmpPoints) {
    			ctx.lineTo(pt[0], pt[1]);
    		}
    		ctx.stroke();
    	}
    	ctx.closePath();
    }
}


