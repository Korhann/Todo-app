let addtodo = document.getElementById('addtodo');
let inputfield = document.getElementById('inputField');
let todocontainer = document.getElementById('todocontainer');

addtodo.addEventListener('click',function(){
    var paragraph = document.createElement('p');
    todocontainer.appendChild(paragraph); 
    paragraph.innerText = inputfield.value;
    inputfield.value = '';
    paragraph.style.textDecoration = 'underline';
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = 'line-through';
    })
})