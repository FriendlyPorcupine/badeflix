const form = document.querySelector('#signin-form');

//BUTTON update and delete ???
  document.querySelector("#update").addEventListener("click", async (event) => {
    event.preventDefault();
    try {
      const email = document.querySelector('#email').value;
      const password = document.querySelector('#password').value;

      await axios.put('v1/user/user', {email, password});

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
      await axios.delete('v1/user/user');

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



