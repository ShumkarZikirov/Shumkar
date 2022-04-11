function calcCartPriceAndDelivery() {
	const cartWrapper = document.querySelector('.corzina__main');
	const priceElements = cartWrapper.querySelectorAll('.cor__price');
	const totalPriceEl = document.querySelector('.sum__money');


	// Общая стоимость товаров
	let priceTotal = 0;

	// Обходим все блоки с ценами в корзине
	priceElements.forEach(function (item) {
		// Добавляем стоимость товара в общую стоимость (кол-во * цену)
		priceTotal += parseInt(item.innerText)
	});

	// Отображаем цену на странице
	totalPriceEl.innerText = priceTotal;
}
