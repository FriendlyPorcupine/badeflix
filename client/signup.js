const form = document.querySelector('#signin-form');

form.addEventListener('submit', async (event) => {
  //without below we won't see acitiviy in console of browser developer settings
  event.preventDefault();

  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  try {
    // POST Method
    await axios.post('v1/user/signup', {
      email,
      password
    });

    // After successuful login we update and get directed to log in site
    await axios.post('v1/user/signin', {
      email,
      password
    });

    window.location.href = "/";
  } catch(_) {
    Toastify({
      text: "User already exists!",
      duration: 3000,
      backgroundColor: "red",
    }).showToast();
  }
});
