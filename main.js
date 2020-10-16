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


// Proceder a realizar compra
const botonRealizarCompra = document.getElementById('boton-comprar-carrito');
const botonSeguirComprando = document.getElementById('boton-seguir-comprando');
const botonFinalizarCompra = document.getElementById('boton-finalizar-compra');
const overlayFinalizarCompra = document.querySelector('.finalizar-compra-overlay');

// Cuando se hace click en comprar tiene que aparecer overlay, poner foco en seguir comprando
const abrirFinalizarCompra = () => {
  mostrarOverlay(overlayFinalizarCompra);
  agregarFocus(botonSeguirComprando);
};

botonRealizarCompra.onclick = () => {
  abrirFinalizarCompra();
};

// Cuando se hace click en finalizar o seguir comprando tiene que desaparecer overlay, poner foco comprar del carrito
const cerrarFinalizarCompra = () => {
  ocultarOverlay(overlayFinalizarCompra);
  agregarFocus(botonRealizarCompra);
};

botonSeguirComprando.onclick = () => {
  cerrarFinalizarCompra();
};



// Funcionalidades comunes a los modales
const mostrarOverlay = overlay => overlay.classList.remove('ocultar');
const ocultarOverlay = overlay => overlay.classList.add('ocultar');
const bodyNoScroll = () => document.body.classList.add('no-scroll');
const bodyScroll = () => document.body.classList.remove('no-scroll');
const agregarFocus = (element) => element.focus();



// Abrir y Cerrar Filtros en media
const cerrarFiltros = document.getElementById('boton-cerrar-filtros');
const seccionFiltros = document.querySelector('.contenedor-filtros-productos');
const abrirFiltros = document.getElementById('boton-abrir-filtros');
const overlayFiltros = document.querySelector('.filtro-overlay');

// al hacer click en el boton filtros tiene que aparecer el overlay, aparecer el filtro
// y no poder hacer scroll
const mostrarIconoCerrarFiltro = () => cerrarFiltros.classList.remove('ocultar');
const aparecerFiltro = () => seccionFiltros.classList.add('mostrar-filtro');

const mostrarFiltrosEnMedia = () => {
  mostrarOverlay(overlayFiltros);
  bodyNoScroll();
  mostrarIconoCerrarFiltro();
  aparecerFiltro();
};

abrirFiltros.onclick = () => mostrarFiltrosEnMedia();

// al hacer click en el boton cerrar tiene que desaparecer el overlay, ocultarse el filtro 
// y volver a hacer scroll el body
const ocultarIconoCerrarFiltro = () => cerrarFiltros.classList.add('ocultar');
const quitarFiltro = () => seccionFiltros.classList.remove('mostrar-filtro');

const ocultarFiltrosEnMedia = () => {
  ocultarOverlay(overlayFiltros);
  bodyScroll();
  ocultarIconoCerrarFiltro();
  quitarFiltro();
};

cerrarFiltros.onclick = () => ocultarFiltrosEnMedia();



// Finalizar Compra

const valorDescuento = document.querySelector('#valor-descuento');
const valorEnvio = document.querySelector('#valor-envio');
const valorRecargo = document.querySelector('#valor-recargo');

const opcionEfectivo = document.getElementById('efectivo-debito');
const opcionCredito = document.getElementById('tarjeta-credito');
const opcionEnvio = document.getElementById('con-envio');
const opcionDescuento = document.getElementById('con-descuento');

const valorSubtotal = document.getElementById('subtotal-a-pagar');
const parrafoDescuento = document.querySelector('.tiene-descuento');
const parrafoEnvio = document.querySelector('.tiene-envio');
const parrafoRecargo = document.querySelector('.tiene-recargo');
const valorTotal = document.getElementById('total-a-pagar');
// Valor a pagar
const subtotal = 172559;


const obtenerGastoEnvio = subtotal => subtotal + 300;

const obtenerRecargo = subtotal => {
  let recargo = subtotal * 0.1;
  return  subtotal + recargo;
};

const obtenerDescuento = subtotal => {
  let descuento = subtotal * 0.05;
  return  subtotal - descuento;
};

// Obtener total: hay que revisar que seleccionó:
// Si eligió envio se le suma el monto de envío.
// Si tiene tarjeta de descuento tiene un 5% OFF.
// Si abona con crédito hay que sumarle el 10% del valor.
// Sumar todo al subtotal y mostrar el total a pagar.

const obtenerTotal = subtotal => {
  let descuento = 0;
  let recargo = 0;
  let gastosDeEnvio = 0;

  if (opcionDescuento.checked) {
    descuento = obtenerDescuento(subtotal) - subtotal;
  };

  if (opcionCredito.checked) {
    recargo = obtenerRecargo(subtotal) - subtotal;
  }
  else {
    parrafoRecargo.classList.add('ocultar');
  };
  ;
  if (opcionEnvio.checked) {
    gastosDeEnvio = obtenerGastoEnvio(subtotal) - subtotal;
  };
  return subtotal + descuento + recargo + gastosDeEnvio;
};

const mostarSubtotal = () => {
  let preciosubtotal = subtotal.toLocaleString('es-AR', { maximumFractionDigits: 2, minimumFractionDigits: 2});
  valorSubtotal.textContent = `$${preciosubtotal}`;
};

const mostrarTotal = () => {
  let total = obtenerTotal(subtotal).toLocaleString('es-AR', { maximumFractionDigits: 2, minimumFractionDigits: 2});
  valorTotal.textContent = `$${total}`;
};

const agregarDescuento = () => {
  let precioDescuento = subtotal - obtenerDescuento(subtotal);
  precioDescuento = precioDescuento.toLocaleString('es-AR', { maximumFractionDigits: 2, minimumFractionDigits: 2});
  valorDescuento.textContent = `-$${precioDescuento}`;
};

const mostrarDescuento = () => {
  parrafoDescuento.classList.toggle("ocultar");
};

const agregarRecargo = () => {
  let precioRecargo = obtenerRecargo(subtotal) - subtotal;
  precioRecargo = precioRecargo.toLocaleString('es-AR', { maximumFractionDigits: 2, minimumFractionDigits: 2});
  valorRecargo.textContent = `$${precioRecargo}`;
};

const mostrarRecargo = () => {
  parrafoRecargo.classList.remove("ocultar");
};

const agregarEnvio = () => {
  valorEnvio.textContent = `$${obtenerGastoEnvio(subtotal) - subtotal}`;
};

const mostrarEnvio = () => {
  parrafoEnvio.classList.toggle("ocultar");
};

// Le muestro al usuario el subtotal y el valor total
mostarSubtotal();
mostrarTotal();

opcionEfectivo.oninput = () => {
  mostarSubtotal();
  mostrarTotal();
};

opcionDescuento.oninput = () => {
  agregarDescuento();
  mostrarDescuento();
  mostrarTotal();
};

opcionCredito.oninput = () => {
  agregarRecargo();
  mostrarRecargo();
  mostrarTotal();
};

opcionEnvio.oninput = () => {
  mostrarEnvio();
  agregarEnvio();
  mostrarTotal();
};



// Funciones Filtros
const filtroBusqueda = document.querySelector('#busqueda-por-nombre');
const filtroCategorias = document.querySelectorAll('.categoria > .checkbox > input[type="checkbox"]');
const filtroPuntajes = document.querySelectorAll('.puntaje > .checkbox > input[type="checkbox"]');
// todosLosProductos ---> tarjetas de los productos declarada más arriba

// Función que permite chequear todos los filtros a la vez
pasaFiltros = producto => {
  if (filtroBusquedaEscrita(producto) && 
  filtroCheckboxCategoria(producto) && 
  filtroCheckboxPuntaje(producto)) {
    return true;
  }
  else {
    return false;
  };
};

// Filtro para buscar por nombre
const compararInputConProductos = producto => {
  // reviso que lo escrito en el input sea igual a algun data nombre de los productos
  if (producto.dataset.nombre.includes(filtroBusqueda.value.toLowerCase())) {
    return true;
  }
  else {
    return false;
  };
};

const hayAlgoEscritoEnElInput = () => Boolean(filtroBusqueda.value);

const filtroBusquedaEscrita = producto => {
  // reviso si en el input text hay algo
  if (hayAlgoEscritoEnElInput()) {
    // si hay algo me fijo si eso es igual a alguno de los productos
    if (compararInputConProductos(producto)) {
      return true;
    }
    else {
      return false;
    };
  }
  else {
    return true;
  };
};

// Filtro para buscar por categoría
const compararCategoriaConProducto = producto => {
  // recorro los checkbox y me fijo si alguno está chequeado
  for (let checkbox of filtroCategorias) {
    if (checkbox.checked) {
      // si está chequeado reviso si el valor de ese checkbox coincide con el data de categoria
      if (checkbox.value === producto.dataset.categoria) {
        return true;
      };
    };
  };
  return false;
};

const hayCheckBoxChequeadoDeCategoria = () => {
  // recorro los checkbox y me fijo si alguno está chequeado o no
  for (let checkbox of filtroCategorias) {
    if (checkbox.checked) {
      return true;
    };
  };
  return false;
};

const filtroCheckboxCategoria = producto => {
  // me fijo si hay algun checkbox seleccionado
  if (hayCheckBoxChequeadoDeCategoria()) {
    //si algo está chequeado reviso si coincide con algún producto
    if (compararCategoriaConProducto(producto)) {
      return true;
    }
    else {
      return false;
    };
  }
  else {
    return true;
  };
};

// Filtro para buscar por puntaje
const compararPuntajeConProducto = producto => {
  // recorro los checkbox y me fijo si alguno está chequeado
  for (let checkbox of filtroPuntajes) {
    if (checkbox.checked) {
      // si está chequeado reviso si el valor de ese checkbox coincide con el data de puntaje
      if (checkbox.value === producto.dataset.puntaje) {
        return true;
      };
    };
  };
  return false;
};

const hayCheckBoxChequeadoDePuntaje = () => {
  // recorro los checkbox y me fijo si alguno está chequeado o no
  for (let checkbox of filtroPuntajes) {
    if (checkbox.checked) {
      return true;
    };
  };
  return false;
};

const filtroCheckboxPuntaje = producto => {
  // me fijo si hay algun checkbox seleccionado
  if (hayCheckBoxChequeadoDePuntaje()) {
    //si algo está chequeado reviso si coincide con algún producto
    if (compararPuntajeConProducto(producto)) {
      return true;
    }
    else {
      return false;
    };
  }
  else {
    return true;
  };
};


// Revisar si los podrocutos pasan los filtros para luego Mostrar u Ocultar los mismos 
const ocultarProducto = producto => producto.classList.add('ocultar');
const mostrarProducto = producto => producto.classList.remove('ocultar');

const filtrarProductos = () => {
  // recorro los productos
  for (let producto of todosLosProductos) {
    if (pasaFiltros(producto)) {      
      // si pasan los filtros los muestro
      mostrarProducto(producto);
    }
    else {
      // oculto esos productos que no pasan
      ocultarProducto(producto);
    };
  };
};

filtroBusqueda.oninput = () => {
  filtrarProductos();
  contadorProductosVisibles();
};

for (let checkbox of filtroCategorias) {
  checkbox.oninput = () => {
    filtrarProductos();
    contadorProductosVisibles();
  };
};

for (let checkbox of filtroPuntajes) {
  checkbox.oninput = () => {
    filtrarProductos();
    contadorProductosVisibles();
  };
};



//Borrar filtros
const botonLimpiarFiltro = document.getElementById('boton-limpiar-filtros');

const limpiarFiltroBusqueda = () => filtroBusqueda.value = "";

const quitarCheckboxsSeleccionados = filtro => {
  for (let checkbox of filtro) {
    checkbox.checked = false;
  };
};

botonLimpiarFiltro.onclick = () => {
  limpiarFiltroBusqueda();
  quitarCheckboxsSeleccionados(filtroCategorias);
  quitarCheckboxsSeleccionados(filtroPuntajes);
  for (let producto of todosLosProductos) {
    mostrarProducto(producto);
  };
  contadorProductosVisibles();
};