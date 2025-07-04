import './style.css'
import { mainMenu } from './menu';
import { ejercicio1 } from './cabeceraPagina';
import { ejercicio2 } from './calculadora';
import { ejercicio3 } from './cancion';
import { ejercicio4 } from './cajero';
import { ejercicio5 } from './abstractClass';

let path = window.location.pathname;
mainMenu();

switch (path) {
    case '/':
    const Bienvenido = document.createElement('div');
    Bienvenido.className = 'bienvenido';
    Bienvenido.textContent = 'Bienvenido a la POO con TypeScript';
    document.querySelector('#app')!.appendChild(Bienvenido);
    break;

    case '/ejercicio1':
        ejercicio1();
    break;

    case '/ejercicio2':
        ejercicio2();
    break;

    case '/ejercicio3':
        ejercicio3();
    break;

    case '/ejercicio4':
        ejercicio4();
    break;

    case '/ejercicio5':
        ejercicio5();
    break;

}

