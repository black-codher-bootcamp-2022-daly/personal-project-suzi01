require("dotenv").config();


const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const UsersRoutes = require("./routes/usersRoutes");
// const ConversationRoutes = require("./routes/conversationRoutes");

// const session = require("express-session")
// const passport = require("passport")
// const passportLocalMongoose = require("passport-local-mongoose")

// IMPORT YOUR SCHEMAS HERE
require("./models/Users");
require("./models/Conversation"); 
require("./models/Message");//This is just an example. Don't forget to delete this

const app = express();
// app.use(express.urlencoded({ extended: true }));
// // app.set('veiw engine', 'ejs')

// app.use(session({
//   secret: "Our little secret",
//   resave: false,
//   saveUninitialized: false
// }))

// app.use(passport.initialize())
// app.use(passport.session())

// This is where your API is making its initial connection to the database
mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);
// new code below
// mongoose.set("useCreateIndex", true);
//new code above
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
  useNewUrlParser: true,
});

app.use(bodyParser.json());



// IMPORT YOUR API ROUTES HERE
// Below is just an example. Don't forget to delete it. 
// It's importing and using everything from the profilesRoutes.js file and also passing app as a parameter for profileRoutes to use
require("./routes/usersRoutes")(app);
require("./routes/conversationRoutes")(app);
require("./routes/messageRoutes")(app);
// app.use("/api/", UsersRoutes)
// app.use("/api/conversations", ConversationRoutes )
// app.use("/api/", UsersRoutes)



// const userSchema = new mongoose.Schema({
//   name: {
//     userName: String,
//     first: String,
//     last: String
//   },
//   password: String
// });

// const options = {
//   errorMessages: {
//     MissingPasswordError: 'No password was given',
//     AttemptTooSoonError: 'Account is currently locked. Try again later',
//     TooManyAttemptsError: 'Account locked due to too many failed login attempts',
//     NoSaltValueStoredError: 'Authentication not possible. No salt value stored',
//     IncorrectPasswordError: 'Password or username are incorrect',
//     IncorrectUsernameError: 'Password or username are incorrect',
//     MissingUsernameError: 'No username was given',
//     UserExistsError: 'A user with the given username is already registered'
//   }
// };

// userSchema.plugin(passportLocalMongoose, options)

// const User = new mongoose.model("User", userSchema);

// passport.use(User.createStrategy())

// passport.serializeUser(function (user, done) {
//   done(null, user)
// })

// passport.deserializeUser(function (user, done) {
//   done(null, user)
// })


// app.post("/time", function (req, res) {
//   let body = req.body
//   res.status(200).send(body)
// })

// app.get("/home", function (req, res) {
//   if (req.isAuthenticated()) {
//     res.send("home")
//   } else {
//     res.send("FAILED")
//   }
// })

// app.post("/register", function (req, res) {
//   User.register({ username: req.body.username }, req.body.password, function (err, user) {
//     if (err) {
//       // console.log("fail")
//       // console.log(err)
//       // res.redirect("/register")
//       res.send(err.message)
//     } else {
//       passport.authenticate("local")(req, res, function () {
//         res.redirect("/home")
//       })
//     }
//   })

// })

// app.post("/login", function (req, res) {
//   const user = new User({
//     name: {
//       userName: req.body.username,
//       // first: req.body.firstname,
//       // last: req.body.lastname
//     },
//     password: req.body.password
//   });

//   console.log(user)

//   req.login(user, function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       passport.authenticate("local")(req, res, function () {
//         res.redirect("/home")
//       })
//     }
//   });
// });

// app.get("/logout", function (req, res) {
//   req.logout(function (err) {
//     if (err) {
//       console.log(err)
//     }
//     // res.redirect("/home")
//     res.send("logged")
//   });
// })


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
