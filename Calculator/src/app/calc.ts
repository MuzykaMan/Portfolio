import { first } from "rxjs";

export enum CalcFunctions {
    none,
    add,
    sub,
    div,
    mul,
}

export class Calc {
    firstNumber: string = '';
    secondNumber: string = '';
    calcFunction: CalcFunctions = CalcFunctions.none;
    result: number | null = null;


    addition() {
        console.log('before addition method')
        this.calcFunction = CalcFunctions.add
        console.log('after addition method')
    }

    subtraction() {
        this.calcFunction = CalcFunctions.sub
    }

    multiplication() {
        this.calcFunction = CalcFunctions.mul
    }

    division() {
        this.calcFunction = CalcFunctions.div
    }

    inputNumber(x: string) {
        console.log('before start of CalcFunctions input number method')
        if (this.calcFunction !== CalcFunctions.none) {
            console.log('before second number input number method')
            this.secondNumber = this.secondNumber + x
            console.log('after second number input number method')
        } else {
            console.log('before first number input number method')
            this.firstNumber = this.firstNumber + x
            console.log('after first number input number method')
        }
    }



    calculateResult() {
        //console.log('before toString first number', this.firstNumber)
        //let firstNumberString = this.arrayNumberToString(this.firstNumber)
        //console.log('first number', firstNumberString)
        //console.log('before toString second number', this.secondNumber)
        //let secondNumberString = this.arrayNumberToString(this.secondNumber);
        //console.log('second number', secondNumberString)

        console.log('before parseFloat first number')
        let firstConvertedNumber = Number.parseFloat(this.firstNumber)
        console.log('after parseFloat first number')
        console.log('before parseFloat second number')
        let secondConvertedNumber = Number.parseFloat(this.secondNumber)
        console.log('after parseFloat first number')

        let answer: number | string = 0

        if (CalcFunctions.add === this.calcFunction) {
            console.log('before addition first and second number')
            answer = firstConvertedNumber + secondConvertedNumber
            console.log('after addition first and second number')
        } else if (CalcFunctions.sub === this.calcFunction) {
            console.log('before subtraction first and second number')
            answer = firstConvertedNumber - secondConvertedNumber
            console.log('after subtraction first and second number')
        } else if (CalcFunctions.mul === this.calcFunction) {
            console.log('before multiplication first and second number')
            answer = firstConvertedNumber * secondConvertedNumber
            console.log('after multiplication first and second number')
        } else if (CalcFunctions.div === this.calcFunction) {
            console.log('before division first and second number')
            if (secondConvertedNumber !== 0) {
                answer = firstConvertedNumber / secondConvertedNumber
                console.log('after division first and second number')
            } else {
                answer = 'NaN'
            }
        }

        return answer



    }





    clearNumber() {
        console.log('1')
        this.firstNumber = ''
        console.log('2')
        this.secondNumber = ''
        console.log('3')
        this.calcFunction = CalcFunctions.none
        console.log('4')
        this.result = 0
        console.log('5')
    }


}