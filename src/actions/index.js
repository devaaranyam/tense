export const selectTool = (tool) => {
  return {
    type: 'SELECT_TOOL',
    selectedTool: tool
  }
}

export const addToScene = () => {
  return {
    type: 'ADD_TO_SCENE'
  }
}

export const storeScene = (scene) => {
  return {
    type: 'STORE_SCENE',
    scene: scene
  }
}
