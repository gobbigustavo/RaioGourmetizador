function gourmetize() {    
    var arrayGourmertiza1 = ["Paleta de ", "Costeleta de ", "Risotto de ", "Chutney de ", "Fino Corte de ", "Patê de ", "Carpaccio de ", "Filets de ", "Medalhão de ", "Petit Gateau de ", "Creme de ", "Ravióli de ", "Suflê de "];
    var arrayGourmertiza2 = [" banhado(a) a", " grelhado(a) com", " gratinado(a) em", " marinado(a) em", " salpicado(a) com", " flambado(a) em"];
    var arrayGourmertiza3 = [" trufas negras", " frutas frescas", " molho rosette", "molho branco", " molho de laranja", " molho de manga", "  redução de azeite basamico", " queijo brie" ];
	
    var element = document.getElementById("element").value;
    var rand1 = arrayGourmertiza1[Math.floor(Math.random() * arrayGourmertiza1.length)];    
    var rand2 = arrayGourmertiza2[Math.floor(Math.random() * arrayGourmertiza2.length)];    
    var rand3 = arrayGourmertiza3[Math.floor(Math.random() * arrayGourmertiza3.length)];    
    
    console.log(rand1 + element + rand2 + rand3);
	alert(rand1 + element + rand2 + rand3);
}