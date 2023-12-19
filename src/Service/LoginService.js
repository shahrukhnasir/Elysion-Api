import Swal from "sweetalert2";
import { setAuthToken } from "../Redux/Auth/authSlice";
import { Login } from "../network/Network";

export const LoginHandler = (data, setLoading, setChatFields, router, dispatch) => () => {
  try {
    Login(data)
      .then((res) => {
        console.log(res);

        const token = res?.data?.response?.data?.token;
        dispatch(setAuthToken(token));
        setLoading(false);
        setChatFields({
          email: "",
          password: "",
          device_id: "random$",
        });

        // Display success message
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });

        // Redirect to the profile page
        router.push("/profile");
      })
      .catch((error) => {
        console.error("Error in Login:", error);

        // Display error message
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Login Failed",
          text: "Please check your fields",
          showConfirmButton: true,
        });

        setLoading(false);
      });
  } catch (error) {
    console.error("Unexpected error in LoginHandler:", error);

    // Display unexpected error message
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Unexpected Error",
      text: "An unexpected error occurred. Please try again later.",
      showConfirmButton: true,
    });
  }
};
