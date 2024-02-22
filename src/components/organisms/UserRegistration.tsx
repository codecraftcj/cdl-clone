import { useState } from 'react';

const UserRegistration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [userType, setUserType] = useState('student');

  const handleRegistration = () => {
    // Add your registration logic here
    console.log('Registering with:', { username, password, confirmPassword, userType });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black">
      <div className="p-8 rounded-md shadow-md w-full max-w-md bg-white">
        <h2 className="text-2xl font-bold mb-4">Register as {userType === 'student' ? 'Student' : 'Vendor'}</h2>
        <div className="flex items-center mb-4">
        <button
            className={`flex-1 py-2 px-4 rounded-md focus:outline-none ${userType === 'student' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setUserType('student')}
        >
            Student Login
        </button>
        <button
            className={`flex-1 py-2 px-4 rounded-md focus:outline-none ${userType === 'vendor' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            onClick={() => setUserType('vendor')}
        >
            Vendor Login
        </button>
        </div>

        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <label className="font-bold mb-2">{userType === 'student' ? 'Student Username' : 'Vendor Username'}:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 bg-white text-black"
          />

          <label className="font-bold mb-2">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 bg-white text-black"
          />

          <label className="font-bold mb-2">Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 bg-white text-black"
          />

          <div className="flex items-center space-x-4 mt-2">


          </div>

          <button
            type="submit"
            onClick={handleRegistration}
            className="px-4 py-2 rounded cursor-pointer bg-blue-500 text-white"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserRegistration;
