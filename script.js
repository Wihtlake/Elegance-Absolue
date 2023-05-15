let search = document.getElementsByClassName('search');
let search_close = document.getElementsByClassName('search_close');
let par = document.getElementsByClassName('search_blocked');






search[0].onclick = function() {
	par[0].classList.add("search_active");
}
search_close[0].onclick = function() {
	par[0].classList.remove("search_active");
	console.log('awdawdaw');
}


