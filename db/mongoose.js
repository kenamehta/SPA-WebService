var mongoose = require("mongoose");

mongoose.promise = global.promise;
mongoose.connect(
  "mongodb+srv://kenamehta:kenamehta@handshake-kena-8xufz.mongodb.net/handshake?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// mongoose.connect(process.env.MONGODB_URI);

module.exports = {
  mongoose
};
