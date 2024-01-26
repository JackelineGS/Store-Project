
const home = (navigateTo) => { 

    const homeDiv = document.createElement('div');
    homeDiv.className = 'homeDiv'; 

    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>console.log(json))

    homeDiv.innerHTML = '';
    homeDiv.innerHTML += `
    <header>
    
        <div class='bar'>
            <button class='bHome'>Home</butoon>
            <button class='bNosotros'>Nosotros</butoon>
            <button class='bTienda'>Tienda</butoon>
            <button class='bPromociones'>Promociones</butoon>
            <button class='bContacto'>Contactanos</butoon>
        </div>
    </header>
    <main class='homeMain'>
    <div class='content'>
    </div>
        
    </main>
    <footer>
    <div class="container">
    <div class="row">
      <div class="col-md-6">
        <h4>Información de contacto</h4>
        <p>
          Dirección: 123 Main Street, Anytown, CA 12345
          <br>
          Teléfono: (555) 555-5555
          <br>
          Correo electrónico: info@example.com
        </p>
      </div>
      <div class="col-md-6">
        <h4>Enlaces de interés</h4>
        <ul>
          <li><a href="#">Política de privacidad</a></li>
          <li><a href="#">Términos de servicio</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <p>Copyright &copy; 2023 Ejemplo</p>
      </div>
    </div>
  </div>
    </footer> 
    `;

    const bHome = homeDiv.querySelector('.bHome');
    bHome.addEventListener('click', () => {
        navigateTo('/');
    });

    const bNosotros = homeDiv.querySelector('.bNosotros');
    bNosotros.addEventListener('click', () => {
        navigateTo('/nosotros');
    });

    const bTienda = homeDiv.querySelector('.bTienda');
    bTienda.addEventListener('click', () => {
        navigateTo('/tienda');
    });

    const bPromociones = homeDiv.querySelector('.bPromociones');
    bPromociones.addEventListener('click', () => {
        navigateTo('/promociones');
    });

    const bContactanos = homeDiv.querySelector('.bContacto');
    bContactanos.addEventListener('click', () => {
        navigateTo('/contactanos');
    });


    function crearTarjetas (productos) {
        const all = homeDiv.querySelector('.content');
        all.innerHTML = '';
        productos.forEach(producto => {
            all.innerHTML += `
            <div class="card">
                <div class="card-body-img">
                    <img class="poster" src="${producto.image}" alt="Imagen de la película"/>
                </div>
                <div class="card-body-text">
                    <h5 class="card-title">${producto.title}</h5>
                    <span class="año">Precio: ${producto.price}</span>
                    <span class="score">Categoría: ${producto.category}</span>
                    <button name="button" class="button-info" data-id="${producto.id}">Añadir al carrito</button>
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
     
   

  

    return homeDiv;


};



export default home;