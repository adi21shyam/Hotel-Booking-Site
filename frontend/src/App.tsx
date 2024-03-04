import Layout from './layouts/Layout'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import AddHotel from './pages/AddHotel';
import { useAppContext } from './contexts/AppContext';
function App() {
  
  const {isLoggedIn} = useAppContext();

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
      {isLoggedIn && <>
      <Route path='/add-hotel' element={
        <Layout>
          <AddHotel />
        </Layout>
      } /></>}
      </Routes>
    </Router>
  )
}

export default App
