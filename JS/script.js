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
