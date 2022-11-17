function listaNum(){
    const numero = document.getElementById('numero').value;
    if(numero > "0"){
        for (let i = 0; i < numero; i++){
            const lista = document.getElementById("listaElementos");
            const li = document.createElement("li");
            li.textContent = i+1;
            lista.appendChild(li);
        }
    }
    else{
        alert("Erro!!! O numero precisa ser maior que Zero");
    }
}

document.getElementById('botao').addEventListener('click', listaNum)

//Digite um número para listar os seus números anteriores