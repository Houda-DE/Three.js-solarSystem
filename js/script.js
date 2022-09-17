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

renderer.render(scene , camera)
