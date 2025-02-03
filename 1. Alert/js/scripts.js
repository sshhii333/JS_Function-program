/*
alert();
alert('Text')
alert('Text', 'error');
alert('Text', 'successful');
по клику;
*/

function alert(value, type) {
	let alertTimeout;
	let btnClose;
	let counter = 0;

	if (value) {
		showAlert(value, type);
	};

	function create(value, type) {
		let elem = document.createElement('div');
		elem.classList.add('alert');
		if (type) elem.classList.add(`alert-${type}`);

		let content = document.createElement('div');
		content.classList.add('alert__content');

		btnClose = document.createElement('button');
		btnClose.classList.add('alert__btn_close');

		content.innerHTML = value;
		btnClose.innerHTML = '+';

		elem.append(content, btnClose);

		return elem;
	};

	function clear() {
		let allElems = document.querySelectorAll('.alert');

		if (allElems && allElems.length > 0) {
			allElems.forEach((elem) => {
				elem.remove();
			});
		};
	};

	function close(elem) {
		if (elem) {
			alertTimeout = setTimeout(() => {
				elem.remove();
			}, 7000);

			btnClose.addEventListener('click', () => {
				elem.remove();
				clearTimeout(alertTimeout);
			});
		};
	};

	function showAlert(value, type) {
		clear();
		let elemAlert = create(value, type);
		document.body.append(elemAlert);
		close(elemAlert);
	}

	let allDataElems = document.querySelectorAll('[data-alert]');
	allDataElems.forEach((elem) => {
		elem.addEventListener('click', (event) => {
			let dataValue = elem.dataset.alert;
			let dataType = elem.dataset.alertType;

			if (elem.nodeName == "A") {
				counter++;
				if (counter == 1) event.preventDefault();
			};

			showAlert(dataValue, dataType);
		});
	});
};


window.addEventListener('load', function () {
	// alert('empore quidem, impedit officiis illum possimus ut ab esse ratione totam numquam. Sint quas labore tenetur, atque asperiores placeat corrupti quisquam natus quasi animi voluptatum unde similique voluptates ducimus consectetur.');
	// alert('empore quidem');
	// alert('Ошибка', 'error');
	alert();
	});

// 1. действие

// function alert(value) {
// 	if (!value) return;

// 	// убираем дублирование алерта
// 	let allElems = document.querySelectorAll('.alert');
// 	if (allElems && allElems.length > 0) {
// 		allElems.forEach((elem) => {
// 			elem.remove();
// 		});
// 	};

// 	let mainElem = document.createElement('div');
// 	mainElem.classList.add('alert');

// 	let contentElem = document.createElement('div');
// 	contentElem.classList.add('alert__content');

// 	let btnClose = document.createElement('button');
// 	btnClose.classList.add('alert__btn_close');

// 	contentElem.innerHTML = value;
// 	btnClose.textContent = '+';

// 	document.body.append(mainElem);
// 	mainElem.append(contentElem, btnClose);

// 	btnClose.addEventListener('click', () => {
// 	mainElem.remove();
// 	});
// };

// 2. действие добавление функций

// function alert(value) {
// 	if (!value) return;

// 	function create() {
// 		clear();
// 		let mainElem = document.createElement('div');
// 		mainElem.classList.add('alert');

// 		let contentElem = document.createElement('div');
// 		contentElem.classList.add('alert__content');

// 		let btnClose = document.createElement('button');
// 		btnClose.classList.add('alert__btn_close');

// 		contentElem.innerHTML = value;
// 		btnClose.textContent = '+';

// 		mainElem.append(contentElem, btnClose);

// 		btnClose.addEventListener('click', () => {
// 			close();
// 		});

// 		return  mainElem;
// 	};

// 	function close() {
// 		mainElem.remove();
// 	};

// 	function clear() {
// 		// убираем дублирование алерта
// 		let allElems = document.querySelectorAll('.alert');
// 		if (allElems && allElems.length > 0) {
// 			allElems.forEach((elem) => {
// 				elem.remove();
// 			});
// 		};
// 	};

// 	let mainElem = create();
// 	document.body.append(mainElem);
// };

// 3. добавление вызова алерта с разными цветами. добовляем класс вhtml  к алерту alert-successful/ alert-error/ alert__content

// function alert(value, type) {
// 	if (!value) return;

// 	function create() {
// 		clear();
// 		let mainElem = document.createElement('div');
// 		mainElem.classList.add('alert');

// 		if (type) mainElem.classList.add(`alert-${type}`);

// 		let contentElem = document.createElement('div');
// 		contentElem.classList.add('alert__content');

// 		let btnClose = document.createElement('button');
// 		btnClose.classList.add('alert__btn_close');

// 		contentElem.innerHTML = value;
// 		btnClose.textContent = '+';

// 		mainElem.append(contentElem, btnClose);

// 		btnClose.addEventListener('click', () => {
// 			close();
// 		});

// 		return  mainElem;
// 	};

// 	function close() {
// 		mainElem.remove();
// 	};

// 	function clear() {
// 		// убираем дублирование алерта
// 		let allElems = document.querySelectorAll('.alert');
// 		if (allElems && allElems.length > 0) {
// 			allElems.forEach((elem) => {
// 				elem.remove();
// 			});
// 		};
// 	};

// 	let mainElem = create();
// 	document.body.append(mainElem);
// };

// 4. алерт стандартный готов, теперь хотим создать алерт по клику на ссылку, на спан, кнопку, с разным текстом. в html добавляем на нужные ссылки, спан и т.д  добавляем data-alert c любым сообщением, + делаем data-alert-type, для смены цвета

// function alert(value, type) {
// 	let allDataElems = document.querySelectorAll('[data-alert]');

// 	if (allDataElems && allDataElems.length > 0) {
// 		allDataElems.forEach((elem) => {
// 			elem.addEventListener('click',(event) => {
// 				event.preventDefault();

// 				let value = elem.dataset.alert;

// 				// console.log(elem.dataset);
// 				// console.log(elem.dataset.alertType);

// 				let type = elem.dataset.alertType || '';
// 				alert(value, type);
// 			});
// 		});
// 	};


// 	if (!value) return;

// 	function create() {
// 		clear();
// 		let mainElem = document.createElement('div');
// 		mainElem.classList.add('alert');

// 		if (type) mainElem.classList.add(`alert-${type}`);

// 		let contentElem = document.createElement('div');
// 		contentElem.classList.add('alert__content');

// 		let btnClose = document.createElement('button');
// 		btnClose.classList.add('alert__btn_close');

// 		contentElem.innerHTML = value;
// 		btnClose.textContent = '+';

// 		mainElem.append(contentElem, btnClose);

// 		btnClose.addEventListener('click', () => {
// 			close();
// 		});

// 		return  mainElem;
// 	};

// 	function close() {
// 		mainElem.remove();
// 	};

// 	function clear() {
// 		// убираем дублирование алерта
// 		let allElems = document.querySelectorAll('.alert');
// 		if (allElems && allElems.length > 0) {
// 			allElems.forEach((elem) => {
// 				elem.remove();
// 			});
// 		};
// 	};

// 	let mainElem = create();
// 	document.body.append(mainElem);
// };



// window.addEventListener('load', function () {
// 	// alert('empore quidem, impedit officiis illum possimus ut ab esse ratione totam numquam. Sint quas labore tenetur, atque asperiores placeat corrupti quisquam natus quasi animi voluptatum unde similique voluptates ducimus consectetur.');
// 	// alert('Ghbvbv', 'error');
// 	// alert('Ghbvbv', 'successful');
// 	alert();
// });


