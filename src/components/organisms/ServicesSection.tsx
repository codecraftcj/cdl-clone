

function ServicesSection() {
  return (
    <section className="py-8 border border-gray-200 rounded-lg shadow-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Services Offered</h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="border border-gray-200 rounded-lg shadow-lg p-6 m-4 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Service 1</h3>
            <p className="text-gray-600 mb-4">Description of Service 1.</p>
            <a href="#" className="inline-block border border-gray-200 rounded-lg shadow-lg text-white px-4 py-2 rounded-lg font-semibold ">Learn More</a>
          </div>
          <div className="border border-gray-200 rounded-lg shadow-lg p-6 m-4 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Service 2</h3>
            <p className="text-gray-600 mb-4">Description of Service 2.</p>
            <a href="#" className="inline-block border border-gray-200 rounded-lg shadow-lg text-white px-4 py-2 rounded-lg font-semibold ">Learn More</a>
          </div>
          <div className="border border-gray-200 rounded-lg shadow-lg p-6 m-4 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Service 3</h3>
            <p className="text-gray-600 mb-4">Description of Service 3.</p>
            <a href="#" className="inline-block border border-gray-200 rounded-lg shadow-lg text-white px-4 py-2 rounded-lg font-semibold ">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
