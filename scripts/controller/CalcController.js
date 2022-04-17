class CalcController {

    constructor(){
        this._ displayCalcEl = document.querySelector("#display");
        this._ dateEl = document.querySelector("#data");
        this._ timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
    }

    initialize(){
;

        this._dateEl.innerHTML = "09/12/1993";
        this._timeEl.innerHTML = "17:30";


    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(valor){
        this._displayCalcEl.innerHTML = valor; 
    }

    get currentDate(){
        return this._currentDate;

    }
    set currentDate(valor){
        return this._currentDate = valor;
    }
    
}