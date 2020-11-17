import React, { useState, useEffect } from "react";
import { Nav, WrapperNav } from "./styles";
import { LeftMenu } from "./LeftMenu";
import { SearchBar } from "./SearchBar";
import { useStateValue } from "../../Context";

function useUserData(URI, bearer, callback) {
  const [info, setInfo] = useState({});
  const [{ user }, dispatch] = useStateValue();
  let myHeaders = new Headers();
  myHeaders.append("Authorization", bearer);
  myHeaders.append("Content-Type", "application/json");
  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  useEffect(() => {
    fetch(`${URI}/get_user`, requestOptions)
      .then(response => response.json())
      .then(data => {
        setInfo(data);
        callback({
          type: "USER",
          user: data
        });
      })
      .catch(error => console.log("error", error));
  }, []);
  return { info };
}

export const Navbar = ({children}) => {
  const [{ user }, dispatch] = useStateValue();
  const bearer = `Bearer ${JSON.parse(window.sessionStorage.token)}`;
  const URI = process.env.API_URL;
  const { info } = useUserData(URI, bearer, dispatch);
  return (
    <React.Fragment>
    <Nav>
      <WrapperNav>
        <LeftMenu user={user} />
        <SearchBar />
      </WrapperNav>
    </Nav>
    {children}
    </React.Fragment>
  );
};
