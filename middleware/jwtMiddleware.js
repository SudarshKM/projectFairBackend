const jwt = require("jsonwebtoken");

// this middleware is to verify jwtmiddleware

const jwtmiddleware = (req, res, next) => {
  console.log("inside jwtmiddleware");

  //access token
  const token = req.headers["authorization"].split(" ")[1];

  //    console.log(token);

  try {
    const jwtresponse = jwt.verify(token, "secretkey");
    console.log(jwtresponse);
    req.payload = jwtresponse.userId;
    //ONLY if the verification done right
    next();

  } catch (error) {
    res.status(401).json("Autherization failed ...please logIn ", error);
  }

};

module.exports = jwtmiddleware;
