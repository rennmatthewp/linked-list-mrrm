

function newCard() {
	event.preventDefault();
	var title = document.querySelector('#input-title');
	var url = document.querySelector('#input-url');
	var bookmarkTitle = document.querySelector('#bookmark-title');
	var bookmarkURL = document.querySelector('#bookmark-url');

	bookmarkURL.setAttribute('href', 'http://' + url.value);
	bookmarkTitle.innerText = title.value;
	bookmarkURL.innerHTML = url.value;
	
}

document.querySelector('#input-submit').addEventListener('click', newCard);



