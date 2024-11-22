let btn=document.querySelector('#btn');
let icon=document.querySelector('.fa-xmark');
 

function modal() {
    document.body.querySelector('.modal').style.display= "block"
    
} 

function icn() {
     document.body.querySelector('.modal').style.display= "none"
}

btn.addEventListener('click', modal)
icon.addEventListener('click', icn)


// 2
document.getElementById('1barchasi').addEventListener('click', function() {
    filterItems('barchasi');
});
document.getElementById('1poliklar').addEventListener('click', function() {
    filterItems('poliklar');
});
document.getElementById('1buyumlar').addEventListener('click', function() {
    filterItems('buyumlar');
});
document.getElementById('1conditsioner').addEventListener('click', function() {
    filterItems('conditsioner');
});
document.getElementById('1modulyator').addEventListener('click', function() {
    filterItems('modulyator');
});
document.getElementById('1telefon').addEventListener('click', function() {
    filterItems('telefon');
});

function filterItems(type) {
    const items = document.querySelectorAll('.grid-item');
    if (type == "1barchasi"){
        items.forEach(item => {
            if (item.id.startsWith("barchasi")) {
                item.style.display = 'block'; 
            } else {
                item.style.display = 'block'; 
            }

        });
        items.forEach(item => {
            if (item.id.startsWith("buyumlar")) {
                item.style.display = 'block'; 
            } else {
                item.style.display = 'block';
            }

        });
        items.forEach(item => {
            if (item.id.startsWith("conditsioner")) {
                item.style.display = 'block'; 
            } else {
                item.style.display = 'block'; 
            }

        });
        items.forEach(item => {
            if (item.id.startsWith("modulyator")) {
                item.style.display = 'block';
            } else {
                item.style.display = 'block'; 
            }

        });
        items.forEach(item => {
            if (item.id.startsWith("telefon")) {
                item.style.display = 'block'; 
            } else {
                item.style.display = 'block'; 
            }

        });
        return false
    }
    items.forEach(item => {
        if (item.id.startsWith(type)) {
            item.style.display = 'block'; 
        } else {
            item.style.display = 'none'; 
        }
    });
}

// 3
document.getElementById('2barchasi').addEventListener('click', function() {
    filterItems('barchasi');
});
document.getElementById('2poliklar').addEventListener('click', function() {
    filterItems('poliklar');
});
document.getElementById('2buyumlar').addEventListener('click', function() {
    filterItems('buyumlar');
});
document.getElementById('2conditsioner').addEventListener('click', function() {
    filterItems('conditsioner');
});
document.getElementById('2modulyator').addEventListener('click', function() {
    filterItems('modulyator');
});
document.getElementById('2telefon').addEventListener('click', function() {
    filterItems('telefon');
});

function filterItems(type) {
    const items = document.querySelectorAll('.grid-item');
    if (type == "barchasi"){
        items.forEach(item => {
            if (item.id.startsWith("barchasi")) {
                item.style.display = 'block'; 
            } else {
                item.style.display = 'block'; 
            }

        });
        items.forEach(item => {
            if (item.id.startsWith("buyumlar")) {
                item.style.display = 'block'; 
            } else {
                item.style.display = 'block'; 
            }

        });
        items.forEach(item => {
            if (item.id.startsWith("conditsioner")) {
                item.style.display = 'block'; 
            } else {
                item.style.display = 'block'; 
            }

        });
        items.forEach(item => {
            if (item.id.startsWith("modulyator")) {
                item.style.display = 'block'; 
            } else {
                item.style.display = 'block'; 
            }

        });
        items.forEach(item => {
            if (item.id.startsWith("telefon")) {
                item.style.display = 'block';
            } else {
                item.style.display = 'block';
            }

        });
        return false
    }
    items.forEach(item => {
        if (item.id.startsWith(type)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none'; 
        }
    });
}


// 4
  const searchInput = document.getElementById("searchInput");
  const cardList = document.getElementById("cardList");
  const cards = document.querySelectorAll(".card");

  searchInput.addEventListener("input", function() {
      const searchTerm = searchInput.value.toLowerCase();
      
      cards.forEach(function(card) {
          const cardName = card.getAttribute("data-name").toLowerCase();

          if (cardName.includes(searchTerm)) {
              card.style.display = "block";
          } else {
              card.style.display = "none";
          }
      });
  });






// 5
  document.querySelector('#loginBtn').addEventListener('click', () => {

    const royxatDiv = document.getElementById('royxat');
    const overlayDiv = document.getElementById('overlay');
    
    // Make both the royxat div and overlay visible
    royxatDiv.classList.remove('hidden');
    overlayDiv.classList.remove('hidden');
    document.body.style.overflow="hidden";
});

// Close the overlay when clicked (optional)
document.getElementById('overlay').addEventListener('click', () => {
    const royxatDiv = document.getElementById('royxat');
    const overlayDiv = document.getElementById('overlay');
    
    // Hide both the royxat div and overlay
    royxatDiv.classList.add('hidden');
    overlayDiv.classList.add('hidden');
    document.body.style.overflow="";
});



document.getElementById('iconn').addEventListener('click', () => {
    const royxatDiv = document.getElementById('royxat');
    const overlayDiv = document.getElementById('overlay');
    
    // Hide both the royxat div and overlay
    royxatDiv.classList.add('hidden');
    overlayDiv.classList.add('hidden');
    document.body.style.overflow="";
});



// 6

document.querySelector('#loginnBtn').addEventListener('click', () => {

    const royxattDiv = document.getElementById('royxatt');
    const overlayyDiv = document.getElementById('overlayy');
    
    // Make both the royxat div and overlay visible
    royxattDiv.classList.remove('hidden');
    overlayyDiv.classList.remove('hidden');
    document.body.style.overflow="hidden";
});

// Close the overlay when clicked (optional)
document.getElementById('overlayy').addEventListener('click', () => {
    const royxattDiv = document.getElementById('royxatt');
    const overlayyDiv = document.getElementById('overlayy');
    
    // Hide both the royxat div and overlay
    royxattDiv.classList.add('hidden');
    overlayyDiv.classList.add('hidden');
    document.body.style.overflow="";
});



document.getElementById('iconnn').addEventListener('click', () => {
    const royxattDiv = document.getElementById('royxatt');
    const overlayyDiv = document.getElementById('overlayy');
    
    // Hide both the royxat div and overlay
    royxattDiv.classList.add('hidden');
    overlayyDiv.classList.add('hidden');
    document.body.style.overflow="";
});





const buttons = document.querySelectorAll('.product-btn');
    
    // Select the span element inside .product-price
    const priceSpan = document.querySelector('#product-price');

    // Loop through each button and add click event listener
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        // Get the price from the button's data-price attribute
        const price = button.getAttribute('data-price');
        console.log(priceSpan)
        // Update the price span with the new price
        priceSpan.textContent = price;
      });
    });

// 7

    let product = {
        name: "",
        price: 600,  // Misol uchun, narx
      };
  
      // Mahsulotni savatga qo'shish funksiyasi
      function addToCart() {
        // localStorage'dan avvalgi savatni olish yoki bo'sh ro'yxat yaratish
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
        // Yangi mahsulotni savatga qo'shish
        cart.push(product);
  
        // localStorage'ga saqlash
        localStorage.setItem("cart", JSON.stringify(cart));
  
        // Foydalanuvchiga bildirish
        alert(`${product.name} savatga qo'shildi!`);
      }


// 8
function displayCart() {
    let cartItems = document.getElementById("cartItems");
    let emptyCartMessage = document.getElementById("emptyCartMessage");
    let promotion = document.getElementById("promotion");

    // localStorage'dan savatdagi mahsulotlarni olish
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Agar savatda mahsulotlar bo'lsa
    if (cart.length > 0) {
      cartItems.innerHTML = ''; // Avvalgi ro'yxatni tozalash
      cart.forEach((item, index) => {
        let listItem = document.createElement("li");
        listItem.classList.add("cart-item");
        listItem.innerHTML = `${item.name}  ${item.price} 000 so'm <button onclick="removeFromCart(${index})"></button>`;
        cartItems.appendChild(listItem);
      });

      emptyCartMessage.style.display = "none";
      promotion.style.display = "block"; // Maxsus taklifni ko'rsatish
    } else {
      cartItems.innerHTML = "";
      emptyCartMessage.style.display = "block";
      promotion.style.display = "none"; // Maxsus taklifni yashirish
    }
  }

  // Mahsulotni savatdan o'chirish funksiyasi
  function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Mahsulotni ro'yxatdan olib tashlash
    cart.splice(index, 1);

    // Yangilangan savatni localStorage'ga saqlash
    localStorage.setItem("cart", JSON.stringify(cart));

    // Sahifani yangilash
    displayCart();
  }

  // Sahifa yuklanganda savatni ko'rsatish
  displayCart();