const form = document.querySelector('#signin-form');

form.addEventListener('submit', async (event) => {
  //without below we won't see acitiviy in console of browser developer settings
  event.preventDefault();

  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  try {
    // POST Method
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
