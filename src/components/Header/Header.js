import React from 'react'
import { makeStyles } from '@material-ui/styles'
import './Header.css'

import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  custom: {
    color: 'pink',
    fontWeight: 'bold'
  }
})

function Header() {
    const classes = useStyles()

    return (
      <AppBar color='primary' position='static'>
        <Typography variant='h1' align='center' className={classes.custom}>What's for Dinner?</Typography>
      </AppBar>
    )
}

export default Header