const form = document.querySelector('#signin-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

//BUTTON update and delete ???
  document.querySelector("#update").addEventListener("click", async (event) => {
    await axios.post('v1/user/user');
    window.location.reload();
  });

  document.querySelector("#delete").addEventListener("click", async (event) => {
    await axios.delete('v1/user/user');
    window.location.reload();
  });

  try {
    const {data} = await axios.delete('v1/user/user', {
      email,
      password
    });

    window.location.href = "/";

  } catch(_) {
    Toastify({
      text: "User deleted!",
      duration: 3000,
      backgroundColor: "red",
    }).showToast();
  }
});
