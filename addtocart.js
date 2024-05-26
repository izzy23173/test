function searchItems() {
    // Get the search query entered by the user
    var input = document.getElementById('searchInput').value.toLowerCase();
    var itemList = document.getElementById('itemList');
    var items = itemList.getElementsByClassName('item');
  
    // Loop through all items and hide those that don't match the search query
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var itemName = item.textContent.toLowerCase();
      if (itemName.includes(input)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    }
  }
  
  const product = [
      {
          id: 0,
          image: 'file/fileall.jpg',
          title: 'Flower File',
          price: 6.00,
      },
      {
          id: 1,
          image: 'pen/penall.jpg',
          title: 'Flower Pen',
          price: 5.50,
      },
      {
          id: 2,
          image: 'pencil case/4.png',
          title: 'Flower Pencil Case',
          price: 25.50,
      },
      {
          id: 3,
          image: 'paperclip/clipall.jpg',
          title: 'Flower Paper Clip',
          price: 2.50,
      },
      {
          id: 4,
          image: 'book/bookall.jpg',
          title: 'Flower Books',
          price: 6.00,
      },
      {
          id: 5,
          image: 'erasser/eraserall.jpg',
          title: 'Flower Eraser',
          price: 5.50,
      },
      {
          id: 6,
          image: 'ruler/rulerall.jpg',
          title: 'Flower Ruler',
          price: 10.50,
      },
      {
          id: 7,
          image: 'higligghter/highliighterll.jpg',
          title: 'Flower Highlighter',
          price: 2.50,
      },
  ];
  
  const categories = [...new Set(product.map(item => item))];
  let i = 0;
  
  document.getElementById('root').innerHTML = categories.map(item => {
      var { image, title, price } = item;
      return `
          <div class="box">
              <div class="img-box">
                  <img class="images" src="${image}" alt="${title}">
              </div>
              <div class="bottom">
                  <p>${title}</p>
                  <h2>RM${price.toFixed(2)}</h2>
                  <button onclick="addToCart(${item.id})">Add to cart</button>
              </div>
          </div>
      `;
  }).join('');
  
  var cart = [];
  
  function addToCart(a){
      cart.push({...product[a]});
      displaycart();
  }
  function delElement(a){
      cart.splice(a, 1);
      displaycart();
  }
  
  function displaycart() {
      let total = 0;
      if (cart.length == 0) {
          document.getElementById('cartItem').innerHTML = "Your cart is empty";
          document.getElementById("total").innerHTML = "RM 0.00";
      } else {
          let cartHTML = cart.map((item, index) => {
              var { image, title, price } = item;
              total += price;
              return `
                  <div class='cart-item'>
                      <div class='row-img'>
                          <img class='rowimg' src='${image}'>
                      </div>
                      <p style='font-size: 12px;'>${title}</p>
                      <h2 style='font-size: 15px;'>RM${price.toFixed(2)}</h2>
                      <i class="fa fa-trash" onclick='delElement(${index})'></i>
                  </div>
              `;
          }).join('');
  
          document.getElementById('cartItem').innerHTML = cartHTML;
          document.getElementById("total").innerHTML = "RM " + total.toFixed(2);
      }
  }
  
  let totalPrice = displaycart();
console.log("Total to pay: RM", totalPrice.toFixed(2));
