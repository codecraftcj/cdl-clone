import Footer from "../organisms/Footer";
import Navbar from "../organisms/Navbar";

import UserLogin from "../organisms/UserLogin";

const Login = () => {
    const userType = 'nouser';
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar userType={userType}/>
            <UserLogin />
            <Footer />

        </div>
    )
}

export default Login;