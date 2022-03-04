var valor
$(document).ready(function () {
    //Fisicos
    $('#lblfor').on('keyup', function () {
         
        var valor = $(this).val();
        var bnsFor = CalculoBonus(valor)
        $("#lblbfor").val(bnsFor)
        console.log(bnsFor)
    });
    $('#lblcon').on('keyup', function () {
         
        var valor = $(this).val();
        var bnscon = CalculoBonus(valor)
        $("#lblbcon").val(bnscon)
        console.log(bnscon)
    });
    $('#lbldes').on('keyup', function () {
         
        var valor = $(this).val();
        var bnsdes = CalculoBonus(valor)
        $("#lblbdes").val(bnsdes)
        console.log(bnsdes)
    });
    $('#lblvel').on('keyup', function () {
         
        var valor = $(this).val();
        var bnsvel = CalculoBonus(valor)
        $("#lblbvel").val(bnsvel)
        console.log(bnsvel)
    });
    //Mentais
    $('#lblint').on('keyup', function () {
         
        var valor = $(this).val();
        var bnsint = CalculoBonus(valor)
        $("#lblbint").val(bnsint)
        console.log(bnsint)
    });
    $('#lblsab').on('keyup', function () {
         
        var valor = $(this).val();
        var bnssab = CalculoBonus(valor)
        $("#lblbsab").val(bnssab)
        console.log(bnssab)
    });
    $('#lblrac').on('keyup', function () {
         
        var valor = $(this).val();
        var bnsrac = CalculoBonus(valor)
        $("#lblbrac").val(bnsrac)
        console.log(bnsrac)
    });
    $('#lblper').on('keyup', function () {
         
        var valor = $(this).val();
        var bnsper = CalculoBonus(valor)
        $("#lblbper").val(bnsper)
        console.log(bnsper)
    });
    //Sociais
    $('#lblcom').on('keyup', function () {
         
        var valor = $(this).val();
        var bnscom = CalculoBonus(valor)
        $("#lblbcom").val(bnscom)
        console.log(bnscom)
    });
    $('#lblcar').on('keyup', function () {
         
        var valor = $(this).val();
        var bnscar = CalculoBonus(valor)
        $("#lblbcar").val(bnscar)
        console.log(bnscar)
    });
    $('#lblaut').on('keyup', function () {
         
        var valor = $(this).val();
        var bnsaut = CalculoBonus(valor)
        $("#lblbaut").val(bnsaut)
        console.log(bnsaut)
    });
    $('#lblapa').on('keyup', function () {
         
        var valor = $(this).val();
        var bnsapa = CalculoBonus(valor)
        $("#lblbapa").val(bnsapa)
        console.log(bnsapa)
    });
});

function CalculoBonus(string)
{
    switch(string)
    {
        case "0":
            return "-5"
            break
        case "1": 
        case "2":
            return "-4"
            break
        case "3": 
        case "4":
            return "-3"
            break
        case "5": 
        case "6":
            return "-2"
            break
        case "7":
        case "8":
            return "-1"
            break
        case "9":
        case "10":
            return "0"
            break
        case "11":
        case "12":
            return "+1"
            break
        case "13":
        case "14":
            return "+2"
            break
        case "15":
        case "16":
            return "+3"
            break
        case "17":
        case "18":
            return "+4"
            break
        case "19":
        case "20":
            return "+5"
            break
        default:
            return "Numero Invalido"
    }
}

    


