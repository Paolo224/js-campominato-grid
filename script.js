const mainElement = document.querySelector('main');

const button = document.getElementById('play');

button.addEventListener("click", function(){
    for( let k = 1; k <= 100; k++){
        let newDivElement = creazioneSquare(k);
        newDivElement.addEventListener("click", function(){
            newDivElement.classList.toggle('cyan')
        })
        mainElement.append(newDivElement);
    }
})


// ================================================================================================= //
                                            // FUNCTION //
// ================================================================================================= //
// ================================================================================================= //

function creazioneSquare(testo){
    let element = document.createElement('div');
    element.innerHTML = testo;
    element.classList.add('square')
    return element;
}
