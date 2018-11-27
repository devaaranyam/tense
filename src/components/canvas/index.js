import React, { Component } from 'react'

import { connect } from 'react-redux'
import { addToScene } from '../../actions'

import { Scene, PerspectiveCamera, WebGLRenderer } from 'three'

import { Box } from 'grommet'
import OrbitControls from './controls/orbit'

class Canvas extends Component {
  constructor (props) {
    super(props)
    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.animate = this.animate.bind(this)
  }
  componentDidMount () {
    const width = this.canvas.offsettWidth
    const height = this.canvas.offsetHeight

    this.scene = new Scene()

    this.camera = new PerspectiveCamera(75, width / height, 0.1, 1000)
    this.camera.position.z = 5

    this.controls = new OrbitControls(this.camera)

    this.renderer = new WebGLRenderer({ antialias: true })
    this.renderer.setClearColor('#000000')
    this.renderer.setSize(width, height)
    this.canvas.append(this.renderer.domElement)
    this.start()
    window.addEventListener('resize', this.onWindowResize.bind(this))
  }

  onWindowResize () {
    const width = this.canvas.offsettWidth
    const height = this.canvas.offsetHeight
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(width, height)
  }

  animate () {
    this.controls.update()
    this.renderer.render(this.scene, this.camera)
    this.frameId = window.requestAnimationFrame(this.animate)
  }

  renderScene () {
    this.renderer.render(this.scene, this.camera)
  }

  start () {
    if (!this.frameId) {
      this.frameId = window.requestAnimationFrame(this.animate)
    }
  }
  stop () {
    window.cancelAnimationFrame(this.frameId)
  }

  render () {
    return (
      <Box ref={element => { this.canvas = element }} fill />
    )
  }
}

export default connect(null, null)(Canvas)
