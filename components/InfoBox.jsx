import React from "react";

const InfoBox = ({
  heading,
  backgroundColor = "bg-gray-100",
  children,
  buttonInfo,
  textColor = "text-gray-800",
}) => {
  return (
    <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
      <h2 className={`text-2xl font-bold ${textColor}`}>{heading}</h2>
      <p className={`mt-2 mb-4 ${textColor}`}>{children}</p>
      <a
        href={buttonInfo.link}
        className={`inline-block text-white rounded-lg px-4 py-2 hover:bg-gray-700 ${buttonInfo.backgroundColor}`}
      >
        {buttonInfo.text}
      </a>
    </div>
  );
};

export default InfoBox;
