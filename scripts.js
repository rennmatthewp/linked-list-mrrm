//Functions

function fillCard() {
	event.preventDefault();
	var title = document.querySelector('#input-title');
	var url = document.querySelector('#input-url');
	var bookmarkTitle = document.querySelector('.bookmark-title');
	var bookmarkURL = document.querySelector('.bookmark-url');

	bookmarkTitle.innerText = title.value;
	bookmarkURL.innerHTML = url.value;
	// bookmarkURL.setAttribute('href', 'http://' + url.value)
	if (bookmarkURL.href.startsWith('http') === true) {
		bookmarkURL.href = url.value
	} else {bookmarkURL.href = 'http://' + url.value;
};
console.log(bookmarkURL.href);
}

function newCard() {
	event.preventDefault();
	var section = document.querySelector('#right')
	var bookmarkCard = document.createElement('article');
	bookmarkCard.classList.add('bookmark-card')
	bookmarkCard.innerHTML = document.querySelector('.bookmark-card').innerHTML;
	section.appendChild(bookmarkCard);
}

//Event Listeners

document.querySelector('#input-submit').addEventListener('click', function() {
	fillCard();
});
