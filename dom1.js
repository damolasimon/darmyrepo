// for( let i = 0; i < 100; i++){
//     let newButton = document.createElement('button'); 
//     let getDiv = document.getElementById('container'); 
//     newButton.innerText = 'Hey!'; 
//     getDiv.appendChild(newButton); 
// }



// let butn1 = document.querySelector('#hello'); 
// let butn2 = document.querySelector('#goodbye'); 

// butn1.addEventListener('click', () => {
//     console.log('hello'); 
// }); 

// butn2.addEventListener('click', () => {
//     console.log('goodbye'); 
// }); 


const form = document.querySelector("#formShelter"); 
const input = document.querySelector('#catName'); 
const catList = document.querySelector('#cats');


form.addEventListener('submit', (evt) => {
    evt.preventDefault(); 
    newLi = document.createElement('li');
    // newButton = document.createElement('input'); 
    // newButton.setAttribute('type', 'radio'); 
    // newLi.append(newButton); 
    newLi.innerText = input.value; 
    catList.append(newLi); 
    input.value = '';
})