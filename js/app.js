const form = document.querySelector("form");
let array = Array.from(form)

form.addEventListener("submit", e => {
  e.preventDefault();
  if (validate(form)===true) {
    console.log("datos válido... enviar...");
  } else {
    console.log("datos inválidos");
  }
});

function validate(element) {
  //escribe tu código aqui
  let total = array.map((uno) => {
    return uno.value;// esto muestra un array de los datos que se metieron en los input
    console.log(uno.value)
  });
/*  total.forEach((inputValidate) => {
+})*/



let userName = document.getElementById('user').value;
let pass = document.getElementById('pass').value;
 console.log(userName);
}

let user = data ['userInfo'];
let balancePoint= data['pointBalance'];
