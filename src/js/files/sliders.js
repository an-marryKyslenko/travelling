/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, { Navigation,Pagination } from 'swiper';
/*
Основні модулі слайдера:
  Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
// import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
import 'swiper/css';

let windowHeight = window.innerHeight;
// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.fullscreen__swiper')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		const sliderFull = new Swiper('.fullscreen__swiper', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation,Pagination],
			// observer: true,
			// observeParents: true,
			
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,
			// direction: "vertical",


			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			preloadImages: false,
			lazy: true,

			/*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагінація
			
			pagination: {
				el: '.fullscreen__pagination',
				clickable: true,
			},
			

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.navig__button-prev',
				nextEl: '.navig__button-next',
			},
			
			// Брейкпоінти
			breakpoints: {
				
				720: {
					slidesPerView: 1,
				}
			},
		});
	}
	if (document.querySelector('.popular__swiper')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		const popularSwiper = new Swiper('.popular__swiper', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation],
			observer: true,
			observeParents: true,
			watchSlidesProgress: true,

			// slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 20,
			speed: 500,

			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			// preloadImages: false,
			// lazy: true,

		
			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.pop-prev',
				nextEl: '.pop-next',
			},
			
			// Брейкпоінти
			breakpoints: {
				
				768: {
					slidesPerView: 3,
					breakpoints: 30,
				}
			},
			
		});
	}
	if (document.querySelector('.offer__swiper')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		const offerSwiper = new Swiper('.offer__swiper', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation],
			observer: true,
			observeParents: true,
			watchSlidesProgress: true,
			
			slidesPerView: 1,
			// slidesPerGroup: 2,
			spaceBetween: 20,
			speed: 500,
			
			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			// preloadImages: false,
			// lazy: true,
			
			
			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.offer-prev',
				nextEl: '.offer-next',
			},
			
			// Брейкпоінти
			breakpoints: {
				
				768: {
					slidesPerView: 2,
					breakpoints: 30,
				},
				1020:{
					slidesPerView: 3,
				}
			},
			
		});
	}
	if (document.querySelector('.swiper-trip')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		const tripSwiper = new Swiper('.swiper-trip', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			observer: true,
			observeParents: true,
			// watchSlidesProgress: true,
			
			slidesPerView: 1,
			// autoHeight: true,
			watchOverflow: true,
			// slidesPerGroup: 2,
			spaceBetween: 0,
			speed: 500,
			
			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			// preloadImages: false,
			// lazy: true,
			
			// Брейкпоінти
			breakpoints: {
				
				768: {
					slidesPerView: 2,
					spaceBetween:32,
				},
				1152:{
					slidesPerView: 3,
					spaceBetween:32,
				},
				
			},
			
		});
	}
	if (document.querySelector('.gallery__collection')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		const gallerySwiper = new Swiper('.gallery__collection', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation],
			observer: true,
			observeParents: true,
			watchSlidesProgress: true,

			slidesPerView: 1,
			// slidesPerGroup: 4,
			spaceBetween: 32,		
			// watchOverflow: true,

			speed: 500,
	
			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			// preloadImages: false,
			// lazy: true,
	
		
			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.gallery-prev',
				nextEl: '.gallery-next',
			},
			
			// Брейкпоінти
			breakpoints: {
				
				768: {
					slidesPerView: 4,
					spaceBetween: 32,
				}
			},
			
		});
	}
	if (document.querySelector('.exper-container__swiper')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		const experiencesSwiper = new Swiper('.exper-container__swiper', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation],
			observer: true,
			observeParents: true,
			// watchSlidesProgress: true,
			
			slidesPerView: 1,
			// autoHeight: true,
			// slidesPerGroup: 2,
			spaceBetween: 30,
			speed: 500,
			
			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.ex-prev',
				nextEl: '.ex-next',
			},
			//touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			// preloadImages: false,
			// lazy: true,
			
			// Брейкпоінти
			breakpoints: {
				
				768: {
					slidesPerView: 2,
					spaceBetween:32,
				},
				// 1152:{
				// 	slidesPerView: 3,
				// 	spaceBetween:32,
				// },
				
			},
			
		});
		
	}
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.fullscrin__swiper');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				slidesPerView: 1,
				freeMode: {
					enabled: true,
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	// initSlidersScroll();
});
