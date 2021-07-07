//заявка
$('.quiz__send-btn').on('click', function() {
    let data = [];
    for(let i = 1; i < 8; i++) {
        data.push($(`#quiz${i} .item__circle_active`).parent('.item__title').children('.item__name').text());
    }
    console.log(data)
    // $.ajax({
    //     url: './quiz.php',
    //     method: 'POST',
    //     data: data,
    //     success: function(data) {
    //         alert('Обратный звонок заказан!'); 
    //     }
    // });




    alert('Ваша заявка отправлена!');
    $('.popup-wrapper').addClass('hidden');
    $('.blackout').addClass('hidden');
    $('.quiz-wrapper').addClass('hidden');
})

//обратный звонок
$('.invite__btn').on('click', function() {
    if($('.in1').val() == '' || $('.in2').val() == '') {
        alert('Заполните все поля');
        return;
    }
    let data = {
        name: $('.in1').val(),
        number: $('.in2').val(),
    }
    $.ajax({
        url: './invite.php',
        method: 'POST',
        data: data,
        success: function(data) {
            alert('Обратный звонок заказан!'); 
        }
    });
    alert('Обратный звонок заказан!'); 
})

$('.popup__btn').on('click', function() {
    if($('.in3').val() == '') {
        alert('Заполните все поля');
        return;
    }
    let data = {
        number: $('.in3').val()
    }
    $.ajax({
        url: './popup.php',
        method: 'POST',
        data: data,
        success: function(data) {
            alert('Обратный звонок заказан!'); 
        }
    });
    alert('Обратный звонок заказан!'); 
})