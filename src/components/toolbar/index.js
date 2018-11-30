import React, { Component } from 'react'

import { connect } from 'react-redux'
import { selectTool } from '../../actions'

import { Grid, Box, Text, Tab, Tabs, TextInput } from 'grommet'

import Tool from './tool'

const mapStateToProps = state => {
  return {
    scene: state.scene,
    selectedTool: state.selectedTool
  }
}

class Toolbar extends Component {
  constructor (props) {
    super(props)
    this.handleOnClick = this.handleOnClick.bind(this)
    this.tools = [{
      id: 1,
      label: 'Box',
      properties: {
        geometry: {
          type: 'BoxGeometry',
          properties: {
            size: { top: 5, bottom: 5, segments: 32 },
            height: 20
          }
        },
        material: {
          properties: {
            color: 0x00ff00
          }
        }
      }
    },
    {
      id: 2,
      label: 'Cylinder',
      properties: {
        geometry: {
          type: 'CylinderGeometry',
          radius: { top: 5, bottom: 5, segments: 32 },
          height: 20
        },
        material: {
          color: 0x00ff00
        }
      }
    }]
    this.state = {
      selectedTool: this.props.selectedTool
    }
  }
  handleOnClick (tool) {
    this.props.selectTool(tool)
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    if (nextProps.selectedTool !== prevState.selectedTool) {
      return { selectedTool: nextProps.selectedTool }
    } else return null
  }

  render () {
    return (
      <Grid
        areas={[
          { name: 'list', start: [0, 0], end: [0, 0] },
          { name: 'properties', start: [0, 1], end: [0, 1] }
        ]}
        columns={['flex']}
        rows={['50%', '50%']}
        direction='column'
      >
        <Box gridArea='list'>
          {
            this.tools.map(tool => {
              return (<Tool active={tool.id === this.props.selectedTool.id} onClick={() => this.handleOnClick(tool)} label={tool.label} />)
            })
          }
        </Box>
        <Box gridArea='properties' pad='small' fill>
          <Box direction='column' fill>
            <Text size='small'><b>Properties</b></Text>
            <Tabs fill>
              { this.state.selectedTool && this.state.selectedTool.properties ? Object.keys(this.state.selectedTool.properties).map(key => {
                return (
                  <Tab title={key.toUpperCase()}>
                    <Box fill pad='xsmall' justify='start' align='start'>
                    {Object.keys(this.state.selectedTool.properties[key]).map(item =>{
                      if(typeof this.state.selectedTool.properties[key][item] !="object"){
                        return  <Box><Text>{item}</Text><TextInput value={this.state.selectedTool.properties[key][item]} onChange={(e)=> {
                          this.state.selectedTool.properties[key][item] = e.target.value
                          selectTool(this.state.selectedTool)}}/></Box>
                      }else{
                        return <Box><Text><b>{item}</b></Text>{Object.keys(this.state.selectedTool.properties[key][item]).map(subitem => {
                          let field = typeof this.state.selectedTool.properties[key][item][subitem]
                          if(field =='number')
                          return <Box><Text>{subitem}</Text><TextInput onChange={(value)=> console.log(value)}/></Box>
                      })
                      }</Box>
                      }
                      
                    })}
                     
                    </Box>
                  </Tab>
                )
              }) : null }
            </Tabs>
          </Box>
        </Box>
      </Grid>
    )
  }
}

export default connect(mapStateToProps, { selectTool })(Toolbar)
