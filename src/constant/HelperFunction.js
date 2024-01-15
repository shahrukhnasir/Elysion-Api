// import Swal from "sweetalert2";

// export const emailValidation = (chatFields,setError) => {
//   // Email validation
//   const emailValidationPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   if (!chatFields.email || !emailValidationPattern.test(chatFields.email)) {
//     Swal.fire({
//       position: "center",
//       icon: "error",
//       title: "Please provide a valid email address",
//       showConfirmButton: false,
//       timer: 1500,
//     });
//     setError(true);
//     return;
//   }
// };

// export const phoneValidation = (chatFields,setError) => {
//   !chatFields.number ||
//     chatFields.number.length < 10 ||
//     chatFields.number.length > 20;
//   {
//     Swal.fire({
//       position: "center",
//       icon: "error",
//       title:
//         (chatFields.number.length < 10 &&
//           "Phone number must be between 10 to 20 digits") ||
//         (chatFields.number.length > 20 && "Phone number is too long"),
//       showConfirmButton: false,
//       timer: 1500,
//     });
//     setError(true);
//     return;
//   }
// };
