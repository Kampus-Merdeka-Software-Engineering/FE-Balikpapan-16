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
const search = document.getElementById("search");
const results = document.querySelector(".results");

search.onkeyup = function(){
    let result = [];
    let input = search.value;
    if(input.length){
      result = availableKeywords.filter((keyword) => {
        return keywordtoLowerCase().includes(input.toLowerCase());
      });
      console.log(result);
    }
    display(result);

    if(!result.length){
        results.innerHTML = "";
    }
}
  
function display(result){
    const content = result.map(list)=>{
        return "<li onclick=selectInput(this)>" + list + <"li">;
    });

    results.innerHTML = "<ul>" + content.join("") + "<ul>";
}

function selectInput(list){
    search.value = list.innerHTML;
    results.innerHTML = "";
}

//contact us
const nameInput = document.querySelector("#yourName");
const email = document.querySelector("#emailAddress");
const subject = document.querySelector("#subject");
const message = document.querySelector("#yourMessage");
const succes = document.querySelector("#succes");
const errorNodes = document.querySelectorAll(".error");

const form = document.querySelector("form"); // Anda perlu menambahkan selektor yang sesuai untuk form Anda

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
});

function validateForm(){

    clearMessages();
    let errorFlag = false;

    if(nameInput.value.length<1){
        errorNodes[0].innerText="Name cannot be blank";
        nameInput.classList.add("error-border")
        errorFlag = true;
    }
    if(!emailIsValid(email.value)){
        errorNodes[1].innerText="Invalid email address";
        email.classList.add("error-border")
        errorFlag = true;
    }
    if(subject.value.length<1){
        errorNodes[2].innerText="Please enter a subject";
        subject.classList.add("error-border")
        errorFlag = true;
    }
    if(message.value.length<1){
        errorNodes[3].innerText="Please enter message";
        email.classList.add("error-border")
        errorFlag = true;
    }
    if(!errorFlag){
        succes.innerText ="";
    }
}

function clearMessages(){
    for(i=0, i < errorNodes.length; i++){
        errorNodes[i].innerText="";
    }

    succes.innerText=""
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    subject.classList.remove("error-border");
    message.classList.remove("error-border");
}

function emailIsValid(email){
    let pattern = /\S+$\S+\.\S+/;
    return pattern.test(email);
}