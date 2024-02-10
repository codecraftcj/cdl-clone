
import NavBar from '../organisms/NavBar/Index';
import Footer from '../organisms/Footer/Index';
import ProgramsSection from '../organisms/ProgramsSection';
import WelcomeSection from '../organisms/WelcomePage';
import ServicesSection from '../organisms/ServicesSection';
import ReviewsSection from '../organisms/ReviewsSection';
const Index = () => {
    return (
        <div className="flex flex-col min-h-screen">
      <NavBar />
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