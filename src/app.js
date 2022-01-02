import "./styles.css";
import axios from "axios";

axios
  .get("https://my-json-server.typicode.com/modanisatech/bootcamp-db/products")
  .then((response) => {
    // Firstly, log response to the console,
    // inspect the response and see that it has data field

    // Assign data field of the response to
    // products variable below by destructuring
    // You can use alias
    console.log(response);
    if (typeof response["data"] !== undefined) {
      console.log("Has data field!");
    } else {
      console.log("No product data!");
    }

    const products = [...response["data"]];

    // Print names of all product to the console
    // by calling foreach  method (use arrow function)
    products.forEach((product) => {
      console.log(product.name);
    });

    // Get all products that contain "Şal" in their name (use filter method)
    // map filtered products to new object having only image and name field
    // assign mapped items to mappedProducts variable

    let sal_items = products.filter((product) => {
      return product.name.includes("Şal");
    });

    const mappedProducts = sal_items.map((product) => ({
      name: product.name,
      image: product.image
    }));
    

    // Display the images and names of mappedProducts
    // You need to add them to the DOM
    // you need to use forEach method
    // You need to use flexbox
    // Position of image and text is up to you
    // You can use any style you wish

    var app = document.getElementById("app");
    app.style.display = "flex";
    mappedProducts.forEach((product) => {
      var div = document.createElement("div");
      div.style.width = "600px";
      div.style.height = "500px";
      div.style.display = "flex";
      div.style.flexDirection = "column";

      var img = document.createElement("img");
      img.src = product["image"];
      var name = document.createElement("h2");
      name.innerHTML = product["name"];
      div.appendChild(name);
      div.appendChild(img);
      app.appendChild(div);
    });
  });
