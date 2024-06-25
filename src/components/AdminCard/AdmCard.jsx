import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
const AdmCard = ({ admin, row }) => {
  return (
    <>
      <section>
        {/* Card for larger screens */}
        <div className={`hidden md:flex h-96 mb-5 flex-row ${row}`}>
          <div className="w-1/4 md:w-1/6 bg-[#15281f] post border flex justify-center items-center text-2xl md:text-3xl lg:text-4xl font-light">
            <div className="-rotate-90">{admin.role}</div>
          </div>
          <div className="w-1/2 md:w-3/6 p-6 relative border text-color flex justify-start items-center max-xl:flex-col bg-[#eafbea]">
            <img
              src={admin.image}
              className="max-md:w-32 max-md:h-32 max-xl:w-60 max-xl:h-60 w-72 h-72 rounded-xl"
              alt="Logo"
            />
            <div>
              <h1 className="text-5xl max-xl:text-3xl font-extrabold px-5 w-full ">
                <span className="text-[#254336]">{admin.name}</span>
              </h1>
              <div className="w-full flex justify-center mt-2 gap-4 cursor-pointer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </div>
            </div>
          </div>
          <div className="w-1/4 md:w-2/6 border text-5xl md:text-6xl lg:text-7xl font-bold flex justify-center items-center post fade-green-bg">
            <span>{admin.unicode}</span>
          </div>
        </div>

        {/* Card for small screens */}
        <div className="flex flex-col md:hidden h-auto mb-5 border">
          <div className="w-full bg-[#15281f] post border flex justify-center items-center text-2xl font-light py-2">
            {admin.role}
          </div>
          <div className="w-full p-4 relative border text-color flex flex-col justify-center items-center bg-[#eafbea]">
            <img
              src={admin.image}
              className="border w-48 h-48 mb-4"
              alt="Logo"
            />
            <h1 className="text-3xl font-extrabold pb-2">{admin.name}</h1>
            <div className="w-full flex justify-center mt-2 gap-4 cursor-pointer">
            <FontAwesomeIcon icon={faLinkedin} style={{ width: '25px', height: '25px' }} />
            <FontAwesomeIcon icon={faInstagram} style={{ width: '25px', height: '25px' }} />
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdmCard;
