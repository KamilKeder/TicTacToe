var wynik_gracz = document.querySelector("#wynik_gracz");
var wynik_komputer = document.querySelector("#wynik_komputer");
var button_start = document.querySelector("#button_start");
var button_reset = document.querySelector("#button_reset");
var buttons = document.querySelectorAll(".button")
var p_komunikat = document.querySelector("#p_komunikat");
var gra = 0;
var button_1 = document.querySelector("#button_1");
var button_2 = document.querySelector("#button_2");
var button_3 = document.querySelector("#button_3");

var button_4 = document.querySelector("#button_4");
var button_5 = document.querySelector("#button_5");
var button_6 = document.querySelector("#button_6");

var button_7 = document.querySelector("#button_7");
var button_8 = document.querySelector("#button_8");
var button_9 = document.querySelector("#button_9");

function sprawdzenie(){
	if(
		button_1.value == "O" &
		button_2.value == "O" &
		button_3.value == "O" 
		||
		button_1.value == "O" &
		button_4.value == "O" &
		button_7.value == "O" 
		||
		button_1.value == "O" &
		button_5.value == "O" &
		button_9.value == "O" 
		||
		button_2.value == "O" &
		button_5.value == "O" &
		button_8.value == "O" 
		||
		button_3.value == "O" &
		button_6.value == "O" &
		button_9.value == "O" 
		||
		button_3.value == "O" &
		button_5.value == "O" &
		button_7.value == "O" 
		||
		button_7.value == "O" &
		button_8.value == "O" &
		button_9.value == "O" 
		||
		button_4.value == "O" &
		button_5.value == "O" &
		button_6.value == "O" )
	{
		p_komunikat.innerHTML = "Wygrywa Gracz";
		gra = 1;
		[].forEach.call(buttons, function(e)
		{
		e.disabled = true;
		})
		setTimeout(() => {
		[].forEach.call(buttons, function(e)
		{
		e.style.backgroundImage = "";
		e.value = "";
		e.disabled = false;
		})
		},1000);

		var zmienna = Number(wynik_gracz.innerHTML)
		wynik_gracz.innerHTML = zmienna+1
	}
	else if(
		button_1.value == "X"&
		button_2.value == "X"&
		button_3.value == "X"
		||
		button_1.value == "X"&
		button_4.value == "X"&
		button_7.value == "X"
		||
		button_1.value == "X"&
		button_5.value == "X"&
		button_9.value == "X"
		||
		button_2.value == "X"&
		button_5.value == "X"&
		button_8.value == "X"
		||
		button_3.value == "X"&
		button_6.value == "X"&
		button_9.value == "X"
		||
		button_3.value == "X"&
		button_5.value == "X"&
		button_7.value == "X"
		||
		button_7.value == "X"&
		button_8.value == "X"&
		button_9.value == "X"
		||
		button_4.value == "X"&
		button_5.value == "X"&
		button_6.value == "X"

	){
		p_komunikat.innerHTML = "Wygrywa Komputer";
	gra = 1;
	[].forEach.call(buttons, function(e)
		{
		e.disabled = true;
		})
		setTimeout(() => {
		[].forEach.call(buttons, function(e)
		{
		e.style.backgroundImage = "";
		e.value = "";
		e.disabled = false;
		})
		},1000);
		var zmienna = Number(wynik_komputer.innerHTML)
		wynik_komputer.innerHTML = zmienna+1
	}
	else if(
		button_1.disabled == true &
		button_2.disabled == true &
		button_3.disabled == true &
		button_4.disabled == true &
		button_5.disabled == true &
		button_6.disabled == true &
		button_7.disabled == true &
		button_8.disabled == true &
		button_9.disabled == true
		){
		p_komunikat.innerHTML = "Remis";
	gra = 1;
		setTimeout(() => {
		[].forEach.call(buttons, function(e)
		{
		e.style.backgroundImage = "";
		e.value = "";
		e.disabled = false;

		})
		},1000);
	}
}

for (let i = 0; i < buttons.length; i++)
{
     buttons[i].addEventListener("click", function()
     {
     	[].forEach.call(buttons, function(e)
		{
			e.classList.add("blokada");
		})
 
      buttons[i].style.backgroundImage = "url('img/O.png')";
      buttons[i].value = "O";
      buttons[i].disabled = true;
      p_komunikat.innerHTML = ""
      sprawdzenie();
      if(gra == 0){
      komputer();
      
 		}
 		else{
 			gra = 0;
 			setTimeout(function(){
 				komputer();
 			},1010)

 		}
 	setTimeout(function(){
     		[].forEach.call(buttons, function(e)
		{
			e.classList.remove("blokada");
		})
     	},300)
     }

     );
 }
function komputer(){
var random = Math.floor(Math.random()*9+1);
var zmienna1 = document.querySelector("#button_"+random);
setTimeout(function(){
if (zmienna1.value == "O" || zmienna1.value == "X")
{
komputer();
}
else{
zmienna1.style.backgroundImage = "url('img/X.png')";
zmienna1.value = "X";
zmienna1.disabled = true;
      sprawdzenie();

}
},10)
}

window.onload = function(){
wynik_gracz.innerHTML = 0;
wynik_komputer.innerHTML = 0;


}
button_reset.addEventListener("click",reset);
function reset(){
	[].forEach.call(buttons, function(e){
		e.style.backgroundImage = ""
		e.value = "";
		e.disabled = false;
	})
	wynik_gracz.innerHTML = 0;
	wynik_komputer.innerHTML = 0;

}