//maria alencar dois (2)
window.onload = function(){
    document.querySelector('#alerta2').addEventListener('click', ()=>{
        function retorno(buttonIndex){
            console.log("Você não conhece o Manowar. Pra mim você não é ninguém.");
            if(buttonIndex == 1){
                navigator.app.exitApp();
            }else{
                return false;
            }
        }
        navigation.notification.confirm(
            "Deseja fechar o aplicativo?", 
            retorno, 
            "Fechar App",
            ["Sim", "Não"]
        );
    });

    document.querySelector('#beep').addEventListener('click', ()=>{
        navigator.notification.beep(666);
    });

    document.querySelector("#vibrar").addEventListener('click', ()=>{
        navigator.vibrate(3000);
    });
}