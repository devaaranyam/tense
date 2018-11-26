export const selectTool = (geometry,material,mesh) => {
  return {
    type: 'SELECT_TOOL',
    geometry : geometry, 
    material : material,
    mesh : mesh
  }
}

 export const addToScene = (scene,mesh) => {   return {
    type: 'ADD_TO_SCENE',
    scene : scene,
    mesh : mesh
  }
 }