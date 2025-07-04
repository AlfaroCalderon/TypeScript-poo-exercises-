class Cancion{
    private titulo:string
    private genero:string
    private autor: string = ""

    constructor(titulo:string, genero:string){
        this.titulo = titulo;
        this.genero = genero;
    }

    public setAutor(autor:string):void {
        this.autor = autor;
    } 

    public getAutor(): string {
        return this.autor;
    }

    public cancionData(): { titulo: string; genero: string } {
        return({
            titulo: this.titulo,
            genero: this.genero
        })
    }
}


export const ejercicio3 = ():void => {
    const formContainer = document.createElement('div');
    formContainer.className = 'form-container';
    formContainer.innerHTML =  `
    <form id="cancion-form">
        <h2>Listado de Canciones</h2>
        <label for="titulo">Título canción:</label>
        <input type="text" id="titulo" required>

        <label for="genero" >Género canción:</label>
        <input type="text" id="genero" required>

        <label for="autor">Autor:</label>
        <input type="text" id="autor" required>

        <div>
        <button type="submit">Guardar</button>
        </div>
    </form>
    `;

    //We show the form
    document.querySelector('#app')!.appendChild(formContainer);

    const tableContainer = document.createElement('div');
    tableContainer.className = 'table-container';
    tableContainer.innerHTML = `
    <table id="canciones-table">
        <thead>
            <tr>
                <th>Título</th>
                <th>Género</th> 
                <th>Autor</th>
            </tr>
        </thead>
        <tbody id="canciones-body">
        </tbody>
    </table>
    `;

    //We show the table
    document.querySelector('#app')!.appendChild(tableContainer);


    document.querySelector('#cancion-form')?.addEventListener('submit', (e) => {
        e.preventDefault();

        //we obtain the data from the form
        let title = (document.getElementById("titulo") as HTMLInputElement).value;
        let genre = (document.getElementById("genero") as HTMLInputElement).value;
        let author = (document.getElementById("autor") as HTMLInputElement).value

        //We create a new song
        const cancion = new Cancion(title, genre);
        cancion.setAutor(author);
        const data = cancion.cancionData();

        //We obtain the table body
        const tableBody = document.getElementById('canciones-body') as HTMLTableSectionElement;
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${data.titulo}</td>
        <td>${data.genero}</td>
        <td>${cancion.getAutor()}</td>
        `;
        tableBody.appendChild(tr);

        (document.getElementById("cancion-form") as HTMLFormElement).reset();
    
    })

}