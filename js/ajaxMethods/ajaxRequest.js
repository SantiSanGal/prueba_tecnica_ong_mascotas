$(document).ready(function () {
    var namePet;
    var type = 'Perro';
    $('#namePet').on('change', function() {
        namePet = $('#namePet').val();
    });

    $('#type').on('change', function() {
        type = $('#type').val();
    });

    $('#form__post').on('submit', function(e){
      e.preventDefault();
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
          alert('Datos Enviados con éxito');
        },
        fail: function(err){
          console.log(err);
        }
      }).done(function(respuesta){
        $('#form__post')[0].reset();
      });
    });

    var COD_MASCOTA;
    var DUENO;

    $('#COD_MASCOTA').on('change', function(){
      COD_MASCOTA = $('#COD_MASCOTA').val();
      console.log(COD_MASCOTA);
    });

    $('#DUENO').on('change', function(){
      DUENO = $('#DUENO').val();
      console.log(DUENO);
    });

    $('#form__post__dueno').on('submit', function(e){
      e.preventDefault();
      $.ajax({
        url: "https://telemedicina.jakemate.net:7141/api/webservice/metodo",
        data: {
          asignarAdopcion: "asignarAdopcion",
          param1: COD_MASCOTA,
          param2: DUENO,
        },
        method: "POST",
        headers: {
          Token: "NJKJNTL8SNKH5JJRTS32ZGSIIDPGHLU6KRXLQMLMJJU8MD7EY5TSWMGD2D6Z",
          ApiKey: "ISSTIXZTV53RZURJKTZD3MXVMEW7X3",
        },
        success: function (resultados) {
          console.log(resultados);
          console.log('enviado: ' + COD_MASCOTA + ' ' + DUENO);
          alert('Datos Enviados con éxito');
        },
        fail: function(err){
          console.log(err);
        }
      }).done(function(respuesta){
        $('#form__post__dueno')[0].reset();
      });
    });
});

