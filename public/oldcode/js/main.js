const init = () => {
    const $canvas = document.querySelector('Canvas'),
        width = $canvas.width,
        height = $canvas.height;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 2000);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({
        canvas: $canvas
    });

    const geometry = new THREE.BoxGeometry(1, 1, 1),
        material = new THREE.MeshToonMaterial({color: 0xf066aa}),
        cube = new THREE.Mesh(geometry, material);

    const light = new THREE.DirectionalLight(0xffffff);
    light.intensity = 1;
    light.position.set(1, 1, 1);

    scene.add(light);
    scene.add(cube);

    const tick = () => {
        cube.rotation.x += 0.02;
        cube.rotation.y += 0.02;
        renderer.render(scene, camera);
        requestAnimationFrame(tick);
    }
    tick();
}
onload = init;