// src/Login.js
import axios from 'axios';
import { useState, useEffect } from 'react';


interface Item {
  id: number;
  name: string;
  description: string;
}

const UserLogin = () => {
  const [studentUsername, setStudentUsername] = useState('');
  const [vendorUsername, setVendorUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginType, setLoginType] = useState('student');

  const [items, setItems] = useState<Item[]>([]);

  // Create an instance of axios with a custom configuration
  const instance = axios.create({
    baseURL: 'http://34.134.142.147/',
    // You can add other configuration options here if needed
  });
  useEffect(() => {
    instance.get('/api/items/')
      .then(response => setItems(response.data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  const handleLogin = () => {
    // Add your authentication logic here
    const username = loginType === 'student' ? studentUsername : vendorUsername;
    console.log(`Logging in as ${loginType} with:`, { username, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black">
      <div className="p-8 rounded-md shadow-md w-full max-w-md bg-white">
        <h2 className="text-2xl font-bold mb-4 text-black">Login</h2>
        
        <div className="flex items-center mb-4">
          <button
            className="flex-1 py-2 px-4 rounded-md focus:outline-none bg-blue-500 text-white"
            onClick={() => setLoginType('student')}
          >
            Student Login
          </button>
          <button
            className="flex-1 py-2 px-4 rounded-md focus:outline-none bg-blue-500 text-white"
            onClick={() => setLoginType('vendor')}
          >
            Vendor Login
          </button>
        </div>
  
        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <label className="font-bold mb-2 text-black">{loginType === 'student' ? 'Student Username' : 'Vendor Username'}:</label>
          <input
            type="text"
            value={loginType === 'student' ? studentUsername : vendorUsername}
            onChange={(e) => (loginType === 'student' ? setStudentUsername(e.target.value) : setVendorUsername(e.target.value))}
            className="px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 bg-white text-black"
          />
  
          <label className="font-bold mb-2 text-black">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300 bg-white text-black"
          />
  
          <button
            type="submit"
            onClick={handleLogin}
            className="px-4 py-2 rounded cursor-pointer bg-blue-500 text-white"
          >
            Login
          </button>
        </form>
  
        <div>
          <h1>Items</h1>
          <ul>
            {items.map(item => (
              <li key={item.id}>{item.name} - {item.description}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
  
};

export default UserLogin;
