//Functions

function fillCard(bookmarkCardObject) {
	var title = document.querySelector('#input-title');
	var url = document.querySelector('#input-url');
	var bookmarkTitle = bookmarkCardObject.querySelector('.bookmark-title');
	var bookmarkURL = bookmarkCardObject.querySelector('.bookmark-url');
	bookmarkTitle.innerText = title.value;
	bookmarkURL.innerHTML = url.value;
	bookmarkURL.setAttribute('href', url.value)
}

function newCard() {
	var section = document.querySelector('#right');
	var left = document.querySelector('.left');
	var homestar = document.querySelector('.homestar');
	var bookmarkCard = document.createElement('article');
	bookmarkCard.classList.add('bookmark-card')
	bookmarkCard.style.setProperty('display', 'block')
	bookmarkCard.innerHTML = document.querySelector('.bookmark-card').innerHTML;
	fillCard(bookmarkCard);


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
		section.classList.add('bookmark-fade');
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
		section.classList.add('bookmark-fade');
		setTimeout(function() {
			bookmarkCard.classList.add('bookmark-fade');

		}, 200)
	}
	}

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

// function cardCount(display) {
// 	var numTotalCards = document.querySelectorAll('.bookmark-card').length;
// 	var numReadCards = document.querySelectorAll('.read').length;
// 	var numUnreadCards = numTotalCards - numReadCards;
// }

function cardCountDisplay() {
	var numTotalCards = document.querySelectorAll('.bookmark-card').length - 1;
	var numReadCards = document.querySelectorAll('.read').length;
	var numUnreadCards = numTotalCards - numReadCards -1;
	var homestar = document.querySelector('.homestar');
	var cardCountDisplay = document.createElement('table')
	cardCountDisplay.innerHTML = document.querySelector('.card-count-display')
	
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
	cardCountDisplay();
});




document.querySelector('#right').addEventListener('click', function(event) {
	var section = document.querySelector('#right');
	var left = document.querySelector('.left');
	var homestar = document.querySelector('.homestar');

	if (event.target.matches('h5.delete-button')) {

		event.target.parentNode.classList.remove('bookmark-fade');
		setTimeout(function() {
			event.target.parentNode.remove();
			if (document.querySelectorAll('.bookmark-card').length < 2) {
				section.classList.remove('bookmark-fade');

				homestar.classList.add('homestar-onload');
				left.classList.add('left-onload');


				cardCountDisplay();
			}
		}, 800)
	}

	if (event.target.matches('h5.read-button')) {
		event.target.parentNode.classList.toggle('read');
		event.target.classList.toggle('read-button-clicked');
	}
	cardCountDisplay();
})
