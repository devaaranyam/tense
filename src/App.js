import React, { Component } from 'react'
import './App.css'
import Canvas from './components/canvas'
import Toolbar from './components/toolbar'
import { Box, Grommet, Grid } from 'grommet'

class App extends Component {
  constructor (props) {
    super(props)
    this.store = this.props.store
  }
  render () {
    return (
      <Grommet full>
        <Grid
          columns={['small', 'flex']}
          rows={['30px', 'flex']}
          areas={[
            { name: 'titlebar', start: [0, 0], end: [1, 0] },
            { name: 'toolbar', start: [0, 1], end: [0, 1] },
            { name: 'canvas', start: [1, 1], end: [1, 1] }
          ]}
          fill
        >
          <Box gridArea='titlebar' pad='xsmall' justify='center' style={{ '-webkit-app-region': 'drag' }}><b>Tense</b></Box>
          <Box gridArea='toolbar' width='small' fill>
            <Toolbar store={this.store} />
          </Box>
          <Box gridArea='canvas' fill >
            <Canvas store={this.store} />
          </Box>
        </Grid>
      </Grommet>
    )
  }
}

export default App
