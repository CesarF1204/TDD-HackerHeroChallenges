const algorithms = {
    sum(num1, num2) {
        return num1 + num2;
    },
    double(arr){
        for(let i = 0; i < arr.length; i++){
            arr[i] *= 2;
        }
        return arr;
    },
    celciusToFahrenheit(cDegrees) {
        let fah = (9/5 * cDegrees) + 32;
        return fah;
    },
    clockHandAngles(seconds) {
        let hourHand = seconds / 3600 % 12;
        let minuteHand = seconds / 60 % 60;
        let secondHand = seconds % 60;
        return [Math.round(hourHand*30), Math.round(minuteHand*6), Math.round(secondHand*6)];
    },
    isPrime(num) {
    for(i = num-1; i > 1; i--){
        if(num % i == 0){
            return false;
            }
        }
    return true;
    },
    extractDigit(num, digitNum) {
        let separator = 1;
        if(digitNum >= 0) {
            for(let i = 0; i < digitNum; i++){
                separator *= 10;
            }
            let remainder = num % separator;
            num = (num-remainder)/separator;
            num %= 10;
            return num;
        } else {
            let separator = 1;
            for(i=0;i>digitNum;i--){
                separator *= 10;
            }
            num *= separator;
            num -= num % 1;
            num %= 10;
            return num;
        }
    },
    secondToLast(arr) {
        if(arr.length < 2) {
            return null;
        }
        return arr[arr.length-2];
    },
    nToLast(arr, n) {
        if(arr.length < n) {
            return null;
        }
        return arr[arr.length-n];
    },
    twoDimensional(row, column){
        let temp = [];
        for(let i = 0; i < row; i++) {
            let temp2 = [];
            for(j=0;j<column;j++) {
                temp2.push(0);
            }
            temp.push(temp2);
        }
        return temp;
    },
    swapTowardCenter(arr) {
        for(let i = 0;i < arr.length/2; i++){
            let temp = arr[i];
            arr[i] = arr[arr.length-1-i];
            arr[arr.length-1-i] = temp;
        }
        return arr;
    }
}
module.exports = algorithms;