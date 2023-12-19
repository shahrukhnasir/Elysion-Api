import { ContactApi } from "../network/Network";
import Swal from "sweetalert2";

export const PostContactHandler = (data, setLoading, setChatFields) => () => {
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
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Successfully sent",
        showConfirmButton: false,
        timer: 1500,
      });

      router.push("/thank-you");
    })
    .catch((error) => {
      console.log(error);
      console.log("data", data);
      setLoading(false);
    });
};
