const util = {
    uid() {
        if (typeof this.id === 'undefined') {
            this.id = 0;
        }
        if (typeof this.prefix === 'undefined') {
        	this.prefix = '-emove-uuid-';
        }
        return this.prefix + (this.id++);
    },
    getStyle(el, property) {
        return el.currentStyle ?
            el.currentStyle[property] :
            document.defaultView.getComputedStyle(el, null).getPropertyValue(property);
    },
    isFunction(fun) {
        return Object.prototype.toString.call(fun) === '[object Function]';
    },
    isArray(array) {
		return Object.prototype.toString.call(array) === '[object Array]'; 
    },
    isNumber(value) {
        return typeof value === 'number';
    }
};

export default util;
