import React, { Component } from 'react'
import { Scene, PerspectiveCamera, WebGLRenderer } from 'three'
import { Box } from 'grommet'
import { addToScene } from '../../actions'
import OrbitControls from '../../controls/orbit'
let canvas
export class Canvas extends Component {
  constructor (props) {
    super(props)
    this.store = this.props.store
    this.state = {
      renderer: new WebGLRenderer({ antialias: true })
    }
    this.handleOnClick = this.handleOnClick.bind(this)
  }
  componentDidMount () {
    let { renderer } = this.state
    let scene = new Scene()
    let camera = new PerspectiveCamera(75, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000)
    let controls = new OrbitControls(camera)
    camera.position.z = 5
    controls.update()
    this.state.camera = camera
    this.state.scene = scene
    window.scene = scene
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight)
    canvas.append(renderer.domElement)
    let animate = () => {
      window.requestAnimationFrame(animate)
      renderer.render(this.state.scene, this.state.camera)
      controls.update()
    }
    animate()
  }
  handleOnClick () {
    this.store.dispatch(addToScene(this.state.scene))
  }

  render () {
    return (
      <Box onClick={this.handleOnClick} ref={element => { canvas = element }} fill />
    )
  }
}
