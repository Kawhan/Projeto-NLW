//Procurar o botão
document.querySelector("#add-time").
//QUando clicar no botão executar a ação
addEventListener('click', cloneField)
// Executar auma ação
function cloneField(){
    //Duplicar os campos,que campos?
    const newFieldContainer= document.querySelector(".schedule-item").cloneNode(true)//boolean True or False
    
    //Limpar os campos , que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    // Para cada campo ,limpar
    fields.forEach(function(field){
        //pegar o field do momento e limpa ele
        field.value = ""
        
    })
        
    


    //Colocar na página , onde colocar?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
    

