import "antd/dist/antd.css";
import { PageHeader } from "antd";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/User";

const NewsHeader = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(UserContext);

  const username = JSON.parse(localStorage.getItem("username"));
  const LoggedInCheck = JSON.parse(localStorage.getItem("isLoggedIn"));

  if (isLoggedIn === true || LoggedInCheck === true) {
    return (
      <>
        <PageHeader
          className="site-page-header"
          onBack={() => navigate(-1)}
          title="📰 NC-News"
          subTitle={`Hello, ${username}!`}
        />
      </>
    );
  } else {
    return (
      <>
        <PageHeader
          className="site-page-header"
          title="📰 NC-News"
          subTitle={`Please log in`}
        />
      </>
    );
  }
};

export default NewsHeader;
