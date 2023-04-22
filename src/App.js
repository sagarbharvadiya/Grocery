import Banner from './components/Banner';
import Footer from './components/Footer';
import GoogleMap from './components/GoogleMap';
import Header from './components/Header'
import Products from './components/Products';

function App() {
  return (
    <>
      <Header />
      <Banner />
    <Products/> 
    <GoogleMap/>
      <Footer />
    </>
  );
}

export default App;
