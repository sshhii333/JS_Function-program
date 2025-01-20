function contentFilter(id) {
	/*
	#id
			tag
					item[data-filter="value"]
			tag
					item[data-filter="value"]
	*/

	if (!id) return;

	let elem = document.querySelector(`#${id}`);
	if (!elem) return;

	let btns = elem.children[0].children;
	let items = elem.children[1].children;

	if (!btns || btns.length == 0 || !items || items.length == 0) return;

	function clear() {
		let btnsTmp = [...btns]; // 2 способ перебора массива
		let itemsTmp = [...items];

		btnsTmp.forEach((btn) => {
			btn.classList.remove('active');
		});

		itemsTmp.forEach((item) => {
			item.classList.remove('hide');
		});
	};

	function show(value) {
		if(!value) return;

		for (let item of items) { //3 способ перебора
			if (item.dataset.filter != value) item.classList.add('hide');
		};
	};

	Array.from(btns).forEach((btn) => { //1 способ перебора
		btn.addEventListener('click', () => {
			clear();

			let value = btn.dataset.filter;
			show(value);

			btn.classList.add('active');
		});
	});

};


window.addEventListener('load', function () {

	contentFilter("gallery001");

});


/*
1.делаем структуру
2. расставляем data-filter (и как обычно data маяк можно поставить, но будем через кастыли)кнопкам и листу
2.1 у  одной кнопки недолжно быть data-filter
2.3  и на ней должен висетьт эктив
3. ставим маяк например через ид (или как обычно можно data)для нашей галереи
4. ищем нашу галерею
5. ищем кнопки
6. ищем itms
7. на кнопки ставим клик и забераем значение фильтра
8. добавляем на клик класс эктив
9. делаем функцию очистки и удаляем класс эктив + класс хайд
10. делаем функцию показать(значение), и добавляем класс скрыть изображение, если значение не совпадает
11. Добавляем условие if(!value) return; в показать, чтобы работала кнопка all
*/