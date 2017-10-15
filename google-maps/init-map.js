/*
  Inicialização do mapa. O mapa deve inicializar proximo à posição atual do usuário.
  Para tanto, será necessário chamar a função posicaoAtual e usar o retorno da função
  para colocar o ponto no mapa. Verifique o link abaixo para mais informações:
  https://developers.google.com/maps/documentation/javascript/adding-a-google-map?hl=pt-br
*/
var map;
var directionsDisplay;
var directionsService;

function initMap() {
    
    directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer();
    // insira seu codigo abaixo.
    
    // nao remova a linha abaixo.
    directionsDisplay.setMap(map);
}