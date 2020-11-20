import React from 'react'
import './App.css'

import CssBaseline from '@material-ui/core/CssBaseline'
import Header from '../Header/Header'
import Quiz from '../Quiz/Quiz'

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <CssBaseline />
        <Header />
        <Quiz />
      </div>
    )
  }
}

export default App
