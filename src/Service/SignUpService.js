
import { SignUp } from "../network/Network";
import Swal from "sweetalert2";
export const SignUpHandler = (data, setLoading, setChatFields,router) => () => {
  
  try {
    
    SignUp(data)
    .then((res) => {
        console.log(res,"Success");
        setLoading(false);
        setChatFields({
          fname: "",
          lname: "",
          phone: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Register Successfully",
          showConfirmButton: false,
          timer: 1500,
          
        });
        router.push("/signin");
      })
      .catch((error) => {
        console.error("Error in SignUp:", error);
        setLoading(false);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Registration Failed",
          text: "Please check your fields",
          showConfirmButton: true,
        
        });
        router.push("/register");
      });
  } catch (error) {
    console.error("Unexpected error in SignUpHandler:", error);
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Unexpected Error",
      text: "An unexpected error occurred. Please try again later.",
      showConfirmButton: true,
    });
  }
};
