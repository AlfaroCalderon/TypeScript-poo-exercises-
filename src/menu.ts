
export const mainMenu = ():void => {

const menu = document.createElement('nav');
menu.className = 'menu';
menu.innerHTML = `
<a href="/ejercicio1">Ejercicio 1</a>
<a href="/ejercicio2">Ejercicio 2</a>
<a href="/ejercicio3">Ejercicio 3</a>
<a href="/ejercicio4">Ejercicio 4</a>
<a href="/ejercicio5">Ejercicio 5</a>
`;
document.querySelector('#app')!.appendChild(menu)

}