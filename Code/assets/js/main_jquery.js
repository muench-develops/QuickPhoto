$(document).ready(function () {
  //Ein und Ausblenden von Abonniert Btn
  $('#btnAbonnieren').click(function () {
    $('#btnAbonnieren').hide();
    $('#divAbonniert').show();
  });
  $('#divAbonniert').click(function () {
    $('#btnAbonnieren').show();
    $('#divAbonniert').hide();
  });

  //Image like Funktion
  $('#Galerie img').each(function () {
    $(this).on('click', function () {
      if (!$(this).hasClass('border border-primary')) {
        $(this).addClass('border border-primary');
      } else {
        $(this).removeClass('border border-primary');
      }
    });
  });

  //Suche - Funktion
  $('#Suche').on('input', function () {
    var suchwert = $(this).val();
    console.log(suchwert);
    $('#Galerie img').each(function () {
      if ($(this).attr('src').indexOf(suchwert) != -1) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });
});
