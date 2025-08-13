import './App.css'
import Greetings from './components/Greetings/Greetings'
import Counter from './components/Counter/Counter'

function App() {

  return (
    <>
      <Greetings name="Diether"/>
      <div className="card">
        <Counter initialCount={0}/>
      </div>
    </>
  )
}

export default App
