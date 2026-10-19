import {useEffect} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Mainlayout({ children }) {

    useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
  
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Mainlayout