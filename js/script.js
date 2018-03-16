var list = document.getElementById ('js-list');
var addList = document.getElementById ('js-addElem');

function addElementToList (){
	var element = document.createElement('li');
	var listElements = document.getElementsByTagName ('li');
	var count = listElements.length;
	element.innerHTML = ('Punkt ' + count);
	list.appendChild(element);
}

addList.addEventListener ('click', addElementToList);