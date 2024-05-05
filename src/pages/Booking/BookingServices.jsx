import axios from "axios";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/Provider";

const BookingServices = () => {
  const { user } = useContext(AuthContext);
  const loderDta = useLoaderData();
  const { title, price, image } = loderDta;
  console.log(title, price);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const result = {
      name,
      date,
      email: user.email,
      price,
      image,
      title,
    };
    axios
      .post(`http://localhost:5000/booking`, result)
      .then((result) => console.log(result.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <section className="">
        <h1>Checkout Services: {title}</h1>
        <form
          onSubmit={handleSubmit}
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className=" rounded-md shadow-sm  p-16">
            <div className=" grid grid-cols-2 gap-3  ">
              <div className="space-y-2">
                <label className="text-sm">Name</label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your Name name"
                  className="w-full rounded-[5px]   outline-none border-[#FF3811] border-[1px] px-2 py-1"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="firstname" className="text-sm">
                  email
                </label>

                <input
                  type="email"
                  value={user?.email}
                  placeholder="email"
                  className="w-full rounded-[5px]  outline-none border-[#FF3811] border-[1px] px-2 py-1"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="firstname" className="text-sm">
                  Date
                </label>

                <input
                  id="firstname"
                  type="date"
                  name="date"
                  placeholder="select date"
                  className="w-full rounded-[5px]   outline-none border-[#FF3811] border-[1px] px-2 py-1"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="firstname" className="text-sm">
                  due Amaount
                </label>

                <input
                  type="text"
                  placeholder="due Amount"
                  value={"$" + price}
                  className="w-full rounded-[5px]  text-black outline-none border-[#FF3811] border-[1px] px-2 py-1"
                />
              </div>

              <input
                type="submit"
                className="bg-[#FF3811] px-2 py-1 text-white text-bold cursor-pointer rounded-md col-span-full"
              ></input>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default BookingServices;
