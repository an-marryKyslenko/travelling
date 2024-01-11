import flatpickr from "flatpickr";

flatpickr(".flatpickr ", {
	enableTime: true,
	altInput: true,
   altFormat: " J M Y",
	dateFormat: "Y-m-d",
	minDate: "today"
})