

// // const express = require("express");
// // const mongoose = require("mongoose");
// // const cors = require("cors");
// // const dotenv = require("dotenv");
// // const bcrypt = require("bcryptjs");
// // const jwt = require("jsonwebtoken");
// // const multer = require("multer");
// // const fs = require("fs");
// // const path = require("path");

// // dotenv.config();

// // const app = express();
// // const PORT = process.env.PORT || 5000;

// // // ================= MIDDLEWARE =================
// // app.use(cors());
// // app.use(express.json());
// // app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



// // // ================= MONGODB =================
// // mongoose
// //   .connect(process.env.MONGO_URI)
// //   .then(() => console.log("MongoDB connected"))
// //   .catch(err => console.log("MongoDB error:", err));

// // // ================= USER SCHEMA =================
// // const userSchema = new mongoose.Schema({
// //   name: String,
// //   email: String,
// //   password: String,
// // });

// // const User = mongoose.model("User", userSchema);


// // // const upload = multer({ storage });

// // // ================= REGISTER =================
// // app.post("/admin/register", async (req, res) => {
// //   try {
// //     const { name, email, password } = req.body;

// //     const exists = await User.findOne({ email });
// //     if (exists) return res.status(400).json({ message: "User already exists" });

// //     const hashedPassword = await bcrypt.hash(password, 10);

// //     const user = new User({ name, email, password: hashedPassword });
// //     await user.save();

// //     res.status(201).json({ message: "User registered successfully" });
// //   } catch (err) {
// //     res.status(500).json({ message: err.message });
// //   }
// // });

// // // ================= LOGIN =================
// // app.post("/admin/login", async (req, res) => {
// //   try {
// //     const { email, password } = req.body;

// //     const user = await User.findOne({ email });
// //     if (!user) return res.status(400).json({ message: "User not found" });

// //     const isValid = await bcrypt.compare(password, user.password);
// //     if (!isValid) return res.status(400).json({ message: "Invalid credentials" });

// //     const token = jwt.sign({ id: user._id }, "SECRET_KEY", { expiresIn: "1h" });

// //     res.json({
// //       token,
// //       user: { id: user._id, name: user.name, email: user.email },
// //     });
// //   } catch (err) {
// //     res.status(500).json({ message: err.message });
// //   }
// // });




// // // ================= ITEM SCHEMA =================
// // const itemSchema = new mongoose.Schema({
// //   item_image: String,
// //   item_name: String,
// //   description: String,
// //   price: Number,
// //   status: String,
// // }); 
// // const Item = mongoose.model("Item", itemSchema); 
// //   // ================= UPLOAD FOLDERS =================
// // const uploadDir = path.join(__dirname, "uploads");
// // const itemDir = path.join(uploadDir, "item");

// // if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);
// // if (!fs.existsSync(itemDir)) fs.mkdirSync(itemDir);

// // // ================= MULTER =================
// // const storage = multer.diskStorage({
// //   destination: function (req, file, cb) {
// //     cb(null, "uploads/item");
// //   },
// //   filename: function (req, file, cb) {
// //     cb(null, Date.now() + "-" + file.originalname);
// //   },
// // });

// // const upload = multer({ storage });  
// //  // ================= ADD ITEM =================
// // app.post("/api/item", upload.single("item_image"), async (req, res) => {
// //   try {
// //     const { item_name, description, price, status } = req.body;

// //     if (!req.file) return res.status(400).json({ message: "Image is required" });

// //     const exists = await Item.findOne({ item_name });
// //     if (exists) return res.status(400).json({ message: "Item already exists" });

// //     const item = new Item({
// //       item_image: req.file.filename,
// //       item_name,
// //       description,
// //       price,
// //       status,
// //     });

// //     await item.save();
// //     res.status(201).json({ message: "Item added successfully" });
// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).json({ message: err.message });
// //   }
// // });

// // //getdata

// // app.get("/api/item", async (req, res) => {
// //   try {
// //     const items = await Item.find(); // Retrieve all items from the database
// //     res.status(200).json(items); // Send the items as a JSON response
// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).json({ message: "Server Error ❌" });
// //   }
// // });


// // app.put("/api/item/:id", upload.single("item_image"), async (req, res) => {
// //   try {
// //     const { id } = req.params;
// //     const { item_name, description, price, status } = req.body;

// //     const item = await Item.findById(id);
// //     if (!item) return res.status(404).json({ message: "Item not found" });

// //     if (item_name) item.item_name = item_name;
// //     if (description) item.description = description;
// //     if (price) item.price = price;
// //     if (status) item.status = status;

// //     if (req.file) {
// //       const oldImagePath = path.join(itemDir, item.item_image);
// //       if (fs.existsSync(oldImagePath)) fs.unlinkSync(oldImagePath);
// //       item.item_image = req.file.filename;
// //     }

// //     await item.save();
// //     res.json({ message: "Item updated successfully", item });
// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).json({ message: err.message });
// //   }
// // });



// // // ================= START SERVER =================
// // app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));




// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const multer = require("multer");
// const fs = require("fs");
// const path = require("path");

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // ================= MIDDLEWARE =================
// app.use(cors());
// app.use(express.json());
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // ================= MONGODB =================
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log("MongoDB error:", err));

// // ================= USER SCHEMA =================
// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
// });
// const User = mongoose.model("User", userSchema);

// // ================= REGISTER =================
// app.post("/admin/register", async (req, res) => {
//   const { name, email, password } = req.body;

//   const exists = await User.findOne({ email });
//   if (exists) return res.status(400).json({ message: "User already exists" });

//   const hashedPassword = await bcrypt.hash(password, 10);
//   await new User({ name, email, password: hashedPassword }).save();

//   res.json({ message: "User registered successfully" });
// });

// // ================= LOGIN =================
// app.post("/admin/login", async (req, res) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email });
//   if (!user) return res.status(400).json({ message: "User not found" });

//   const isValid = await bcrypt.compare(password, user.password);
//   if (!isValid)
//     return res.status(400).json({ message: "Invalid credentials" });

//   const token = jwt.sign({ id: user._id }, "SECRET_KEY", { expiresIn: "1h" });

//   res.json({
//     token,
//     user: { id: user._id, name: user.name, email: user.email },
//   });
// });

// // ================= ITEM SCHEMA =================
// const itemSchema = new mongoose.Schema({
//   item_image: { type: String, required: true },
//   item_name: { type: String, required: true },
//   description: String,
//   price: { type: Number, required: true }, // ✅ ADDED
//   status: {
//     type: String,
//     enum: ["Active", "Inactive"],
//     default: "Active",
//   },
//   category: {
//     type: String,
//     enum: ["Breakfast", "Lunch", "Dinner"],
//     required: true,
//   },
// });

// const Item = mongoose.model("Item", itemSchema);

// // ================= UPLOAD FOLDERS =================
// const uploadDir = path.join(__dirname, "uploads");
// const itemDir = path.join(uploadDir, "item");

// if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);
// if (!fs.existsSync(itemDir)) fs.mkdirSync(itemDir);

// // ================= MULTER =================
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, "uploads/item"),
//   filename: (req, file, cb) =>
//     cb(null, Date.now() + "-" + file.originalname),
// });
// const upload = multer({ storage });

// // ================= ADD ITEM =================
// app.post("/api/item", upload.single("item_image"), async (req, res) => {
//   try {
//     const { item_name, description, price, status, category } = req.body;

//     if (!req.file)
//       return res.status(400).json({ message: "Image required" });

//     if (!category)
//       return res.status(400).json({ message: "Category required" });

//     const exists = await Item.findOne({ item_name });
//     if (exists)
//       return res.status(400).json({ message: "Item already exists" });

//     const item = new Item({
//       item_image: req.file.filename,
//       item_name,
//       description,
//       price,
//       status,
//       category,
//     });

//     await item.save();

//     res.status(201).json({ message: "Item added successfully" });
//   } catch (err) {
//     console.error("ADD ITEM ERROR:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // ================= GET ALL ITEMS =================
// app.get("/api/item", async (req, res) => {
//   const items = await Item.find();
//   res.json(items);
// });

// // ================= GET SINGLE ITEM =================
// app.get("/api/item/:id", async (req, res) => {
//   const item = await Item.findById(req.params.id);
//   if (!item) return res.status(404).json({ message: "Item not found" });
//   res.json(item);
// });

// // ================= UPDATE ITEM =================
// app.put("/api/item/:id", upload.single("item_image"), async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { item_name, description, price, status } = req.body;

//     const item = await Item.findById(id);
//     if (!item) {
//       return res.status(404).json({ message: "Item not found" });
//     }

//     // If new image uploaded → delete old image
//     if (req.file) {
//       if (item.item_image) {
//         const oldPath = path.join(__dirname, "uploads/item", item.item_image);
//         if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
//       }
//       item.item_image = req.file.filename;
//     }

//     item.item_name = item_name;
//     item.description = description;
//     item.price = price;
//     item.status = status;

//     await item.save();

//     res.json({ message: "Item updated successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Update failed", error });
//   }
// });

// // ================= DELETE ITEM =================
// app.delete("/api/item/:id", async (req, res) => {
//   try {
//     const { id } = req.params;

//     const item = await Item.findById(id);
//     if (!item) {
//       return res.status(404).json({ message: "Item not found" });
//     }

//     // Delete image from folder
//     if (item.item_image) {
//       const imgPath = path.join(__dirname, "uploads/item", item.item_image);
//       if (fs.existsSync(imgPath)) fs.unlinkSync(imgPath);
//     }

//     await Item.findByIdAndDelete(id);

//     res.json({ message: "Item deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Delete failed", error });
//   }
// });




// // Reservation Schema
// const reservationSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   date: { type: Date, required: true },
//   people: { type: Number, required: true },
//   request: { type: String, default: "" },
//   status: { type: String, default: "Pending" }
// }, { timestamps: true });

// const Reservation = mongoose.model("Reservation", reservationSchema);

// // Reservation POST Route 
// // Reservation Route
// app.post("/api/reservation", async (req, res) => {
//   try {
//     const { name, email, date, people, request } = req.body;

//     const newBooking = new Reservation({
//       name,
//       email,
//       date: new Date(date),
//       people: Number(people),
//       request
//     });

//     await newBooking.save();
//     res.status(201).json({ message: "Success" });
//   } catch (error) {
//     res.status(500).json({ message: "Failed", error: error.message });
//   }
// });

// //booking
// app.get("/api/reservation", async (req, res) => {
//   try {
//     const bookings = await Reservation.find().sort({ createdAt: -1 });
//     res.status(200).json(bookings);
//   } catch (error) {
//     res.status(500).json({
//       message: "Failed to fetch bookings",
//       error: error.message
//     });
//   }
// });
// //update book
// // UPDATE BOOKING STATUS
// app.put("/api/reservation/:id", async (req, res) => {
//   try {
//     const { status } = req.body;

//     const updatedBooking = await Reservation.findByIdAndUpdate(
//       req.params.id,
//       { status },
//       { new: true }
//     );

//     res.json({
//       message: "Status updated successfully",
//       booking: updatedBooking
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Status update failed",
//       error: error.message
//     });
//   }
// });

// //order




// const orderSchema = new mongoose.Schema({
//   itemId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Item",
//     required: true,
//   },

//   item_name: String,
//   price: Number, // per item price

//   customer_name: {
//     type: String,
//     required: true,
//   },

//   phone: {
//     type: String,
//     required: true,
//   },

//   address: {
//     type: String,
//     required: function () {
//       return this.delivery_mode === "Home Delivery";
//     },
//   },

//   quantity: {
//     type: Number,
//     default: 1,
//   },

//   delivery_mode: {
//     type: String,
//     enum: ["Home Delivery", "Take Away"],
//     required: true,
//   },

//   total_price: Number,

//   order_date: String,
//   order_time: String,

//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
//    status: {
//     type: String,
//     enum: ["Pending", "Preparing", "Delivered", "Cancelled"],
//     default: "Pending",
//   },
// });




// const Order = mongoose.model("Order", orderSchema);

// //postorder

// app.post("/api/order", async (req, res) => {
//   try {
//     const {
//       itemId,
//       item_name,
//       price,
//       customer_name,
//       phone,
//       address,
//       quantity,
//       delivery_mode,
//       order_date,
//       order_time,
//       status,
//     } = req.body;

//     // ================= VALIDATIONS =================
//     if (!itemId || !customer_name || !phone || !delivery_mode) {
//       return res.status(400).json({
//         success: false,
//         message: "Missing required fields",
//       });
//     }

//     if (delivery_mode === "Home Delivery" && !address) {
//       return res.status(400).json({
//         success: false,
//         message: "Address is required for Home Delivery",
//       });
//     }

//     const total_price = price * quantity;

//     // ================= SAVE ORDER =================
//     const newOrder = new Order({
//       itemId,
//       item_name,
//       price,
//       customer_name,
//       phone,
//       address:
//         delivery_mode === "Home Delivery" ? address : "Take Away",

//       quantity,
//       delivery_mode,
//       total_price,
//       order_date,
//       order_time,
//       status,
//     });

//     await newOrder.save();

//     res.status(201).json({
//       success: true,
//       message: "Order placed successfully ✅",
//     });
//   } catch (err) {
//     console.error("Order Error:", err);
//     res.status(500).json({
//       success: false,
//       message: "Order failed ❌",
//       error: err.message,
//     });
//   }
// });
// //fetch orders
// app.get("/api/order",async (req, res) => {
//   try {
//     const orders = await Order.find().sort({ createdAt: -1 });

//     res.json({
//       success: true,
//       orders,
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: "Failed to fetch orders",
//     });
//   }
// });
// //STATUS UPDATE
// app.put("/api/order/status/:id", async (req, res) => {
//   try {
//     const { status } = req.body;

//     await Order.findByIdAndUpdate(req.params.id, { status });

//     res.json({
//       success: true,
//       message: "Order status updated",
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: "Status update failed",
//     });
//   }
// });



// // ================= START SERVER =================
// app.listen(PORT, () =>
//   console.log(`Server running on http://localhost:${PORT}`)
// );




const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ================= MIDDLEWARE =================
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ================= MONGODB =================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB error:", err));

// ================= USER SCHEMA =================
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const User = mongoose.model("User", userSchema);

// ================= REGISTER =================
app.post("/admin/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res.status(400).json({ message: "All fields required" });

  const exists = await User.findOne({ email });
  if (exists) return res.status(400).json({ message: "User already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);
  await new User({ name, email, password: hashedPassword }).save();

  res.json({ message: "User registered successfully" });
});

// ================= LOGIN =================
app.post("/admin/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "User not found" });

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid)
    return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user._id }, "SECRET_KEY", { expiresIn: "1h" });

  res.json({
    token,
    user: { id: user._id, name: user.name, email: user.email },
  });
});

// ================= ITEM SCHEMA =================
const itemSchema = new mongoose.Schema({
  item_image: { type: String, required: true },
  item_name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  status: {
    type: String,
    enum: ["Active", "Inactive"],
    default: "Active",
  },
  category: {
    type: String,
    enum: ["Breakfast", "Lunch", "Dinner"],
    required: true,
  },
});

const Item = mongoose.model("Item", itemSchema);

// ================= UPLOAD FOLDER =================
const uploadDir = path.join(__dirname, "uploads/item");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

// ================= MULTER =================
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// ================= ADD ITEM =================
app.post("/api/item", upload.single("item_image"), async (req, res) => {
  try {
    const { item_name, description, price, status, category } = req.body;

    if (!req.file)
      return res.status(400).json({ message: "Image required" });

    const exists = await Item.findOne({ item_name });
    if (exists)
      return res.status(400).json({ message: "Item already exists" });

    const item = new Item({
      item_image: req.file.filename,
      item_name,
      description,
      price,
      status,
      category,
    });

    await item.save();
    res.status(201).json({ message: "Item added successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// ================= GET ITEMS =================
app.get("/api/item", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.get("/api/item/:id", async (req, res) => {
  const items = await Item.findById(req.params.id);
  res.json(items);
});
// ================= UPDATE ITEM =================
app.put("/api/item/:id", upload.single("item_image"), async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });

    if (req.file) {
      const oldPath = path.join(uploadDir, item.item_image);
      if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      item.item_image = req.file.filename;
    }

    Object.assign(item, req.body);
    await item.save();

    res.json({ message: "Item updated successfully" });
  } catch {
    res.status(500).json({ message: "Update failed" });
  }
});

// ================= DELETE ITEM =================
app.delete("/api/item/:id", async (req, res) => {
  const item = await Item.findById(req.params.id);
  if (!item) return res.status(404).json({ message: "Item not found" });

  const imgPath = path.join(uploadDir, item.item_image);
  if (fs.existsSync(imgPath)) fs.unlinkSync(imgPath);

  await item.deleteOne();
  res.json({ message: "Item deleted successfully" });
});

// ================= ORDER SCHEMA =================
const orderSchema = new mongoose.Schema({
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Item",
    required: true,
  },
  
  item_name: String,
  price: Number,
  quantity: { type: Number, default: 1 },
  total_price: Number,

  customer_name: { type: String, required: true },
  phone: { type: String, required: true },
  address: String,

  delivery_mode: {
    type: String,
    enum: ["Home Delivery", "Take Away"],
    required: true,
  },

  status: {
    type: String,
    enum: ["Pending", "Preparing", "Delivered", "Cancelled"],
    default: "Pending",
  },

  order_date: String,
  order_time: String,

  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", orderSchema);

// ================= PLACE ORDER =================
app.post("/api/order", async (req, res) => {
  try {
    const data = req.body;
    data.total_price = data.price * data.quantity;

    await new Order(data).save();
    res.json({ success: true, message: "Order placed" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Order failed" });
  }
});

// ================= GET ORDERS (FIXED) =================
app.get("/api/order", async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("itemId", "item_image item_name")
      .sort({ createdAt: -1 });

    res.json({ success: true, orders });
  } catch {
    res.status(500).json({ success: false });
  }
});

// ================= UPDATE ORDER STATUS =================
app.put("/api/order/status/:id", async (req, res) => {
  await Order.findByIdAndUpdate(req.params.id, {
    status: req.body.status,
  });
  res.json({ success: true });
});
//book


const reservationSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    date: Date,
    people: Number,
    request: String,
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Cancelled"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

const Reservation = mongoose.model(
  "Reservation",
  reservationSchema
);

// CREATE RESERVATION
app.post("/api/reservation", async (req, res) => {
  try {
    await new Reservation(req.body).save();
    res.status(201).json({ message: "Reservation created" });
  } catch {
    res.status(500).json({ message: "Reservation failed" });
  }
});

// GET RESERVATIONS
app.get("/api/reservation", async (req, res) => {
  const bookings = await Reservation.find().sort({
    createdAt: -1,
  });
  res.json(bookings);
});

// UPDATE STATUS
app.put("/api/reservation/:id", async (req, res) => {
  await Reservation.findByIdAndUpdate(req.params.id, {
    status: req.body.status,
  });
  res.json({ message: "Status updated" });
});



// ================= SERVICE SCHEMA =================
const serviceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: String,
  },
  { timestamps: true }
);

const Service = mongoose.model("Service", serviceSchema);



// ================= SERVICE UPLOAD FOLDER =================
const serviceDir = path.join(__dirname, "uploads/services");
if (!fs.existsSync(serviceDir)) {
  fs.mkdirSync(serviceDir, { recursive: true });
}

// ================= SERVICE MULTER =================
const serviceStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, serviceDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const serviceUpload = multer({ storage: serviceStorage });


// =======================================================
// ================= SERVICE ROUTES ======================
// =======================================================


// ✅ GET ALL SERVICES
app.get("/api/services", async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      services,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});


// ✅ GET SINGLE SERVICE (IMPORTANT FOR EDIT PAGE)
app.get("/api/services/:id", async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.json({
      success: true,
      service,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});


// ✅ ADD NEW SERVICE
app.post(
  "/api/services",
  serviceUpload.single("image"),
  async (req, res) => {
    try {
      const { title, description } = req.body;

      const image = req.file ? req.file.filename : null;

      const newService = new Service({
        title,
        description,
        image,
      });

      await newService.save();

      res.json({
        success: true,
        service: newService,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
);

// ✅ UPDATE SERVICE
app.put(
  "/api/services/:id",
  serviceUpload.single("image"),
  async (req, res) => {
    try {
      const { title, description } = req.body;

      const service = await Service.findById(req.params.id);

      if (!service) {
        return res.status(404).json({
          success: false,
          message: "Service not found",
        });
      }

      service.title = title || service.title;
      service.description = description || service.description;

      if (req.file) {
        if (service.image) {
          const oldImagePath = path.join(serviceDir, service.image);
          if (fs.existsSync(oldImagePath)) {
            fs.unlinkSync(oldImagePath);
          }
        }
        service.image = req.file.filename;
      }

      await service.save();

      res.json({
        success: true,
        service,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
);


// ✅ DELETE SERVICE
app.delete("/api/services/:id", async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    // Delete image from folder
    if (service.image) {
      const imgPath = path.join(serviceDir, service.image);
      if (fs.existsSync(imgPath)) {
        fs.unlinkSync(imgPath);
      }
    }

    await service.deleteOne();

    res.json({
      success: true,
      message: "Service deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});
//
//cheff



const cheffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  designation: { type: String, required: true },
  image: { type: String, required: true }
});

const Cheff = mongoose.model("Cheff", cheffSchema);


const CheffDir = path.join(__dirname, "uploads/cheff");
if (!fs.existsSync(CheffDir)) {
  fs.mkdirSync(CheffDir, { recursive: true });
}

// ================= SERVICE MULTER =================
const cheffStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, CheffDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const cheffUpload = multer({ storage: cheffStorage });
//add cheff
app.post("/api/chefs", cheffUpload.single("image"), async (req, res) => {
  try {
    const { name, designation } = req.body;

    const newChef = new Cheff({
      name,
      designation,
      image: req.file.filename,
    });

    await newChef.save();
    res.json({ message: "Chef Added Successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// ================= GET CHEFS =================
app.get("/api/chefs", async (req, res) => {
  const cheff = await Cheff.find();
  res.json(cheff);
});

// ================= DELETE CHEF =================
app.delete("/api/chefs/:id", async (req, res) => {
  await Cheff.findByIdAndDelete(req.params.id);
  res.json({ message: "Chef Deleted" });
});

app.get("/api/chefs/:id", async (req, res) => {
  const cheff = await Cheff.findById(req.params.id);
  res.json(cheff);
});

// ================= UPDATE CHEF =================
// app.put("/api/chefs/:id", cheffUpload.single("image"), async (req, res) => {
//   try {
//     const { name, designation } = req.body;

//     let updateData = {
//       name,
//       designation,
//     };

//     // If new image uploaded
//     if (req.file) {
//       updateData.image = req.file.filename;
//     }

//     await Cheff.findByIdAndUpdate(req.params.id, updateData);

//     res.json({ message: "Chef Updated Successfully" });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });



app.put("/api/chefs/:id", cheffUpload.single("image"), async (req, res) => {
  try {
    const { name, designation } = req.body;

    // Find existing chef
    const chef = await Cheff.findById(req.params.id);
    if (!chef) return res.status(404).json({ message: "Chef not found" });

    // Prepare updated data
    let updateData = {
      name: name || chef.name,
      designation: designation || chef.designation,
    };

    // If new image uploaded → delete old image and update
    if (req.file) {
      if (chef.image) {
        const oldPath = path.join(__dirname, "uploads/cheff", chef.image);
        if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      }
      updateData.image = req.file.filename;
    }

    // Update chef in DB
    await Cheff.findByIdAndUpdate(req.params.id, updateData, { new: true });

    res.json({
      success: true,
      message: "Chef updated successfully",
      chef: updateData, // you can send back updated data
    });
  } catch (err) {
    console.error("Update Chef Error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});


//contact

app.use("/api/contact", require("./routes/Contact"));
// ================= START SERVER =================
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
