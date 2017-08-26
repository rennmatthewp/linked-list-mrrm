//Functions

function fillCard() {
	event.preventDefault();
	var title = document.querySelector('#input-title');
	var url = document.querySelector('#input-url');
	var bookmarkTitle = document.querySelector('#bookmark-title');
	var bookmarkURL = document.querySelector('#bookmark-url');

	bookmarkURL.href = 'http://' + url.value;
	bookmarkTitle.innerText = title.value;
	bookmarkURL.innerText = url.value;
}

function newCard() {
	event.preventDefault();
	var section = document.querySelector('#right')
	var bookmarkCard = document.createElement('article');
	bookmarkCard.classList.add('bookmark-card')
	bookmarkCard.innerHTML = document.querySelector('.bookmark-card').innerHTML;
	section.appendChild(bookmarkCard);






	// var cardHolder = document.querySelector('#right');
	// var bookmarkCard = document.querySelector('.bookmark-card')
	// bookmarkCard = document.createElement('article');
	// bookmarkCard.textContent = bookmarkCard;
	// cardHolder.appendChild(bookmarkCard);
	// console.log(bookmarkCard);
}

//Event Listeners

document.querySelector('#input-submit').addEventListener('click', function() {
	newCard();
});
