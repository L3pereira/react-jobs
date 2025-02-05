import {Link} from 'react-router-dom';
import React from "react";

interface CardProps {
  title: string;
  description: string;
  link: string;
  buttonText: string;
  bgColor?: string; // Background color
  textColor?: string; // Text color
  buttonBgColor?: string; // Button background color
  buttonHoverColor?: string; // Button hover color
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  link,
  buttonText,
  bgColor = "bg-gray-100", // Default values
  textColor = "text-black",
  buttonBgColor = "bg-black",
  buttonHoverColor = "hover:bg-gray-700",
}) => {
  return (
    <div className={`${bgColor} p-6 rounded-lg shadow-md`}>
      <h2 className={`text-2xl font-bold ${textColor}`}>{title}</h2>
      <p className="mt-2 mb-4">{description}</p>
      <Link
        to={link}
        className={`inline-block ${buttonBgColor} text-white rounded-lg px-4 py-2 ${buttonHoverColor}`}
      >
        {buttonText}
      </Link>
    </div>
  );
};

export default Card;
