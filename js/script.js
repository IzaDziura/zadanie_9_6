
function addElementToList (){
	var element = document.createElement('li');
	var count =getElementsByTagName ('li');
	element.innerHTML = ('item' + count + 1);
}

var addList = document.getElementById ('js-addElem');
var list = document.getElementById ('js-list');

addList.addEventListener ('click', function addElementToList() {
	addElementToList(list.appendChild(element));
});