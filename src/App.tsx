import React from 'react'
import './App.css'
import Calendar from './components/Calendar';

interface IProps { }
const App: React.FunctionComponent<IProps> = () => {

  return (
    <>
      <h1>Calander POC</h1>
      <div className="card">
        <Calendar />
      </div>
    </>
  )
}

export default App
