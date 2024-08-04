//zona segura
document.addEventListener('DOMContentLoaded', function(){

// recuperar por id 
const nombre = ('txtnombre'). val();
const cedula = ('txtcedula'). val();

//cambiar/ asignar
$('txtnombre').val('Otro fulano');
alert($('txtnombre').val())
$('txtnombre').val('Dario');
 })

 //jquerys
 // zona segura
 $(function(){
    const nombre = ('txtnombre'). val();
const cedula = ('txtcedula'). val();

//cambiar/ asignar
$('txtnombre').val('Otro fulano');
alert($('txtnombre').val())
$('txtnombre').val('Dario');

// añadir evento click al boton
$/('#btnEnviar').on/('click', function(){
    // cuando hiciste click 
    alert('hiciste click')
    $/('#btnEnviar').removeClass('btnprimary').addClass ('#btn-warning').fadeOut();
    const nombre = ('#txtnombre'). val();
    const apellido = ('#txtapellido').val();
    const cedula = ('#txtcedula'). val();
    if(!nombre.trim()){
        alert('Complete este');
        $('#txtnombre').css('border-color', 'red').focus();
        return;
    }
    if(!apellido.trim()){
        alert('Complete este');
        $('#txtapellido').css('border-color', 'red').focus();
        return;
    }
    if(!cedula.trim()){
        alert('Complete este');
        $('#txtcedula').css('border-color', 'red').focus();
        return;
    }
    alert('buenisimo!!!!!!');
});
});