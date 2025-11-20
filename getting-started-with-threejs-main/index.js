import * as THREE from 'three';
import {OrbitControls} from 'jsm/controls/OrbitControls.js';     

const w = window.innerWidth;
const h = window.innerHeight;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

const fov = 75;
const aspect = w / h;
const near = 0.1;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

const scene = new THREE.Scene();

const controls = new OrbitControls(camera, renderer.domElement);

renderer.render(scene, camera);

const geometry = new THREE.IcosahedronGeometry(1, 3);
const material = new THREE.MeshBasicMaterial({ color: 0xFFFFFF , flatShading: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const wireMat = new THREE.MeshBasicMaterial({ color: 0x000000, wireframe: true });
const wire = new THREE.Mesh(geometry, wireMat);
scene.add(wire);

const hemisphereLight = new THREE.HemisphereLight(0xFFFFFF, 0x0FFF00, 1);
scene.add(hemisphereLight);

function animate() {
    requestAnimationFrame(animate);
    
    renderer.render(scene, camera);
}

animate();