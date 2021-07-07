$('.call-order').on('click', function() {
    $('.popup-wrapper').toggleClass('hidden');
    $('.blackout').toggleClass('hidden');
})

$('.introduce__btn').on('click', function() {
    $('.quiz-wrapper').toggleClass('hidden');
    $('.blackout').toggleClass('hidden');
})

$('.blackout').on('click', function() {
    $('.popup-wrapper').addClass('hidden');
    $('.blackout').addClass('hidden');
    $('.quiz-wrapper').addClass('hidden');
})

$('.quiz__next-btn').on('click', function() {
    showNextQuestion();
});

$('.quiz__item').on('click', function(e) {
    $(this).parents('.quiz__items').children('.quiz__item').children('.item__title').children('.item__circle').removeClass('item__circle_active');
    $(this).children('.item__title').children('.item__circle').addClass('item__circle_active');
});

//заявка
$('.quiz__send-btn').on('click', function() {
    alert('Ваша заявка отправлена!');
    $('.popup-wrapper').addClass('hidden');
    $('.blackout').addClass('hidden');
    $('.quiz-wrapper').addClass('hidden');
})

//обратный звонок
$('.invite__btn').on('click', function() {
    alert('Обратный звонок заказан');
})

$('.popup__btn').on('click', function() {
    alert('Обратный звонок заказан');
})

let counter = 1;

function showNextQuestion() {
    if(counter == 7) return;
    else counter++;
    $('.quiz').addClass('hidden');
    $(`#quiz${counter}`).removeClass('hidden');
}