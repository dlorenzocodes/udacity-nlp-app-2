import { updateUi } from './updateUI.js'
import { validateURL } from './urlValidation.js'

const inputURl = document.querySelector('#url');

export async function postURl(){
    console.log('Post URl');

    const validation = validateURL(inputURl.value)
    if(validation === false) return;

    const dataObj = {articleURl: inputURl.value}
    const response = await fetch('http://localhost:8082/entry', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataObj)
    });
    updateUi();
}