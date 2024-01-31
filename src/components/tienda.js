const tienda = (navigateTo) => {

    const tiendaDiv = document.createElement('div');
    tiendaDiv.className = 'tiendaDiv'; 

    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>console.log(json))
    
    tiendaDiv.innerHTML = '';
    tiendaDiv.innerHTML += ` 
    <header>
    <div class='logoDev'></div>    
    <div class='bar'>
        <button class='bHome'>Home</butoon>
        <button class='bNosotros'>Nosotros</butoon>
        <button class='bTienda'>Tienda</butoon>
        <button class='bPromociones'>Promociones</butoon>
        <button class='bContacto'>Contactanos</butoon>
    </div>
    </header>
    <main class='tiendaMain'>
    <div class='subtitle'> 
      <p class='tituloProduct'>PRODUCTOS</p>
    </div'>
 
    <div class='content'>
    </div>

        
    </main>
    <footer>
    <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h4 class='footerTitle'>Información de contacto</h4>
        <p class='footerDes'>
          Dirección: 123 Main Street, Anytown, CA 12345
          <br>
          Teléfono: (555) 555-5555
          <br>
          Correo electrónico: storeall@example.com
        </p>
      </div>
      <div class="col-md-6">
        <h4 class='footerTitle'>Enlaces de interés</h4>
        <ul>
          <li class='footerDes'><a href="#">Política de privacidad</a></li>
          <li class='footerDes'><a href="#">Términos de servicio</a></li>
          <li class='footerDes'><a href="#">Contacto</a></li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <p class='footerDes'>Copyright &copy; 2023 Ejemplo</p>
      </div>
    </div>
  </div>
    </footer> 
    `; 

    const bHome = tiendaDiv.querySelector('.bHome');
    bHome.addEventListener('click', () => {
        navigateTo('/');
    });

    const bNosotros = tiendaDiv.querySelector('.bNosotros');
    bNosotros.addEventListener('click', () => {
        navigateTo('/nosotros');
    });

    const bTienda = tiendaDiv.querySelector('.bTienda');
    bTienda.addEventListener('click', () => {
        navigateTo('/tienda');
    });

    const bPromociones = tiendaDiv.querySelector('.bPromociones');
    bPromociones.addEventListener('click', () => {
        navigateTo('/promociones');
    });

    const bContactanos = tiendaDiv.querySelector('.bContacto');
    bContactanos.addEventListener('click', () => {
        navigateTo('/contactanos');
    });


    function crearTarjetas (productos) {
        const all = tiendaDiv.querySelector('.content');
        all.innerHTML = '';
        productos.forEach(producto => {
            all.innerHTML += `
            <div class="card">
                <div class="card-body-img">
                    <img class="poster" src="${producto.image}" alt="Imagen de la película"/>
                </div>
                <div class="card-body-text">
                    <h5 class="card-title">${producto.title}</h5>
                    <span class="price">Precio: ${producto.price}</span>
                    <span class="category">Categoría: ${producto.category}</span>
                    <button class="buttonAdd" data-id="${producto.id}">Añadir al carrito</button>
                </div>
            </div>
            `
        });
    }

    async function fetchData() {
        try {
          const response = await fetch("https://fakestoreapi.com/products");
          if (response.ok) {
            const products = await response.json();
            console.log(products);
            crearTarjetas(products);
          } else {
            console.log(response.status);
          }
        } catch (error) {
          console.log(error);
        }
      }
      
      fetchData();
     

    return tiendaDiv;
}; 

export default tienda;