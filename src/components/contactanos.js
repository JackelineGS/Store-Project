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
     <div class='dContact'>
        <div class='divContactText'>
          <h3 class='encabezadoContact'> Contáctanos </h3>
          <p class='pregunta'>¿Tienes alguna pregunta, idea o proyecto en mente? </p>
          <p class='pregunta_dos'> ¡Contáctanos y hagámoslo realidad juntos! </p>
          <div class='imgContact'></div>
        </div>
        <div class='formContact'></div>
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