import React, { Component } from 'react'

import { connect } from 'react-redux'
import { addToScene, storeScene } from '../../actions'

import { Scene, PerspectiveCamera, WebGLRenderer, GridHelper, Vector3, ArrowHelper } from 'three'

import { Box, Layer, Text, Button } from 'grommet'
import { StatusGood, FormClose } from 'grommet-icons'

import Controls from './controls'

class Canvas extends Component {
  constructor (props) {
    super(props)
    this.state = {
      notificiationOpen: true
    }
    this.handleOnClick = this.handleOnClick.bind(this)
    this.onWindowResize = this.onWindowResize.bind(this)
    this.animate = this.animate.bind(this)
    window.addEventListener('resize', this.onWindowResize)
  }
  componentWillUpdate () {

  }

  componentDidMount () {
    this.scene = new Scene()
    storeScene(this.scene)
    var size = 10
    var divisions = 10
    var gridHelper = new GridHelper(size, divisions, 0xfffff, 0xffffff)
    this.scene.add(gridHelper)
    var dir = new Vector3(1, 2, 0)

    // normalize the direction vector (convert to vector of length 1)
    dir.normalize()
    window.scene = this.scene
    let rect = this.canvas.getBoundingClientRect()
    this.camera = new PerspectiveCamera(75, rect.width / rect.height, 0.1, 1000)
    this.camera.position.z = 5
    this.renderer = new WebGLRenderer({ antialias: true, alpha: true })
    this.controls = new Controls(this.camera,this.canvas)
    this.renderer.setSize(rect.width, rect.height)
    this.animate()
    this.canvas.append(this.renderer.domElement)
  }
  animate () {
    window.requestAnimationFrame(this.animate)
    this.controls.update()
    this.renderer.render(this.scene, this.camera)
  }

  handleOnClick () {
    let { addToScene } = this.props
    addToScene(this.scene)
  }
  onWindowResize () {
    let rect = this.canvas.getBoundingClientRect()
    this.camera.aspect = rect.width / rect.height
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(rect.width, rect.height)
  }

  render () {
    return (
      <Box background='brand' ref={element => { this.canvas = element }} style={{ position: 'absolute', top: '0px', width: 'calc(100vw - 200px)', height: '100vh' }} onClick={this.handleOnClick} fill  />
    )
  }
}

export default connect(null, { addToScene })(Canvas)
