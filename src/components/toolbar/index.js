import React, { Component } from 'react'
import { selectTool } from '../../actions'
import { BoxGeometry, MeshBasicMaterial, Mesh, CylinderGeometry } from 'three'
import { Button } from 'grommet'
import { Cube } from 'grommet-icons'
export class Toolbar extends Component {
  constructor (props) {
    super(props)
    this.store = this.props.store
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
    console.log(this.store.dispatch(selectTool(geometry, material, mesh)))
  }
  render () {
    return (
      <div>
        <Button icon={<Cube />} plain label='cube' onClick={() => this.handleOnClick('cube')} />
        <Button icon={<Cube />} plain label='cylinder' onClick={() => this.handleOnClick('cylinder')} />
      </div>
    )
  }
}
