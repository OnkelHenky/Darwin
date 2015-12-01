/**
 * Created by JetBrains WebStorm.
 * User: Henka
 * Date: 25.02.13
 */

$(document).ready(function()
{
    var socket = io.connect('http://127.0.0.1:3030');

    $("#fntsize,#fntfamily,#bckColor,#txtcolor,#GPIIWebDome").change(function(event){
        if($("#updateAuto").is(':checked')){
          console.log('updateAuto = checked. New settings =  '+$(this).attr('name')+", value = "+$(this).val());
          var typeOfSetting = $(this).attr('name');
          var valueOfSetting = $(this).val();
          var updateObj= JSON.parse('{"'+typeOfSetting+'": "'+valueOfSetting+'"}');
          console.dir(updateObj);
          socket.emit('pushUIUpdate',updateObj);
        }
     });

    $("#update_button").click(function(event){
        if($("#updateMan").is(':checked')){
            var updateObjStr = '{';

              updateObjStr += '"fontSize":' + '"'+$("#fntsize").val()+'"';
              updateObjStr += ',"fontFamily":' + '"'+ $("#fntfamily").val()+'"';
              updateObjStr += ',"backgroundColor":' +'"'+  $("#bckColor").val()+'"';
              updateObjStr += ',"textColor":' + '"'+ $("#txtcolor").val()+'"';

            updateObjStr += '}';

            var updateObj= JSON.parse(updateObjStr);
            console.dir(updateObj);
            socket.emit('pushUIUpdate',updateObj);
        }
    });
});




