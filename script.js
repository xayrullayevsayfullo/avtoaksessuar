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
                item.style.display = 'block'; // Show items with matching ID
            } else {
                item.style.display = 'block'; // Hide others
            }

        });
        items.forEach(item => {
            if (item.id.startsWith("buyumlar")) {
                item.style.display = 'block'; // Show items with matching ID
            } else {
                item.style.display = 'block'; // Hide others
            }

        });
        items.forEach(item => {
            if (item.id.startsWith("conditsioner")) {
                item.style.display = 'block'; // Show items with matching ID
            } else {
                item.style.display = 'block'; // Hide others
            }

        });
        items.forEach(item => {
            if (item.id.startsWith("modulyator")) {
                item.style.display = 'block'; // Show items with matching ID
            } else {
                item.style.display = 'block'; // Hide others
            }

        });
        items.forEach(item => {
            if (item.id.startsWith("telefon")) {
                item.style.display = 'block'; // Show items with matching ID
            } else {
                item.style.display = 'block'; // Hide others
            }

        });
        return false
    }
    items.forEach(item => {
        if (item.id.startsWith(type)) {
            item.style.display = 'block'; // Show items with matching ID
        } else {
            item.style.display = 'none'; // Hide others
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
                item.style.display = 'block'; // Show items with matching ID
            } else {
                item.style.display = 'block'; // Hide others
            }

        });
        items.forEach(item => {
            if (item.id.startsWith("buyumlar")) {
                item.style.display = 'block'; // Show items with matching ID
            } else {
                item.style.display = 'block'; // Hide others
            }

        });
        items.forEach(item => {
            if (item.id.startsWith("conditsioner")) {
                item.style.display = 'block'; // Show items with matching ID
            } else {
                item.style.display = 'block'; // Hide others
            }

        });
        items.forEach(item => {
            if (item.id.startsWith("modulyator")) {
                item.style.display = 'block'; // Show items with matching ID
            } else {
                item.style.display = 'block'; // Hide others
            }

        });
        items.forEach(item => {
            if (item.id.startsWith("telefon")) {
                item.style.display = 'block'; // Show items with matching ID
            } else {
                item.style.display = 'block'; // Hide others
            }

        });
        return false
    }
    items.forEach(item => {
        if (item.id.startsWith(type)) {
            item.style.display = 'block'; // Show items with matching ID
        } else {
            item.style.display = 'none'; // Hide others
        }
    });
}


// 4
 // Qidiruv inputi va karta ro'yxatini olish
  // Qidiruv inputi va karta ro'yxatini olish
  const searchInput = document.getElementById("searchInput");
  const cardList = document.getElementById("cardList");
  const cards = document.querySelectorAll(".card");

  // Qidiruvni amalga oshirish
  searchInput.addEventListener("input", function() {
      const searchTerm = searchInput.value.toLowerCase();
      
      cards.forEach(function(card) {
          const cardName = card.getAttribute("data-name").toLowerCase();
          
          // Agar karta nomi qidiruvga mos kelsa, uni ko'rsatish, aks holda yashirish
          if (cardName.includes(searchTerm)) {
              card.style.display = "block";
          } else {
              card.style.display = "none";
          }
      });
  });