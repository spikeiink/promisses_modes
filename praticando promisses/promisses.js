let result = new Promise((resolve, reject) =>{
let soma = 2 + 2;

if(soma == 4){
    resolve("o número é igual");
}else{
    reject("O número não é igual");
}


});



result.then(res => console.log(res))
.catch(erro => console.log(erro))

