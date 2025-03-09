import React from "react";

const FAQItem = ({ question, answer, link }) => {
  return (
    <div className="w-custom mx-auto my-2 p-4 bg-white text-bgcustom rounded-lg shadow-md">
      <h3 className="text-xl md:text-xl font-jetbrains">{question}</h3>
      <p className="mt-1 text-md md:text-xl font-jetbrains">
        {answer}
        {link && (
          <a href={link.url} className="text-blue-500 hover:text-blue-600">
            {link.text}
          </a>
        )}
      </p>
    </div>
  );
};

export default FAQItem;
