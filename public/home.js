/**
 * Created by Artem M.
 * Date: 28.02.16
 * Email: frost.artem@gmail.com
 */

$(document).ready(function(){

    $('.nameHolderGroup').delegate('button', 'click', function(){
        var input = $(this).parents('div').eq(0).find('input');
        if(input.val())
            socket.emit('setName', {'name': input.val()});
        input.val('');
    });

    socket.on('message', function(data){
        console.log(data);

        $('.chatHolder').prepend('<p>'+data.data+'</p>');
    });

    $('.messageSender').delegate('button', 'click', function(){
        var input = $(this).parents('div').eq(0).find('input');
        if(input.val())
            socket.emit('newMessage', {'message': input.val()});
        input.val('');
    });

});