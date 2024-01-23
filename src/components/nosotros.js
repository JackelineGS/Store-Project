const nosotros = (navigateTo) => {

    const nosotrosDiv = document.createElement('div');
    nosotrosDiv.className = 'nosotrosDiv';

    nosotrosDiv.innerHTML = '';
    nosotrosDiv.innerHTML += `
    <header>
        <div class='barAbout'>
            <button class='bHome'>Home</butoon>
            <button class='bNosotros'>Nosotros</butoon>
            <button class='bTienda'>Tienda</butoon>
            <button class='bPromociones'>Promociones</butoon>
            <button class='bContacto'>Contactanos</butoon>
        </div>
    </header>
    <main class='aboutMain'>
        <div class='dAbout'>
        <div class='dimg'>
            <div class='imgDiv'>
            <div class='dimagen'></div>
            </div>
        </div>
            <div class='aboutDescription'>
                <div class='firstAbout'>
                    <h1 class='firstTitle'>SOBRE MI</h1>
                    <p class='pDescription'>Bienvenidos a mi página web, mi nombre es Jackeline García, 
                    web developer front-end. Me apasiona participar en proyectos que permitan
                    mejorar el bienestar de las personas, así mismo estoy muy interesada en el aprendizaje de nuevas
                    tecnologías.
                   </p>  
                </div>
                <div class='skillBar'>
                    <h1 class='titleSkill'>SKILLS</h1>
                    <div class='allSkills'>
                      
                    </div>
                </div>
            </div
        </div>
    </main>
    `;

    const bHome = nosotrosDiv.querySelector('.bHome');
    bHome.addEventListener('click', () => {
        navigateTo('/');
    });

    const bNosotros = nosotrosDiv.querySelector('.bNosotros');
    bNosotros.addEventListener('click', () => {
        navigateTo('/nosotros');
    });

    const bTienda = nosotrosDiv.querySelector('.bTienda');
    bTienda.addEventListener('click', () => {
        navigateTo('/tienda');
    });

    const bPromociones = nosotrosDiv.querySelector('.bPromociones');
    bPromociones.addEventListener('click', () => {
        navigateTo('/promociones');
    });

    const bContactanos = nosotrosDiv.querySelector('.bContacto');
    bContactanos.addEventListener('click', () => {
        navigateTo('/contactanos');
    });

    return nosotrosDiv; 
}

export default nosotros;