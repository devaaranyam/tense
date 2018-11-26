import React, { Component } from 'react'
import './App.css'
import { Canvas, Toolbar } from './components'
import { Box, Grommet, Grid } from 'grommet'
class App extends Component {
  constructor(props){
    super(props)
    this.store = this.props.store
  }
  render () {
    return (
      <Grommet full>
        <Grid
          columns={['small', 'flex']}
          rows={['flex']}
          areas={[
            { name: 'toolbar', start: [0, 0], end: [0, 0] },
            { name: 'canvas', start: [1, 0], end: [1, 0] }
          ]}
          fill
        >
          <Box gridArea='toolbar' width='small' >
            <Toolbar store={this.store} />
          </Box>
          <Box gridArea='canvas' fill >
            <Canvas store={this.store}/>
          </Box>
        </Grid>
      </Grommet>
    )
  }
}

export default App
