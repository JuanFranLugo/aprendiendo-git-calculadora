export default class Model {
    constructor() {
        this.op = [];
        this.terminos = [];
        this.operaciones = [];
        this.lastResult = null;
    }

    setOp(op, terminos, operaciones) {
        this.op = op;
        this.terminos = terminos;
        this.operaciones = operaciones;
    }

    finalResult() {
        
        //Pasando a negativo los terminos correspondientes
        let op = this.op;
        let i = 0;
        let j = 0;
        let a = 0;
        let b = 0;
        let finalResult = 0;
        for (const signo of op) {
            if (signo === "-") {
                op.splice(i, 2, -op[i + 1]);
            }
            i++;
        }

        
        for (const operacion of op) {
            a = op[j - 1]; //operando 1
            b = op[j + 1]; //operando 2
            if (operacion === "x") {
                op.splice(j - 1, 3, this.mul(a, b)); //reemplazo (a operacion b) por el resultado
            }
            if (operacion === "/") {
                op.splice(j - 1, 3, this.div(a, b));
            }
            j++;
        }
        
        //Eliminando los + de las operaciones
        const sumAll = op.filter(
            (operacion) => operacion !== "+"
        );
        
        for (const termino of sumAll) {
            finalResult += termino;
        }
        

        console.error(finalResult);
        this.clear();
        return finalResult;
        
    }

    mul(a, b) {
        return a * b;
    }

    div(a, b) {
        return a / b;
    }


    clear() {
        this.op = [];
        this.terminos = [];
        this.operaciones = [];
        this.lastResult = 0;
    }
}
