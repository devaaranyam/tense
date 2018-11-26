import React, { Component } from 'react'
import { Scene, PerspectiveCamera, WebGLRenderer } from 'three'
import { Box } from 'grommet'
import { addToScene } from '../actions'
let canvas
export class Canvas extends Component {
  constructor (props) {
    super(props)
    this.store = this.props.store
    this.state = {
      renderer : new WebGLRenderer({antialias:true})
    }
    this.handleOnClick = this.handleOnClick.bind(this)

  }
  componentDidMount () {
    let { renderer } = this.state
    let scene = new Scene()
    let camera = new PerspectiveCamera(75, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000)
    camera.position.z = 5;
    this.state.camera = camera
    this.state.scene = scene
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight)
    canvas.append(renderer.domElement)
    let animate  =  () => {
      requestAnimationFrame( animate );
      renderer.render( this.state.scene, this.state.camera );
      console.log(this.state.scene)
    }
    animate()
  }
  handleOnClick () {
    this.store.dispatch(addToScene( this.state.scene ))
    console.log(this.state.scene)
  }
  
  render () {
    return (
      <Box onClick={this.handleOnClick} ref={element => { canvas = element }} fill/>
    )
  }
}
