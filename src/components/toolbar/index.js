import React, { Component } from 'react'

import { connect } from 'react-redux'
import { selectTool } from '../../actions'

import { BoxGeometry, MeshBasicMaterial, Mesh, CylinderGeometry } from 'three'

import { Button } from 'grommet'
import { Cube } from 'grommet-icons'
import  CylinderIcon  from '../../icons/cylinderIcon'
class Toolbar extends Component {
  constructor () {
    super()
    this.handleOnClick = this.handleOnClick.bind(this)
  }
  handleOnClick (type) {
    let geometry, material
    switch (type) {
      case 'cube':
        geometry = new BoxGeometry(1, 1, 1)
        material = new MeshBasicMaterial({ color: 0x00ff00 })
        break
      case 'cylinder':
        geometry = new CylinderGeometry(1, 1, 1, 32)
        material = new MeshBasicMaterial({ color: 0x00ff00 })
        break
      default:
    }
    let mesh = new Mesh(geometry, material)
    this.props.selectTool(geometry, material, mesh)
  }
  render () {
    return (
      <div>
        <Button icon={<Cube />}  onClick={() => this.handleOnClick('cube')} />
      </div>
    )
  }
}

export default connect(null, { selectTool })(Toolbar)
