// EXAMINE THE DOCUMENT OBJECT //
                                       //--PART ONE--// https://www.youtube.com/watch?v=0ik6X4DJKCc
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[18]);
// document.all[18].textContent = 'Hello';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('scenario-title'));
// var scenarioTitle = document.getElementById('scenario-title');
// console.log(scenarioTitle);
// scenarioTitle.textContent = 'Hello';
// scenarioTitle.innerText = 'Goodbye';
// console.log(scenarioTitle.innerText);
// scenarioTitle.innerHTML = '<h3>Hello</h3>';
// scenarioTitle.style.borderBottom = 'solid 3px #000'

// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('infection-numbers')
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = '#f4f4f4';

// Gives error
// items.style.backgroundColor = 'yellow';

// for (var i = 0; i < items.length; i++){items[i].style.backgroundColor = 'f4f4f4';}

// GETELEMENTSBYNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = '#f4f4f4';

// Gives error
// items.style.backgroundColor = 'yellow';

//for (var i = 0; i < li.length; i++){items[i].style.backgroundColor = '#f4f4f4';}

// QUERYSELECTOR //
// var item = document.querySelector('.infection-numbers');
// item.style.color = 'red';

// var lastItem = document.querySelector('.infection-numbers:last-child')
// lastItem.style.color = 'blue';

// var lastItem = document.querySelector('.infection-numbers:nth-child(2)')
// lastItem.style.color = 'coral';

// QUARYSELECTORALL //
// var titels = document.querySelectorAll('h3' )
// console.log(titels)
// titels[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for (var i = 0; i < odd.length; i++){
// odd[i].style.backgroundColor = 'f4f4f4';
// even[i].style.backgroundColor = '#ccc';}
                                    //--PART TWO--// https://www.youtube.com/watch?v=mPd2aJXCZ2g&t=511s

// TRAVERSING THE DOM //
// var itemList = document.querySelector('.game-menu-content');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// FirstChild
// console.log(itemList.firstChild);
// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1' ;

// LastChild
// console.log(itemList.lastChild);
// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 1' ;

// nextSibling
// console.log(itemList.nextSibling);
// nextElementSibling
// console.log(itemList.nextElementSibling);

// previousElementSibling
// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.backgroundColor = 'green';

// createElement

// create a div
// var newDiv = document.createElement('div');
// Add class
// newDiv.className = 'hello';
// Add id
// newDiv.id = 'hello1';
// Add attr
// newDiv.setAttribute('title', 'Hello-div');
// Create text node
// var newDivText = document.createTextNode('Hello World');
// Add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('body .container')
// var game = document.querySelector('body .game');

// console.log(newDiv);
// container.insertBefore(newDiv, game);
                            //NIET AF    //--PART 3--// https://www.youtube.com/watch?v=wK2cBMcDTss
// buttonClick

// var button = document.getElementById('next').addEventListener('click', buttonClick)

 function buttonClick(){
    console.log('Button clicked');
   document.getElementById('next').textContent = 'Antwoorden inleveren';}


