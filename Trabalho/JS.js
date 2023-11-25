function mudaCor(el){
    var cor = el.style.backgroundColor;
    if (cor == 'rgb(0, 0, 255)') {
        el.style.backgroundColor = '#adb5bd';
    } else {
        el.style.backgroundColor = '#adb5bd';
    }
}

//------------------------------------------------------------- 

let mensagem = document.querySelector(".mensagem-1") ;


function showMessage(){   
   mensagem.style.display = "block";   
 }

function hideMessage(){
  mensagem.style.display = "none"; 
}

//------------------------------------------------------------- 
var btn = document.querySelector('#primeiro-botao');
var container = document.querySelector('.container-1');
btn.addEventListener('click', function() {

    if(container.style.display === 'block') {
        container.style.display = 'none'
    } else {
        container.style.display = 'block';
    }

});