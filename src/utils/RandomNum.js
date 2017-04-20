

// this generates a random Number
export default class RandomNum {

    constructor(min, max) {
        this._min = min;
        this._max = max;

    }

    getNum = () => {
        let randomNum = Math.random() * (this._max - this._min) + this._min;
        return Math.round(randomNum);
    }
}