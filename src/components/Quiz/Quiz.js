import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import './Quiz.css'

// import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Checkbox from '@material-ui/core/Checkbox'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    color: '#3f51b5'
    // fontSize: theme.typography.pxToRem(15),
    // fontWeight: theme.typography.fontWeightRegular,
  },
  makeAMargin: {
    margin: '30px'
  }
}))

function Quiz() {
  const classes = useStyles()

  const [checked, setChecked] = React.useState(true)

  const handleChange = (event) => {
    setChecked(event.target.checked);
  }

  return (
    <Container maxWidth="sm" className={classes.makeAMargin}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading} variant='h3'>Dietary Preferences</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
        </AccordionDetails>
      </Accordion>
    </Container>
  )
}

export default Quiz