abstract class Persona {
    public nombre: string;
    public apellido: string;
    public direccion: string;
    public telefono: string;
    public edad: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    public checkAge(): string {
        if (this.edad <= 0) {
            return `La edad introducida no es correcta`;
        } else {
            if (this.edad < 18) {
                return `${this.nombre} ${this.apellido} es menor de edad`;
            } else {
                return `${this.nombre} ${this.apellido} es mayor de edad`;
            }
        }
    }

    // Método abstracto para mostrar todos los datos personales
    abstract mostrarDatos(): void;
}


class Empleado extends Persona{
    public sueldo!: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number){
        super(nombre, apellido, direccion, telefono, edad);
    }

    public setSueldo(sueldo:number){
        this.sueldo = sueldo;
    }

    public getSueldo():number{
        return this.sueldo;
    }

    public mostrarDatos(): void {
        console.log(`Empleado ${this.nombre} ${this.apellido}`)
        console.log(`Edad: ${this.edad} años`)
        console.log(`Direccion: ${this.direccion}`)
        console.log(`Telefono: ${this.telefono}`)
        console.log(`Sueldo: ${this.sueldo}`)
    }
}

//Here we've got the function that shows the form
export const ejercicio5 = ():void => {
    const formContainer = document.createElement('div');
    formContainer.className = 'form-container';
    formContainer.innerHTML =  `
    <form id="empleado-form">
        <h2>Empleado</h2>
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" required>

        <label for="apellido">Apellido:</label>
        <input type="text" id="apellido" required>

        <label for="edad">Edad:</label>
        <input type="number" id="edad" required>

        <label for="direccion">Direccion:</label>
        <input type="text" id="direccion" required>

        <label for="telefono">Telefono:</label>
        <input type="text" id="telefono" required>  

        <label for="sueldo">Sueldo:</label>
        <input type="number" id="sueldo" required>

        <div>
        <button type="submit">Guardar</button>
        </div>
    </form>
    `;

    //We show the form
    document.querySelector('#app')!.appendChild(formContainer);


    //We get the form and add the event listener

    document.getElementById('empleado-form')?.addEventListener('submit',  (e) => {
    e.preventDefault();

    let nombre:string = (document.getElementById('nombre') as HTMLInputElement).value;
    let apellido:string = (document.getElementById('apellido') as HTMLInputElement).value;
    let edad:number = parseInt((document.getElementById('edad') as HTMLInputElement).value);
    let direccion:string = (document.getElementById('direccion') as HTMLInputElement).value;
    let telefono:string = (document.getElementById('telefono') as HTMLInputElement).value;
    let sueldo:number = parseFloat((document.getElementById('sueldo') as HTMLInputElement).value);      
    
    //We create the object
    const empleado = new Empleado(nombre, apellido, direccion, telefono, edad);
    empleado.mostrarDatos();
    empleado.setSueldo(sueldo);

    //We show the response
    const PersonaPreview = document.getElementById('response-preview')!;    
    PersonaPreview.style.display = 'block';
    PersonaPreview.innerHTML = `
    <div>
        <h3>Datos del Empleado</h3>
        <p><b>Nombre:</b> ${empleado.nombre} ${empleado.apellido}</p>
        <p><b>Edad:</b> ${empleado.edad} años</p>
        <p><b>Dirección:</b> ${empleado.direccion}</p>
        <p><b>Teléfono:</b> ${empleado.telefono}</p>
        <p><b>Sueldo:</b> $${empleado.getSueldo().toFixed(2)}</p>  
        <p>${empleado.checkAge()}</p>

    </div>
    `;

    })


     //here we display the response of the methods, at first it will be hidden 
    const PersonaPreview = document.createElement('div');
    PersonaPreview.id = 'response-preview';
    PersonaPreview.className = 'response-cuenta-preview';
    PersonaPreview.style.display = 'none'
    document.querySelector('#app')!.appendChild(PersonaPreview);

}