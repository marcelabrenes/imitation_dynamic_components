$(function() {
    $('.close').on('click', function(){
        $('.alert').fadeOut()
    })
    /* $('.btn.btn-primary').on('click', function(){
        $('.collapse').show()
    })
    $('a.btn.btn-primary').on('click', function() {
        $('.collapse').hide()
    }) */
    $('.btn.btn-primary').on('click', function() {
        $('.collapse').toggle()
    })
    
    $('.btn.btn-link').on('click', function(){
        $('.collapse').hide(1500)
        // const target = $(this).attr('data-target')
        const target = $(this).data('target')
        $(target).show(1500)
    })
})
