const initialState = {
  material: null,
  geometry: null,
  mesh: null
}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_TOOL':
      console.log('You selected a tool.')
      return Object.assign({}, state, {
        material: action.material,
        geometry: action.geometry,
        mesh: action.mesh
      })
     case 'ADD_TO_SCENE' :
      action.scene.add(state.mesh)
      return state
    default:
      return state
  }
}
