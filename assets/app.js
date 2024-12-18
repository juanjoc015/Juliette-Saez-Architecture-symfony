import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.scss';
import './js/components/modal-pictures.js'

import ToggleMenu from './js/components/navbar.js';

// Ejecutar ToggleMenu
new ToggleMenu();





