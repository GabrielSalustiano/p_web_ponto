


//  retorna hora atual
function getCurrentTime() {
    const date = new Date();
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

//  retorna a data atual (dd/mm/yyyy)
function getCurrentDate() {
    const date = new Date();
    let mes = date.getMonth() + 1;
    return date.getDate() + "/" + mes + "/" + date.getFullYear();
}
//  chama as funções
console.log(getCurrentTime());
console.log(getCurrentDate());