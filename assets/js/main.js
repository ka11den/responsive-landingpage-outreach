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
  navLinks.forEach(n => n.classList.remove('active-img'))
  if (n.querySelector('img') !== null) {
    n.classList.add('active-img');
  } else {
    n.classList.add('active');
  } 
}))

// payment
const homeForm = document.getElementById('home-form')
const homeSteamid = document.getElementById('home-input-steamid')
const homeRadio = document.getElementById('checkbox')
const homeSum = document.getElementById('home-input-sum')
const homeMessage = document.getElementById('home-message')

homeRadio.addEventListener('click', () => {
  this.checked = !this.checked;

  handleRadioChange(this.checked);
})

function handleRadioChange(state) {
  if (state) {
    homeRadio.classList.remove('input-deactive')
  } else {
    homeRadio.classList.add('input-deactive')
  }
}

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

  if (homeSum.value < 25 || homeSum < 50000) {
    // error
    homeMessage.classList.add('color-red');
    homeMessage.textContent = "Минимальная сумма 25. Максимальная сумма 50000"

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
      order_id: Math.random(),
      amount: homeSum.value,
      currency_in: "RUB",
      shop_id: "shopId",
    }
  
    await fetch("https://cardlink.link/api/v1/bill/create", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(window.location.href = `${link_page_url}`);

  }, 3000);
  
}

homeForm.addEventListener('submit', paymentForm)

// products effect hover and click payment

function showImage(id) {
  const buyImage = document.getElementById("buy" + id);
  const productImage = document.getElementById("productImg" + id);

  productImage.addEventListener('click', async () => {
    switch (id) {
      case 1:
        const paymentOne = {
          order_id: Math.round(Math.random() * 10000),
          amount: 150,
          currency_in: "RUB",
          shop_id: "shopId",
        }
      
        await fetch("https://cardlink.link/api/v1/bill/create", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(paymentOne)
        }).then(window.location.href = `${link_page_url}`);
      break;
      case 2:
        const paymentTwo = {
          order_id: Math.round(Math.random() * 10000),
          amount: 250,
          currency_in: "RUB",
          shop_id: "shopId",
        }
      
        await fetch("https://cardlink.link/api/v1/bill/create", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(paymentTwo)
        }).then(window.location.href = `${link_page_url}`);
      break;
      case 3:
        const paymentThree = {
          order_id: Math.round(Math.random() * 10000),
          amount: 350,
          currency_in: "RUB",
          shop_id: "shopId",
        }
      
        await fetch("https://cardlink.link/api/v1/bill/create", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(paymentThree)
        }).then(window.location.href = `${link_page_url}`);        
      break;
      case 4:
        const paymentFoo = {
          order_id: Math.round(Math.random() * 10000),
          amount: 450,
          currency_in: "RUB",
          shop_id: "shopId",
        }
      
        await fetch("https://cardlink.link/api/v1/bill/create", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(paymentFoo)
        }).then(window.location.href = `${link_page_url}`);
      break;
      default:
        break;
    }
  })

  productImage.style.filter = "opacity(0.3)";
  buyImage.style.display = "block";
  buyImage.style.zIndex = "2";
}

function hideImage(id) {      
  const buyImage = document.getElementById("buy" + id);
  const productImage = document.getElementById("productImg" + id);
  
  productImage.style.filter = "opacity(1)";
  buyImage.style.display = "none";
}