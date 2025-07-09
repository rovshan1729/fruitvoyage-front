import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Products from './components/landing/products/Products';
import Nuts from './components/landing/products/nuts/Nuts';
import Fd from './components/landing/products/fd/Fd';
import SuxoFrukti from './components/landing/products/suxofrukti/SuxoFrukti';
import SvejieFrukti from './components/landing/products/svejiefrukti/SvejieFrukti';
import NewsDetails from './pages/news-Details/NewsDetails';
import News from './pages/news/News';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      
      <Route path="/products" element={<Products />}>
        <Route path="nuts" element={<Nuts />} />
        <Route path="fd" element={<Fd />} />
        <Route path="suxofrukti" element={<SuxoFrukti />} />
        <Route path="svejiefrukti" element={<SvejieFrukti />} />
      </Route>

      <Route path='/news' element={<News/>}/>
      <Route path='/news/:id' element={<NewsDetails/>}/>
    </Routes>
  );
};

export default App;
