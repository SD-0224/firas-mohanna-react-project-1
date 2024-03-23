
import './App.css';

// React router
import { BrowserRouter, Route } from 'react-router-dom/cjs/react-router-dom.min.js';
// Pages
import { Home } from './pages/Home.js';
import { Details } from './pages/Details.js';
// Components
import { Header } from './shared/components/Header/Header.js';
import { Banner } from "./shared/components/Banner/Banner.js";
import { Footer } from "./shared/components/Footer/Footer.js";
import { FavouriteBanner } from './shared/components/FavouriteBanner/FavouriteBanner.js';
// useEffect
import { useState } from 'react';

function App() {

  const [isBannerVisible, setIsBannerVisible] = useState(false);

  const toggleBanner = () => {
    setIsBannerVisible(!isBannerVisible);
  };


  return (
    <BrowserRouter>
      <Header toggleBanner={toggleBanner} />
      <Banner />
      <main class="main-content" style={{ position: 'relative' }}>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/course-details/:courseId">
          <Details />
        </Route>
      </main>
      <FavouriteBanner isVisible={isBannerVisible} />
      <Footer year={2024} />
    </BrowserRouter>
  );
}

export default App;
