const form = document.querySelector('#signin-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  try {
    const {data} = await axios.post('v1/user/signin', {
      email,
      password
    });

    window.location.href = "/";

  } catch(_) {
    Toastify({
      text: "Invalid credentials!",
      duration: 3000,
      backgroundColor: "red",
    }).showToast();
  }
});
