// const Razorpay = require('razorpay');
// const { RAZORPAY_ID_KEY, RAZORPAY_SECRET_KEY } = process.env;

// const razorpayInstance = new Razorpay({
//     key_id: RAZORPAY_ID_KEY,
//     key_secret: RAZORPAY_SECRET_KEY
// });

// const renderProductPage = async (req, res) => {
//     try {
//         res.render('product');
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// const createOrder = async (req, res) => {
//     try {
//         const amount = req.body.amount * 100
//         const options = {
//             amount: amount,
//             currency: 'INR',
//             receipt: 'razorUser@gmail.com'
//         }

//         razorpayInstance.orders.create(options,
//             (err, order) => {
//                 if (!err) {
//                     res.status(200).send({
//                         success: true,
//                         msg: "Order Created",
//                         order_id: order.id,
//                         amount: amount,
//                         key_id: RAZORPAY_ID_KEY,
//                         product_name: req.body.name,
//                         description: req.body.description,
//                         contact: "77777777777",
//                         name: "rohit",
//                         email: "rohit@gmail.com"

//                     })
//                 }
//                 else {
//                     res.status(400).send({ success: false, msg: "Something went wrong!" });
//                 }
//             }
//         )
//     } catch (error) {
//         null
//     }
// }

// module.exports = {
//     renderProductPage,
//     createOrder
// }

// const Razorpay = require ("razorpay");


 
//     const orderCreate = async(req, res, next) => {
//         try {
//             // order_id:"88888888", amount: 300, currency: "INR", payment_capture: 1
//             const instance = new Razorpay({
//                 key_id: "rzp_test_jSsdReuti25USX",
//                 key_secret: "US9H3KiIDoCtN5jVF2fgi9oC"
//             })

//             const {order_id, amount, payment_capture, currency} = req.body
//         } catch (err) {
//             console.log(err);
//         }
//     }
//     // async getMainList(req, res, next) {

//     // }


// module.exports ={ orderCreate}