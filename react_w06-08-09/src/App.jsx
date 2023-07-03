import './App.css'
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer'


function App() {
  
  return (
    <div>
       <Header />
       <Banner />
       <Card nome="Gibson LesPaul" valor={35000.00} descricao='Excelente Guitarra' id={125}></Card>
       
       <Footer />
    </div>
  )
}

export default App;
