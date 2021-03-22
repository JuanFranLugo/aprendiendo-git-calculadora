
export default class View {
    constructor() {
        this.model = null;
        this.calculadora = document.getElementById("section-calculadora");
        this.inputNow = document.getElementById('now');
    }

    setModel(model){
        this.model = model;
    }

    createButons() {

        const sumaBtn = document.getElementById("suma");
        const restaBtn = document.getElementById("resta");
        const mulBtn = document.getElementById("mul");
        const divBtn = document.getElementById("div");
        const clearBtn = document.getElementById("clear");
        

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
        

        zero.onclick = () => this.setImputNow(zero.innerHTML);
        one.onclick = () => this.setImputNow(one.innerHTML);
        two.onclick = () => this.setImputNow(two.innerHTML);
        tree.onclick = () => this.setImputNow(tree.innerHTML);
        four.onclick = () => this.setImputNow(four.innerHTML);
        five.onclick = () => this.setImputNow(five.innerHTML);
        six.onclick = () => this.setImputNow(six.innerHTML);
        seven.onclick = () => this.setImputNow(seven.innerHTML);
        eigh.onclick = () => this.setImputNow(eigh.innerHTML);
        nine.onclick = () => this.setImputNow(nine.innerHTML);

    }

    setImputNow(op){
        console.log("Llegue");
        this.inputNow.innerHTML += op;
    }

    clear(){
        this.inputNow.innerHTML = "";
    }

}