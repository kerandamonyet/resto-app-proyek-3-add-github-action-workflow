/* eslint-disable no-unused-vars */
import 'regenerator-runtime'; // Untuk async await transpile
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const START = 10;
const NUMBER_OF_IMAGES = 100;
const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),

});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
