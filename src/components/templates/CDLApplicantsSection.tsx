import React from 'react';
import Divider from '../atoms/divider';

const CDLApplicantsSection = () => {
  return (
    
    <div className="container mx-auto px-4 py-8">
        <Divider/>
      <div className="flex flex-wrap md:flex-nowrap justify-between items-start">
        {/* Title Section */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-start md:px-4 py-2">
          <h2 className="text-2xl font-semibold text-center md:text-left">CDL Applicants</h2>
        </div>

        {/* Cards Section - Adjusted for full width and alignment */}
        <div className="md:w-1/2 w-full flex flex-col justify-center items-center md:items-stretch py-4">
          {/* Each card now takes full width of its division */}
          <div className="w-full md:max-w-full border border-gray-200 rounded-lg shadow-lg shadow-md flex flex-col justify-center items-center mb-4 p-4">
            <p>Applicant 1</p>
          </div>
          <div className="w-full md:max-w-full border border-gray-200 rounded-lg shadow-lg shadow-md flex flex-col justify-center items-center mb-4 p-4">
            <p>Applicant 2</p>
          </div>
        </div>
      </div>

      {/* Show All Applicants Link */}
      <div className="text-center py-4">
        <a href="#" className="text-blue-500 hover:text-blue-700">Show all CDL Applicants</a>
      </div>
    </div>
  );
};

export default CDLApplicantsSection;
