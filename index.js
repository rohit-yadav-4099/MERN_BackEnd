const express = require("express");
const productRoute = require("./route/productRote");
const app = express();
const cors = require("cors");
const connection = require("./config/db");
console.log(connection);
const routeone = require("./route/userrouter");
const port = process.env.PORT || 3030;
require("dotenv").config();


// const paymentRoute = require('./route/paymentRoute')

// const stripe = require("stripe")("sk_test_51Oeem7SBO2dXKM0566TtteRGgiQpNAJ5SsKhl7tkWLmh621NS4SweS3hHkkK9g9m5a5OjVDWEvbNYozl3h5j06ra00KtUVEMN4")
// import express from "express";
// import fetch from "node-fetch";
// import "dotenv/config";


// app.use(express.json({ limit: '10mb' }));
app.use(express.json());

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use("/api", routeone);
app.use("/api", productRoute);

const { coursetype } = require('./model/courseSchema')

const stripe = require('stripe')("sk_test_51Oeem7SBO2dXKM0566TtteRGgiQpNAJ5SsKhl7tkWLmh621NS4SweS3hHkkK9g9m5a5OjVDWEvbNYozl3h5j06ra00KtUVEMN4")
const saltround = 10
const secretkey = "cloneProject"

let course1 = ""
let storeItem = ""

// app.use('/payment',paymentRoute)


// const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET } = process.env;
// const base = "https://api-m.sandbox.paypal.com";


// const generateAccessToken = async () => {
//   try {
//     if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
//       throw new Error("MISSING_API_CREDENTIALS");
//     }
//     const auth = Buffer.from(
//       PAYPAL_CLIENT_ID + ":" + PAYPAL_CLIENT_SECRET,
//     ).toString("base64");
//     const response = await fetch(`${base}/v1/oauth2/token`, {
//       method: "POST",
//       body: "grant_type=client_credentials",
//       headers: {
//         Authorization: `Basic ${auth}`,
//       },
//     });

//     const data = await response.json();
//     return data.access_token;
//   } catch (error) {
//     console.error("Failed to generate Access Token:", error);
//   }
// };


// const createOrder = async (cart) => {
//   // use the cart information passed from the front-end to calculate the purchase unit details
//   console.log(
//     "shopping cart information passed from the frontend createOrder() callback:",
//     cart,
//   );

//   const accessToken = await generateAccessToken();
//   const url = `${base}/v2/checkout/orders`;
//   const payload = {
//     intent: "CAPTURE",
//     purchase_units: [
//       {
//         amount: {
//           currency_code: "INR",
//           value: cart.amount,
//         },
//       },
//     ],
//   };

//   const response = await fetch(url, {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${accessToken}`,
//       // Uncomment one of these to force an error for negative testing (in sandbox mode only). Documentation:
//       // https://developer.paypal.com/tools/sandbox/negative-testing/request-headers/
//       // "PayPal-Mock-Response": '{"mock_application_codes": "MISSING_REQUIRED_PARAMETER"}'
//       // "PayPal-Mock-Response": '{"mock_application_codes": "PERMISSION_DENIED"}'
//       // "PayPal-Mock-Response": '{"mock_application_codes": "INTERNAL_SERVER_ERROR"}'
//     },
//     method: "POST",
//     body: JSON.stringify(payload),
//   });

//   return handleResponse(response);
// };

// async function handleResponse(response) {
//   try {
//     const jsonResponse = await response.json();
//     return {
//       jsonResponse,
//       httpStatusCode: response.status,
//     };
//   } catch (err) {
//     const errorMessage = await response.text();
//     throw new Error(errorMessage);
//   }
// }

// app.post("/api/orders", async (req, res) => {
//   try {
//     // use the cart information passed from the front-end to calculate the order amount detals
//     const { cart } = req.body;
//     const { jsonResponse, httpStatusCode } = await createOrder(cart);
//     res.status(httpStatusCode).json(jsonResponse);
//   } catch (error) {
//     console.error("Failed to create order:", error);
//     res.status(500).json({ error: "Failed to create order." });
//   }
// });


// // serve index.html
// app.get("/", (req, res) => {
//   res.sendFile(path.resolve("./client/checkout.html"));
// });



// checkout Api

// app.post("/api/create-checkout-session", async (req, res) => {
//   const { products } = req.body;
//   console.log(products);
//   const lineItems = products.map((product) => ({
//     price_data: {
//       currency: "inr",
//       product_data: {
//         name: product.name,
//       },
//       unit_amount: product.price * 100,
//     },
//     quantity: product.quantity,
//   }));

//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ["card"],
//     line_items: lineItems,
//     mode: "payment",
//     success_url: "https://localhost:3000/success",
//     cancel_url: "https://localhost:3000/cancle",
//   });
//   res.json({ id: session.id });
// });




// const htmlsuccesspage = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <style>
//         body {
//             font-family: Arial, sans-serif;
//             background-color: #f0f0f0;
//         }
//         h1 {
//             color: blue;
//             margin-left:20%;
//             margin-bottom:30px;
            
//         }
//         .cont{
//             display:flex;
//             align-items:center;
//             flex-direction:column;
//             border:2px;
            
//         }
//        button{
            
//             margin:45%;
//             margin-top:30px;
//        }
//     </style>
//     <title>payment</title>
// </head>
// <body>
// <div className="cont">
// <div>
//     <h1>Payment successfull and course confirmed</h1>
//     <div>
    
//      <button className=" bot1"><NavLink to="/">continue with your course</NavLink></button>
//     </div>
//     </div>
//     </body>
// </html>
// `;



app.post("/createcheckout", async (req, res) => {
 
  const { products } = await req.body;
 
  console.log(products);
  console.log(typeof (products))

  storeItem = products.map((item) => ({
    useremail: item.useremail,
    id: item.id,
    image: item.image,
    name: item.name,
    price: item.price,
    date: item.date,
    dateheading: item.dateheading,
    participants: item.participants,
    participantsheading: item.participantsheading,
    duration: item.duration,
    durationheading: item.durationheading,

  }))



  const lineItems = products.map((prod) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: prod.name,
      },
      unit_amount: prod.price * 100 ,
    },
    quantity: 1,
  }));



  try {

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: "payment",

      success_url: "http://localhost:3000/dashboard",
      cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ id: session.id });
    const ressee = coursetype.create(storeItem[0])
    console.log(ressee)
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get("/Success", (req, res) => {

  return res.send(htmlsuccesspage)

})
app.get("/Cancel", (req, res) => {
  return res.send({ msg: "cancel" })
})

app.get("/bought",async (req,res)=>{
  const buyingcourses=await coursetype.find({useremail:{$eq:course1}})
  console.log(buyingcourses)
  
  return res.send(buyingcourses)
})




app.listen(port, async () => {
  try {
    await connection();
    console.log("server starting...");
  } catch (err) {
    console.log(err, "error");
  }
});