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
    document.querySelector("#profile").style.display = "block";
  } else {
    //if not logout and profile won't be visible
    document.querySelector("#login").style.display = "block";
    document.querySelector("#logout").style.display = "none";
    document.querySelector("#profile").style.display = "none";
  }

  // Signout functionality
  document.querySelector("#logout").addEventListener("click", async (event) => {
    await axios.get('v1/user/signout');
    // once logout browser will refresh
    window.location.reload();
  });

  const form = document.querySelector('#weather-form');
  form.addEventListener('submit', async (event) => {
    //without below we won't see acitiviy in console of browser developer settings
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
