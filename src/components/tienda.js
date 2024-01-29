const tienda = (navigateTo) => {

    const tiendaDiv = document.createElement('div');
    tiendaDiv.className = 'tiendaDiv'; 
    
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
    <main class='contactMain'>
      <div class='dContact'>
        <div class='divInfo'>
          <p class='request'> Estoy buscando nuevas oportunidades de desarrollo de proyectos o colaboraciones.
          Si tienes un proyecto en mente, estaré encantada de discutir tus necesidades 
          y ver si puedo ayudarte a cumplir tus objetivos. Si te interesa comunicarte conmigo enviame un correo: 
          </p>
          <p class='correo'>jackeline.garcia.serna@gmail.com</p>
          <a class='ancorLink' href='https://www.linkedin.com/in/jackeline-garcia-ramh/' target='_blank'  type='button'>LinkedIn</a>
          <a class='ancorGit' href='https://github.com/JackelineGS' target='_blank' type='button'>GitHub</a>
        </div>
        <div class='contactImg'>
        <div class='imgForest'></div>
        </div>
        </div>
    </main>
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

    return tiendaDiv;
}; 

export default tienda;