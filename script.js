const usuarios = [
    {
        nombre: 'Juan',
        numeroDocumento: '11646046',
        clave: '2103',
        tipoUsuario: 'administrador',
    },
    {
        nombre: 'Paola',
        numeroDocumento: '19063786',
        clave: '2811',
        tipoUsuario: 'cliente',
    },
    {
        nombre: 'Adrian',
        numeroDocumento: '15483142',
        clave: '1310',
        tipoUsuario: "cliente",
    },
    {
        nombre: 'Ramón',
        numeroDocumento: '20881900',
        clave: '2811',
        tipoUsuario: 'cliente',
    },
];


let typeUser = (prompt('Ingrese el tipo de usuario:\n 1.Administrador \n 2.Cliente'));
if (typeUser === '1') {
    administrador();
} else if (typeUser === '2') {
    cliente();
} else {
    alert('Ingrese una opción valida')
}


function administrador() {
    const documentoAdmin = (prompt('Ingrese su documento'));
    let passwordAmin = prompt('Ingrese su contraseña');
    let usuarioEncontrado1 = usuarios.find(
        element => element.numeroDocumento === documentoAdmin
    );
    if (usuarioEncontrado1) {
        if (passwordAmin === usuarioEncontrado1.clave) {
            console.log(usuarioEncontrado1.tipoUsuario);
            cargarBilletes();
        } else {
            alert('Su clave es incorrecta');
            passwordAmin = prompt('Ingrese su contraseña');
        }

    } else {
        alert('Usuario no encontrado');
    }

}
function cliente() {
    const documentoCliente = (prompt('Ingrese su documento'));
    let passwordCliente = prompt('Ingrese su contraseña');
    let usuarioEncontrado2 = usuarios.find(
        element => element.numeroDocumento === documentoCliente
    );
    if (usuarioEncontrado2) {
        if (passwordCliente === usuarioEncontrado2.clave) {
            console.log(usuarioEncontrado2.tipoUsuario);
            retirarDinero();
        } else {
            alert('Su clave es incorrecta');
            passwordCliente = prompt('Ingrese su contraseña');
        }

    } else {
        alert('Usuario no encontrado');
    }
}

let Billete = [
    {
        nombre: '',
        cantidad: 0,
        total: 0,
    },

];

function cargarBilletes() {
    alert('Bienvenido, recargue el cajero');
    let cantBilletes100 = Number(prompt('Ingrese la cantidad de billetes de 100'));
    let cantBilletes50 = Number(prompt('Ingrese la cantidad de billetes de 50'));
    let cantBilletes20 = Number(prompt('Ingrese la cantidad de billetes de 20'));
    let cantBilletes10 = Number(prompt('Ingrese la cantidad de billetes de 10'));
    let cantBilletes5 = Number(prompt('Ingrese la cantidad de billetes de 5'));
    let totalBilletes100 = 100000 * cantBilletes100;
    let totalBilletes50 = 50000 * cantBilletes50;
    let totalBilletes20 = 20000 * cantBilletes20;
    let totalBilletes10 = 10000 * cantBilletes10;
    let totalBilletes5 = 5000 * cantBilletes5;
    console.log(`Cantidad Billetes de 100 ${cantBilletes100} Total:${totalBilletes100} pesos
        Cantidad Billetes de 50: ${cantBilletes50} Total:${totalBilletes50} pesos
        Cantidad Billetes de 20: ${cantBilletes20} Total:${totalBilletes20} pesos
        Cantidad Billetes de 10: ${cantBilletes10} Total:${totalBilletes10} pesos
        Cantidad Billetes de 5: ${cantBilletes5} Total:${totalBilletes5} pesos`);
    console.log(`Total recargado: ${sumaTotal}`);
    alert('Cajero Recargado con exito');
    let finalizar = prompt('¿Desea finalizar?').toLowerCase();
    if (finalizar === 'si') {
        typeUser = (prompt('Ingrese el tipo de usuario:\n 1.Administrador \n 2.Cliente'));
    } else {
        alert('Su clave es incorrecta');
        passwordAmin = prompt('Ingrese su contraseña');
    }
}
let sumaTotal = totalBilletes100 + totalBilletes50 + totalBilletes20 + totalBilletes10 + totalBilletes5;
function retirarDinero() {
    alert('Bienvenido');
    let retirar = Number(prompt('Cuanto desea retirar'));
    if (retirar > sumaTotal) {
        alert('Lo siento el cajero no tiene esa cantidad');
        retirar = prompt('Ingrese una cantidad menor');
    } else if (retirar < sumaTotal) {
        alert('Se esta procesando su solicitud');
    } else {
        alert('Lo siento el cajero no tiene dinero disponible');
    }

}

