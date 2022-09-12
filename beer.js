

$(function(){
  
  class Seletor {
    constructor(conteudo) {
      let ct = conteudo;
      this.elemento = function () {
        return document.querySelector(ct);
      };
    }
  }


let lista = new Seletor(".listagem");
let adicionado = new Seletor(".adicionado");

lista.elemento(".listagem").onchange = function(){
  let campo_selecionado = document.querySelector(".listagem");
  let indice = campo_selecionado.options.selectedIndex;
  let valor = campo_selecionado[indice].innerHTML;

  var elemento_quantidade = adicionado.elemento(".adicionado")
  var enchendo = document.createElement('div');
  var p1 = document.createElement('p');
  p1.setAttribute('id','preparando');
  enchendo.setAttribute('class','meucopo tamanho');
  enchendo.appendChild(p1);
 elemento_quantidade.appendChild(enchendo);

$(".tam div ").click(function(){
  $(this).parent().children("div").removeClass('m');
   $(this).addClass('m');
  $(".tamanho").animate({
    width: '100%',
    height: '100%',
    borderRadius: "5%",},5000);
        });
 }

 




let cidade = "Chapada dos Guimarães";
let chave =  "---------------------";
let api = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&lang=pt_br`
    $.ajax({
     url:api,
     dataType : "json",
     success : function(data){
       let tempo_atual = (data.main.temp - 273.15).toFixed(.1);
       let =cidade =$("#cidade").html(data.name +" <h2>clima <h/>"+tempo_atual+ " °c ");

     },
     error: function(request){
      // console.log(request);
     }
   });


});



