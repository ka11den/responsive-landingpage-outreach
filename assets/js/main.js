// header
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close')

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('snow-menu');
  })
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('snow-menu');
  })
}

// active links
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(n => n.addEventListener('click', () => {
  navLinks.forEach(n => n.classList.remove('active'))
  n.classList.add('active');
}))

// payment
const homeForm = document.getElementById('home-form')
const homeSteamid = document.getElementById('home-input-steamid')
const homeRadio = document.getElementById('contactChoice3')
const homeSum = document.getElementById('home-input-sum')
const homeMessage = document.getElementById('home-message')

const paymentForm = async (e) => {
  e.preventDefault();

  if (homeSteamid.value === '') {    
    // error
    homeMessage.classList.add('color-red');
    homeMessage.textContent = "Вы не заполнили SteamId!"

    // clear error
    setTimeout(() => {
      // error
      homeMessage.classList.remove('color-red');
      homeMessage.textContent = ""
    }, 3000);  

    return;
  }

  if (homeSum.value === '') {
    // error
    homeMessage.classList.add('color-red');
    homeMessage.textContent = "Вы не заполнили сумму!"

    // clear error
    setTimeout(() => {
      // error
      homeMessage.classList.remove('color-red');
      homeMessage.textContent = ""
    }, 3000);  

    return;
  }

  if (homeRadio.checked === false) {
    // error
    homeMessage.classList.add('color-red');
    homeMessage.textContent = "Вы не поставили галочку!"

    // clear error
    setTimeout(() => {
      // error
      homeMessage.classList.remove('color-red');
      homeMessage.textContent = ""
    }, 3000);  

    return;
  }

  homeMessage.classList.add('color-green');
  homeMessage.textContent = "Форма успешно заполнена"

  // clear error
  setTimeout(async () => {
    // error
    homeMessage.classList.remove('color-green');
    homeMessage.textContent = ""
      const data = {
        amount: "3232",
        shop_id: "4232",
      }
  
    await fetch("https://cardlink.link/api/v1/bill/create", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(window.location.href = "http://www.example.com");
  }, 3000);
  
}

homeForm.addEventListener('submit', paymentForm)