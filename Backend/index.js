
const express = require("express");
const app = express();
const mysql = require("mysql");
var constants = require("./config.json");
const bodyParser = require("body-parser");
const cors = require("cors");
const alert = require("alert");
const multer=require("multer");


const connection = mysql.createPool({
  host: constants.DB.host,
  user: constants.DB.username,
  password: constants.DB.password,
  port: constants.DB.port,
  database: constants.DB.database,
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.listen(3001, () => {
  console.log("Running on port 3001");
});

connection.getConnection((err) => {
  if (err) {
    throw "Error occured: " + err;
  }
  console.log("pool created");
});

app.get("/RestaurantLogin", (req, res) => {
  const sqlSelect = "SELECT * FROM Restaurant_signIn";
  connection.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});


app.post("/RestaurantLogin", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const sqlSelect = "SELECT * FROM restaurant_signUp WHERE email_id=? AND password=?";
  const sqlInsert ="INSERT INTO Restaurant_signIn (restaurantName, email_id, password, location) SELECT restaurantName, email_id, password, location FROM restaurant_signUp WHERE email_id=? AND password=?"

  connection.query(sqlSelect, [email, password], (err, result) => {
    if (err) {
      res.send({
        err: err
      });
    }
    if (result.length > 0) {
        res.send(result);
    } else {
      res.send({
        message: "Wrong Email-ID or password!"
      });
    }
  })

  connection.query(sqlInsert,[email,password], (err,result) => {
    console.log(err);
  })
});

app.post("/CustomerLogin", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const sqlSelect = "SELECT * FROM customer_signUp WHERE email_id=? AND password=?";
  connection.query(sqlSelect, [email, password], (err, result) => {
    if (err) {
      res.send({
        err: err
      });
    }
    if (result.length > 0) {
      res.send(result);
    } else {
      res.send({
        message: "Wrong Email-ID or password!"
      });
    }
  });
})
app.get("/CustomerSignup", (req, res) => {
  const sqlSelect = "SELECT * FROM customer_signUp";
  connection.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
app.post("/CustomerSignup", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const sqlInsert = "INSERT INTO customer_signUp (name,email_id,password) VALUES (?,?,?)"
  connection.query(sqlInsert, [name, email, password], (err, result) => {
    console.log(result);
  });
})
app.get("/RestaurantSignup", (req, res) => {
  const sqlSelect = "SELECT * FROM restaurant_signUp";
  connection.query(sqlSelect, (err, result) => {
    res.send(err);
  });
});

app.post("/RestaurantSignup", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const location = req.body.location;
  const sqlInsert = "INSERT INTO restaurant_signUp (restaurantName, email_id, password, location) VALUES (?,?,?,?)"
  connection.query(sqlInsert, [name, email, password, location], (err, result) => {
    console.log(err);
  });
})
app.get("/RestaurantLanding",(req,res) => {
  const sqlSELECT= "SELECT * FROM restaurant_signUp";
  connection.query(sqlSELECT, (err, result) => {
    if(err){
      return res.send(err);
    }
    else{
      return res.json({
        dashboard: result
      })
    }
  });
})
// app.post("/Edit.jsx", (req,res) => {
//   const sqlSELECT="SELECT * FROM restaurant_signUp"
//   connection.query(sqlSELECT,[restaurantName,location, picture, description, contact, timings],(err,result) => {
//     if(err){
//       return res.send(err);
//     }
//     else{
//       return res.json({
//         editData: result
//       })
//   }
// })
// })
// app.get("/Edit.jsx", (req,res) => {
//   const sqlSELECT="SELECT * FROM restaurant_signUp"
//   connection.query(sqlSELECT,(err,result) => {
//     if (err) {
//       res.send({
//         err: err
//       })
//     }
//     else {
//       res.send(result)
//       }
//   })
// })
// app.get("/Edit.jsx",(req,res) => {
//   const resName= req.body.resName;
//   const sqlSELECT ="SELECT * FROM restaurant_signUp";
//   connection.query(sqlSELECT,[resName], (err,result) => {
//     res.send(result);
//   })
// })
app.put('/Edit',(req, res)=>{
  console.log("edit called");
  const name=req.body.resName;
  const newname=req.body.newName;
  connection.query("UPDATE restaurant_signUp SET restaurantName=? WHERE restaurantName=?", [newname,name],
  (err, result)=>{
    if(err){
      console.log("error");
      res.send({err:err});
    }
    else{
      console.log("dONE")
    }
    }
  );
});

app.post("/AddDishes", (req,res)=>{
  const dishName=req.body.dishName;
  const dishIngredients=req.body.dishIngredients;
  const dishImg=req.body.dishImg;
  const dishPrice=req.body.dishPrice;
  const dishDescription=req.body.dishDescription;
  const dishCategory=req.body.dishCategory;
  const dishRes = req.body.dishRes;
  const SQLInsert="INSERT INTO Dishes (dish_name, dish_ingredients, dish_img, dish_price, dish_description, dish_category, res_name) VALUES (?,?,?,?,?,?,?)"
  connection.query(SQLInsert, [dishName,dishIngredients,dishImg,dishPrice,dishDescription,dishCategory,dishRes],(err,result) => {
    if(err){
      return res.send(err);
    }
    else{
      return res.json({
        data:result
      })
    }
  })
})

app.put("/EditDishes",(req,res) => {
  const dishName = req.body.dishName;
  const newDishIngredients = req.body.newDishIngredients;
  const newDishPrice = req.body.newDishPrice;
  const newDishDescription= req.body.newDishDescription;
  const newDishCategory=req.body.newDishCategory;
  const sqlUpdate = "UPDATE Dishes SET dish_ingredients=?, dish_price=?, dish_description=?, dish_category=? WHERE dish_name=?";
  connection.query(sqlUpdate,[newDishIngredients,newDishPrice,newDishDescription,newDishCategory,dishName], (err,result) => {
    if(err){
      console.log("error");
      res.send({err:err});
    }
    else{
      console.log("Update done!")
    }
  })
})

app.get("/Dishes",(req,res) => {
  const sqlSelect = "SELECT * FROM Dishes";
  connection.query(sqlSelect, (err,result) =>{
    if (err){
      return res.send(err);
    }
  else{
    return res.json({
      dishes: result
    })
  }
})
})

app.get("/CustomerPage", (req,res) => {
  const sqlSelect= "SELECT * FROM customer_signUp";
  connection.query(sqlSelect, (err,result) => {
    if(err){
      return res.send(err);
    }
    else{
      return res.json({
        customer: result
      })
    }
  })
})

app.put("/EditCustomerProfile", (req,res) => {
  const customerName=req.body.customerName;
  const dob=req.body.dob;
  const city=req.body.city;
  const state=req.body.state;
  const country=req.body.country;
  const nickName=req.body.nickName;
  const email=req.body.email;
  const phone=req.body.phone;
  const sqlUpdate = "UPDATE customer_signUp SET email_id=?, date_of_birth=?, contact=?, city=?, state=?, nickname=? WHERE name=?";
  connection.query(sqlUpdate,[email,dob,phone,city,state,nickName,customerName], (err,result) =>{
    if(err){
      console.log("error");
      res.send({err:`err`});
    }
    else{
      console.log("Update done!")
    }
  })
})

app.get("/RestaurantDisplay",(req,res) => {
  const sqlSELECT="SELECT id,restaurantName,location, picture, description,contact,timings,dishes,type_of_delivery,type_of_food FROM restaurant_signUp";
  connection.query(sqlSELECT,(err,result) => {
    if(err){
      return res.send(err);
    }
    else{
      return res.json({
        details: result
      })
    }
  })
})
app.get("/Restaurant",(req,res) => {
  const sqlSELECT="SELECT id,restaurantName,location, picture, description,contact,timings FROM restaurant_signUp";
  connection.query(sqlSELECT,(err,result) => {
    if(err){
      return res.send(err);
    }
    else{
      return res.json({
        details: result
      })
    }
  })
})
app.post("/AddtoCart", (req,res) => {
  const customerName=req.body.customerName ;
  const customerEmail=req.body.customerEmail ;
  const dishName=req.body.dishName ;
  const restaurantName=req.body.restaurantName ;
  const price=req.body.price ;
  const dishCategory=req.body.dishCategory ;
  const currentOrder=req.body.currentOrder;
  const sqlInsert ="INSERT INTO cart_items (customer_name,customer_email,dish_name, restaurant_name, price, dish_category,current_order) VALUES (?,?,?,?,?,?,?)";
  connection.query(sqlInsert,[customerName,customerEmail,dishName,restaurantName,price,dishCategory,currentOrder],(err,result) => {
    if(err){
      return console.log(err);
    }
    else{
      return console.log("Inserted successfully!");
    }
  })
})
app.put("/AddtoCart", (req,res) => {
  const location = req.body.location;
  const name=req.body.name;
  const sqlInsert ="UPDATE cart_items SET location=? WHERE customer_name=?";
  connection.query(sqlInsert,[location,name],(err,result) => {
    if(err){
      return console.log(err);
    }
    else{
      return console.log("Inserted successfully!");
    }
  })
})
app.put("/AddtoCart/OrderPlaced", (req,res) => {
  const currentOrder = req.body.currentOrder;
  const name=req.body.name;
  const sqlInsert ="UPDATE cart_items SET current_order=? WHERE customer_name=?";
  connection.query(sqlInsert,[currentOrder,name],(err,result) => {
    if(err){
      return console.log(err);
    }
    else{
      return console.log("Inserted successfully!");
    }
  })
})
app.get("/AddtoCart",(req,res) => {
  const sqlSELECT= "SELECT * FROM cart_items";
  connection.query(sqlSELECT, (err, result) => {
    if(err){
      return res.send(err);
    }
    else{
      return res.json({
        dashboard: result
      })
    }
  });
})
