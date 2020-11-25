function validation() {
  const name = document.querySelector(".name").value;
  const lastName = document.querySelector(".lastname").value;
  const email = document.querySelector(".email").value;
  const passWord = document.querySelector(".password").value;

  const input = document.querySelectorAll("input");
  const icon = document.querySelectorAll(".error");
  const text = document.querySelectorAll(".para");
  const image = document.querySelectorAll('.error');
    console.log(image);

  function NAME() {
    if (name == "") {
      icon[0].style.display = "block";
      text[0].textContent = "FIRST NAME cannot be empty";
      input[0].classList.add("input-error");
      return false;
    } else if (name.length >= 1) {
      icon[0].style.display = "none";
      text[0].textContent = "";
      input[0].classList.remove("input-error");
      return true;
    }
  }
  NAME();

  function LAST() {
    //  console.log(text[1]);
    if (lastName == "") {
      icon[1].style.display = "block";
      text[1].textContent = "LAST NAME cannot be empty";
      input[1].classList.add("input-error");
      return false;
    }
     else if (lastName.length > 1) {
      icon[1].style.display = "none";
      text[1].textContent = "";
      input[1].classList.remove("input-error");
      return true;
    }
  }

  LAST();

  function EMAIL() {
    if (email.indexOf("@") == -1 || email.length < 6) {
      icon[2].style.display = "block";
      text[2].textContent = "looks like this is not an email";
      input[2].classList.add("input-error");
      return false;
    } else {
      icon[2].style.display = "none";
      text[2].textContent = "";
      input[2].classList.remove("input-error");
      return true;
    }
  }

  EMAIL();

  function PASSWORD() {
    if (passWord == "") {
      icon[3].style.display = "block";
      text[3].textContent = "password cannot be empty";
      input[3].classList.add("input-error");
      return false;
    } 
    else if (passWord >= 2) {
      icon[3].style.display = "none";
      text[3].textContent = "";
      input[3].classList.remove("input-error");
      return true;
    }
  }

  PASSWORD();

}
