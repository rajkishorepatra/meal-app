import Landing from './pages/Landing';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer'
import MealDetails from './pages/MealDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FavMeals from './pages/FavMeals';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/meal-app' element={<Landing />} />                      {/* Landing Page */}
          <Route path='/meal-app/det/*' element={<MealDetails />} />            {/* Meal Details Page */}
          <Route path='/meal-app/fav' element={<FavMeals />} />                 {/* Favourite Meals Page */}
          <Route path='*' element={<NotFound />} />                            {/* 404 Error Page */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
