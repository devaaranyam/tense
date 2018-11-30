import React, { Component } from 'react'
import './App.css'
import Canvas from './components/canvas'
import Toolbar from './components/toolbar'
import { Box, Grommet, Grid, Text } from 'grommet'
import { Cube } from 'grommet-icons'
class App extends Component {
  constructor (props) {
    super(props)
    this.store = this.props.store
  }
  render () {
    return (
      <Grommet full style={{ overflow: 'hidden' }} >
        <Grid
          columns={['200px', 'flex']}
          rows={['30px', 'flex']}
          areas={[
            { name: 'titlebar', start: [0, 0], end: [1, 0] },
            { name: 'menubar', start: [1, 0], end: [1, 0] },
            { name: 'toolbar', start: [0, 1], end: [0, 1] },
            { name: 'canvas', start: [1, 1], end: [1, 1] }
          ]}
          fill
        >
          <Box gridArea='titlebar' pad='small' direction='row' justify='start' style={{ WebkitAppRegion: 'drag' }}><Cube size='small'/></Box>
          <Box gridArea='menubar' pad='xsmall' justify='end' style={{ WebkitAppRegion: 'drag', zIndex: 1000 }} background='transparent' direction='row' align='center' >
            <div class='circle green' />
            <div class='circle yellow' />
            <div class='circle red' />
          </Box>
          <Box gridArea='toolbar' width='small' fill>
            <Toolbar store={this.store} />
          </Box>
          <Box gridArea='canvas' fill>
            <Canvas store={this.store} />
          </Box>
        </Grid>
      </Grommet>
    )
  }
}

export default App
