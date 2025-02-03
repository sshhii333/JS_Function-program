function accordion() {
	/*
		[data-accordion]
		ul
			li
				h3
				div
	*/

	let accordion = () => {
		let setAccordions = document.querySelectorAll('[data-accordion]');
		if (!setAccordions || setAccordions.length == 0) return;

		let closeAll = (accordion) => {
			if (!accordion) return;

			let liElems = accordion.querySelectorAll('ul li');
			if (!liElems || liElems.length == 0) return;

			liElems.forEach((li) => {
				li.classList.remove('active');
			});
		};

		let active = (e) => {
			let perentTitle = e.target.closest('li');

			if (!perentTitle.classList.contains('active')) {
				closeAll(perentTitle.closest('[data-accordion]'));
			};

			perentTitle.classList.toggle('active');
		};

		setAccordions.forEach((elemAccordion) => {
			let titles = elemAccordion.querySelectorAll('ul li h3');
			if (!titles) return;

			titles.forEach((elemTitles) => {
				elemTitles.addEventListener('click', active);
			});
		});
	};


	window.addEventListener('load', function () {

		accordion();

	});

/*
1. прописываем для аккордиона в html метку для поиска data-accordion
2. ищем все с метками data-accordion
3. перебираем их
4. ищем в нвшем аккордионе h3 (title)
5. вешаем на ник событие клик
6. теперь надо найти ближайшего родителя и добавить ему класс актив, через тоггле
7. готово

8. хотим сделать, что-бы при нажатие на title, автоматом закрывались остальные открытуе title, кроме основного
9. делаем функцию closeAll(accordion)
10. ищем все li в параметре accordion, и для каждой отдельной удаляем клас active
11. вставляем после клика нашу функцию closeAll(elem); параметр elem = конкретный аккордион с которым сейчас взаимодействуем
12. чуть дорабатываем, сейчас все работает кроме того, что мы не можем закрыть текущую вкладку, для этого надо сделать проверку: если для Li нету класса active, то закрываем все вкладки, иначе создаем класс active(т.е мы нажали на загаловок и олдновременно удалились все active с других заголовков и только на нашем создался active) и вставить данную проверку, до создания класса active
*/