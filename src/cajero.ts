class Cuenta {
    public nombre: string;
    public cantidad: number;
    public tipoCuenta: string;
    public numeroCuenta: string;

    constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }

    public depositar(valor: number) {
        if (valor < 5) {
            alert("El valor a depositar debe ser mayor a $5.00");
        } else {
            this.cantidad += valor;
            alert(`Se ha depositado correctamente $${valor.toFixed(2)} en la cuenta de ${this.nombre}.`);
        }
    }

    public retirar(valor: number) {
        if (valor < 5) {
            alert("El valor a retirar debe ser mayor a $5.00");
            return;
        }
        if (this.cantidad <= 0) {
            alert("No hay nada en la cuenta.");
            return;
        }
        if (valor > this.cantidad) {
            alert("No hay suficiente saldo en la cuenta.");
            return;
        }
        this.cantidad -= valor;
        alert(`Ha retirado $${valor.toFixed(2)}. Saldo restante: $${this.cantidad.toFixed(2)}`);
    }

    public mostrarDatos() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Tipo de cuenta: ${this.tipoCuenta}`);
        console.log(`Saldo inicial: $${this.cantidad.toFixed(2)}`);
        console.log(`Número de cuenta: ${this.numeroCuenta}`);
    }
}


export const ejercicio4 = ():void => {
    const formContainer = document.createElement('div');
    formContainer.className = 'form-container';
    formContainer.innerHTML =  `
    <form id="cajero-form">
        <h2>Cajero</h2>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" required>

        <label for="cantidad">Cantidad inicial:</label>
        <input type="number" id="cantidad" min="0" step="0.01" required>

        <label for="tipoCuenta">Tipo de cuenta:</label>
        <input type="text" id="tipoCuenta" required>

        <label for="numeroCuenta">Número de cuenta:</label>
        <input type="text" id="numeroCuenta" required>

        <div>
        <button type="submit">Guardar</button>
        </div>
    </form>
    `;

    //We show the form
    document.querySelector('#app')!.appendChild(formContainer);

    //We need to declare the object outside of the addEvenetListener to be able to use the object inside them
    let cajero:Cuenta| null = null;



    //This first addEvenetListener will show a card with the account data with a small form to perform the methods
    document.getElementById('cajero-form')?.addEventListener('submit', (e) => {
        e.preventDefault();

        let nombre:string = (document.getElementById('nombre') as HTMLInputElement).value;
        let cantidad:number = parseFloat((document.getElementById('cantidad') as HTMLInputElement).value);
        let tipoCuenta:string = (document.getElementById('tipoCuenta') as HTMLInputElement).value;
        let numeroCuenta:string = (document.getElementById('numeroCuenta') as HTMLInputElement).value;


        cajero = new Cuenta(nombre, cantidad, tipoCuenta, numeroCuenta);
        cajero.mostrarDatos();

        const CajeroPreview = document.getElementById('response-cuenta-preview')!;
        CajeroPreview.style.display = 'block';
        CajeroPreview.innerHTML = `
        <div>
        <h3>Datos de la cuenta</h3>
        <p>Nombre: ${cajero.nombre}</p>
        <p>Tipo de cuenta: ${cajero.tipoCuenta}</p>
        <p>Número de cuenta: ${cajero.numeroCuenta}</p>
        <p>Saldo inicial: $${cajero.cantidad.toFixed(2)}</p>
        </div>
        <form id="accion-cuenta-form">
            <label for="accion">Acción:</label>
            <select id="accion" required>
                <option value="">Seleccione</option>
                <option value="depositar">Depositar</option>
                <option value="retirar">Retirar</option>
            </select>
            <label for="valorAccion">Monto:</label>
            <input type="number" id="valorAccion" min="0" step="0.01" required>
            <span>
            <button type="submit">Realizar</button>
            </span>
        </form>
        `;

        (document.getElementById('cajero-form') as HTMLFormElement).reset();
    })

    //Here the card with the
    const CajeroPreview = document.createElement('div');
    CajeroPreview.id = 'response-cuenta-preview';
    CajeroPreview.className = 'response-cuenta-preview';
    CajeroPreview.style.display = 'none'
    document.querySelector('#app')!.appendChild(CajeroPreview);




//This second addEventListener will help us to perform the methos 
    document.getElementById('response-cuenta-preview')?.addEventListener('submit', (e) => {
        e.preventDefault();

        const accion = (document.getElementById('accion') as HTMLSelectElement).value;
        const valorAccion = parseFloat((document.getElementById('valorAccion') as HTMLInputElement).value);

        //Here we evaluate which method of the class we will use 
        if (accion === 'depositar') {
            cajero!.depositar(valorAccion);
        } else if (accion === 'retirar') {
            cajero!.retirar(valorAccion);
        } else {
            console.log("Seleccione una acción válida.");
        }

        //We update the information in any case we had perform one of the methods or deposit or withdraw
        const CajeroPreview = document.getElementById('response-cuenta-preview')!;
        CajeroPreview.style.display = 'block';
        CajeroPreview.innerHTML = `
        <div>
        <h3>Datos de la cuenta</h3>
        <p>Nombre: ${cajero!.nombre}</p>
        <p>Tipo de cuenta: ${cajero!.tipoCuenta}</p>
        <p>Número de cuenta: ${cajero!.numeroCuenta}</p>
        <p>Saldo inicial: $${cajero!.cantidad.toFixed(2)}</p>
        </div>
        <form id="accion-cuenta-form">
            <label for="accion">Acción:</label>
            <select id="accion" required>
                <option value="">Seleccione</option>
                <option value="depositar">Depositar</option>
                <option value="retirar">Retirar</option>
            </select>
            <label for="valorAccion">Monto:</label>
            <input type="number" id="valorAccion" min="0" step="0.01" required>
            <span>
            <button type="submit">Realizar</button>
            </span>
        </form>
        `;
    });

}