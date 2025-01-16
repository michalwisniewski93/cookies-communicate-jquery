var cookieConfirmation = false;
$('document').ready(() => {
    $('h1.title').text('Chronimy twoją prywatność');
    $('h1.title').css({
        paddingLeft: 10
    });
    $('p.description').text('Strona wykorzystuje pliki cookie, do poprawy jakości przeglądania, wyświetlania propozycji handlowych lub wyświetlenia dostosowanych do użytkownika treści. Również do analizowania ruchu na stronie. Jeżeli klikniesz Akceptuj wyrazisz zgodę na wykorzystywanie przez tą stronę plików cookie.');
    $('p.description').css({
        padding: 10,
    });
    $('button').css({
        marginLeft: 10,
    })
    $('button.reject').text('Odrzuć');
    $('button.accept').text('Akceptuj')
    $('.cookiesCommunicate').css({
        backgroundColor: 'silver',
        color: 'white',
        fontSize: 15,
        fontFamily: 'Verdana',
        width: '100%',
        position: 'fixed',
        bottom: 0,
        left: 0,
        paddingBottom: 10,
        textAlign: 'justify'
    });
    $('button.accept').css({
        backgroundColor: 'green',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        fontSize: 15,
        border: 'none',
        cursor: 'pointer'
    });
    $('button.reject').css({
        backgroundColor: 'red',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        fontSize: 15,
        border: 'none',
        cursor: 'pointer'
    });


    $('button.accept').on('click', () => {
        cookieConfirmation = true;
        $('.cookiesCommunicate').slideUp(500);
        setTimeout(() => {
            $('.cookiesCommunicate').css({
                display: 'none',
            });
        }, 2000);
        console.log('zgoda na pliki cookie: ' + cookieConfirmation);
        
    });

    $('button.reject').on('click', () => {
        $('.cookiesCommunicate').slideUp(500);
        setTimeout(() => {
            $('.cookiesCommunicate').css({
                display: 'none',
            });
        }, 2000);
        console.log('zgoda na pliki cookie: ' + cookieConfirmation);
    });

   
});



