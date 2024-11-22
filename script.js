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
    
    royxatDiv.classList.remove('hidden');
    overlayDiv.classList.remove('hidden');
    document.body.style.overflow="hidden";
});

document.getElementById('overlay').addEventListener('click', () => {
    const royxatDiv = document.getElementById('royxat');
    const overlayDiv = document.getElementById('overlay');
    
    royxatDiv.classList.add('hidden');
    overlayDiv.classList.add('hidden');
    document.body.style.overflow="";
});



document.getElementById('iconn').addEventListener('click', () => {
    const royxatDiv = document.getElementById('royxat');
    const overlayDiv = document.getElementById('overlay');
    
    royxatDiv.classList.add('hidden');
    overlayDiv.classList.add('hidden');
    document.body.style.overflow="";
});



// 6

document.querySelector('#loginnBtn').addEventListener('click', () => {

    const royxattDiv = document.getElementById('royxatt');
    const overlayyDiv = document.getElementById('overlayy');
    
    royxattDiv.classList.remove('hidden');
    overlayyDiv.classList.remove('hidden');
    document.body.style.overflow="hidden";
});

document.getElementById('overlayy').addEventListener('click', () => {
    const royxattDiv = document.getElementById('royxatt');
    const overlayyDiv = document.getElementById('overlayy');
    
    royxattDiv.classList.add('hidden');
    overlayyDiv.classList.add('hidden');
    document.body.style.overflow="";
});



document.getElementById('iconnn').addEventListener('click', () => {
    const royxattDiv = document.getElementById('royxatt');
    const overlayyDiv = document.getElementById('overlayy');
    
    royxattDiv.classList.add('hidden');
    overlayyDiv.classList.add('hidden');
    document.body.style.overflow="";
});





const buttons = document.querySelectorAll('.product-btn');
    
    const priceSpan = document.querySelector('#product-price');

    buttons.forEach(button => {
      button.addEventListener('click', function() {

        const price = button.getAttribute('data-price');
        console.log(priceSpan)
        priceSpan.textContent = price;
      });
    });

// 7

    let product = {
        name: "",
        price: 600, 
      };
  

      function addToCart() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
  

        cart.push(product);
  

        localStorage.setItem("cart", JSON.stringify(cart));
 
        alert(`${product.name} savatga qo'shildi!`);
      }


// 8
function displayCart() {
    let cartItems = document.getElementById("cartItems");
    let emptyCartMessage = document.getElementById("emptyCartMessage");
    let promotion = document.getElementById("promotion");


    let cart = JSON.parse(localStorage.getItem("cart")) || [];


    if (cart.length > 0) {
      cartItems.innerHTML = ''; 
      cart.forEach((item, index) => {
        let listItem = document.createElement("li");
        listItem.classList.add("cart-item");
        listItem.innerHTML = `${item.name}  ${item.price} 000 so'm <button onclick="removeFromCart(${index})"></button>`;
        cartItems.appendChild(listItem);
      });

      emptyCartMessage.style.display = "none";
      promotion.style.display = "block"; 
    } else {
      cartItems.innerHTML = "";
      emptyCartMessage.style.display = "block";
      promotion.style.display = "none"; 
    }
  }


function addToCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const product = {
        name: "",
        price: "",
    };


    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));


    updateCartCount();
}


function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartCount = document.getElementById("cart-count");
    cartCount.textContent = cart.length; 
}


document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
});


function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));


    displayCart();


    updateCartCount();
}

function displayCart() {
    let cartItems = document.getElementById("cartItems");
    let emptyCartMessage = document.getElementById("emptyCartMessage");
    let promotion = document.getElementById("promotion");


    let cart = JSON.parse(localStorage.getItem("cart")) || [];


    if (cart.length > 0) {
        cartItems.innerHTML = ''; 
        cart.forEach((item, index) => {
            let listItem = document.createElement("li");
            listItem.classList.add();
            listItem.innerHTML = `${item.price}600 000 so'm 
                <button onclick="removeFromCart(${index})" class="text-red-600 text-sm ml-4"></button>`;
            cartItems.appendChild(listItem);
        });


        emptyCartMessage.style.display = "none";
        promotion.style.display = "block"; 
    } else {
        cartItems.innerHTML = "";
        emptyCartMessage.style.display = "block";
        promotion.style.display = "none"; 
    }
}


document.addEventListener('DOMContentLoaded', displayCart);
