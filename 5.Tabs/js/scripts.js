function tabs() {
	/*
	[data-tabs]
	ul
		li
	ul
		li
	*/
	let elems = document.querySelectorAll('[data-tabs]');
	if (!elems || elems.length == 0) return;

	elems.forEach((tab) => {
		function clear(listElem) {
			listElem.forEach((item) => {
				item.classList.remove('active');
			});
		};

		function active(item, index) {
			clear(tabsElems);
			clear(contentElems);

			item.classList.add('active');
			contentElems[index].classList.add('active')
		};

		let tabsElems = tab.querySelectorAll('ul:first-child > li');
		let contentElems = tab.querySelectorAll('ul:last-child > li');

		if (!tabsElems || tabsElems.length == 0 || !contentElems || contentElems == 0 || tabsElems.length != contentElems.length) return;

		tabsElems.forEach((item, index) => {
			item.addEventListener('click', () => {
				active(item, index);
			});
		});
	});
};


window.addEventListener('load', () => {
	tabs();
});



/*
1. делаем структуру и дабавляем пустой data-tabs для инициализации наших табов
2. ищем все data-tabs и  cортируем каждый
3. теперь нужно найти группу ли в item  и ли в content
4. перебираем item группу и ставим клик на каждую li
5. нужно забрать еще индекс, что бы связать контент, для этого параметр индекс вводим
6. ставим эктив при клике на айтем
7. ставим эктив при клике на контент при помощи индекса
8. создаем функцию очистки для очистки класса эктив для итем и контента(создаем функцию внутри elems.forEach из-за области видимости)
9. при клике запускаем очистку
10. модернизируем функцию
11. создаем функцию актвация и переносим в нее все что есть, после клика
12. добавляеем в параметры функции эктив (item, index) из-за области видимости
13. в функции очистка у нас повторяються 2 действия, создаем параметр какой-нибудь а для вызова создаем 2 clear(tabsElems); clear(contentElems);
*/
