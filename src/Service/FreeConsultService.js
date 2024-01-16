import Swal from "sweetalert2";
import { FreeConsult } from "../network/Network";

// / 👇Free Consultation//////////
export const FreeConsultation = (data, setLoading, setChatFields,router) => () => {
  
  try {
    FreeConsult(data)
    .then((res) => {

        setLoading(false);
        setChatFields({
          email: "",

        });
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Email Send Successfully",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            confirmButton: "theme-button-bg",
          },
          
        });
        router.push("/thank-you");
      })
      .catch((error) => {
        console.error("Error in SignUp:", error);
        setLoading(false);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Email  Failed",
          text: "Please check your fields",
          showConfirmButton: true,
          customClass: {
            confirmButton: "theme-button-bg",
          },
        
        });
      });
  } catch (error) {
    console.error("Unexpected error in Email send:", error);
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Unexpected Error",
      text: "An unexpected error occurred. Please try again later.",
      showConfirmButton: true,
      customClass: {
        confirmButton: "theme-button-bg",
      },
    });
  }
};