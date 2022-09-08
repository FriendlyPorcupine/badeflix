const isAuthenticated = async () => {
  try {
    await axios.get('v1/user/me');
    return true;
  } catch(_) {
    return false;
  }
}

const initialize = async () => {
  const isAuth = await isAuthenticated();

  // Check if user is authenticated
  if (isAuth) {
    document.querySelector("#login").style.display = "none";
    document.querySelector("#logout").style.display = "block";
  } else {
    document.querySelector("#login").style.display = "block";
    document.querySelector("#logout").style.display = "none";
  }

  // Signout functionality
  document.querySelector("#logout").addEventListener("click", async (event) => {
    await axios.get('v1/user/signout');
    window.location.reload();
  });

  const form = document.querySelector('#weather-form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!isAuth) return;

    const city = document.getElementById('city').value;

    const res = await axios.get(
      'v1/weather/city',
      {
        params: {
          city,
        },
      },
    );

    document.getElementById("temp-out").innerHTML = `In ${city} sind es ${res.data.temperature} °C`;
    document.getElementById("temp-out").style.display = "block";
  });
}

initialize();
