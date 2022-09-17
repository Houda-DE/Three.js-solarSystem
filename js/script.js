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

const mercuryGeo = new THREE.SphereGeometry(3.2 , 100 ,100)
const mercuryMat = new THREE.MeshStandardMaterial ({
    map : texttureLoader.load(mercurymap)

})
const mercury = new THREE.Mesh(mercuryGeo , mercuryMat)

const mercuryObj = new THREE.Object3D()
mercuryObj.add(mercury)
scene.add(mercuryObj)
mercury.position.x = 28

const venusGeo = new THREE.SphereGeometry(5 , 100 ,100)
const venusMat = new THREE.MeshStandardMaterial ({
    map : texttureLoader.load(venusmap)

})
const venus = new THREE.Mesh(venusGeo , venusMat)

const venusObj = new THREE.Object3D()
venusObj.add(venus)
scene.add(venusObj)
venus.position.x = 45

const earthGeo = new THREE.SphereGeometry(7 , 100 ,100)
const earthMat = new THREE.MeshStandardMaterial ({
    map : texttureLoader.load(earthmap)

})
const earth = new THREE.Mesh(earthGeo , earthMat)

const earthObj = new THREE.Object3D()
earthObj.add(earth)
scene.add(earthObj)
earth.position.x = 80

const marsGeo = new THREE.SphereGeometry(9 , 100 ,100)
const marsMat = new THREE.MeshStandardMaterial ({
    map : texttureLoader.load(marsmap)

})
const mars = new THREE.Mesh(marsGeo , marsMat)

const marsObj = new THREE.Object3D()
marsObj.add(mars)
scene.add(marsObj)
mars.position.x = 110

const saturnGeo = new THREE.SphereGeometry(13 , 100 ,100)
const saturnMat = new THREE.MeshStandardMaterial ({
    map : texttureLoader.load(saturnmap)

})
const saturn = new THREE.Mesh(saturnGeo , saturnMat)

const saturnObj = new THREE.Object3D()
saturnObj.add(saturn)
scene.add(saturnObj)
saturn.position.x = 140

const saturnRingGeo = new THREE.RingGeometry(15 , 25 , 32)
const saturnRingMat = new THREE.MeshStandardMaterial ({
    map : texttureLoader.load(saturnring),
    side : THREE.DoubleSide

})
const saturnRing = new THREE.Mesh(saturnRingGeo , saturnRingMat)
saturnObj.add(saturnRing)
saturnRing.position.x = 140
saturnRing.rotation.x = -0.5 * Math.PI


const animate = () => {

    renderer.render(scene , camera)
    sun.rotateY(0.004)
    mercuryObj.rotateY(0.04)
    mercury.rotateY(0.004)
    venusObj.rotateY(0.02)
    venus.rotateY(0.004)
    earthObj.rotateY(0.01)
    earth.rotateY(0.004)
    marsObj.rotateY(0.009)
    mars.rotateY(0.004)
    saturnObj.rotateY(0.006)
    saturn.rotateY(0.004)
    saturnRing.rotateZ(0.004)


}

renderer.setAnimationLoop(animate)

