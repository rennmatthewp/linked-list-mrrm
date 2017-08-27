//Functions

function fillCard(bookmarkCardObject) {
	// event.preventDefault();
	var title = document.querySelector('#input-title');
	var url = document.querySelector('#input-url');
	var bookmarkTitle = bookmarkCardObject.querySelector('.bookmark-title');
	var bookmarkURL = bookmarkCardObject.querySelector('.bookmark-url');

	bookmarkTitle.innerText = title.value;
	bookmarkURL.innerHTML = url.value;
	bookmarkURL.setAttribute('href', url.value)
// 	if (bookmarkURL.href.startsWith('http') === true) {
// 		bookmarkURL.href = url.value
// 	} else {bookmarkURL.href = 'http://' + url.value;
// };
// console.log(bookmarkURL.href);
}

function newCard() {
	var section = document.querySelector('#right')
	var bookmarkCard = document.createElement('article');
	bookmarkCard.classList.add('bookmark-card')
	bookmarkCard.style.setProperty('display', 'block')
	bookmarkCard.innerHTML = document.querySelector('.bookmark-card').innerHTML;
	fillCard(bookmarkCard);
	section.appendChild(bookmarkCard);
}

function enableButton() {
	var formValidity = document.querySelector('#input-form').checkValidity();
	if (formValidity === true) {
		document.querySelector('#input-submit').disabled = false
	} else if (formValidity === false) {
		document.querySelector('#input-submit').disabled = true
	};
}

function clearFields() {
	document.querySelector('#input-title').value = '';
	document.querySelector('#input-url').value = '';
}

//Event Listeners

document.querySelector('#input-form').addEventListener('input', function() {
	enableButton();
});

document.querySelector('#input-form').addEventListener('submit', function(e) {
	e.preventDefault();
	newCard();
	clearFields();
	enableButton();
});
