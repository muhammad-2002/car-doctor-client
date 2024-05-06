import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/Provider";

//custom hook
const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

const useServices = (path) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`https://car-doceor.vercel.app/${path}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return services;
};

export { useAuth, useServices };
