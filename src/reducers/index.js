import * as THREE from 'three'

const initialState = {
  scene: null,
  selectedTool: {
    id: null,
    name: null,
    parsedProps: {
      geometry: null,
      material: null
    },
    props: null
  }
}
export default (state = initialState, action) => {
  let parseProperties = (properties) => {
    let parsedProps = {}
    let { geometry, material } = properties
    parsedProps.geometry = new THREE[geometry.type](geometry.properties)
    parsedProps.material = new THREE[geometry.type](material.properties)
    return parsedProps
  }
  if (action.type === 'SELECT_TOOL') {
    let parsedProps = parseProperties(action.selectedTool.properties)
    return Object.assign({}, state, {
      selectedTool: {
        id: action.selectedTool.id,
        name: action.selectedTool.label,
        properties: action.selectedTool.properties,
        parsedProps
      }
    })
  }
  switch (action.type) {
    case 'ADD_TO_SCENE' :
      state.scene = action.scene
      return state
    case 'STORE_SCENE' :
      if (!state.scene) state.scene = action.scene
      return state
    default:
      return state
  }
}
