import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import * as dat from 'dat.gui'
import earthmap from '../img/earthmap1k.jpg'
import jupitermap from '../img/jupitermap.jpg'
import marsmap from '../img/mars_1k_color.jpg'
import mercurymap from '../img/mercurymap.jpg'
import neptunemap from '../img/neptunemap.jpg'
import saturnmap from '../img/saturnmap.jpg'
import saturnring from '../img/saturnringcolor.jpg'
import sunmap from '../img/sunmap.jpg'
import uranusmap from '../img/uranusmap.jpg'
import uranusring from '../img/uranusringcolour.jpg'
import venusmap from '../img/venusmap.jpg'
import plutomap from '../img/plutomap1k.jpg'
import stars from '../img/stars.jpg'

const renderer = new THREE.WebGLRenderer()

renderer.setSize(window.innerWidth , window.innerHeight)

document.body.appendChild(renderer.domElement)

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000 
)

const ambientLight = new THREE.AmbientLight(0x333333)
scene.add(ambientLight)

const orbit = new OrbitControls(camera , renderer.domElement)

camera.position.set(-90 , 140 , 140)
orbit.update

const texttureLoader  = new THREE.TextureLoader()

const sunGeo = new THREE.SphereGeometry(16 , 100 ,100)
const sunMat = new THREE.MeshBasicMaterial ({
    map : texttureLoader.load(sunmap)

})
const sun = new THREE.Mesh(sunGeo , sunMat)
scene.add(sun)

const pointLight = new THREE.PointLight(0xffffff , 1 , 300)
scene.add(pointLight)

const createPlanet = (size , texture , position , ring) => {
    const Geo = new THREE.SphereGeometry(size , 100 ,100)
    const Mat = new THREE.MeshStandardMaterial ({
        map : texttureLoader.load(texture)
    })
    const mesh = new THREE.Mesh(Geo , Mat)

    const obj = new THREE.Object3D()
    obj.add(mesh)
    scene.add(obj)
    mesh.position.x = position;

    if (ring) {
        const ringGeo = new THREE.RingGeometry(ring.innerRaduis , ring.outerRaduis , 32)
        const ringMat = new THREE.MeshStandardMaterial ({
            map : texttureLoader.load(ring.texture),
            side : THREE.DoubleSide
        
        })
        const ringMesh = new THREE.Mesh(ringGeo , ringMat)
        obj.add(ringMesh)
        ringMesh.position.x = position
        ringMesh.rotation.x = -0.5 * Math.PI
        
    }

    return {mesh , obj}
}

const mercury = createPlanet(3.2 , mercurymap , 28)
const venus = createPlanet(5.8 , venusmap , 44)
const earth = createPlanet(6 , earthmap , 62)
const mars = createPlanet(4 , marsmap , 78)
const jupiter = createPlanet(12 , jupitermap , 100)
const saturn = createPlanet(10 , saturnmap , 138 , {
    innerRaduis : 12,
    outerRaduis : 16,
    texture : saturnring
})

const uranus = createPlanet(7 , uranusmap , 176 , {
    innerRaduis : 8,
    outerRaduis : 10,
    texture : uranusring
})

const neptune = createPlanet(12 , neptunemap , 200)
const pluto = createPlanet(2.8 , plutomap , 250)
    


const animate = () => {

    renderer.render(scene , camera)
    sun.rotateY(0.004)
    mercury.mesh.rotateY(0.004)
    mercury.obj.rotateY(0.04)
    venus.mesh.rotateY(0.004)
    venus.obj.rotateY(0.02)
    earth.mesh.rotateY(0.004)
    earth.obj.rotateY(0.01)
    mars.mesh.rotateY(0.004)
    mars.obj.rotateY(0.008)
    jupiter.mesh.rotateY(0.004)
    jupiter.obj.rotateY(0.006)
    saturn.mesh.rotateY(0.004)
    saturn.obj.rotateY(0.005)
    uranus.mesh.rotateY(0.004)
    uranus.obj.rotateY(0.004)
    neptune.mesh.rotateY(0.004)
    neptune.obj.rotateY(0.003)
    pluto.mesh.rotateY(0.004)
    pluto.obj.rotateY(0.002)
    
}

renderer.setAnimationLoop(animate)

