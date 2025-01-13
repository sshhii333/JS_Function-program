function title() {
	let elems = document.querySelectorAll('[title]');

	if (!elems || elems.length == 0) return;

	function create(value) {
		if (!value) return;

		let elem = document.createElement('div');
		elem.classList.add('title');
		elem.innerHTML = value;

		return elem;
	};

	function clear() {
		let elems = document.querySelectorAll('.title');
		elems.forEach((elem) => {
			elem.remove();
		});
	};

	elems.forEach((elem) => {
		let titleElem = '';

		elem.addEventListener('mouseenter', (event) => {
			let value = elem.title;

			titleElem = create(value);
			document.body.append(titleElem);

			titleElem.style.top = (event.pageY + 20) + "px";
			titleElem.style.left = (event.pageX + 20) + "px";

		});

		elem.addEventListener('mouseleave', () => {
			clear();
		});

		elem.addEventListener('mousemove', (event) => {
			titleElem.style.top = (event.pageY + 20) + "px";
			titleElem.style.left = (event.pageX + 20) + "px";
		});
	});

};

window.addEventListener('load', function () {
	title();
});


/*
Подсказка(движ за мышью)
1. создаем в HTML структур подсказки и добавляем ей атрибут title='text';
2. ищем все title, для каждого тайтла создаем событие mouseenter, mouseleave, mousemove
3. mouseenter - главное событие. забираем значение тайтла
4. создаем структуру в новой функции create(значение тайтла)
5. создаем функцию очистки повторений тайтла
6. очистку делаем, на событие mouseleave
7. в mouseenter и mousemove прописываем кординаты мыши ()
*/