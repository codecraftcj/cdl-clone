import Footer from "../organisms/Footer";
import Navbar from "../organisms/Navbar";


import UserRegistration from "../organisms/UserRegistration";
UserRegistration
const Registration = () => {
    const userType = 'nouser';
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar userType={userType}/>
            <UserRegistration />
            <Footer />

        </div>
    )
}

export default Registration;