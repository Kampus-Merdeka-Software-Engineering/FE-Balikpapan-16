//e-learning
let availableKeywords = [
    'Digital marketing',
    'Data science and analysis',
    'UI/UX research and design',
    'Microsoft Excel',
    'Product Manager',
    'Ielts Preparations',
    'Foreign Languages',
    'Human Resources Development',
    'Career&Development',
]

// const search = document.getElementById("search");
// const results = document.querySelector(".results");
    
// search.onkeyup = function(){
//     let result = [];
//     let input = search.value;
//     if(input.length){
//       result = availableKeywords.filter((keyword) => {
//         return keyword.toLowerCase().includes(input.toLowerCase());
//       });
//       console.log(result);
//     }
//     display(result);

//     if(!result.length){
//         results.innerHTML = "";
//     }
// }
  
function display(result){
    const content = result.map((list) => {
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });    

    results.innerHTML = "<ul>" + content.join("") + "<ul>";
}

function selectInput(list){
    search.value = list.innerHTML;
    results.innerHTML = "";
}

//contact us
const nameInput = document.getElementById("yourName");
const email = document.getElementById("emailAddress");
const subject = document.getElementById("subject");
const message = document.getElementById("yourMessage");
const succes = document.getElementById("succes");
const errorNodes = document.querySelectorAll(".error");
const form = document.querySelector('#formContact')

// kita berikan event submit pada form nya
form.addEventListener('submit', function(e){
    e.preventDefault();

    const data = {
        names: nameInput.value,
        mail:email.value,
        subjek: subject.value,
        pesan:message.value,
    }

    fetch('https://be-balikpapan-16-production.up.railway.app/contact', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert("berhasil mengirimkan data")

        // clear semua inputan form
        form.reset()
    })
    .catch(error => {
        console.error('Error:', error);
    });

    console.log(data)



    // alert(200);
})


// function validateForm(){

//     clearMessages();
//     let errorFlag = false;

//     if(nameInput.value.length<1){
//         errorNodes[0].innerText="Name cannot be blank";
//         nameInput.classList.add("error-border");
//         errorFlag = true;
//     }
//     if(!emailIsValid(email.value)){
//         errorNodes[1].innerText="Invalid email address";
//         email.classList.add("error-border");
//         errorFlag = true;
//     }
//     if(subject.value.length<1){
//         errorNodes[2].innerText="Please enter a subject";
//         subject.classList.add("error-border");
//         errorFlag = true;
//     }
//     if(message.value.length<1){
//         errorNodes[3].innerText="Please enter message";
//         message.classList.add("error-border");
//         errorFlag = true;
//     }
//     if(!errorFlag){
//         succes.innerText ="";
//     }
// }

// function clearMessages(){
//     for(let i=0; i < errorNodes.length; i++){
//         errorNodes[i].innerText="";
//     }

//     succes.innerText="";
//     nameInput.classList.remove("error-border");
//     email.classList.remove("error-border");
//     subject.classList.remove("error-border");
//     message.classList.remove("error-border");
// }

// function emailIsValid(email){
//     let pattern = /\S+$\S+\.\S+/;
//     return pattern.test(email);
// }