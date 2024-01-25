import Swal from "sweetalert2";
import { ForgotPassword, Login, OtpChangePassword, SignUp } from "../network/Network";
import { setAuthToken } from "../Redux/Auth/authSlice";


//👇Login Service//////////////✔🤞

export const LoginHandler = (data, setLoading, setChatFields, router, dispatch) => () => {
    try {
      Login(data)
        .then((res) => {

  
          const token = res?.data?.response?.data?.token;
          dispatch(setAuthToken(token));
          setLoading(false);
          setChatFields({
            email: "",
            password: "",
            device_id: "random$",
          });
  

          Swal.fire({
            position: "center",
            icon: "success",
            title: "Login Successfully",
            showConfirmButton: false,
            timer: 1500,
            
          });
  
          
          router.push("/profile");
        })
        .catch((error) => {
          console.error("Error in Login:", error);
            Swal.fire({
            position: "center",
            icon: "error",
            title: "Login Failed",
            text: "Please check your fields",
            showConfirmButton: true,
            customClass: {
              confirmButton: "theme-button-bg",
            },
          });
  
          setLoading(false);
        });
    } catch (error) {
      console.error("Unexpected error in LoginHandler:", error);
  
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Unexpected Error",
        text: "An unexpected error occurred. Please try again later.",
        showConfirmButton: true,
      });
    }
  };

//👇Register Services//////////
export const SignUpHandler = (data, setLoading, setChatFields,router) => () => {
  

    SignUp(data)
    .then((res) => {

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
          customClass: {
            confirmButton: "theme-button-bg",
          },
          
        });
        router.push("/signin");
      })
      .catch((err) => {
        console.log(err?.response?.data,"Error in SignUp:");
        setLoading(false);
        Swal.fire({
          position: "center",
          icon: "error",
          title: err?.response?.data?.errors?.mobile?.[0]||
          err?.response?.data?.errors?.password?.[0] ||
          err?.response?.data?.errors?.password?.[1] ||
          err?.response?.data?.errors?.confirm_password?.[0] ||
          err?.response?.data?.errors?.first_name?.[0] ||
          err?.response?.data?.errors?.last_name?.[0] ||
          err?.response?.data?.errors?.email?.[0] ||
          err?.response?.data?.message,
          text: "Please check your fields",
          showConfirmButton: true,
          customClass: {
            confirmButton: "theme-button-bg",
          },
        
        });
        router.push("/register");
      });

  }

//👇Forgot Password Service////////////

  export const ForgotPasswordHandler = (data, setLoading, setChatFields, router) => () => {
    try {
      ForgotPassword(data)
        .then((res) => {
        
          setLoading(false);
          setChatFields({
            email: "",
          });

          Swal.fire({
            position: "center",
            icon: "success",
            title: "Forgot Please check your email",
            showConfirmButton: false,
            timer: 1500,
          });
          router.push("/createnewpassword");
        })
        .catch((error) => {
          console.error("Error in Forgot:", error);
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Forgot Failed",
            text: "Please check your fields",
            showConfirmButton: true,
            
          
        customClass: {
          confirmButton: "theme-button-bg",
        },
          });

          setLoading(false);
        });
    } catch (error) {
      console.error("Unexpected error in ForgotHandler:", error);
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

//👇OTP New Password Change Service/////////
  export const OtpNewPasswordHandler = (data, setLoading, setChatFields, router) => async () => {
    try {
      const res = await OtpChangePassword(data);

  
      setLoading(false);
      setChatFields({
        email: "",
        otp: "",
        password: "",
        confirmPassword: "",
      });
  
      await Swal.fire({
        position: "center",
        icon: "success",
        title: "Password Updated Successfully",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          confirmButton: "theme-button-bg",
        },
      });
  
      // Add a confirmation dialog
      const confirmResult = await Swal.fire({
        title: "Password Updated Successfully",
        text: "Do you want to go to the signin page?",
        icon: "success",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        customClass: {
          confirmButton: "theme-button-bg",
        },
      });
  
      if (confirmResult.isConfirmed) {
        router.push("/signin");
      }
    } catch (error) {
      console.error("Error in Password Update:", error);
  
      await Swal.fire({
        position: "center",
        icon: "error",
        title: "Password Update Failed",
        text: "Please check your fields",
        showConfirmButton: true,
        customClass: {
          confirmButton: "theme-button-bg",
        },
      });
  
      setLoading(false);
    }
  };
  