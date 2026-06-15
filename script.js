const form =
document.getElementById("contactForm");

form.addEventListener(
"submit",
async function(e){

e.preventDefault();

const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
};
try{

await fetch(
"https://script.google.com/macros/s/AKfycbxuVev9vpx6Q30NKxUVoFiEHHEUcz4hGHV56fE_Urn1ckbfLQ07EY2eBgKZoVOCYdd7YQ/exec",
{
method:"POST",
body:JSON.stringify(data)
}
);

document.getElementById(
"success"
).innerText =
"Form Submitted Successfully!";

form.reset();

}
catch(error){

alert(
"Error submitting form"
);

}

});
