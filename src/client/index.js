
import { postURl } from './js/formHandler.js'

import './styles/main.scss'
import './styles/results-modal.scss'

const form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    postURl();
});