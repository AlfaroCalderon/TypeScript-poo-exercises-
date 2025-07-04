class Calculadora {
    private number1:number
    private number2:number


    public constructor(number1:number, number2:number) {
        this.number1 = number1
        this.number2 = number2
    }
    
    public sumar():number {
        let total = this.number1 + this.number2;
        return total;
    }

    public restar():number {
        let total = this.number1 - this.number2;
        return total;
    }

    public multiplicar():number{
        let total = this.number1 * this.number2;
        return total;
    }

    public dividir():number{
        let total = this.number1 / this.number2;
        return total;
    }

    public potencia():number{
        let total = Math.pow(this.number1, this.number2);
        return total;
    }

    public factorial():number{
        let total = 1;
        for (let i = 1; i <= this.number1; i++) {
            total *= i;
        }
        return total;
    }
}

//Here we've got the function that shows the form
export const ejercicio2 = ():void => {
    const formContainer = document.createElement('div');
    formContainer.className = 'form-container';
    formContainer.innerHTML =  `
    <form id="calculadora-form">
        <h2>Calculadora</h2>
        <label for="number1">Número 1:</label>
        <input type="number" id="number1" required>

        <label for="number2">Número 2:</label>
        <input type="number" id="number2" required>

        <label for="operation">Operación:</label>
        <select id="operation">
            <option value="sumar">Sumar</option>
            <option value="restar">Restar</option>
            <option value="multiplicar">Multiplicar</option>
            <option value="dividir">Dividir</option>
            <option value="potencia">Potencia</option>
            <option value="factorial">Factorial (solo Número 1)</option>
        </select>
        <div>
        <button type="submit">Calcular</button>
        </div>
    </form>
    `;

    //We show the form
    document.querySelector('#app')!.appendChild(formContainer);

    //FUnction to show or hide the number 2 input nad label depending on the option selected within the select of operations 
    const operationSelect = formContainer.querySelector('#operation') as HTMLSelectElement;
    const number2Input = formContainer.querySelector('#number2') as HTMLInputElement;
    const labelNumber2 = formContainer.querySelector('#label-number2') as HTMLLabelElement;

    const toggleNumber2Input = () => {
        if (operationSelect.value === 'factorial') {
            number2Input.style.display = 'none';
            labelNumber2.style.display = 'none';
            number2Input.required = false;
        } else {
            number2Input.style.display = '';
            labelNumber2.style.display = '';
            number2Input.required = true;
        }
    };

    operationSelect.addEventListener('change', toggleNumber2Input);
  


    //We need to retrieve the data from the form to be able to use the class an display the response 
    document.querySelector('#calculadora-form')!.addEventListener('submit', (e) => {
        e.preventDefault();
        const number1:number = parseFloat((document.querySelector('#number1') as HTMLInputElement).value);
        const number2:number = parseFloat((document.querySelector('#number2') as HTMLInputElement).value);
        let calculadora = new Calculadora(number1, number2);
        const operation:string = (document.querySelector('#operation') as HTMLSelectElement).value;

        //Then depending on the operation we selected we will use a method from the class to obtain a response 
        if(operation === 'sumar'){
            document.querySelector('#response-preview')!.innerHTML = `Respuesta a la suma: `+calculadora.sumar();
        }

        if(operation === 'restar'){
            document.querySelector('#response-preview')!.innerHTML = `Respuesta a la resta: `+calculadora.restar();
        }

        if(operation === 'multiplicar'){
            document.querySelector('#response-preview')!.innerHTML = `Respuesta a la multiplicación: `+calculadora.multiplicar();
        }

        if(operation === 'dividir'){
            if(number2 === 0) {
                document.querySelector('#response-preview')!.innerHTML = '<p>Error: No se puede dividir por cero.</p>';
                (document.querySelector('#response-preview') as HTMLElement)!.style.display = "block";
                return;
            }
            document.querySelector('#response-preview')!.innerHTML = `Respuesta a la división: `+calculadora.dividir();
        }

        if(operation === 'potencia'){
            document.querySelector('#response-preview')!.innerHTML = `Respuesta a la potencia: `+calculadora.potencia();
        }

        if(operation === 'factorial'){
            if(number1 < 0) {
                document.querySelector('#response-preview')!.innerHTML = '<p>Error: El factorial no está definido para números negativos.</p>';
                (document.querySelector('#response-preview') as HTMLElement)!.style.display = "block";
            }
            document.querySelector('#response-preview')!.innerHTML = `Respuesta al factorial: `+calculadora.factorial();
        }

        (document.querySelector('#response-preview') as HTMLElement)!.style.display = "block";
        return;
    })

    //here we display the response of the methods, at first it will be hidden 
    const CalculadoraPreview = document.createElement('div');
    CalculadoraPreview.id = 'response-preview';
    CalculadoraPreview.className = 'preview';
    CalculadoraPreview.style.display = 'none'
    document.querySelector('#app')!.appendChild(CalculadoraPreview);

}
