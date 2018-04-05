const numbers = [5, 2, 5, 0, 5, 7, 5];
const k = 5;

Object.defineProperties(Array.prototype, {
    count: {
        value: function(value) {
            return this.filter(i => i === value).length;
        }
    }
});

function main(number, list_numbers) {
    return list_numbers.findIndex((item, index, r) => {
        const [bot, top] = [r.slice(0, index), r.slice(index)];

        const n1 = bot.count(number);
        const n2 = top.length - top.count(number);

        return n1 === n2;
    });
}

console.log(main(k, numbers));