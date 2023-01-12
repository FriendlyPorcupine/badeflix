const form = document.querySelector('#signin-form');

//BUTTON update and delete
  document.querySelector("#update").addEventListener("click", async (event) => {
    //without below we won't see acitiviy in console of browser developer settings
    event.preventDefault();
    try {
      const email = document.querySelector('#email').value;
      const password = document.querySelector('#password').value;

      // PUT Method for updating
      await axios.put('v1/user/user', {email, password});
      //toast will show if method was successfull
      Toastify({
        text: "User updated",
        duration: 3000,
        backgroundColor: "green",
      }).showToast();

    } catch(_) {
      Toastify({
        text: "User could not be updated",
        duration: 3000,
        backgroundColor: "red",
      }).showToast();
    }
  });

  document.querySelector("#delete").addEventListener("click", async (event) => {
    event.preventDefault();
    try {
      //first we delete
      await axios.delete('v1/user/user');
      //and go back to index to update database, otherwise we could still log in
      await axios.get('v1/user/signout');
      window.location.href = "/";

      /*could not make it work, user can't log in
      Toastify({
        text: "User deleted!",
        duration: 3000,
        backgroundColor: "green",
      }).showToast();*/

    } catch(_) {
      Toastify({
        text: "User could not deleted!",
        duration: 3000,
        backgroundColor: "red",
      }).showToast();
    }
  });



