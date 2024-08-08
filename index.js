var elementosDuvida = document.querySelectorAll('.duvida') //pegando todos elementos

//executado 1x para cada elemento
elementosDuvida.forEach(function (duvida) { 
     // para cada elemento de duvida um evento de clique
     duvida.addEventListener('click', function () {
        /*trocar- coloca a classe se ela nao existe e coloca se ela existir*/
        duvida.classList.toggle('ativa')
    })
})

   



//function nome(argumento) {
// coneudo da funcao}

