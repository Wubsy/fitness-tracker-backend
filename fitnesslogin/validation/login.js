const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateLoginInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
data.userName = !isEmpty(data.userName) ? data.userName : "";
data.password = !isEmpty(data.password) ? data.password : "";

// User Name checks
if (Validator.isEmpty(data.userName)) {
    errors.userName = "User Name field is required";
  }

// Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  
return {
    errors,
    isValid: isEmpty(errors)
  };
};