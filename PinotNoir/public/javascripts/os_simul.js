/**
 * Created by JetBrains WebStorm.
 * User: Henka
 * Date: 25.02.13
 */

$(document).ready(function()
{
    var socket = io.connect('http://127.0.0.1:3030');

    $(".personas").click(function(event){
          $(".personas").attr( "class", "personas border_color_black");
          $(this).attr( "class", "personas border_color_green");
          var _updateObj= JSON.parse('{"selected_persona": "'+$(this).attr('data-persona')+'"}');
          console.dir(_updateObj);
          socket.emit('pushUIUpdate',_updateObj);
     });

});




