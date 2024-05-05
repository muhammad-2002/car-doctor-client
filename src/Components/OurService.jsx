import React, { useEffect, useState } from "react";
import ServicesCard from "../Components/ServicesCard";
import CommonHeading from "../Shared/CommonHeading/CommonHeading";

const OurService = () => {
  const heading = "Our Service Area";
  const paragraph =
    "Our car-doctor services extend across Agorgon,dhaka, mirpur,dhaka, and sever dhaka, ensuring your vehicle receives expert care wherever you roam. From urban streets to suburban lanes, we're there for you.";

  const [services, setServices] = useState([]);
  console.log(services);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/services")
  //     .then((data) => setServices(data?.data));
  // }, []);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div>
        <CommonHeading heading={heading} paragraph={paragraph}></CommonHeading>
      </div>

      {/* services card */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-9 mt-6">
        {services?.map((item) => (
          <ServicesCard
            key={item.id}
            title={item.title}
            prise={item.price}
            _id={item._id}
            image={item.image}
          ></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default OurService;
