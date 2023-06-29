import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>I deployed react app on AWS!!!</p>
        <a
          className='App-link'
          href='https://serhiiborodin-portfolio.netlify.app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learning by course!
        </a>
      </header>
    </div>
  )
}

export default App
