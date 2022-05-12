document.addEventListener("DOMContentLoaded" , () => {
  const loginForm = document.querySelector("#fk3login");
  const createAccountForm = document.querySelector("#FK3cA");

  document.querySelector("#fk3linkcreateacc").addEventListener("click", e => {
    e.preventDefault();
    loginForm.classList.add("fk3form--hidden");
    createAccountForm.classList.remove("fk3form--hidden");
  });

  /invese/

  document.querySelector("#fk3linklogin").addEventListener("click", e =>{
      e.preventDefault();
    loginForm.classList.remove("fk3form--hidden");
    createAccountForm.classList.add("fk3form--hidden");
  });
});
   function openmain()
   {
     $("karmain").click(window.open("index.html"));
   };