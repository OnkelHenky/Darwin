/**
 * Created by JetBrains WebStorm.
 * User: Henka
 * Date: 20.02.13
 */

(function() {
    var socket = io.connect('http://127.0.0.1:3030');

    socket.on('settings_update', function (data) {
        console.log("getting a ui (settings) update"+data);
        console.dir(data);
        window.UserSettingListener(data); /*Calling UserSettingListener if any (new) are available*/
    });

})();
