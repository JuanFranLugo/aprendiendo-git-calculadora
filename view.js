export default class View {
    constructor() {
        this.model = null;
        this.calculadora = document.getElementById("section-calculadora");
        this.inputNow = document.getElementById("now");
        this.inputLast = document.getElementById("last");
        this.op = [0];
        this.termino = [];
        this.terminos = [];
        this.operaciones = [];
    }

    setModel(model) {
        this.model = model;
    }

    createButons() {
        const sumaBtn = document.getElementById("suma");
        const restaBtn = document.getElementById("resta");
        const mulBtn = document.getElementById("mul");
        const divBtn = document.getElementById("div");
        const clearBtn = document.getElementById("clear");
        const resultBtn = document.getElementById("result");

        const zero = document.getElementById("zero");
        const one = document.getElementById("one");
        const two = document.getElementById("two");
        const tree = document.getElementById("tree");
        const four = document.getElementById("four");
        const five = document.getElementById("five");
        const six = document.getElementById("six");
        const seven = document.getElementById("seven");
        const eigh = document.getElementById("eigh");
        const nine = document.getElementById("nine");

        sumaBtn.onclick = () => this.setImputNow(sumaBtn.innerHTML);

        restaBtn.onclick = () => this.setImputNow(restaBtn.innerHTML);

        mulBtn.onclick = () => this.setImputNow(mulBtn.innerHTML);

        divBtn.onclick = () => this.setImputNow(divBtn.innerHTML);

        clearBtn.onclick = () => this.clear();
        resultBtn.onclick = () => this.setImputNow(resultBtn.innerHTML);

        zero.onclick = () => this.setImputNow(0);
        one.onclick = () => this.setImputNow(1);
        two.onclick = () => this.setImputNow(2);
        tree.onclick = () => this.setImputNow(3);
        four.onclick = () => this.setImputNow(4);
        five.onclick = () => this.setImputNow(5);
        six.onclick = () => this.setImputNow(6);
        seven.onclick = () => this.setImputNow(7);
        eigh.onclick = () => this.setImputNow(8);
        nine.onclick = () => this.setImputNow(9);
    }

    setImputNow(op) {
        if (typeof op === "number") {
            this.termino.push(op);
            this.inputNow.innerHTML += op;
        }
        if (typeof op === "string") {
            if (this.termino.length > 0) {
                this.op.push(parseInt(this.termino.join("")));
            }
            if (op === "=") {
                this.termino = [];
                this.result();
                return;
            }
            this.operaciones.push(op);
            this.op.push(op);
            this.termino = [];
            this.inputNow.innerHTML += op;
        }
    }

    clear() {
        this.inputNow.innerHTML = "";
        this.inputLast.innerHTML = "";
        this.op = [];
        this.termino = [];
        this.terminos = [];
        this.operaciones = [];
    }

    result() {
        this.model.setOp(this.op, this.terminos, this.operaciones);
        let finalResult = this.model.finalResult();
        this.clear();
        this.inputNow.innerHTML = finalResult;
        this.inputLast.innerHTML = finalResult;
        this.op.push(finalResult);
    }
}
