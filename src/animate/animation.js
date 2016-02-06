
import easingEffects from './effect';
import Util from '../helper/util';
let defaultAnimOptions = {
	effect: 'linear',
	reverse: false,
	infinite: false,
	delay: 0,
	keep: false
}
export default class Animation {
	constructor() {
		let args = Array.from(arguments);
		let shape = args[0];
		let options = args[1] || {};
		this.id = Util.uid();
		this.complete = false;
		this.shapes = [];
		if (Util.isArray(shape)) {
			this.shapes.concat(shape);
		} else {
			this.shapes.push(shape);
		}
		this._options = Object.assign({}, defaultAnimOptions, options);
	}
	start() {
		
	}
}