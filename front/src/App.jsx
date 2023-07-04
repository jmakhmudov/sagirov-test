import Hero from './components/Hero';
import Navbar from './components/Navbar';
import './styles/App.css';
import { useEffect, useState } from 'react';

function App() {
  const [nav, setNav] = useState(null)
  const [loading, setLoading] = useState(true)
  const [cards, setCards] = useState(null)


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let resNav = await fetch('https://jmakhmudov.pythonanywhere.com/links/')
      let resCards = await fetch('https://jmakhmudov.pythonanywhere.com/cards/')
      resNav = await resNav.json()
      resCards = await resCards.json()
      setNav(resNav.results)
      setCards(resCards.results)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <>
      {
        loading ?
          <></>
          :
          <>
            <Navbar links={nav} />
            <Hero cards={cards} />
          </>
      }
    </>
  )
}

export default App
