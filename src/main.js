import home from './components/home.js';
import nosotros from './components/nosotros.js';
import contactanos from './components/contactanos.js';
import tienda from './components/tienda.js';
import promociones from './components/promociones.js'; 

const routes = [
    { path: '/', component: home },
    { path: '/nosotros', component: nosotros },
    { path: '/contactanos', component: contactanos}, 
    { path: '/tienda', component: tienda },
    { path: '/promociones', component: promociones }
]; 

const defaultRoute = '/';
const root = document.getElementById('root');

const navigateTo = (hash) => {
    const route = routes.find((routeFound) => routeFound.path === hash); 
    if (route && route.component) {
        window.history.pushState({}, route.path, window.location.origin + route.path);
        if (root.firstChild) {
            root.removeChild(root.firstChild);
        }
        root.appendChild(route.component(navigateTo));
    } else {
        navigateTo('/error');
    }
};

window.onpopstate = () => {
    navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute); 

