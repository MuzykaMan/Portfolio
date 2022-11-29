import { Component, OnInit } from '@angular/core';
import { Calc } from './calc';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  calc: Calc | null = null
  showAction: string = ''
  display: number | string = 'Welcome to Chris\' calculator!'

  ngOnInit(): void {
    this.calc = new Calc()

  }

  addition() {
    this.calc?.addition()
    this.showAction = this.calc?.firstNumber + ' +'
  }

  subtraction() {
    this.calc?.subtraction()
    console.log('subtraction')
  }

  division() {
    this.calc?.division()
    console.log('division')
  }

  multiplication() {
    this.calc?.multiplication()
    console.log('multiplication')
  }

  clickOn(x: string) {
    this.calc?.inputNumber(x)
    console.log('Tapped on number', x)
    this.display = x
  }

  calculateResults() {
    console.log('before caculate results in app component')
    this.display = this.calc?.calculateResult() ?? 0
    console.log('after caculate results in app component')
    this.showAction = this.showAction + ' ' + this.calc?.secondNumber + ' ='


  }

  clickOnClear() {
    this.calc?.clearNumber() ?? ''
    this.display = 0
    this.showAction = ''
  }
}