import React from "react";
import ServicesCard from "../Components/ServicesCard";
import CommonHeading from "../Shared/CommonHeading/CommonHeading";
import { useServices } from "../custom-hook/Auth";

const OurService = () => {
  const heading = "Our Service Area";

  const paragraph =
    "Our car-doctor services extend across Agorgon,dhaka, mirpur,dhaka, and sever dhaka, ensuring your vehicle receives expert care wherever you roam. From urban streets to suburban lanes, we're there for you.";

  // useEffect(() => {
  //   axios
  //     .get("https://car-doceor.vercel.app/services")
  //     .then((data) => setServices(data?.data));
  // }, []);
  const services = useServices("services");

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
