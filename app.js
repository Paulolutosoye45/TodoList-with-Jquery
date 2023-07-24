$(document).ready(function() {
    $('#button').click(
        function(){
            var toadd = $('input[name=ListItem]').val();
            $('ul').append('<li>' +toadd+'</li>')
        }
    )

    $(document).on('dblclick', 'li',  function(){
        $(this).toggleClass('strike').fadeOut('slow')
        console.log('j')
    })


    $('input').focus(function() {
        $(this).val(' ')
    })
}) 