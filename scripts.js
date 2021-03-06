function addURL() {
	var urlFocus = document.querySelector('#input-url');
	urlFocus.value = 'http://';
}

function enableButton() {
	var formValidity = document.querySelector('#input-form').checkValidity();
	if (formValidity === true) {
		document.querySelector('#input-submit').disabled = false
	} else if (formValidity === false) {
		document.querySelector('#input-submit').disabled = true
	};
}

function fillCard(bookmarkCardObject) {
	var title = document.querySelector('#input-title');
	var url = document.querySelector('#input-url');
	var bookmarkTitle = bookmarkCardObject.querySelector('.bookmark-title');
	var bookmarkURL = bookmarkCardObject.querySelector('.bookmark-url');
	bookmarkTitle.innerText = title.value;
	bookmarkURL.innerHTML = url.value;
	bookmarkURL.setAttribute('href', url.value);
}

function newCard() {
	var section = document.querySelector('#right');
	var left = document.querySelector('.left');
	var homestar = document.querySelector('.homestar');
	var counterTable = document.querySelector('.card-count-display');
	var bookmarkCard = document.createElement('article');
	var clearReadButton = document.querySelector('.clear-read-button');
	bookmarkCard.classList.add('bookmark-card')
	bookmarkCard.style.setProperty('display', 'block')
	bookmarkCard.innerHTML = document.querySelector('.bookmark-card').innerHTML;
	fillCard(bookmarkCard);
	counterTable.classList.remove('card-count-display-onload');
	clearReadButton.classList.remove('clear-read-button-onload');
	homestar.classList.remove('homestar-onload');
	left.classList.remove('left-onload');
	section.appendChild(bookmarkCard);
	if (document.querySelectorAll('.bookmark-card').length < 3) {
		setTimeout(function() {
			if (document.querySelectorAll('.bookmark-card').length > 2) {
				setTimeout(function() {
					bookmarkCard.classList.add('bookmark-fade');
				}, 10)
			} else {
				section.classList.add('bookmark-fade', 'height-adjust');
				setTimeout(function() {
					bookmarkCard.classList.add('bookmark-fade');
				}, 200)
			}
		}, 500)
	} else {
		if (document.querySelectorAll('.bookmark-card').length > 2) {
			setTimeout(function() {
				bookmarkCard.classList.add('bookmark-fade');
			}, 10)
		} else {
			section.classList.add('bookmark-fade', 'height-adjust');
			setTimeout(function() {
				bookmarkCard.classList.add('bookmark-fade');
			}, 200)
		}
	}
}

function clearFields() {
	document.querySelector('#input-title').value = '';
	document.querySelector('#input-url').value = '';
}

function cardCountDisplay() {
	var numTotalCards = document.querySelectorAll('.bookmark-card').length - 1;
	var numReadCards = document.querySelectorAll('.read').length;
	var numUnreadCards = numTotalCards - numReadCards;
	var homestar = document.querySelector('.homestar');
	var cardCountDisplay = document.createElement('table');
	cardCountDisplay.innerHTML = document.querySelector('.card-count-display');
	updateCardCount(numTotalCards, numReadCards, numUnreadCards);
}

function updateCardCount(total, read, unread) {
	document.querySelector('.total-value').innerText = total;
	document.querySelector('.read-value').innerText = read;
	document.querySelector('.unread-value').innerText = unread;
}

function clearReadBookmarks(event) {
	var readBookmarks = document.querySelectorAll('.read');
		for (var i = 0; i < readBookmarks.length; i++) {
			readBookmarks[i].classList.remove('bookmark-fade');
		}
	setTimeout(function() {
		for (var i = 0; i < readBookmarks.length; i++) {
			readBookmarks[i].remove();
			cardCountDisplay();
			backToOnload();
		}
	}, 800);
}

function backToOnload() {
	var section = document.querySelector('#right');
	var left = document.querySelector('.left');
	var homestar = document.querySelector('.homestar');
	var counterTable = document.querySelector('.card-count-display');
	var clearReadButton = document.querySelector('.clear-read-button');
	if (document.querySelectorAll('.bookmark-card').length < 2) {
		homestar.classList.add('homestar-onload');
		left.classList.add('left-onload');
		counterTable.classList.add('card-count-display-onload');
		clearReadButton.classList.add('clear-read-button-onload');
		section.classList.remove('bookmark-fade', 'height-adjust');
	}
}

document.querySelector('#input-form').addEventListener('input', function() {
	enableButton();
});

document.querySelector('#input-form').addEventListener('submit', function(e) {
	e.preventDefault();
	newCard();
	clearFields();
	enableButton();
	cardCountDisplay();
});

document.querySelector('#right').addEventListener('click', function(event) {
	var section = document.querySelector('#right');
	var left = document.querySelector('.left');
	var homestar = document.querySelector('.homestar');
	var counterTable = document.querySelector('.card-count-display');
	var clearReadButton = document.querySelector('.clear-read-button');
	if (event.target.matches('h5.delete-button')) {
		event.target.parentNode.classList.remove('bookmark-fade');
		setTimeout(function() {
			event.target.parentNode.remove();
			cardCountDisplay();
			backToOnload();
		}, 800)
	}
	if (event.target.matches('h5.read-button')) {
		event.target.parentNode.classList.toggle('read');
		event.target.classList.toggle('read-button-clicked');
	}
	cardCountDisplay();
})

document.querySelector('.clear-read-button').addEventListener('click', function() {
	clearReadBookmarks();
});

document.querySelector('#input-url').addEventListener('focus', function() {
	addURL();
})
