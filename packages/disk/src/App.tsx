import React from 'react'
import logo from './logo.svg'
import './App.css'

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='root'>
          <img src={logo} className='App-logo' alt='logo' />
          <p> Disk Utility </p>
        </div>
        <div className='summary'>
          <p> Summary info </p>
        </div>
      </header>
      <section className='App-content'>
        The details.
      </section>
      <footer className='App-footer'>
        <div className='footer-start'>
          <p> footer start </p>
        </div>
        <div className='footer-end'>
          <p> footer end </p>
        </div>
      </footer>
    </div>
  )
}

export default App
