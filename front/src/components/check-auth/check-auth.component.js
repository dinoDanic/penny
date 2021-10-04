import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const CheckAuth = () => {
  const user = useSelector((state) => state.user);
  const history = useHistory();

  const path = history.location.pathname.split("/")[1];

  useEffect(() => {
    console.log(user);
    if (!user.email) {
      history.push("/auth");
    } else {
      if (path === "auth") {
        history.push("/");
      }
    }
  }, [user, history, path]);

  return null;
};

export default CheckAuth;
