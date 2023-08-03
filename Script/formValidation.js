let nombre = document.getElementById("form__name");
let eMail = document.getElementById("form__e-mail");
let subject = document.getElementById("form__subject");
let msg = document.getElementById("form__msg");
let submit = document.getElementById("form__submit");

/*Expresión regular para los espacios en blanco*/
let empty = /^\s+$/;

function validarNombre() {
  let countName = nombre.value;
  let countSubject = subject.value;
  let msgCount = msg.value;

  function cincuenta() {
    alert("Menos de 50 palabras");
  }
  function trescientos() {
    alert("Menos de 300 palabras");
  }

  if (empty.test(countName) || countName.length > 50) {
    cincuenta();
    nombre.style.boxShadow = "0px 0px 15px 2px red inset";
  }
  if (empty.test(countSubject) || countSubject.length > 50) {
    cincuenta();
  }
  if (empty.test(msgCount) || msgCount.length > 300) {
    trescientos();
  }
}

submit.addEventListener("click", function (e) {
  validarNombre();
});

setInterval(() => {
  let countName = nombre.value;
  let countSubject = subject.value;
  let countMsg = msg.value;
  let countOpacity = 0;

  if (empty.test(countName) || countName.length > 50) {
    nombre.style.boxShadow = "0px 0px 10px 2px red inset";
    countOpacity = 1;
  } else {
    nombre.style.boxShadow = "0px 0px 10px 1px #0b0c109c inset";
  }

  if (empty.test(countSubject) || countSubject.length > 50) {
    subject.style.boxShadow = "0px 0px 10px 2px red inset";
    countOpacity = 1;
  } else {
    subject.style.boxShadow = " 0px 0px 10px 1px #0b0c109c inset";
  }

  if (empty.test(countMsg) || countMsg.length > 300) {
    msg.style.boxShadow = "0px 0px 10px 2px red inset";
    countOpacity = 1;
  } else {
    msg.style.boxShadow = "0px 0px 10px 1px #0b0c109c inset";
  }

  if (countOpacity == 0) {
    submit.style.opacity = 1;
  } else {
    submit.style.opacity = 0.4;
  }
}, 100);
