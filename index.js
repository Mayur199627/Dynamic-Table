const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const phoneInput = document.getElementById('phone-input');
const submit = document.getElementById('submit');
const form = document.getElementById('user-details');
const list = document.getElementById('user-detail');
const list1 = document.getElementById('user-detail1');
const list2 = document.getElementById('user-detail2');
const list3 = document.getElementById('user-detail3');
const del = document.getElementById('delete');
form.addEventListener('submit', (event)=>{
    event.preventDefault();
var listElement = document.createElement('li')
listElement.innerText = event.target.name.value;
var list1Element = document.createElement('li')
list1Element.innerText = event.target.email.value;
var list2Element = document.createElement('li')
list2Element.innerText = event.target.phone.value;
var list3Element = document.createElement('li')
list3Element.style.cursor = "pointer"
list3Element.innerText = 'Delete';

list.appendChild(listElement);
list1.appendChild(list1Element);
list2.appendChild(list2Element);
list3.appendChild(list3Element);

const removeEl = list3Element.addEventListener('click', ()=>{
    listElement.remove();
    list1Element.remove();
    list2Element.remove();
    list3Element.remove();
})
})

del.addEventListener('click', ()=>{
        list.firstElementChild.innerText = '';
        list1.firstElementChild.innerText = '';
        list2.firstElementChild.innerText = '';
        list3.firstElementChild.innerText = '';
})