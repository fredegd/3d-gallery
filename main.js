import * as THREE from 'three';
import  './style.css'
//========
//3Dscene
//========
const scene = new THREE.Scene();


//========
// a sphere
//======== 
const geometry =  new THREE.SphereGeometry(3,64,64)
const material = new THREE.MeshStandardMaterial({
    color: "#00ff83",
})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

//========
// sizes
//========
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}


//========
// lights
//========
const light = new THREE.PointLight(0xffffff,1,100)
light.position.set(0,10,10);
scene.add(light)

//========
// camera
//========
const camera = new THREE.PerspectiveCamera(45, 800/600, 0.1,100)//(angle, aspect ratio)
camera.position.z =25
scene.add(camera)



//========
//renderer
//========
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(sizes.width,sizes.height);
renderer.render(scene, camera)


//========
// resize
//========

window.addEventListener("resize", ()=>{
    // update the sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    //update the camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width,sizes.height);
    console.log(scene,"1")

})

const loop = ()=>{
    // light.rotation.x += 0.2
    mesh.position.x += 0.1
    // renderer.render(scene.childrencamera);
    
    window.requestAnimationFrame(loop)
}

loop()
