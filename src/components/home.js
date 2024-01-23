const home = (navigateTo) => { 

    const homeDiv = document.createElement('div');
    homeDiv.className = 'homeDiv'; 

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
    <div class='content'>
        <div class='texto'> 
            <h1 class='titleUno'>HOLA, MI NOMBRE ES</h1>
            <h1 class='titleDos'>JACKELINE GARCÍA</h1>
            <h1 class='titleTres'>WEB DEVELOPER</h1> 
            <p class='presentationHome'> Esta es mi página web. Siéntete libre de navegar y saber más sobre mí. </p>
        </div>
        <div class='homeImg'>
            <div class='firstPicture'></div>
            <div class='secondPicture'></div>
            <div class='thirdPicture'></div>
            <div class='fourPicture'></div>
        </div>
    </div>
        
    </main>
    <footer>
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


    return homeDiv;
};

export default home;