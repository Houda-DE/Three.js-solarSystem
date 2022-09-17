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
        const ring = new THREE.Mesh(ringGeo , ringMat)
        obj.add(ring)
        ring.position.x = position
        ring.rotation.x = -0.5 * Math.PI
        
    }

    return {mesh , obj}
}

const mercury = createPlanet(3.2 , mercurymap , 28)

const animate = () => {

    renderer.render(scene , camera)
    sun.rotateY(0.004)
    
}

renderer.setAnimationLoop(animate)

