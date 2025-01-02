import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import SignUp from './pages/auth/signup';
import Login from './pages/auth/login';
// import { useState } from 'react';
import Profile from './pages/Profile';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';

function App() {
  // const [authToken, setAuthToken] = useState<string | null>(null);
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          
          <main className="flex-grow flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 px-4 mt-2">
            <Routes>
              <Route path="/" element={
                <>
                  <img className='mt-1' src="https://www.myscheme.gov.in/_next/image?url=https%3A%2F%2Fcdn.myscheme.in%2Fimages%2Fslideshow%2F1-full.webp&w=1920&q=75" alt="" />
                  <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
                      Find the Right Scheme for You
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                      Search through thousands of government schemes and programs designed to help you
                    </p>
                  </div>
                  <SearchBar />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-semibold mb-2">Education</h3>
            <p className="text-gray-600">Discover educational support and scholarships</p>
            <img 
              className="mx-auto block w-64 h-64 object-contain" 
              src="https://scholarshipexam.in/wp-content/uploads/2020/02/sc-1.jpg" 
              alt="Education" 
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-semibold mb-2">Healthcare</h3>
            <p className="text-gray-600">Find medical assistance and health programs</p>
            <img 
              className="mx-auto block w-60 h-60 object-contain" 
              src="https://raw.githubusercontent.com/rajs09/Centralised-Government-Schemes-Portal/refs/heads/master/website/images/images.png" 
              alt="Healthcare" 
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-semibold mb-2">Employment</h3>
            <p className="text-gray-600">Explore job training and career opportunities</p>
            <img 
              className="mx-auto block w-60 h-60 object-contain" 
              src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/201911/1jobs_660x450_211119020425.jpg" 
              alt="Employment" 
            />
          </div>
        </div>
        </>
              } />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              } />
            </Routes>
          </main>

          <Footer />
          <Chatbot />
        </div>
      </Router>
    </AuthProvider>
        
  );
}

export default App;