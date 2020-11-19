import React from 'react'
import './Header.css'

import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'

class Header extends React.Component {
  render () {
    return (
      <div>
        <AppBar position='static'>
          <Typography variant='h1'>What's for Dinner?</Typography>
        </AppBar>
      </div>
    )
  }
}

export default Header
