import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


@Component({
  selector: 'app-nagymav',
  templateUrl: './nagymav.component.html',
  styleUrls: ['./nagymav.component.scss']
})
export class NagymavComponent {

  @ViewChild('nagymav', { static: true }) myCanvas !: ElementRef;


  constructor() { }

  ngOnInit(): void {
    this.createThreeJsTrain();


  }





  createThreeJsTrain(): void {
    var WIDTH;
    var HEIGHT;
    var aspectRatio;
    var scene: THREE.Scene;
    var camera: THREE.PerspectiveCamera;
    var groupLoaded: any;
    var meshLoaded: any;
    var renderer: THREE.WebGLRenderer;
    var light1;
    var url = '../../../../../assets/blender/nagymav.obj';
    var mtl = '../../../../../assets/blender/nagymav.mtl';
    var mesh: THREE.MeshStandardMaterial;
    var valami: any;
    var controls: OrbitControls;
    var nap;

    const canvas = document.getElementById('nagymav');

    loader()

    function loader() {
      var OBJFile = url;
      var MTLFile = mtl;


      new MTLLoader()
        .load(MTLFile, function (materials) {
          materials.preload();
          new OBJLoader()
            .setMaterials(materials)
            .load(OBJFile, function (object) {
              meshLoaded = object;
              console.log(object);

              object.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                  child.scale.set(1, 1, 1);
                }
              });



              init();
            });
        });
    }
    function init() {
      HEIGHT = window.innerHeight / 2;
      WIDTH = window.innerWidth / 2;
      aspectRatio = WIDTH / HEIGHT;


      scene = new THREE.Scene();

      if (!canvas) {
        return;
      }
      renderer = new THREE.WebGLRenderer({ canvas: canvas });
      renderer.setSize(WIDTH, HEIGHT);
      renderer.setClearColor(0x202020);

      camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);

      camera.position.set(0, 7, 25);
      controls = new OrbitControls(camera, renderer.domElement);

      scene.add(meshLoaded);


      var lightA = new THREE.AmbientLight(0x404040);
      scene.add(lightA);

      light1 = new THREE.SpotLight(0xffffff, 1);
      light1.position.set(0, 20, 30);
      light1.angle = Math.PI / 4;
      light1.intensity = 2;
      scene.add(light1);

      var lightC = new THREE.AmbientLight(0x404040);
      lightC.intensity = 4;
      scene.add(lightC);

      var lightB = new THREE.AmbientLight(0x404040);
      lightB.intensity = 4; //balrajobbra, fel le, előre hátra
      lightB.position.set(0, 0, -0);
      scene.add(lightB);

      var nap = new THREE.SpotLight(0xffffe0, 3, 300, Math.PI / 4, 0.8);
      nap.position.set(0, 200, 0); //(előre-hátra, fel-le, jobbra-balra)
      nap.target = meshLoaded;
      nap.castShadow = true;
      nap.intensity = 50;
      scene.add(nap);
      camera.lookAt(scene.position);

      animate();
    }

    function animate() {

      requestAnimationFrame(animate);

      renderer.setClearColor('grey');
      meshLoaded.rotation.y += 0.01;

      render();

    }
    function render() {
      renderer.render(scene, camera);

    }

  }


}