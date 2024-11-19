import React from "react";

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  gradientFrom,
  gradientTo,
}) => {
  return (
    <div
      className={`flex flex-col items-center p-6 transition-transform transform rounded-lg shadow-md bg-gradient-to-br hover:scale-105 from-${gradientFrom} to-${gradientTo}`}
    >
      <div className="flex items-center justify-center w-16 h-16 mb-4 border-2 border-white rounded-full">
        <Icon className="text-3xl text-white" />
      </div>
      <h2 className="mb-2 text-xl font-semibold text-white">{title}</h2>
      <p className="text-center text-white">{description}</p>
    </div>
  );
};

export default FeatureCard;
