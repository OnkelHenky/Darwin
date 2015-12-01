/**
 * Created by JetBrains WebStorm.
 * User: Henka
 * Date: 20.02.13
 */

/* settings update updateListener*/
(function() {
    window.UserSettingListener = function(update){
        console.log("parsing settings updates");
        console.dir(update);
        if(update.hasOwnProperty('fontSize')){
           document.body.style.fontSize = update.fontSize+".0em";
        }
        if(update.hasOwnProperty('fontFamily')){
           document.body.style.fontFamily = ''+update.fontFamily;
        }
        if(update.hasOwnProperty('backgroundColor')){
           document.body.style.backgroundColor = update.backgroundColor;
        }
        if(update.hasOwnProperty('textColor')){
           document.body.style.color = update.textColor;
        }
        if(update.hasOwnProperty('GPIIWebDome')){
            var user = update.GPIIWebDome;
            var pc = document.querySelector('#pinotComp');
            var wc = document.querySelector('#wcdescr');
            if('anna' === user){
               pc.updateTheShadowDOM('#binput');
               wc.updateTheShadowDOM('#descText');


            }else if('paul' === user){
               pc.updateTheShadowDOM('#cinput');
                wc.updateTheShadowDOM('#descVideo');
            }
            pc.updateClickHandlerComponent();
        }
    };
})();

/* JSONP response handler, for connection establishing with the PCP-Simulator.*/
function handle_response(resp){
    if(resp){
        console.log('Connected To PCP');
        console.log('resp = '+resp.data + " : " + resp.foo);
    }else{
        console.log("Cant get response from server, resp = "+resp);
    }

}

function loginHandler (){
    alert("Logged in")
}


