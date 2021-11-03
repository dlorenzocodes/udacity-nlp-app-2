const resultWrapper = document.querySelector('.result-wrapper');

export async function updateUi(){
    const response = await fetch('http://localhost:8082/getData');
    try{
        const data = await response.json();
        console.log(data);

        if(data.status.code != 0) {
            alert(data.status.msg);
            return;
        }

        let html = '';
        html = `
            <h2>Analysis Results:</h2>
            <ul class="results">
                <li>Agreement: <span>${data.agreement}</span></li>
                <li>Confidence: <span>${data.confidence}</span></li>
                <li>Irony: <span>${data.irony}</span></li>
                <li>Score-Tag: <span>${data.score_tag}</span></li>
                <li>Model: <span>${data.model}</span></li>
                <li>Subjectivity: <span>${data.subjectivity}</span></li>
            </ul>
        `;
        resultWrapper.classList.add('show');
        resultWrapper.innerHTML = html;
    }catch(error){
        console.log(error);
    }
}