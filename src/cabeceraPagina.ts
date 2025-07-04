class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion: 'center' | 'right' | 'left';

    constructor() {
        this.titulo = '';
        this.color = '';
        this.fuente = '';
        this.alineacion = 'center';
    }

    // The first method: set title, color, and font
    public establecerPropiedades(titulo: string, color: string, fuente: string): void {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    }

    // The second method: set the align text
    public establecerAlineacion(alineacion: 'center' | 'right' | 'left'): void {
        this.alineacion = alineacion;
    }

    // the third method: display in console all the data we have 
    public imprimirPropiedades(): void {
        console.log('=== Propiedades de la Cabecera ===');
        console.log(`Título: ${this.titulo}`);
        console.log(`Color: ${this.color}`);
        console.log(`Fuente: ${this.fuente}`);
        console.log(`Alineación: ${this.alineacion}`);
        console.log('================================');
    }

    // Additional method to print the header sorry for using css embed
    public generarHTML(): string {
        
        return `
        <div class="page-header">
            <h1 style=" 
                color: ${this.color};
                font-family: ${this.fuente};
                text-align: ${this.alineacion};
            ">
                ${this.titulo}
            </h1>
        </div>
        `;
    }
}


//Here we've got the function that shows the form
export const ejercicio1 = ():void => {
    const headerPreview = document.createElement('div');
    headerPreview.id = 'cabecera-preview';
    document.querySelector('#app')!.appendChild(headerPreview);
 
    const formContainer = document.createElement('div');
    formContainer.className = 'form-container';
    formContainer.innerHTML =  `
    <form id="cabecera-form">
    <h2>Cabecera de pagina</h2>
        <label for="titulo">Título:</label>
        <input type="text" id="titulo" name="titulo" required />

        <label for="color">Color:</label>
        <input type="color" id="color" name="color" required />

        <label for="fuente">Fuente:</label>
        <select id="fuente" name="fuente" required>
            <option value="Arial">Arial</option>
            <option value="Verdana">Verdana</option>
            <option value="Courier New">Courier New</option>
        </select>

        <label for="alineacion">Alineación:</label>
        <select id="alineacion" name="alineacion" required>
            <option value="center">Centrado</option>
            <option value="left">Izquierda</option>
            <option value="right">Derecha</option>
        </select>
        <div>
        <button type="submit">Crear Cabecera</button>
        <div>
    </form>
    `;

    //We show the form
    document.querySelector('#app')!.appendChild(formContainer);


    //We need to retrieve the data from the form to be able to use the class an display the header 
    document.querySelector('#cabecera-form')!.addEventListener('submit', (e) => {
        e.preventDefault();
        let header = new CabeceraPagina();
        let title: string = (document.querySelector('#titulo') as HTMLInputElement).value;
        let color:string =  (document.querySelector('#color') as HTMLInputElement).value;
        let font:string =  (document.querySelector('#fuente') as HTMLSelectElement).value;
        let align:string =  (document.querySelector('#alineacion') as HTMLSelectElement).value;

        header.establecerPropiedades(title, color, font);
        header.establecerAlineacion(align as 'center' | 'right' | 'left');
        header.imprimirPropiedades();
        document.querySelector('#cabecera-preview')!.innerHTML = header.generarHTML();
    })

}
