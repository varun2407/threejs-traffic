import * as THREE from "three";
import { AmbientLight } from "three";

const scene = new THREE.Scene();

const playerCar = Car();
scene.add(playerCar);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(AmbientLight)

const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
dirLight.position.set(100, -300, 400);
// x,y,z coordinates for light. x is the lowest(front of the car is darkest.) z is the highest value (top of the car is brightest)
scene.add(dirLight);


// Orthographic camera:
const aspectRatio = window.innerWidth / window.innerHeight;
const cameraWidth = 150;
const cameraHeight = cameraWidth / aspectRatio;

const camera = new THREE.OrthographicCamera(
  cameraWidth / -2, //left
  cameraWidth / 2, //right
  cameraHeight / 2, //top
  cameraHeight / -2, //bottom
  0, //near plane 
  1000 //far plane
);
camera.position.set(200, -200, 300);
camera.up.set(0,0,1);
camera.lookAt(0, 0, 0);

// renderer
const renderer = new THREE.WebGLRenderer( {antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);
