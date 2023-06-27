import React from "react";

const Error = () => {
  return (
    <div>
      <div className="grid h-screen px-4 bg-gray-900 place-content-center">
        <div className="text-center">
          <img
            src="https://img.freepik.com/free-vector/404-error-with-person-looking-concept-illustration_114360-7912.jpg?size=626&ext=jpg&uid=R84749405&ga=GA1.1.1039112445.1666531408&semt=sph"
            alt=""
          />

          <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Uh-oh!
          </h1>

          <p className="mt-4 text-gray-500">We can't find that page.</p>
        </div>
      </div>
    </div>
  );
};

export default Error;
