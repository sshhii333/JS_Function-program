function popup() {
	let elems = document.querySelectorAll('[data-popup]');

	if (!elems || elems.length == 0) return;

	function getContent(id, type, link) {
		if (!id && !type) return;

		let content = '';

		switch (type) {
			case 'youtube':
				if (!link) return;

				let reg = /(?:.+\/)(\w+)/i;
				let linkParse = link.match(reg);
				if (!linkParse || linkParse.length <= 1|| !linkParse[1]) return;

				let hash = linkParse[1] || '';
				content = `<iframe src="https://www.youtube.com/embed/${hash}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;

				break;
			case 'image':
				if (!link) return;
				content = `<img src="${link}" alt="#">`;
				break;
			default:
				let elem = document.querySelector(`#${id}`)
				content = elem.innerHTML;
				break;
		}

		return content;
	};

	function create(content) {
		if (!content) return;

		let mainElem = document.createElement('div');
		mainElem.classList.add('popup');

		let bgElem = document.createElement('div');
		bgElem.classList.add('popup__bg');

		let containerElem = document.createElement('div');
		containerElem.classList.add('popup__container');

		let btnContainer = document.createElement('div');
		btnContainer.classList.add('popup__btn-container');

		let contentElem = document.createElement('div');
		contentElem.classList.add('popup__content');

		let closeBtn = document.createElement('button');
		closeBtn.classList.add('popup__btn-close');

		closeBtn.textContent = '+';
		contentElem.innerHTML = content;

		mainElem.append(bgElem, containerElem);
		containerElem.append(btnContainer, contentElem);
		btnContainer.append(closeBtn);

		closeBtn.addEventListener('click', clear);
		bgElem.addEventListener('click', clear);
		btnContainer.addEventListener('click', clear);

		return mainElem;
	};

	function clear() {
		let elems = document.querySelectorAll('.popup');

		elems.forEach((elem) => {
			elem.remove();
		});
	};

	elems.forEach((elem) => {
		elem.addEventListener('click', (e) => {
			e.preventDefault();

			let id = elem.dataset.popupId;
			let type = elem.dataset.popupType;

			let link = elem.href;

			let mainElem = create(getContent(id, type, link));
			document.body.append(mainElem);
		});
	});
};

window.addEventListener('load', function () {
	popup();
});

/*
1.  подготавливаем структуру окна для формы и  обычного текста в html, назначаем им уникальный ид и скрываем их с помощью  style="display: none
2. для вызова данных структур, вешаем на соответствующий кнопки/span соответствующий data- (data-popup-id="ИДишник структуры") и еще один общий класс (data-popup), что-бы искать все попапы
3. создаем попап окно в которое будем выводить различные структуры (текст/форма/изображение/видио)
4. Ищем все data-popup, устанавливаем клик на них
4.1 чтобы понять что отображать нужно забрать индификатор в data-popup-id  и связвть его с контентом(структурой)
4.2 если нет содержимого, то и смысла окно попап создавать нету
4.3. Нужно создать функцию для получения контента getContent(),
4.4 она вызывается во время клика, и проверяет есть ли контент

5. по клику должно отобразится какой-то из контентов, внутри попап. выносим в отдельную функцию с параметром ИД
6. забрав ид нам нужно найти соответствующий контент для отображения структуры с таким же ИД. Ищим
7. нашли, нам теперь просто нужно забрать структуру окошка для отображения, забираем через inner html
8. возвращаем контент

9. теперь создаем структуру и выносим в функцию c параметром content
10. нужно отобразить теперь попап окно с контентом для этого create(getContent(elem.dataset.popupId)); отображаем на странице
10.1 возвращаем mainElem  и выносим его в клик let mainElem = create(getContent(id));
			document.body.append(mainElem);

11. создаем функцию удаления и очистки в одной функции
12. Ищем все поп-ап окна и удаляем их
13. запускаем функцию очистки на крестике и фоне попап окна, по клику, в разделе функции создания

14. делаем для картинок
15. добавляем в хтмл для картинок основных data-popup и вместо индификатора тип контента data-popup-type='image' (для картинок используем общий индификатор, а не идишник)
16. выше мы забирали контен по ИД, а теперь у нас нет ИД, а есть тип, а значит добавляем новый параметр в let mainElem = create(getContent(id, type)); предварительно забрав его let type = elem.dataset.popupType;

17. соответствено наш тип добавляем параметром function getContent(id, type)
18. доробатываем функцию выше добавляем swich
19. нам надо еще ссылку забрать на href для картинки, делаем тоже самое, что и для type.
20. делаем проверку и  забираем контент подставив в него нашу ссылку content = `<img src="${link}" alt="#">`;

21. Делаем для видио case
22. генерируем различные ссылки для ютюба и нас интересует значения после/ и до ? пишим регулярку
23. теперь при помощи match забираем массив в котором будет под 0 индексом ссылка до ?, а под 1 индекосм будет наш хэш, который идет после/ и до ?
24. выносим в отдельную переменную хэш = linkParse[1]
25. забираем с сайта youtube ссылку на видию с фреймом, удаляем все не нужное,
и подставляем наш хэш в данную ссылку после последднего/
*/