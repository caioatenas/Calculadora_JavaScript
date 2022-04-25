class CalcController{

    constructor(){

        this._displayCalcEl = document.querySelector("#display");
        this._dataEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._displayCalcEl ="";
        this._currentDate;
        this.initialize().;

    }

    initialize(){


        dataEl.innerHTML = "01/01/2022";
        timeEl.innerHTML = "00:00";
    }

    get displayCalcEl(){
        return this._displayCalcEl;
    }

}