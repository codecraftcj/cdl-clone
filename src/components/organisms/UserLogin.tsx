// src/Login.js
import { useState } from 'react';

const UserLogin = () => {
    const [studentUsername, setStudentUsername] = useState('');
  const [vendorUsername, setVendorUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginType, setLoginType] = useState('student');
  const [darkMode, setDarkMode] = useState(false);

  const handleLogin = () => {
    // Add your authentication logic here
    const username = loginType === 'student' ? studentUsername : vendorUsername;
    console.log(`Logging in as ${loginType} with:`, { username, password });
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <div className={`p-8 rounded-md shadow-md w-full max-w-md ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>Login</h2>
        
        <div className="flex items-center mb-4">
          <button
            className={`flex-1 py-2 px-4 rounded-md focus:outline-none ${darkMode ? 'bg-blue-500 text-white' : loginType === 'student' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setLoginType('student')}
          >
            Student Login
          </button>
          <button
            className={`flex-1 py-2 px-4 rounded-md focus:outline-none ${darkMode ? 'bg-blue-500 text-white' : loginType === 'vendor' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setLoginType('vendor')}
          >
            Vendor Login
          </button>
        </div>

        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <label className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>{loginType === 'student' ? 'Student Username' : 'Vendor Username'}:</label>
          <input
            type="text"
            value={loginType === 'student' ? studentUsername : vendorUsername}
            onChange={(e) => (loginType === 'student' ? setStudentUsername(e.target.value) : setVendorUsername(e.target.value))}
            className={`px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
          />

          <label className={`font-bold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 ${darkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'}`}
          />

          <button
            type="submit"
            onClick={handleLogin}
            className={`px-4 py-2 rounded cursor-pointer ${darkMode ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'}`}
          >
            Login
          </button>
        </form>

        <div className="mt-4">
          <label className={`cursor-pointer ${darkMode ? 'text-white' : 'text-black'}`}>
            Dark Mode
            <input
              type="checkbox"
              className="ml-2"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
