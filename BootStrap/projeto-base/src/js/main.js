var idBtn
var aux
$(document).ready(function () {
    //Fisicos
    $('.calc-bonus').on('keyup', function () {
         
        let valor = $(this).val();
        if (valor != ""){ 
            let bnsFor = CalculoBonus(valor)
            let to = $(this).data('bonus');
            console.log(to);
            
            $("#"+to).val(bnsFor)
            console.log(bnsFor);
        }else{
            let to = $(this).data('bonus');
            $("#"+to).val("");
            }
    });

    $(".botao-bio").click(function(){
        
        
        aux = $(this).attr("id"); 
        aux = aux.toString()
        console.log(aux);
        idBtn = ("#" + aux)
        console.log(idBtn);
       
        if(idBtn == "#btn-inventorio")
        {
            $("#divinv").fadeIn('fast');
            $("#divhab").hide();
            $("#divmag").hide();
            $("#divant").hide();
        }
        else if(idBtn == "#btn-habilidades")
        {
            $("#divhab").fadeIn('fast');
            $("#divinv").hide();
            $("#divmag").hide();
            $("#divant").hide();
        }
        else if (idBtn == "#btn-magias")
        {
            $("#divmag").fadeIn('fast');
            $("#divinv").hide();
            $("#divhab").hide();
            $("#divant").hide();
        }
        else if (idBtn == "#btn-anotacoes")
        {
            $("#divant").fadeIn('fast');
            $("#divinv").hide();
            $("#divhab").hide();
            $("#divmag").hide();
        }
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
})