Object.defineProperties(String.prototype, {
    _indexOf: {
        value: function(value, index = 0) {
            if(index < 0) {
                index = 0;
            }

            if(index >= this.length) {
                return -1;
            }

            for(let i = index; i < this.length; i++) {
                if(this[i] === value) {
                    return i;
                    break;
                }
            }
            return -1;
        }
    }
});