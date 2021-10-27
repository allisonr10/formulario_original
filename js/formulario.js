(function(){ //função auto invocavel


    const txtTitulo = document.getElementById('txtTitulo')
    txtTitulo.focus()
    const btn = document.getElementById('btn')

    btn.addEventListener('click', function(e){
        const elemento = document.getElementById('feedbackMessage')
        elemento.classList.remove('show') // adicionar classe para mostrar mensagem
        console.log(txtTitulo.value)
        if(txtTitulo.value === ''){
           /*  alert('Preencha os campos')
            e.preventDefault()
            txtTitulo.focus() */
            elemento.classList.add('show') 
        }
        //fechar mensagem de erro
        
        const botaoFecharMensagem = document.getElementsByTagName('button')[0]
        botaoFecharMensagem.focus()
        botaoFecharMensagem.addEventListener('click', function(){
        elemento.classList.remove('show')
        txtTitulo.focus()
        })
        
    })

        

    //contando o números de letras dentro do text area

    const txtDescricao = document.getElementById('txtDescricao')
    const resta = document.getElementsByTagName('span')[0]
    const quantidadeMaxima = txtDescricao.maxLength


    //verificar se algo foi digitado e subtrai do contador

    txtDescricao.addEventListener('input', function(){
        let numeroLetras = txtDescricao.value.length
        let resultado = quantidadeMaxima - numeroLetras
        resta.textContent = resultado
      
    })

    //verificar se a caixa de check foi marcada
        let estado = document.getElementById('chkAceito')
        let botao = document.getElementById('btn')

        botao.disabled = true // botão tem que começar desabilitado

        estado.addEventListener('change', function(){
            botao.disabled = !estado.checked
        })


})()