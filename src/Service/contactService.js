import { ContactApi } from "../network/Network";
import Swal from "sweetalert2";

export const PostContactHandler =
  (data, setLoading, setChatFields, router) => () => {
    ContactApi(data)
      .then((res) => {
        console.log(res);

        setLoading(false);
        setChatFields({
          name: "",
          lName: "",
          number: "",
          message: "",
          email: "",
        });
        if (res) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Contact Query Submitted",
            showConfirmButton: false,
            timer: 500,
          });
          setTimeout(() => {
            router.push("/thank-you");
          }, 500);
        }
      })
      .catch((error) => {
        console.log(error);
        console.log("data", data);
        setLoading(false);
      });
  };
