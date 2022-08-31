import logo from './logo.svg';
import './App.css';
import Accodian from './acoodian';
import { Api } from './api';
function App() {
  return (
   <>
   <section id='main-div'>
    <h1>Important Interview Question React</h1>
   {
    Api.map((ele)=>{
      return  <Accodian key={ele.id} {...ele}/>
    })
   }
   </section>
  
   </>
  );
}

export default App;
