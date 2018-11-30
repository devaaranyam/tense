import React, { Component } from 'react'

import { Button, Box, Text } from 'grommet'

export default class Tool extends Component {
  
  render () {
    return (
      <Button plain hoverIndicator onClick={this.props.onClick} active={this.props.active} fill='horizontal'>
        <Box pad='small' direction='row' align='center' gap='small' >
          <Text size='small'>{this.props.label}</Text>
        </Box>
      </Button>
    )
  }
}
