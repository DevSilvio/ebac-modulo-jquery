$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#btn-cancelar').click(function(){
        $('form').slideUp();
    });

    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoNovaImg = $('#novaImg').val();
        const novaImg = $('<li style="display: none"></li>');
        $(`<img src="${enderecoNovaImg}" />`).appendTo(novaImg);
        $(`
            <div class="overlayImgLink">
                <a href="${enderecoNovaImg}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novaImg);
        $(novaImg).appendTo('ul');
        $(novaImg).fadeIn(1500);
        $('#novaImg').val('');
    })
})

