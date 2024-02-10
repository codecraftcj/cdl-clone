import React from 'react';

function ProgramsSection() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Programs Offered</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col items-center">
            <img src="your-image-url" alt="Basic Driving Course" className="w-20 h-20 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Basic Driving Course</h3>
            <p className="text-gray-600 mb-4">Learn the fundamentals of driving in a safe and supportive environment.</p>
            <a href="#" className="inline-block border border-gray-200 rounded-lg shadow-lg text-white px-4 py-2 rounded-lg font-semibold ">Learn More</a>
          </div>
          {/* Card 2 */}
          <div className="border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col items-center">
            <img src="your-image-url" alt="Defensive Driving Course" className="w-20 h-20 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Defensive Driving Course</h3>
            <p className="text-gray-600 mb-4">Enhance your driving skills and learn defensive techniques to stay safe on the road.</p>
            <a href="#" className="inline-block  text-white px-4 py-2 rounded-lg font-semibold border border-gray-200 rounded-lg shadow-lg">Learn More</a>
          </div>
          {/* Card 3 */}
          <div className="border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col items-center">
            <img src="your-image-url" alt="Advanced Driving Course" className="w-20 h-20 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Advanced Driving Course</h3>
            <p className="text-gray-600 mb-4">Take your driving skills to the next level with our advanced course.</p>
            <a href="#" className="inline-block border border-gray-200 rounded-lg shadow-lg text-white px-4 py-2 rounded-lg font-semibold ">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgramsSection;
