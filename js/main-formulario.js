$('.novo').on('click', function(e){
    e.preventDefault();    
    $('.formacao').append("<hr>"+
        "<div class='form-group'>"+
            "<label>Curso de Formação</label> "+
            "<input type='text' class='form-control' placeholder='EX.: Culinaria'> "+
        "</div> "+
        "<div class='row'> "+
            "<div class='col-md-6'> "+
                "<div class='form-group'> "+
                    "<label>Quando Início?</label> "+
                    "<input type='date' class='form-control'> "+
                "</div> "+
            "</div> "+
            "<div class='col-md-6'> "+
                "<div class='form-group'> "+
                    "<label>Quando Terminou?</label> "+
                    "<input type='date' class='form-control'> "+
                "</div> "+
            "</div> "+
        "</div> "+
        "<div class='form-group'> "+
            "<label for='certificado' style='cursor: pointer;'> <span class='icon-photo'></span> Certificado "+
                "<small>(Opcional)</small></label> "+
            "<input id='certificado' name='Certificado' type='file' class='form-control'> "+
        "</div>")})

