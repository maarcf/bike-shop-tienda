// Contador Productos visibibles
const productosVisibles = document.getElementById('cantidad-productos-visibles');
const cantidadProductos = document.getElementById('total-de-productos'); // tiene que ser igual a la cantidad de tarjetas que hay
const todosLosProductos = document.querySelectorAll('.tarjeta-producto');

const cantidadProductosEnTienda = () => {
  // Muestro al usuario la cantidad de productos totales de la tienda
  cantidadProductos.textContent = todosLosProductos.length;
};

const contadorProductosVisibles = () => {
  let agregarProducto = 0;
  // recorro cada tarjeta de producto
  for(let producto of todosLosProductos) {
    // reviso que no tenga agregada la clase ocultar
    if(producto.classList.contains('ocultar') === false) {
      // sumo un producto al contador
      agregarProducto++;
    };
  };
  productosVisibles.textContent = agregarProducto;
};

contadorProductosVisibles();
cantidadProductosEnTienda();


// Modo Lista y Modo Grilla
const botonGrilla = document.getElementById('boton-grilla');
const botonLista = document.getElementById('boton-lista');
const contenedorProducto = document.querySelector('.contenedor-tarjetas-productos');
const imagenesProductos = document.querySelectorAll('.contenedor-imagen');
const informacionesProductos = document.querySelectorAll('.informacion-producto');
const titulosProductos = document.querySelectorAll('.informacion-producto > h2');
const descripcionesProductos = document.querySelectorAll('.descripcion-producto');

// Para la vista en LISTA
// A contenedorProducto hay que agregarle .vista-lista-contenedor 
// También hay que sacarle .vista-grilla-contenedor
const listaContenedorProductos = () => {
  contenedorProducto.classList.remove('vista-grilla-contenedor');
  contenedorProducto.classList.add('vista-lista-contenedor');
};

// A todosLosProductos hay que sacarle .vista-grilla-tarjeta
const listaTodosLosProductos = () => {
  // recorro cada producto
  for(let producto of todosLosProductos) {
    // le saco la clase
    producto.classList.remove('vista-grilla-tarjeta');
  };
};

// A imagenProducto hay que agregarle .vista-lista-imagen
const listaImagenes = () => {
  // recorro todas las img
  for(let imagen of imagenesProductos) {
    // le agrego la clase al contenedor de la imagen
    imagen.classList.add('vista-lista-imagen');
  };
};

// A informacion producto hay que agregarle .vista-lista-info-producto
const listaInformacionesProductos = () => {
  //recorro las informaciones
  for(let info of informacionesProductos) {
    //le agrego la clase correspondiente
    info.classList.add('vista-lista-info-producto');
  };
};

// A la decripcion del producto hay que sacarle la clase ocultar
const agregarDescipciones = () => {
  // recorro las descripciones
  for(let descripcion of descripcionesProductos) {
    //le quito la clase que la oculta
    descripcion.classList.remove('ocultar');
  };
};

// Agrupo todas las funciones en una funcion
const listarProductos = () => {
  listaContenedorProductos();
  listaTodosLosProductos();
  listaImagenes();
  listaInformacionesProductos();
  agregarDescipciones();
};

botonLista.onclick = () => {
  listarProductos();
};

// Para la vista en GRILLA
// A contenedorProducto hay que quitarle .vista-lista-contenedor 
// y hay que agregarle .vista-grilla-contenedor
const grillaContenedorProductos = () => {
  contenedorProducto.classList.remove('vista-lista-contenedor');
  contenedorProducto.classList.add('vista-grilla-contenedor');
};

// A todosLosProductos hay que agregarle .vista-grilla-tarjeta
const grillaTodosLosProductos = () => {
  // recorro cada producto
  for(let producto of todosLosProductos) {
    // le agrego la clase
    producto.classList.add('vista-grilla-tarjeta');
  };
};

// A imagenProducto hay que quitarle .vista-lista-imagen
const grillaImagenes = () => {
  // recorro todas las img
  for(let imagen of imagenesProductos) {
    // le quito la clase al contenedor de la imagen
    imagen.classList.remove('vista-lista-imagen');
  };
};

// A informacion producto hay que quitarle .vista-lista-info-producto
const grillaInformacionesProductos = () => {
  //recorro las informaciones
  for(let info of informacionesProductos) {
    //le quito la clase correspondiente
    info.classList.remove('vista-lista-info-producto');
  };
};

// A la decripcion del producto hay que agregarle la clase ocultar
const ocultarDescipciones = () => {
  // recorro las descripciones
  for(let descripcion of descripcionesProductos) {
    //le agrego la clase que la oculta
    descripcion.classList.add('ocultar');
  };
};

// Agrupo todas las funciones en una funcion
const grillaProductos = () => {
  grillaContenedorProductos();
  grillaTodosLosProductos();
  grillaImagenes();
  grillaInformacionesProductos();
  ocultarDescipciones();
};

botonGrilla.onclick = () => {
  grillaProductos();
};



// Abrir y Cerrar Carrito 
const botonAbrirCarrito = document.getElementById('boton-carrito');
const botonCerrarCarrito = document.getElementById('boton-cerrar-carrito');
const carritoCompras = document.querySelector('.carrito-checkout');
const overlayCarrito = document.querySelector('.carrito-overlay');


botonAbrirCarrito.onclick = () => {
mostrarCarrito();
};

// Aparece overlay, impide scroll, translada el carrito
const mostrarCarrito = () => {
  mostrarOverlay(overlayCarrito);
  bodyNoScroll();
  carritoCompras.classList.add('mostrar-carrito');
  //agrego el foco luego de esperar el tiempo de apertura del carrito
  setTimeout(focusBtn, 2100);
};

// Poner el foco en el carrito
const focusBtn = () => botonCerrarCarrito.focus();

botonCerrarCarrito.onclick = () => {
  cerrarCarrito();
};

// Oculta el overlay, permite el scroll y translada el carrito
const cerrarCarrito = () => {
  ocultarOverlay(overlayCarrito);
  bodyScroll();
  carritoCompras.classList.remove('mostrar-carrito');
  agregarFocus(botonAbrirCarrito);
};


// Vaciar carrito
const confirmarVaciarCarrito = document.getElementById('boton-vaciar');
const overlayConfirmarVaciarCarrito = document.querySelector('.vaciar-carrito-overlay');
const botonCancelarVaciar = document.getElementById('boton-cancelar-vaciar');
const botonConfirmarVaciar = document.getElementById('boton-confirmar-vaciar');
const popUpVaciarCarrito = document.querySelector('.popup-vaciar-carrito');

// Cuando hace click en vaciarCarrito tiene que aparecer el overlay, cambiar en el contenedor el aria-hidden a false y
// hacer foco en algun boton

const abrirPopUpVaciarCarrito = () => {
  mostrarOverlay(overlayConfirmarVaciarCarrito);
  agregarFocus(botonCancelarVaciar);
};

confirmarVaciarCarrito.onclick = () => {
  abrirPopUpVaciarCarrito();
};

// si confirma o cancela tiene que volver a ocultarse overlay, cambiar en el contenedor el aria-hidden a true 
const cerrarPopUpVaciarCarrito = () => {
  ocultarOverlay(overlayConfirmarVaciarCarrito);
  agregarFocus(confirmarVaciarCarrito);
};

botonCancelarVaciar.onclick = () => {
  cerrarPopUpVaciarCarrito();
};

botonConfirmarVaciar.onclick = () => {
  cerrarPopUpVaciarCarrito();
};


// Finalizar Compra



// Funcionalidades comunes a los modales
const mostrarOverlay = overlay => overlay.classList.remove('ocultar');
const ocultarOverlay = overlay => overlay.classList.add('ocultar');
const bodyNoScroll = () => document.body.classList.add('no-scroll');
const bodyScroll = () => document.body.classList.remove('no-scroll');
const agregarFocus = (element) => element.focus();