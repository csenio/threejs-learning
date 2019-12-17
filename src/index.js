import * as THREE from "three"

function main() {
  console.log("heyahoho")
  const canvas = document.querySelector("#c")
  // const renderer = new THREE.WebGLRenderer({ canvas });
  //camera
  const fov = 75 // field of view (height of camera)
  const aspect = 2 // the canvas default
  const near = 0.1 // closest visible point
  const far = 5 // after this point its cut off
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
  camera.position.z = 2
  //scene
  const scene = new THREE.Scene()
  //box
  const boxWidth = 1
  const boxHeight = 1
  const boxDepth = 1
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth)
}
main()
