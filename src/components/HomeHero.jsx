import React from "react";
import handBlub from "../assests/handBulb.png";
import { Link } from "react-router-dom";

const HomeHero = () => {
  return (
    <div className="bg-[#003145] text-white px-5 md:px-20 py-10">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl md:text-4xl font-semibold py-2">
            Hackathon Submissions
          </h2>
          <p className="text-sm md:text-base text-gray-300 py-4 max-w-2xl">
            Lorem ipsum dolor sit amet consectetur. Urna cursus amet
            pellentesque in parturient purus feugiat faucibus. Congue laoreet
            duis porta turpis eget suspendisse ac pharetra amet. Vel nisl tempus
            nec vitae.{" "}
          </p>
          <Link
            to={"/upload-submission"}
            className="bg-[#44924C] py-2 px-3 rounded-lg mt-5"
          >
            Upload Submission
          </Link>
        </div>
        <div>
          <img src={handBlub} alt="handBulb" className="w-52" />
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
