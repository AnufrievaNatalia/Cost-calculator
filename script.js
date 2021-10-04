function raschitat() {
material  = document.getElementById('material').value;
switch (material) {
   case "Эластик":
      cena = 2000;
      break;
   case "Нубук":
      cena = 2400;
      break;  
    case "Солт":
      cena = 3200;
      break; 
    case "Кракелюр":
      cena = 3600;
      break;
    case "Блеск":
      cena = 3600;
      break;
    case "Перламутр":
      cena = 4200;
      break;
}   
shirina  = document.getElementById('shirina').value;
dlina  = document.getElementById('dlina').value;
if(shirina == ""){
    document.getElementById('ploschad').innerHTML.hidden = true;
} else if(dlina == ""){
    document.getElementById('ploschad').innerHTML.hidden = true;
} else {
ploschad = parseFloat (shirina)* parseFloat (dlina)*0.0001;
document.getElementById('ploschad').innerHTML = "Площадь: "+ ( Math.floor(ploschad * 100) / 100 ) +" кв. м.";
stoimost = ploschad*cena;
document.getElementById('stoimost').innerHTML = "Стоимость: "+ ( Math.floor(stoimost * 100) / 100 ) +" р.";
};
};