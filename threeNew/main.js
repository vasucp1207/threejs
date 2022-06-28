import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';
// import vertexShader from './shaders/vertex.glsl'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(15, 32, 16);
const material = new THREE.MeshBasicMaterial( {
  
  map: new THREE.TextureLoader().load('./assets/globe.jpeg')
} )

const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    sphere.rotation.x += 0.003;
    sphere.rotation.y += 0.003;
    sphere.rotation.z += 0.003;
}
animate();

camera.position.z = 40;