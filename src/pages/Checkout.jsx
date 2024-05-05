import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const loderDta = useLoaderData();
  const { title } = loderDta;

  return (
    <div>
      <section className="">
        <h1>Checkout Services: {title}</h1>
        <form
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className=" rounded-md shadow-sm dark:bg-gray-50 p-16">
            <div className=" grid grid-cols-2 gap-3  ">
              <div className="space-y-2">
                <label htmlFor="firstname" className="text-sm">
                  First name
                </label>

                <input
                  id="firstname"
                  type="text"
                  placeholder="First name"
                  className="w-full rounded-[5px]  dark:text-gray-50 outline-none border-[#FF3811] border-[1px] px-2 py-1"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="firstname" className="text-sm">
                  First name
                </label>

                <input
                  id="firstname"
                  type="text"
                  placeholder="First name"
                  className="w-full rounded-[5px]  dark:text-gray-50 outline-none border-[#FF3811] border-[1px] px-2 py-1"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="firstname" className="text-sm">
                  First name
                </label>

                <input
                  id="firstname"
                  type="text"
                  placeholder="First name"
                  className="w-full rounded-[5px]  dark:text-gray-50 outline-none border-[#FF3811] border-[1px] px-2 py-1"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="firstname" className="text-sm">
                  First name
                </label>

                <input
                  id="firstname"
                  type="text"
                  placeholder="First name"
                  className="w-full rounded-[5px]  dark:text-gray-50 outline-none border-[#FF3811] border-[1px] px-2 py-1"
                />
              </div>
              <div className="space-y-2 col-span-full w-full">
                <label htmlFor="firstname" className="text-sm">
                  Send Message
                </label>

                <textarea
                  rows={7}
                  placeholder="Write text"
                  className="w-full rounded-[5px]  dark:text-gray-50 outline-none border-[#FF3811]  border-[1px] px-2 py-1"
                ></textarea>
              </div>
              <input
                type="button"
                className="bg-[#FF3811] px-2 py-1 text-white text-bold cursor-pointer rounded-md col-span-full"
                value="Order Conform"
              ></input>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default Checkout;
