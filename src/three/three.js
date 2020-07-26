import * as THREE from 'three';

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({antialias: true});
//renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setSize(900, 600);

const camera = new THREE.PerspectiveCamera(75, 600 / 400, .1, 1000);
const light = new THREE.DirectionalLight(0xffffff);
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshLambertMaterial({color: 0xf066aa});
const cube = new THREE.Mesh(geometry, material);

export {
    scene,
    renderer,
    camera,
    light,
    geometry,
    material,
    cube
}