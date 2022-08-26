import './style.css'
import * as THREE from 'three';
import { render } from 'vue';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),  
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshLambertMaterial({color: 0x47acf5});
const torus = new THREE.Mesh(geometry, material);

scene.add(torus)

// light
const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(5, 5, 5);
const ambientLight = new THREE.AmbientLight(0xb7f6f7); 
scene.add(pointLight, ambientLight);

// helpers
//const lightHelper = new THREE.PointLightHelper(pointLight);
//const gridHelper = new THREE.GridHelper(200, 50);
//scene.add(gridHelper);

// orbit control
const controls = new OrbitControls(camera, renderer.domElement);

function animate(){
  requestAnimationFrame(animate);
  torus.rotation.x += 0.01
  torus.rotation.y += 0.005;
  renderer.render(scene, camera);
}

animate();

// random generation of star position
function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 20, 20);
  const material = new THREE.MeshStandardMaterial({color: 0xcf77f7});
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

// add random stars to the background
Array(200).fill().forEach(addStar);

// add texture
const spaceTexture = new THREE.TextureLoader().load('space.jpg');
scene.background = spaceTexture;

// Avartar
const meTexture = new THREE.TextureLoader().load('pic_of_myself.png');

const me = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3),
  new THREE.MeshBasicMaterial({map: meTexture})
);

scene.add(me);

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  me.rotation.y += 0.01;
  me.rotation.z += 0.01;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.001;
  camera.position.y = t * -0.001;
}

document.body.onscroll = moveCamera