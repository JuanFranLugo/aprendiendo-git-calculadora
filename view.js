export default class View {
    constructor() {
        this.calculadora = document.getElementById("section-calculadora");
        this.inputNow = document.getElementById('now');
    }

    createButons() {

        const sumaBtn = document.getElementById("suma");
        const restaBtn = document.getElementById("resta");
        const mulBtn = document.getElementById("mul");
        const divBtn = document.getElementById("div");
        const clearBtn = document.getElementById("clear");
        sumaBtn.onclick = () => this.setImputNow(sumaBtn.innerHTML);

        restaBtn.onclick = () => this.setImputNow(restaBtn.innerHTML);

        mulBtn.onclick = () => this.setImputNow(mulBtn.innerHTML);

        divBtn.onclick = () => this.setImputNow(divBtn.innerHTML);

        clearBtn.onclick = () => this.clear();
        
        // const btn = document.getElementById("suma");
        // btn.onclick = () => this.setImputNow(btn.innerHTML);
        // const btn = document.getElementById("suma");
        // btn.onclick = () => this.setImputNow(btn.innerHTML);
        // const btn = document.getElementById("suma");
        // btn.onclick = () => this.setImputNow(btn.innerHTML);
        // const btn = document.getElementById("suma");
        // btn.onclick = () => this.setImputNow(btn.innerHTML);
        // const btn = document.getElementById("suma");
        // btn.onclick = () => this.setImputNow(btn.innerHTML);
        // const btn = document.getElementById("suma");
        // btn.onclick = () => this.setImputNow(btn.innerHTML);
        // const btn = document.getElementById("suma");
        // btn.onclick = () => this.setImputNow(btn.innerHTML);
        // const btn = document.getElementById("suma");
        // btn.onclick = () => this.setImputNow(btn.innerHTML);

        // const butons = document.getElementById("calc-buttons");

        // const sumaBtn = document.createElement("button");
        // sumaBtn.classList.add("button", "is-primary", "is-outlined");
        // sumaBtn.innerHTML = "+";
        // butons.appendChild(sumaBtn);
        // sumaBtn.onclick = () => this.setImputNow('+');
        

    }

    setImputNow(op){
        console.log("Llegue");
        this.inputNow.innerHTML += op;
    }

    clear(){
        this.inputNow.innerHTML = "";
    }

}