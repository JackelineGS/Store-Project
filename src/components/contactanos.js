const contactanos = (navigateTo) => {

    const contactDiv = document.createElement('div');
    contactDiv.className = 'contactDiv';
    
    contactDiv.innerHTML = '';
    contactDiv.innerHTML += ` 
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
    <main class='contactMain'>
    <div class='encabezadoContact'><h3 class='encabezadoContact'> CONTÁCTANOS </h3></div>
        <div class='dContact'>
            <div class='divContactText'>
                <p class='pregunta'>¿Tienes alguna pregunta, idea o proyecto en mente? </p>
                <p class='pregunta_dos'> ¡Contáctanos y hagámoslo realidad juntos! </p>
                <div class='imgContact'></div>
            </div>
        <div class='formContact'>
            <div class='formInput'>
                <p>Envianos un mensaje</p>
                <label> Nombre y Apellido </label>
                <input ></input>
                <label> Correo </label>
                <input ></input>
                <label> Mensaje </label>
                <input ></input>
                <button> Enviar Mensaje </button>
            </div>
        </div>
        </div>
     </div>
    </main>
    `; 

    const bHome = contactDiv.querySelector('.bHome');
    bHome.addEventListener('click', () => {
        navigateTo('/');
    });

    const bNosotros = contactDiv.querySelector('.bNosotros');
    bNosotros.addEventListener('click', () => {
        navigateTo('/nosotros');
    });

    const bTienda = contactDiv.querySelector('.bTienda');
    bTienda.addEventListener('click', () => {
        navigateTo('/tienda');
    });

    const bPromociones = contactDiv.querySelector('.bPromociones');
    bPromociones.addEventListener('click', () => {
        navigateTo('/promociones');
    });

    const bContactanos = contactDiv.querySelector('.bContacto');
    bContactanos.addEventListener('click', () => {
        navigateTo('/contactanos');
    });
  
    return contactDiv;
};

export default contactanos;