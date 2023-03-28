$(document).ready(function () {
    var namePet;
    var type = 'Perro';
    $('#namePet').on('change', function() {
        namePet = $('#namePet').val();
    });

    $('#type').on('change', function() {
        type = $('#type').val();
    });

    $('#handlePost').on('click', function() {
        console.log('hi');
        $.ajax({
            url: "https://telemedicina.jakemate.net:7141/api/webservice/metodo",
            data: {
              agregarMascota: "agregarMascota",
              param1: namePet,
              param2: type,
            },
            method: "POST",
            headers: {
              Token: "NJKJNTL8SNKH5JJRTS32ZGSIIDPGHLU6KRXLQMLMJJU8MD7EY5TSWMGD2D6Z",
              ApiKey: "ISSTIXZTV53RZURJKTZD3MXVMEW7X3",
            },
            success: function (resultados) {
              console.log(resultados);
              console.log('enviado: ' + namePet + ' ' + type);
            },
          });
          return false;
        });
    });

