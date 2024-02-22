

import ProgramsSection from '../organisms/ProgramsSection';
import WelcomeSection from '../organisms/WelcomePage';
import ServicesSection from '../organisms/ServicesSection';
import ReviewsSection from '../organisms/ReviewsSection';
import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';
const Index = () => {
    const userType = 'student';
    return (
    <div className="flex flex-col min-h-screen">
      <Navbar userType={userType} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <WelcomeSection/>
        <ProgramsSection/>
        <ServicesSection />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
    )
}

export default Index;