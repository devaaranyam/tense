import React, { Component } from 'react'
import { selectTool } from '../../actions'
import { BoxGeometry, MeshBasicMaterial, Mesh } from 'three'
import { Button } from 'grommet'
import { Cube } from 'grommet-icons'
export class Toolbar extends Component {
  constructor(props){
    super(props)
    this.store = this.props.store
  }
  handleOnClick = () =>{
    let geometry = new BoxGeometry(1, 1, 1 )
    let material = new MeshBasicMaterial( {color: 0x00ff00} )
    let mesh = new Mesh( geometry, material );
    this.store.dispatch(selectTool( geometry, material, mesh ))
  }
  render () {
    return (
        <div>
      <Button  icon={<Cube/>} onClick = {this.handleOnClick}></Button>
        </div>
    )
  }
}
