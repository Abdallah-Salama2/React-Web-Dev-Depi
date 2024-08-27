// if(localStorage.getItem("Products"))
// console.log(JSON.parse(undefined));
// console.log(productContainer);
var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productDesc = document.getElementById("productDesc");
var category = document.getElementById("category");

var productContainer = [];
if (localStorage.getItem("Products")) {
  productContainer = JSON.parse(localStorage.getItem("Products"));
}
displayProducts(productContainer);

function addProduct() {
  // console.log(localStorage.getItem("Products"));

  var product = {
    name: productName.value,
    price: "$" + Number(productPrice.value).toFixed(2),
    desc: productDesc.value,
    category: category.value,
  };
  if (
    regxTest(productName) &&
    regxTest(productPrice) &&
    regxTest(productDesc) &&
    regxTest(category)
  ) {
    productContainer.push(product);
    localStorage.setItem("Products", JSON.stringify(productContainer));
    displayProducts(productContainer);
    clearProduct();
    alert("Added Successfully");
  } else {
    alert("Wrong data");
  }
  // console.log(product);
}

function clearProduct() {
  var inputs = document.querySelectorAll("Input");
  productName.value = "";
  productPrice.value = "";
  productDesc.value = "";
  category.value = "";
  inputs.forEach(function (input) {
    input.classList.remove("is-valid");
  });
}

function displayProducts(products) {
  var tableBody = document.getElementById("tableBody");
  // Get Table Body
  // Y3rf Var yt3rd fe table body
  // var fe html data bta3 products kolha ele 3andy fe local storaage
  var box = ``;
  for (var i = 0; i < products.length; i++) {
    box += ` <tr>
                <td>${i + 1}</td>
                <td>${products[i].name}</td>
                <td>${products[i].price}</td>
                <td>${products[i].desc}</td>
                <td>${products[i].category}</td>
                <td>
                <button class="btn btn-success" onclick="deleteProduct(${i})">Delete</button>
                <button class="btn btn-secondary" onclick="updateProduct(${i})">Update</button>
                </td>
            </tr>`;
  }
  tableBody.innerHTML = box;
}

function deleteProduct(index) {
  productContainer.splice(index, 1);
  localStorage.setItem("Products", JSON.stringify(productContainer));
  displayProducts(productContainer);
}

function updateProduct(index) {
  // console.log(productContainer[index]);
  productName.value = productContainer[index].name;
  productPrice.value = productContainer[index].price.replace("$", "");
  productDesc.value = productContainer[index].desc;
  category.value = productContainer[index].category;

  toggleBtn("update");
}

//Helper Function
function toggleBtn(buttonName) {
  var submitButton = document.getElementById("addOrUpdateProduct");
  if (buttonName == "update") {
    submitButton.innerText = "UpdateProduct";
    submitButton.classList.remove("btn-warning");
    submitButton.classList.add("btn-dark");
    submitButton.onclick = function () {
      if (
        regxTest(productName) &&
        regxTest(productPrice) &&
        regxTest(productDesc) &&
        regxTest(category)
      ) {
        update();
        toggleBtn("Add");
        clearProduct();
        alert("Updated Successfully");
      } else {
        alert("Wrong data");
      }
    };
  } else {
    submitButton.innerText = "Add Product";
    submitButton.classList.remove("btn-dark");
    submitButton.classList.add("btn-warning");
    submitButton.onclick = addProduct;
  }
}

function update(index) {
  var product = {
    name: productName.value,
    price: "$" + Number(productPrice.value).toFixed(2),
    desc: productDesc.value,
    category: category.value,
  };
  productContainer.splice(index, 1, product);
  localStorage.setItem("Products", JSON.stringify(productContainer));
  displayProducts(productContainer);
}

function searchProduct(name) {
  var filterProducts = [];
  for (var i = 0; i < productContainer.length; i++) {
    if (productContainer[i].name.toUpperCase().includes(name.toUpperCase())) {
      filterProducts.push(productContainer[i]);
    }
  }
  displayProducts(filterProducts);
}

function deleteAll() {
  var productContainer = [];
  if (localStorage.getItem("Products")) {
    localStorage.removeItem("Products");
  }
  displayProducts(productContainer);
}

function regxTest(productId) {
  if (productId == productPrice) {
    //range from 10 to 10000 with 2 decimal optional
    var regx =
      /^(10|[1-9][0-9]|[1-9][0-9]{2}|[1-9][0-9]{3}|10000)[.]{0,1}[0-9]{0,2}$/;
  } else {
    var regx = /^[A-Z]{1,9}[a-z]{2,9}$/;
  }
  if (regx.test(productId.value)) {
    productId.classList.remove("is-invalid");
    productId.classList.add("is-valid");
    return true;
  } else {
    productId.classList.remove("is-valid");
    productId.classList.add("is-invalid");
    return false;
  }
}
