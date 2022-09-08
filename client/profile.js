const form = document.querySelector('#signin-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  try {
    const {data} = await axios.delete('v1/user/me', {
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
