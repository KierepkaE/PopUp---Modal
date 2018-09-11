// 1st option jQuery

// Click in the button

/* $(".article button ").on("click", function() {
    $(".modal-wrap").addClass('active');
    $(".article").addClass('blur');
})


// Close

$('span.hide').on('click', function() {
    $(".modal-wrap").removeClass('active');
    $(".article").removeClass('blur');
}) */

// 2nd option - jQuery


/* $(".article button , span.hide").on("click", function() {
    $(".modal-wrap").toggleClass('active');
    $(".article").toggleClass('blur');
}) */


//3rd option - JavaScript




document.querySelector('.article button').addEventListener('click', function() {
    document.querySelector('.modal-wrap').classList.add('active');
    document.querySelector('.article').classList.add('blur');
})


document.querySelector('span.hide').addEventListener('click', function() {
    document.querySelector('.modal-wrap').classList.remove('active');
    document.querySelector('.article').classList.remove('blur');
})