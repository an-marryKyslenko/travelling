/* Календар */

// Підключення функціоналу "Чертоги Фрілансера"
// Підключення списку активних модулів
import { flsModules } from "../modules.js";

// Підключення модуля
import datepicker from 'js-datepicker';

if (document.querySelector('[data-datepicker]')) {
	const options = {
					weekday: "short",
					year: "numeric",
					month: "short",
					day: "numeric",
				 }
	const pickerStart = datepicker('.inputs__date-one', {
		id:"date",
		
		// customDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"],
		// customMonths: ["Січ", "Лют", "Берез", "Квіт", "Трав", "Черв", "Лип", "Серп", "Верес", "Жовт", "Листоп", "Груд"],
		// overlayButton: 'Застосувати',
		// overlayPlaceholder: 'Рік (4 цифри)',
		// startDay: 1,
	
		formatter: (input, date, instance) => {
			const value = date.toLocaleDateString('en-GB',options)
			input.value = value
		},
		onSelect: function (input, instance, date) {

		}
	});
	const pickerEnd = datepicker('.inputs__date-two',{
		id: 'date',
		formatter: (input, date, instance) => {
			const value = date.toLocaleDateString('en-GB',options)
			input.value = value
		},
	})
	pickerStart.getRange();
	pickerEnd.getRange()
	flsModules.datepicker = pickerStart;
	flsModules.datepicker = pickerEnd;
}
