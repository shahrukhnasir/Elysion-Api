import { Membership } from "../network/Network";
// 👇Member Ship //
export const MemberShipCard = (setLoading, setMember) => (dispatch) => {
    setLoading(true);
    Membership()
      .then((res) => {
        setMember(res?.data?.response?.data);

        console.log(res?.data?.response?.data,'response');
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };