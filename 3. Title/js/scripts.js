function title() {
	let create = (value) => {
		if (!value) return;

		let elem = document.createElement('div');
		elem.classList.add('title');
		elem.innerHTML = value;
		elem.style = `display: inline-block; padding: 2px 8px; border-radius: 5px; background-color: rgba(255, 247, 177, .8); box-shadow: 0 2px 5px #999; font-size: 12px; color: #000; position: absolute; top: 0; left: 0; z-index: 999;`;

		return elem;
	};

	let clear = () => {
		let elems = document.querySelectorAll('.title');
		elems.forEach(elem => elem.remove());
	};

	let setPosition = (x, y) => {
		x = x + 20;
		y = y + 20;

		elemTitle.style.top = `${y}px`;
		elemTitle.style.left = `${x}px`;
	};

	let enter = (event) => {
		clear();

			valueTmp = event.target.title;

			elemTitle = create(valueTmp);

			if (!elemTitle) return;

			event.target.removeAttribute('title');
			setPosition(event.x, event.y);

			document.body.append(elemTitle);
	};

	let move = (event) => {
		setPosition(event.x, event.y);
	};

	let leave = (event) => {
		event.target.title = valueTmp;

		clear();
	};

	let titleElems = document.querySelectorAll('[title]');
	if (!titleElems || titleElems.length == 0) return;

	let valueTmp = null;
	let elemTitle = null;

	titleElems.forEach((elem) => {
		elem.addEventListener('mouseenter', enter);
		elem.addEventListener('mousemove', move);
		elem.addEventListener('mouseleave', leave);
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