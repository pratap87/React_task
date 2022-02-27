export const ARRAY_REQUIRED_MSG = "An array is required";
export const EMPTY_NBR_ARRAY_MSG = "The array must contain at least one number";
export const INVALID_NBR_ARRAY_MSG = "The array must contain all numbers";
export const INVALID_STD_DEV_ARRAY_MSG =
    "Standard deviation requires at least 2 numbers";

class NumArray {
    constructor(arr) {
        if (!Array.isArray(arr)) throw new Error(ARRAY_REQUIRED_MSG);
        if (!arr.every((value) => typeof value === "number" && !isNaN(value)))
            throw new Error(INVALID_NBR_ARRAY_MSG);
        if (arr.length === 0) throw new Error(EMPTY_NBR_ARRAY_MSG);

        this._Array = arr;

        this.Length = this._Array.length;
        this.LengthIsEven = this.Length % 2 === 0;
        this.MiddleIndex = Math.ceil(this.Length / 2);
        this.MiddleIndexValue = this.SortedAsc()[this.MiddleIndex];
        this.MiddleIndexOffsetMinusOneValue =
            this.SortedAsc()[this.MiddleIndex - 1];
    }

    SortedAsc = () => this._Array.sort((a, b) => a - b);

    Mean = (precision = 8) => {
        return +(
            this._Array.reduce((prev, curr) => prev + curr, 0) / this.Length
        ).toPrecision(precision);
    };

    Median = (precision = 8) => {
        const medianEven =
            (this.MiddleIndexValue + this.MiddleIndexOffsetMinusOneValue) / 2;
        const medianOdd = this.MiddleIndexOffsetMinusOneValue;
        return +(this.LengthIsEven ? medianEven : medianOdd).toPrecision(precision);
    };

    StdDeviation = (precision = 8) => {
        if (this.Length === 1) throw new Error(INVALID_STD_DEV_ARRAY_MSG);

        return +Math.sqrt(
            this._Array
                .map((value) => Math.pow(value - this.Mean(), 2))
                .reduce((prev, curr) => prev + curr) /
            (this.Length - 1)
        ).toPrecision(precision);
    };

    Mode = (precision = 8) => {
        const sortByMapValueDesc = (a, b) => b[1] - a[1];

        const mapWithTheMost = new Map();

        this._Array.map((value) =>
            mapWithTheMost.set(value, (mapWithTheMost.get(value) || 0) + 1)
        );

        const mostNumbersArr = [...mapWithTheMost].sort(sortByMapValueDesc);

        const mostNumbersCount = mostNumbersArr[0][1];

        const modeValue = mostNumbersArr.filter(
            (item) => item[1] === mostNumbersCount
        );

        return modeValue.length === 1 ? [modeValue[0][0]] : modeValue[1].sort();
    };
}

export default NumArray;
