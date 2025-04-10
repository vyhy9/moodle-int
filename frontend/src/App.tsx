// import { useState } from 'react'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold">My Website</h1>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="#" className="hover:text-blue-200 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-blue-200 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-blue-200 transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-blue-200 transition-colors">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-center">Welcome to Our Website</h2>
          <p className="text-gray-700 mb-4 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-gray-700 text-center">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">We are dedicated to providing the best service to our customers.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@example.com</li>
                <li>Phone: (123) 456-7890</li>
                <li>Address: 123 Main St, City</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 py-4 text-center">
            <p>&copy; 2024 My Website. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
