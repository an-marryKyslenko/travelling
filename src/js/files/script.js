// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


function showTripBlock(){
	const itemsTrip = document.querySelector('.swiper-trip__items');

itemsTrip.addEventListener("mouseover", function(event){
	let item = event.target.closest('.item-trip');
	if(item){
		item.classList.add('_active')
	}
	
})
itemsTrip.addEventListener("mouseout", function(event){
	let item = event.target.closest('.item-trip');
	if(item){
		item.classList.remove('_active')
	}
	
})
}
showTripBlock()

