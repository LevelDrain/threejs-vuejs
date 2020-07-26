<template>
    <div ref="stage"></div>
</template>

<script>
    import * as threeObj from '@/three/three';

    export default {
        name: "RotateBox",
        //https://qiita.com/kokorau/items/1c8ba182699b3646b363
        //↑ DOMからの取得はmounted -> getElementByは基本使わない ↓
        //https://qiita.com/masa0209/items/3110fc44f66e629c473f
        data() {
            return {
                scene: threeObj.scene,
                renderer: threeObj.renderer,
                camera: threeObj.camera,
                light: threeObj.light,
                geometry: threeObj.geometry,
                material: threeObj.material,
                cube: threeObj.cube,
            }
        },
        created() {
            this.camera.position.set(0, 0, 2);
            this.light.position.set(0, 0, 10);
            this.scene.add(this.cube);
            this.scene.add(this.light);
        },
        mounted() {
            this.$refs.stage.appendChild(this.renderer.domElement);
            //レンダラーのcanvasを追加
            console.log(this.$refs.stage);
            this.tick();
        },
        methods: {
            tick() {
                this.cube.rotation.x += .02;
                this.cube.rotation.y += .02;

                this.renderer.setPixelRatio(devicePixelRatio);
                this.renderer.render(this.scene, this.camera);
                requestAnimationFrame(this.tick);
            }
        }
    }
</script>