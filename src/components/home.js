
const home = (navigateTo) => { 

    const homeDiv = document.createElement('div');
    homeDiv.className = 'homeDiv'; 

    fetch('https://fakestoreapi.com/products/')
    .then(res=>res.json())
    .then(json=>console.log(json))

    homeDiv.innerHTML = '';
    homeDiv.innerHTML += `
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
    <main class='homeMain'>

      <div class='mainContent'>
        <div class='bienvenida'> 
          <h2 class='tituloProduct'>BIENVENIDO A</h2>
          <div class='mainSlogan'>
            <p class='sloganText'> <span class='titleBrand'>StoreAll: </span> Encuentra moda y tecnología en un solo lugar</p>
            <div class='mainPicture'></div>
          </div>
      </div>

        <div class='contProducts'>
          <h2 class='tituloProduct'>CATEGORÍAS</h2>
          <div class='cardProducts'>
          </div>
        </div>
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
        const all = homeDiv.querySelector('.cardProducts');
        all.innerHTML = '';
        productos.forEach(producto => {
            all.innerHTML += `
            <div class="card-main">
                <div class="card-body-img">
                <img class="primerPoster" alt="Imagen de la película"/>
                </div>
                <div class="card-products">
                    <span class="price"> ${producto}</span>
                    <button class="buttonAdd" data-id="${producto.id}">Visitar</button>
                </div>
            </div>
            `
        });
    }


    async function fetchData() {
        try {
          const response = await fetch("https://fakestoreapi.com/products/categories");
          if (response.ok) {
            const categories = await response.json();
            console.log(categories);
            crearTarjetas(categories);
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