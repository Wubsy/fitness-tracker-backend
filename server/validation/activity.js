const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = validateActivityInput = data => {
   let errors = {};

   let { name, description, duration, date } = data;
   // Converting empty fields to empty string as validator function works only with strings
   name= !isEmpty(data.name) ? data.name : "";
   description = !isEmpty(data.description) ? data.description : "";
   duration= !isEmpty(data.duration) ? data.duration : "";
   date= !isEmpty(data.date) ? data.date: "";
   //if (Validator.isEmpty(data.userName)) {
    //errors.userName = "userName is required";
 //}
//  if (Validator.isEmpty(data.name)) {
//    errors.description = "name is required";
// }
   if (Validator.isEmpty(data.description)) {
      errors.description = "Description is required";
   }
   if (Validator.isEmpty(data.duration)) {
      errors.duration = "Duration is required";
   }
   if (Validator.isEmpty(data.date)) {
    errors.duration = "Date is required";
 }

   return {
      errors,
      isValid: isEmpty(errors)
   };
};