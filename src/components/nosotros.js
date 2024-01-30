const nosotros = (navigateTo) => {

    const nosotrosDiv = document.createElement('div');
    nosotrosDiv.className = 'nosotrosDiv';

    nosotrosDiv.innerHTML = '';
    nosotrosDiv.innerHTML += `
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
    <main class='nosotrosMain'>
            <div class='nosotrosContent'>
                <div class='presentacion'>
                    <h2 class='encabezado'>SOBRE NOSOTROS</h2>
                    <div class='slogan'>
                    <p class='sloganText'> <span class='titleBrand'>StoreAll: </span> Encuentra moda y tecnología en un solo lugar</p>
                    <div class='sloganLogo'></div> 
                    </div>
                </div>
                <div class='misionVision'>
                    <h2 class='encabezado'>SOBRE NOSOTROS</h2>
                    <div class='valores'>
                        <div class='mision'>
                            <div class='logoMision'></div>
                            <div class='logoText'>
                                <h2 class='titleMision'>MISION</h2>
                                <p>Llevar la moda a todo el mundo, ofreciéndoles a nuestros clientes una amplia selección de productos de alta calidad a precios asequibles.</p>
                            </div>
                        </div>
                    <div class='vision'>
                        <div class='logoVision'></div>
                        <div class='logoText'>
                            <h2 class='titleVision'>VISION</h2>
                            <p>Convertirnos en la tienda online de moda más grande del mundo, ofreciendo a nuestros clientes una experiencia de compra única.</p>
                        </div>
                    </div> 

                    </div>
                    
                    
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