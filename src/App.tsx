 
import Contact from './MyComponents/Contact/Contact'
import './App.css'
import Cta from './MyComponents/Cta/Cta'
import Navbar from "./MyComponents/Navbar/Navbar"
import Services from './MyComponents/Service/Services'
import  {Slider}  from './MyComponents/Slider/Slider'
function App() {
 

  return (
    <>
      <Navbar/>
      <Slider/>
      <Services/>
      <Cta/>
      <Contact/>
    </>
  )
}

export default App
