const express = require("express");
const app = express();
const mysql = require("mysql");
var constants = require("./config.json");
const bodyParser = require("body-parser");
const cors = require("cors");
const alert = require("alert");
const multer = require("multer");
const bcrypt=require("bcrypt");
const ipAddress=`52.15.59.71`;

// const {encrypt,decrypt} = require("./EncryptionHandler");


const connection = mysql.createPool({
  host: constants.DB.host,
  user: constants.DB.username,
  password: constants.DB.password,
  port: constants.DB.port,
  database: constants.DB.database,
});
app.use(cors());
// app.use(cors({origin:`http://${ipAddress}:3001`,credentials :true}));
// app.use(express.json(
//   {
//     limit: '50mb'
//   }
// ));
// app.use(bodyParser.urlencoded({
//   limit: '50mb',
//   extended: true
// }));

app.use((req,res,next) =>{
  res.setHeader("Access-Control-Allow-Origin","http://52.15.59.71:3000");
  res.setHeader("Access-Control-Allow-Methods","GET,POST,OPTIONS,PUT,PATCH,DELETE,UPDATE");
  res.setHeader("Access-Control-Allow-Headers","X-Requested-With,content-type");
  res.setHeader("Access-Control-Allow-Credentials",true);

})

app.listen(`52.15.59.71:3001`,() => {
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
  const sqlInsert = "INSERT INTO Restaurant_signIn (restaurantName, email_id, password, location) SELECT restaurantName, email_id, password, location FROM restaurant_signUp WHERE email_id=? AND password=?"

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
  connection.query(sqlInsert, [email, password], (err, result) => {
    console.log(err);
  })
});
// app.post("/RestaurantLogin", (req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;
//   const sqlSelect = "SELECT * FROM restaurant_signUp WHERE email_id=? AND password=?";
//   const sqlInsert = "INSERT INTO Restaurant_signIn (restaurantName, email_id, password, location) SELECT restaurantName, email_id, password, location FROM restaurant_signUp WHERE email_id=? AND password=?"
//
//   connection.query(sqlSelect, [email, password], (err, result) => {
//     if (err) {
// //       res.send({
// //         err: err
// //       });
// //     }
// //     if (result.length > 0) {
// //       res.send(result);
// //     } else {
// //       res.status(401).send('Not authorized');
// //     }
// //   })
//
//   connection.query(sqlInsert, [email, password], (err, result) => {
//     console.log(err);
//   })
// });

app.post("/CustomerLogin", (req, res) => {
  const email = req.body.email;
  const password=req.body.password;
  const sqlSelect = "SELECT * FROM customer_signUp WHERE email_id=? AND password=?";
  connection.query(sqlSelect, [email,password], (err, result) => {
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
// app.post("/CustomerLogin", (req, res) => {
//   const email = req.body.email;
//   const password=req.body.password;
//   const sqlSelect = "SELECT * FROM customer_signUp WHERE email_id=? AND password=?";
//   connection.query(sqlSelect, [email,password], (err, result) => {
//     if (err) {
//       res.send({
//         err: err
//       });
//     }
//     if (result.length > 0) {
//       res.send(result);
//     }
//
//     else {
//        res.status(401).send("Wrong Email-ID or password!");
//     }
//   });
// })
app.get("/CustomerSignupCheck", (req, res) => {
  const sqlSelect = "SELECT * FROM customer_signUp";
  connection.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});
app.post("/CustomerSignup", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const hashedPassword = encrypt(password);
  // const sqlInsert = "INSERT INTO customer_signUp (name,email_id,password,iv) VALUES (?,?,?,?)"
  // connection.query(sqlInsert, [name, email, hashedPassword.password,hashedPassword.iv], (err, result) => {
    const sqlInsert = "INSERT INTO customer_signUp (name,email_id,password) VALUES (?,?,?)"
    connection.query(sqlInsert, [name, email, password], (err, result) => {
      res.send(err);
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
  const status = req.body.status;
  // const hashedPassword = encrypt(password);
  // const sqlInsert = "INSERT INTO restaurant_signUp (restaurantName, email_id, password, location,iv) VALUES (?,?,?,?,?)"
  // connection.query(sqlInsert, [name, email, hashedPassword.password, location,hashedPassword.iv], (err, result) => {
  const sqlInsert = "INSERT INTO restaurant_signUp (restaurantName, email_id, password, location,type_of_delivery) VALUES (?,?,?,?,?)"
  connection.query(sqlInsert, [name, email, password, location,status], (err, result) => {
    console.log(err);
  });
})
app.get("/RestaurantLanding", (req, res) => {
  const sqlSELECT = "SELECT * FROM restaurant_signUp";
  connection.query(sqlSELECT, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
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
app.put('/EditName', (req, res) => {
  console.log("edit called");
  const resName = req.body.resName;
  const newName = req.body.newName;
  const sqlUpdate = "UPDATE restaurant_signUp SET restaurantName=? WHERE restaurantName=?";
  connection.query(sqlUpdate, [newName, resName], (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      console.log("done");
    }
  })
})
app.put('/EditLocation', (req, res) => {
  console.log("edit called");
  const resName = req.body.resName;
  const newLocation = req.body.newLocation;
  const sqlUpdate = "UPDATE restaurant_signUp SET location=? WHERE restaurantName=?";
  connection.query(sqlUpdate, [newLocation, resName], (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      console.log("done");
    }
  })
})
app.put('/EditImg', (req, res) => {
  console.log("edit called");
  const resName = req.body.resName;
  const newImg = req.body.newImg;
  const sqlUpdate = "UPDATE restaurant_signUp SET picture=? WHERE restaurantName=?";
  connection.query(sqlUpdate, [newImg, resName], (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      console.log("done");
    }
  })
})
app.put('/EditDescription', (req, res) => {
  console.log("edit called");
  const resName = req.body.resName;
  const newDescription = req.body.newDescription;
  const sqlUpdate = "UPDATE restaurant_signUp SET description=? WHERE restaurantName=?";
  connection.query(sqlUpdate, [newDescription, resName], (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      console.log("done");
    }
  })
})
app.put('/EditContact', (req, res) => {
  console.log("edit called");
  const resName = req.body.resName;
  const newContact = req.body.newContact;
  const sqlUpdate = "UPDATE restaurant_signUp SET contact=? WHERE restaurantName=?";
  connection.query(sqlUpdate, [newContact, resName], (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      console.log("done");
    }
  })
})
app.put('/EditTimings', (req, res) => {
  console.log("edit called");
  const resName = req.body.resName;
  const newTimings = req.body.newTimings;
  const sqlUpdate = "UPDATE restaurant_signUp SET timings=? WHERE restaurantName=?";
  connection.query(sqlUpdate, [newTimings, resName], (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      console.log("done");
    }
  })
})

app.post("/AddDishes", (req, res) => {
  const dishName = req.body.dishName;
  const dishIngredients = req.body.dishIngredients;
  const dishImg = req.body.dishImg;
  const dishPrice = req.body.dishPrice;
  const dishDescription = req.body.dishDescription;
  const dishCategory = req.body.dishCategory;
  const resName = req.body.resName;
  const type=req.body.type;
  const SQLInsert = "INSERT INTO Dishes (type_of_food,dish_name,dish_img, dish_ingredients, dish_price, dish_description, dish_category,res_name) VALUES (?,?,?,?,?,?,?,?)"
  connection.query(SQLInsert, [type,dishName,dishImg, dishIngredients, dishPrice, dishDescription, dishCategory, resName], (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      console.log("Inserted")
    }
  })
})
app.put("/EditDishName", (req, res) => {
  const resName=req.body.resName;
  const dishName=req.body.dishName;
  const newDishName=req.body.newDishName;
  const sqlUpdate = "UPDATE Dishes SET dish_name=? WHERE dish_name=? AND res_name=?";
  connection.query(sqlUpdate, [newDishName,dishName,resName], (err, result) => {
    if (err) {
      console.log("error");
      res.send({
        err: err
      });
    } else {
      console.log("Update done!")
    }
  })
})
app.put("/EditDishImg", (req, res) => {
  const resName=req.body.resName;
  const dishName=req.body.dishName;
  const newDishImg=req.body.newDishImg;
  const sqlUpdate = "UPDATE Dishes SET dish_img=? WHERE dish_name=? AND res_name=?";
  connection.query(sqlUpdate, [newDishImg,dishName,resName], (err, result) => {
    if (err) {
      console.log("error");
      res.send({
        err: err
      });
    } else {
      console.log("Update done!")
    }
  })
})
app.put("/EditIngredients", (req, res) => {
  const resName=req.body.resName;
  const dishName=req.body.dishName;
  const newDishIngredients=req.body.newDishIngredients;
  const sqlUpdate = "UPDATE Dishes SET dish_ingredients=? WHERE dish_name=? AND res_name=?";
  connection.query(sqlUpdate, [newDishIngredients,dishName,resName], (err, result) => {
    if (err) {
      console.log("error");
      res.send({
        err: err
      });
    } else {
      console.log("Update done!")
    }
  })
})
app.put("/EditPrice", (req, res) => {
  const resName=req.body.resName;
  const dishName=req.body.dishName;
  const newDishPrice=req.body.newDishPrice;
  const sqlUpdate = "UPDATE Dishes SET dish_price=? WHERE dish_name=? AND res_name=?";
  connection.query(sqlUpdate, [newDishPrice,dishName,resName], (err, result) => {
    if (err) {
      console.log("error");
      res.send({
        err: err
      });
    } else {
      console.log("Update done!")
    }
  })
})
app.put("/EditDishDescription", (req, res) => {
  const resName=req.body.resName;
  const dishName=req.body.dishName;
  const newDishDescription=req.body.newDishDescription;
  const sqlUpdate = "UPDATE Dishes SET dish_description=? WHERE dish_name=? AND res_name=?";
  connection.query(sqlUpdate, [newDishDescription,dishName,resName], (err, result) => {
    if (err) {
      console.log("error");
      res.send({
        err: err
      });
    } else {
      console.log("Update done!")
    }
  })
})
app.put("/EditCategory", (req, res) => {
  const resName=req.body.resName;
  const dishName=req.body.dishName;
  const newDishCategory=req.body.newDishCategory;
  const sqlUpdate = "UPDATE Dishes SET dish_category=? WHERE dish_name=? AND res_name=?";
  connection.query(sqlUpdate, [newDishCategory,dishName,resName], (err, result) => {
    if (err) {
      console.log("error");
      res.send({
        err: err
      });
    } else {
      console.log("Update done!")
    }
  })
})

app.get("/Dishes", (req, res) => {
  const sqlSelect = "SELECT * FROM Dishes";
  connection.query(sqlSelect, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        dishes: result
      })
    }
  })
})

app.get("/CustomerPage", (req, res) => {
  const sqlSelect = "SELECT * FROM customer_signUp";
  connection.query(sqlSelect, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        customer: result
      })
    }
  })
})
app.put("/EditCustomerPhoto", (req, res) => {
  const customerName = req.body.customerName;
  const customerPicture=req.body.customerPicture;
  const sqlUpdate = "UPDATE customer_signUp SET profile_picture=? WHERE name=?";
  connection.query(sqlUpdate, [customerPicture,customerName], (err, result) => {
    if (err) {
      console.log("error");
      res.send({
        err: `err`
      });
    } else {
      console.log("Update done!")
    }
  })
})
app.put("/EditCustomerDOB", (req, res) => {
  const customerName = req.body.customerName;
  const dob = req.body.dob;
  const sqlUpdate = "UPDATE customer_signUp SET date_of_birth=? WHERE name=?";
  connection.query(sqlUpdate, [dob,customerName], (err, result) => {
    if (err) {
      console.log("error");
      res.send({
        err: `err`
      });
    } else {
      console.log("Update done!")
    }
  })
})
app.put("/EditCustomerCity", (req, res) => {
  const customerName = req.body.customerName;
  const city = req.body.city;
  const sqlUpdate = "UPDATE customer_signUp SET city=? WHERE name=?";
  connection.query(sqlUpdate, [city,customerName], (err, result) => {
    if (err) {
      console.log("error");
      res.send({
        err: `err`
      });
    } else {
      console.log("Update done!")
    }
  })
})
app.put("/EditCustomerState", (req, res) => {
  const customerName = req.body.customerName;
  const state = req.body.state;
  const sqlUpdate = "UPDATE customer_signUp SET state=? WHERE name=?";
  connection.query(sqlUpdate, [state,customerName], (err, result) => {
    if (err) {
      console.log("error");
      res.send({
        err: `err`
      });
    } else {
      console.log("Update done!")
    }
  })
})
app.put("/EditCustomerCountry", (req, res) => {
  const customerName = req.body.customerName;
    const country = req.body.country;
  const sqlUpdate = "UPDATE customer_signUp SET country=? WHERE name=?";
  connection.query(sqlUpdate, [country,customerName], (err, result) => {
    if (err) {
      console.log("error");
      res.send({
        err: `err`
      });
    } else {
      console.log("Update done!")
    }
  })
})
app.put("/EditNickName", (req, res) => {
  const customerName = req.body.customerName;
  const nickName = req.body.nickName;
  const sqlUpdate = "UPDATE customer_signUp SET nickname=? WHERE name=?";
  connection.query(sqlUpdate, [nickName,customerName], (err, result) => {
    if (err) {
      console.log("error");
      res.send({
        err: `err`
      });
    } else {
      console.log("Update done!")
    }
  })
})
app.put("/EditCustomerEmail", (req, res) => {
  const customerName = req.body.customerName;
  const customerPicture=req.body.customerPicture;
  const sqlUpdate = "UPDATE customer_signUp SET profile_picture=? WHERE name=?";
  connection.query(sqlUpdate, [customerPicture,customerName], (err, result) => {
    if (err) {
      console.log("error");
      res.send({
        err: `err`
      });
    } else {
      console.log("Update done!")
    }
  })
})
app.put("/EditCustomerNumber", (req, res) => {
  const customerName = req.body.customerName;
  const phone=req.body.phone;
  const sqlUpdate = "UPDATE customer_signUp SET contact=? WHERE name=?";
  connection.query(sqlUpdate, [phone,customerName], (err, result) => {
    if (err) {
      console.log("error");
      res.send({
        err: `err`
      });
    } else {
      console.log("Update done!")
    }
  })
})

app.get("/RestaurantDisplay", (req, res) => {
  const sqlSELECT = "SELECT restaurantName,location, picture, description,contact,timings,dishes,type_of_delivery,type_of_food FROM restaurant_signUp";
  connection.query(sqlSELECT, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        details: result
      })
    }
  })
})
app.get("/Restaurant", (req, res) => {
  const sqlSELECT = "SELECT * FROM restaurant_signUp";
  connection.query(sqlSELECT, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        details: result
      })
    }
  })
})
app.post("/AddtoCart", (req, res) => {
  const customerName = req.body.customerName;
  const customerEmail = req.body.customerEmail;
  const dishName = req.body.dishName;
  const restaurantName = req.body.restaurantName;
  const price = req.body.price;
  const dishCategory = req.body.dishCategory;
  const currentOrder = req.body.currentOrder;
  const sqlInsert = "INSERT INTO cart_items (customer_name,customer_email,dish_name, restaurant_name, price, dish_category,current_order) VALUES (?,?,?,?,?,?,?)";
  connection.query(sqlInsert, [customerName, customerEmail, dishName, restaurantName, price, dishCategory, currentOrder], (err, result) => {
    if (err) {
      return console.log(err);
    } else {
      return console.log("Inserted successfully!");
    }
  })
})
app.put("/AddtoCart/Old", (req, res) => {
  const newLocation = req.body.newLocation;
  const currentOrder = req.body.currentOrder;
  const sqlInsert = "UPDATE cart_items SET location=? WHERE current_order=?";
  connection.query(sqlInsert, [newLocation, currentOrder], (err, result) => {
    if (err) {
      return console.log(err);
    } else {
      return console.log("Inserted successfully!");
    }
  })
})
app.put("/AddtoCart/New", (req, res) => {
  const location = req.body.location;
  const currentOrder = req.body.currentOrder;
  const sqlInsert = "UPDATE cart_items SET location=? WHERE current_order=?";
  connection.query(sqlInsert, [location, currentOrder], (err, result) => {
    if (err) {
      return console.log(err);
    } else {
      return console.log("Inserted successfully!");
    }
  })
})
app.put("/AddtoCart/OrderPlaced", (req, res) => {
  const currentOrder = req.body.currentOrder;
  const name = req.body.name;
  const date = req.body.date;
  const restaurantName = req.body.restaurantName;
  const orderStatus=req.body.orderStatus;
  const temp=req.body.temp;
  const sqlInsert = "UPDATE cart_items SET current_order=?,date=?, order_status=?,temp=? WHERE customer_name=? AND restaurant_name=? AND current_order=?";
  connection.query(sqlInsert, [currentOrder, date,orderStatus,temp, name, restaurantName,1], (err, result) => {
    if (err) {
      return console.log(err);
    } else {
      return console.log("Inserted successfully!");
    }
  })
})
app.get("/AddtoCart", (req, res) => {
  const sqlSELECT = "SELECT * FROM cart_items";
  connection.query(sqlSELECT, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        dashboard: result
      })
    }
  });
})
app.delete("/AddtoCart", (req, res) => {
  const sqlDELETE = "DELETE FROM cart_items WHERE location IS NULL";
  connection.query(sqlDELETE, (err, result) => {
    if (err) {
      return console.log(err);
    } else {
      return console.log("Deleted successfully!");
    }
  })
})
app.post("/Favorites", (req, res) => {
  const name = req.body.name;
  const restaurantName = req.body.restaurantName;
  const restaurantLocation = req.body.restaurantLocation;
  const sqlInsert = "INSERT INTO favorites (customer_name, restaurant_name, restaurant_location) VALUES (?,?,?)"
  connection.query(sqlInsert, [name, restaurantName, restaurantLocation], (err, result) => {
    if (err) {
      return console.log(err);
    } else {
      return console.log("Inserted successfully!");
    }
  })
})
app.get("/Favorites", (req, res) => {
  // const name=req.body.name;
  const sqlSELECT = "SELECT * FROM favorites"
  connection.query(sqlSELECT, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        details: result
      })
    }
  })
})
app.get("/OrdersRestaurant", (req, res) => {
  const sqlSELECT = "SELECT customer_name,temp,restaurant_name,delivery_status, GROUP_CONCAT(dish_name SEPARATOR ', ') as DISHES FROM cart_items GROUP BY date"
  connection.query(sqlSELECT, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        details: result
      })
    }
  })
})
app.put("/AddDeliveryStatus", (req, res) => {
  const delivery = req.body.delivery;
  const customerName = req.body.customerName;
  const restaurantName = req.body.restaurantName;
  const temp=req.body.temp;
  console.log(restaurantName);
  const sqlUpdate = "UPDATE cart_items SET order_status=? WHERE customer_name=? AND restaurant_name=? AND temp=?";
  connection.query(sqlUpdate, [delivery, customerName, restaurantName,temp], (err, result) => {
    if (err) {
      return console.log(err);
    } else {
      return console.log("Inserted successfully!");
    }
  })
})
app.post("/AddtoCart/DeliveryStatus", (req, res) => {
  const status = req.body.status;
  const currentOrder = req.body.currentOrder;
  const sqlUpdate = "UPDATE cart_items SET delivery_status=? WHERE current_order=?";
  connection.query(sqlUpdate, [status, currentOrder], (err, result) => {
    if (err) {
      return console.log(err);
    } else {
      return console.log("Inserted successfully!");
    }
  })
})
app.get("/AddtoCartView", (req, res) => {
  const restaurantName = req.body.restaurantName;
  const sqlSELECT = "SELECT delivery_status,restaurant_name,customer_name FROM cart_items WHERE restaurant_name=?"
  connection.query(sqlSELECT, [restaurantName], (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        dashboard: result
      })
    }
  });
})
app.get("/CustomerHistory", (req, res) => {
  const sqlSELECT = "SELECT customer_name,restaurant_name,date,order_status,location,delivery_status, GROUP_CONCAT(dish_name SEPARATOR ', ') as DISHES FROM cart_items GROUP BY date";
  connection.query(sqlSELECT, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        details: result
      })
    }
  })
})
app.get("/CustomerReciept", (req, res) => {
  const sqlSELECT = "SELECT customer_name,temp,restaurant_name,date,order_status,location,price, GROUP_CONCAT(dish_name SEPARATOR ', ') as DISHES FROM cart_items GROUP BY temp";
  connection.query(sqlSELECT, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        details: result
      })
    }
  })
})
app.get("/CartFilter", (req, res) => {
  const sqlSELECT = "SELECT customer_name,temp,restaurant_name,order_status,delivery_status, GROUP_CONCAT(dish_name SEPARATOR ', ') as DISHES FROM cart_items GROUP BY temp";
  connection.query(sqlSELECT, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        details: result
      })
    }
    })
    })
app.get("/CustomerFilter", (req, res) => {
  const sqlSELECT = "SELECT customer_name,restaurant_name,order_status,date,delivery_status, GROUP_CONCAT(dish_name SEPARATOR ', ') as DISHES FROM cart_items GROUP BY date";
  connection.query(sqlSELECT, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        details: result
      })
    }
  })
})
app.get("/ShowPassword/Customer",(req,res) =>{
  const sqlSELECT = "SELECT * FROM customer_signUp";
  connection.query(sqlSELECT,(err,result) => {
    if(err){
      console.log(err);
    }
    else{
      res.send(result);
    }
  })
})

app.put("/EditResNameFav",(req,res) => {
  const newName=req.body.newName;
  const resName=req.body.resName;
  const sqlUpdate ="UPDATE favorites SET restaurant_name=? WHERE restaurant_name=?";
  connection.query(sqlUpdate,[newName,resName],(err,result) => {
    if(err){
      console.log(err);
    }
    else{
      res.send("Update done!")
    }
  })
})
app.put("/EditResNameDishes",(req,res) => {
  const newName=req.body.newName;
  const resName=req.body.resName;
  const sqlUpdate ="UPDATE Dishes SET res_name=? WHERE res_name=?";
  connection.query(sqlUpdate,[newName,resName],(err,result) => {
    if(err){
      console.log(err);
    }
    else{
      res.send("Update done!")
    }
  })
})
app.put("/EditResNameCart",(req,res) => {
  const newName=req.body.newName;
  const resName=req.body.resName;
  const sqlUpdate ="UPDATE cart_items SET restaurant_name=? WHERE restaurant_name=?";
  connection.query(sqlUpdate,[newName,resName],(err,result) => {
    if(err){
      console.log(err);
    }
    else{
      res.send("Update done!")
    }
  })
})
app.put("/EditCustomerNameInCartItems",(req,res) =>{
  const customerName=req.body.customerName;
  const newName=req.body.newName;
  const sqlUpdate="UPDATE cart_items SET customer_name=? WHERE customer_name=?";
  connection.query(sqlUpdate,[newName,customerName],(err,result) =>{
    if(err){
      console.log(err);
    }
    else{
      res.send("Update done!")
    }
  })
})
app.put("/EditCustomerNameInFav",(req,res) =>{
  const customerName=req.body.customerName;
  const newName=req.body.newName;
  const sqlUpdate="UPDATE favorites SET customer_name=? WHERE customer_name=?";
  connection.query(sqlUpdate,[newName,customerName],(err,result) =>{
    if(err){
      console.log(err);
    }
    else{
      res.send("Update done!")
    }
  })
})
app.put("/EditCustomerNameInCustomerSignUp",(req,res) =>{
  const customerName=req.body.customerName;
  const newName=req.body.newName;
  const sqlUpdate="UPDATE customer_signUp SET name=? WHERE name=?";
  connection.query(sqlUpdate,[newName,customerName],(err,result) =>{
    if(err){
      console.log(err);
    }
    else{
      res.send("Update done!")
    }
  })
})

app.get("/GetLocation",(req,res) => {
  const sqlSELECT="SELECT location,customer_name FROM cart_items"
  connection.query(sqlSELECT,(err,result) =>{
    if(err){
     console.log(err)
    }
    return res.json({
      details: result
    })
  })
})
