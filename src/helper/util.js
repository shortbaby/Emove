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
        return Object.prototype.toString.call(fun) === 'object Function';
    }
};

export default util;
