import Layout from './layouts/Layout'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";
import Register from './pages/Register';
import SignIn from './pages/SignIn';
function App() {
  

  return (
    <Router>
      <Routes>
      <Route 
      path="/" element={
        <Layout>
          <div>Search</div>
        </Layout>
      } />
      <Route 
      path="/register" element={
        <Layout>
          <Register />
        </Layout>
      } />
      <Route 
      path="/sign-in" element={
        <Layout>
          <SignIn />
        </Layout>
      } />
      </Routes>
    </Router>
  )
}

export default App
