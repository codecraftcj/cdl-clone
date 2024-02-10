

function ReviewsSection() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        {/* Review 1 */}
        <div className="border border-gray-200 rounded-lg shadow-lg p-6 mb-4">
          <div className="flex items-center mb-2">
            <img src="avatar-url" alt="Reviewer" className="w-10 h-10 rounded-full mr-4" />
            <div>
              <h3 className="text-lg font-semibold">John Doe</h3>
              <p className="text-gray-600">5 Stars</p>
            </div>
          </div>
          <p className="text-gray-700">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at libero vel libero laoreet laoreet non at purus."</p>
        </div>
        {/* Review 2 */}
        <div className="border border-gray-200 rounded-lg shadow-lg p-6 mb-4">
          <div className="flex items-center mb-2">
            <img src="avatar-url" alt="Reviewer" className="w-10 h-10 rounded-full mr-4" />
            <div>
              <h3 className="text-lg font-semibold">Jane Smith</h3>
              <p className="text-gray-600">4 Stars</p>
            </div>
          </div>
          <p className="text-gray-700">"Suspendisse potenti. Ut a elit mauris. Nulla aliquet pharetra turpis, nec convallis sem tincidunt et."</p>
        </div>
        {/* Review 3 */}
        <div className="border border-gray-200 rounded-lg shadow-lg p-6 mb-4">
          <div className="flex items-center mb-2">
            <img src="avatar-url" alt="Reviewer" className="w-10 h-10 rounded-full mr-4" />
            <div>
              <h3 className="text-lg font-semibold">Alice Johnson</h3>
              <p className="text-gray-600">5 Stars</p>
            </div>
          </div>
          <p className="text-gray-700">"Vestibulum sit amet libero id risus laoreet dapibus eget non lacus. Sed ultricies feugiat lacus, vel dapibus leo ullamcorper eu."</p>
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
