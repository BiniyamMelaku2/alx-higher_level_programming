$(function () {
  $('#btn_translate').click(function () {
    const code_lang = $('#language_code').val();
    $.getJSON('https://www.fourtonfish.com/hellosalut/?lang=' + code_lang, function (response) {
      $('#hello').html(response.hello);
    });
  });
});
