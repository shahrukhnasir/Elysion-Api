import Swal from "sweetalert2";
import { FreeConsult } from "../network/Network";

// / 👇Free Consultation//////////
export const FreeConsultation =
  (data, setLoading, router) => async () => {
    setLoading(true);

    try {
      FreeConsult(data);
      setLoading(false);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Email Sent Successfully",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          confirmButton: "theme-button-bg",
        },
      });

      router.push("/thank-you");
    } catch (error) {
      console.error("Error in Free Consultation:", error);

      setLoading(false);

      Swal.fire({
        position: "center",
        icon: "error",
        title: "Email Sending Failed",
        text: "Please check your fields and try again.",
        showConfirmButton: true,
        customClass: {
          confirmButton: "theme-button-bg",
        },
      });
    }
  };
