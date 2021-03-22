export default class View {
    constructor() {
        this.calculadora = document.getElementById("section-calculadora");
        this.inputNow = document.getElementById('now');
    }

    createButons() {

        const btn = document.getElementById("suma");

        // const butons = document.getElementById("calc-buttons");

        // const sumaBtn = document.createElement("button");
        // sumaBtn.classList.add("button", "is-primary", "is-outlined");
        // sumaBtn.innerHTML = "+";
        // butons.appendChild(sumaBtn);
        // sumaBtn.onclick = () => this.setImputNow('+');

        // const restaBtn = document.createElement("button");
        // restaBtn.classList.add("button", "is-primary", "is-outlined");
        // restaBtn.innerHTML = "-";
        // butons.appendChild(restaBtn);

        // const mulBtn = document.createElement("button");
        // mulBtn.classList.add("button", "is-primary", "is-outlined");
        // mulBtn.innerHTML = "x";
        // butons.appendChild(mulBtn);

        // const divBtn = document.createElement("button");
        // divBtn.classList.add("button", "is-primary", "is-outlined");
        // divBtn.innerHTML = "/";
        // butons.appendChild(divBtn);
        
        // const resultBtn = document.createElement("button");
        // resultBtn.classList.add("button", "is-info", "is-outlined");
        // resultBtn.innerHTML = "=";
        // butons.appendChild(resultBtn);
        

    }

    setImputNow(op){
        document.getElementById("demo").innerHTML += op;
    }

}