const express = require("express");

// 1st step to a web server

const app = express();

app.get("/home", (req, res) => {
  res.send(`<h1>Hello World</h1>`);
  // const user = {
  //     name: 'John',
  //     hobby: 'Skating'
  // }
  // res.send(user);
});

app.get("/profile", (req, res) => {
  // res.send('Profile page'); // bad practice
  res.status(200).json({
    success: true,
    user: {
      username: "kamath123",
      gmail: "kamath@google.com",
    },
  });
  //   res.send('Profile page'); // bad practice

  // The error Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client occurs because you're attempting to send multiple responses for a single request, which is not allowed in HTTP.
});
app.get("/about", (req, res) => {
  res.send("About page");
});

app.get("/product/:productId/:commentId", (req, res) => {
  //   const id = req.params.productId;
  // another way

  const { productId, commentId } = req.params;

  console.log(productId);
  const product = {
    id: 1,
    name: "Macbook M3",
    comment: "Good , productive laptop",
  };
  res.status(200).json({
    success: true,
    product,
  });
});
// '/product/:productId' in frontend is called dynamic route
// '/product/:productId' in backend we call productId is variable and we can GET it
//When your URL contains dynamic parts (parameters) like an ID, a category, or anything that changes based on the request, req.params is used to extract those parts and use them in your application.

app.listen(8000, () => {
  console.log("Server is running");
});
