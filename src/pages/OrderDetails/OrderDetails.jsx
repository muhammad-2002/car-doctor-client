import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

import UseAxiosSecure from "../../custom-hook/UseAxiosSecure";
import { AuthContext } from "../../Provider/Provider";

const OrderDetails = () => {
  const { user } = useContext(AuthContext);
  const [services, setServices] = useState([]);
  useEffect(() => {
    const url = `/booking?email=${user.email}`;
    const axiosSecure = UseAxiosSecure();
    axiosSecure.get(url).then((res) => setServices(res?.data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const remaining = services.filter((s) => s._id !== id);
    axios.delete(`https://car-doceor.vercel.app/booking/${id}`).then(() => {
      setServices(remaining);
    });
  };
  const handleUpdate = (id) => {
    // axios
    //   .patch(`https://car-doceor.vercel.app/booking/${id}`, { status: "confirm" })
    //   .then((response) => console.log(response.data))
    //   .catch((error) => console.error("Error updating booking:", error));

    fetch(`https://car-doceor.vercel.app/booking/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "conform" }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = services.filter((s) => s._id !== id);
          const upadted = services.find((s) => s._id === id);
          // console.log(upadted);
          upadted.status = "conform";
          const newbooking = [upadted, ...remaining];
          setServices(newbooking);
        }
      })
      .catch();
  };

  return (
    <div>
      {services.map((s) => (
        <div
          key={s._id}
          className="flex flex-col gap-8 p-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800"
        >
          <ul className="flex flex-col divide-y dark:divide-gray-300">
            <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
              <div className="flex w-full space-x-2 sm:space-x-4">
                <img
                  className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                  src={s.image}
                />
                <div className="flex flex-col justify-between w-full pb-4">
                  <div className="flex justify-between w-full pb-2 space-x-2">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                        {s.title}
                      </h3>
                      <p className="text-sm dark:text-gray-600">Classic</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold">{s.price}</p>
                    </div>
                  </div>
                  <div className="flex text-sm divide-x">
                    <button
                      onClick={() => handleDelete(s._id)}
                      type="button"
                      className="flex items-center bg-red-500 rounded-md px-2 py-1 pl-0 space-x-1"
                    >
                      <span>Remove</span>
                    </button>
                    {s.status === "conform" ? (
                      <button
                        type="button"
                        className="flex bg-gray-300 rounded-md items-center px-2 py-1 space-x-1"
                      >
                        <span>conform</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => handleUpdate(s._id)}
                        type="button"
                        className="flex bg-yellow-300 rounded-md items-center px-2 py-1 space-x-1"
                      >
                        <span>pending</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};
export default OrderDetails;
