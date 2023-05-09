import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MatDialog } from '@angular/material/dialog';
import { InfoComponent } from '../info/info.component';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import { DIALOG_DATA } from '@angular/cdk/dialog';

export interface DialogData {
  chosenMap: 'terkep' | 'vizeses' | 'garadna' | 'kozepgaradna' | 'fazolakoho' | 'lillafured' | 'puskaporos' | 'papirgyar' | 'majlath' | 'martabanya' | 'diosgyor' | 'dorottya' | 'chinoin' | 'csanyikerdei' | 'ortasteto' | 'andokut' | 'mahoca';
}

export interface MapObject {

}

@Component({
  selector: 'app-terkep',
  templateUrl: './terkep.component.html',
  styleUrls: ['./terkep.component.scss']
})
export class TerkepComponent implements OnInit {
  
  
  dialog: any;

  @ViewChild('map', { static: true }) myCanvas !: ElementRef;

  constructor(private dialogRef: MatDialog) { }


  megoldas = 'megoldas';


  ngOnInit(): void {
    this.createThreeJsBoxMap();
  }



  createThreeJsBoxMap(): void {
    var WIDTH;
    var HEIGHT;
    var aspectRatio;
    var scene: THREE.Scene;
    let camera = new THREE.PerspectiveCamera(75, aspectRatio, 1, 1000);

    camera.position.set(0, 9, 11);

    
    var renderer: THREE.WebGLRenderer;
    var light1;
    var raycaster: THREE.Raycaster;
    var mouse: THREE.Vector2;
    var objects: THREE.Object3D<THREE.Event>[] = [];
    var terkepimg: any;
    var hatterimg: any;
    var garadnaimg: any;
    var dorottya: any;
    var kozepgaradna: any;
    var fazolakoho: any;
    var lillafured: any;
    var puskaporos: any;
    var papirgyar: any;
    var majlath: any;
    var martabanya: any;
    var diosgyor: any;
    var chinoin: any;
    var csanyikerdei: any;
    var ortasteto: any;
    var andokut: any;
    var mahoca: any;
   
   // var controls: OrbitControls;

   const canvas = document.getElementById('map');

    terkep();

    function terkep() {
      var OBJFile = ' ../../../../assets/blender/terkep.obj';
      var MTLFile = ' ../../../../assets/blender/terkep.mtl';


      new MTLLoader()
        .load(MTLFile, function (materials) {
          materials.preload();
          new OBJLoader()
            .setMaterials(materials)
            .load(OBJFile, function (object) {
              terkepimg = object;
              object.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                  child.scale.set(3, 3, 3);

                }
              });

             
              hatter();
            });
        });
    }
    function hatter() {
      var OBJFile1 = ' ../../../../assets/blender/terkephatter.obj';
      var MTLFile1 = ' ../../../../assets/blender/terkephatter.mtl';


      new MTLLoader()
        .load(MTLFile1, function (materials) {
          materials.preload();
          new OBJLoader()
            .setMaterials(materials)
            .load(OBJFile1, function (object) {
              hatterimg = object;
              object.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                  child.scale.set(25, 30, 35);

                }
              });

              garadna();
            });
        });
    }
    function garadna() {
      var OBJFile = ' ../../../../assets/blender/garadna.obj';
      var MTLFile = ' ../../../../assets/blender/garadna.mtl';


      new MTLLoader()
        .load(MTLFile, function (materials) {
          materials.preload();
          new OBJLoader()
            .setMaterials(materials)
            .load(OBJFile, function (object) {
              garadnaimg = object;
        
              object.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                  child.scale.set(0.3, 0.3, 0.3);
                 objects.push(child);
                }
              });
              


              init();
            });

        });

    }



    function init() {
      // Böngésző ablakméret lekérése és méretarány számítása
      HEIGHT = window.innerHeight;
      WIDTH = window.innerWidth;
      aspectRatio = WIDTH / HEIGHT;

      // Színtér létrehozása
      scene = new THREE.Scene();

      if (!canvas) {
        return;
      }
      // Renderer létrehozása és DOM-hoz adása
      renderer = new THREE.WebGLRenderer({ canvas: canvas });
      renderer.setSize(WIDTH, HEIGHT);
      renderer.setClearColor(0x202020);
      //document.body.appendChild(renderer.domElement);

      // Kamera létrehozása és vetítési paramétereinek beállítása
      camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
      //camera.position.z = 15;
      camera.position.set(0, 9, 11);




      //controls = new OrbitControls(camera, renderer.domElement);
      // Betöltött objektum színtérhez adása

      
      kozepgaradna = garadnaimg.clone();
      fazolakoho = garadnaimg.clone();
      lillafured = garadnaimg.clone();
      puskaporos = garadnaimg.clone();
      papirgyar = garadnaimg.clone();
      majlath = garadnaimg.clone();
      martabanya = garadnaimg.clone();
      diosgyor = garadnaimg.clone();
      dorottya = garadnaimg.clone();
      chinoin = garadnaimg.clone();
      csanyikerdei = garadnaimg.clone();
      ortasteto = garadnaimg.clone();
      andokut = garadnaimg.clone();
      mahoca = garadnaimg.clone();
      
      

      
      
      kozepgaradna.traverse(function (child: any) {
        if (child instanceof THREE.Mesh) {
          child.name="kozepgaradna";
          objects.push(child);
        }
      });
      fazolakoho.traverse(function (child: any) {
        if (child instanceof THREE.Mesh) {
          child.name="fazolakoho";
          objects.push(child);
        }
      });
      lillafured.traverse(function (child: any) {
        if (child instanceof THREE.Mesh) {
          child.name="lillafured";
          objects.push(child);
        }
      });
      puskaporos.traverse(function (child: any) {
        if (child instanceof THREE.Mesh) {
          child.name="puskaporos";
          objects.push(child);
        }
      });
      papirgyar.traverse(function (child: any) {
        if (child instanceof THREE.Mesh) {
          child.name="papirgyar";
          objects.push(child);
        }
      });
      majlath.traverse(function (child: any) {
        if (child instanceof THREE.Mesh) {
          child.name="majlath";
          objects.push(child);
        }
      });
      martabanya.traverse(function (child: any) {
        if (child instanceof THREE.Mesh) {
          child.name="martabanya";
          objects.push(child);
        }
      });
      diosgyor.traverse(function (child: any) {
        if (child instanceof THREE.Mesh) {
          child.name="diosgyor";
          objects.push(child);
        }
      });
      dorottya.traverse(function (child: any) {
        if (child instanceof THREE.Mesh) {
          child.name="dorottya";
          objects.push(child);
        }
      });
      dorottya.traverse(function (child: any) {
        if (child instanceof THREE.Mesh) {
          child.name="dorottya";
          objects.push(child);
        }
      });
      chinoin.traverse(function (child: any) {
        if (child instanceof THREE.Mesh) {
          child.name="chinoin";
          objects.push(child);
        }
      });
      csanyikerdei.traverse(function (child: any) {
        if (child instanceof THREE.Mesh) {
          child.name="csanyikerdei";
          objects.push(child);
        }
      });
      ortasteto.traverse(function (child: any) {
        if (child instanceof THREE.Mesh) {
          child.name="ortasteto";
          objects.push(child);
        }
      });
      andokut.traverse(function (child: any) {
        if (child instanceof THREE.Mesh) {
          child.name="andokut";
          objects.push(child);
        }
      });
      mahoca.traverse(function (child: any) {
        if (child instanceof THREE.Mesh) {
          child.name="mahoca";
          objects.push(child);
        }
      });
      
      
      terkepimg.position.set(0, 0, 0); 
      hatterimg.position.set(0,-15,0);
      garadnaimg.position.set(-11, 0.5, -1.2); //(balra jobbra, fel le, előre hátra)
      kozepgaradna.position.set(-8, 0.5, -1.2); 
      fazolakoho.position.set(-6, 0.5, 2); 
      lillafured.position.set(-2, 0.68, 4);
      puskaporos.position.set(0,0.5,3);
      papirgyar.position.set(4,0.5,-0.1);
      majlath.position.set(5.4,0.5,2.7);
      martabanya.position.set(8,0.5,1);
      diosgyor.position.set(9.8,0.5,2.3);
      dorottya.position.set(10,0.5,4.8);
      chinoin.position.set(1,0.5,-0.1);
      csanyikerdei.position.set(2.5,0.5,-2.5);
      ortasteto.position.set(0.2,0.5,-5);
      andokut.position.set(-4,0.5,-3.2);
      mahoca.position.set(-7.5,0.5,-5.5);

      hatterimg.rotation.y=45;
      

      scene.add(terkepimg);
      scene.add(hatterimg);
      scene.add(garadnaimg);
      scene.add(kozepgaradna);
      scene.add(fazolakoho);
      scene.add(lillafured);
      scene.add(puskaporos);
      scene.add(papirgyar);
      scene.add(majlath);
      scene.add(martabanya);
      scene.add(diosgyor);
      scene.add(dorottya);
      scene.add(chinoin);
      scene.add(csanyikerdei);
      scene.add(ortasteto);
      scene.add(andokut);
      scene.add(mahoca);
      

      
     
      
      scene.traverse(function (children) {
        objects.push(children);
      });


      // Fények
      var lightA = new THREE.AmbientLight(0x404040);
      lightA.intensity = 2;
      scene.add(lightA);

      light1 = new THREE.SpotLight(0xffffff, 1);
      light1.position.set(0, 30, 30);
      light1.angle = Math.PI / 4;
      light1.intensity = 2;
      scene.add(light1);
      var sLH1 = new THREE.SpotLightHelper(light1);
      //scene.add(sLH1);

      var nap = new THREE.SpotLight(0xffffe0, 3, 300, Math.PI / 4, 0.8); // szín fényerő távolság szög penumbra(ne legyen éles a spotlight
      nap.position.set(0, 200, 0); //(előre-hátra, fel-le, jobbra-balra)
      nap.target = terkepimg;
      nap.castShadow = true;
      scene.add(nap);

      var pointLight = new THREE.PointLight(0xffffff, 1);
      pointLight.position.set(0, 100, 0);
      pointLight.castShadow = false;

      scene.add(pointLight);


     



      mouse = new THREE.Vector2();

      console.log(chinoin.name);
      // 3d mouse
      document.addEventListener('mousedown', onMouseDown);



      camera.lookAt(scene.position);
      //document.body.removeChild(renderer.domElement);
      animate();
    }

    const onMouseDown = (event: any) => {

      if (canvas === null) {
        return
      }


      var intersects;
      raycaster = new THREE.Raycaster();

      const rect = canvas.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      
      mouse.x = (x / window.innerWidth) * 2 - 1;
      mouse.y = - (y / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      this.megoldas = "";


      intersects = raycaster.intersectObjects(scene.children);
   
      if (intersects.length !== 0) {
        
        this.megoldas = intersects[0]['object'].name;

        /*
        if (intersects[0]['object'].name === "kozepgaradna") {
          // openDialoge();
          this.megoldas = "kozepgaradna";
          console.log(intersects[0]['object']);
          return;
        }
        if (intersects[0]['object'].name === "fazolakoho") {
          // openDialoge();
          this.megoldas = "fazolakoho";
          console.log(intersects[0]['object']);
          return;
        }
        */
        if (intersects[0]['object'].name === "Cube.023_Cube.025" || intersects[0]['object'].name === "NurbsPath.003" || intersects[0]['object'].name === "Cube.021_Cube.022" || intersects[0]['object'].name === "Cube.023_Cube.025" || intersects[0]['object'].name === "NurbsPath.002" || intersects[0]['object'].name === "Cube.021_Cube.022" || intersects[0]['object'].name === "Cube.023_Cube.025" || intersects[0]['object'].name === "" || intersects[0]['object'].name === "Cube.001_Cube.002" || intersects[0]['object'].name === "Cube.002_Cube.003" || intersects[0]['object'].name === "Cube_Cube.001") {
         
          this.megoldas = "";
          return;
        }
        return;
      }

    }



    function animate() {
      // Újabb képkocka rajzolásának kérése.
      // Maximálisan 60 FPS-t biztosít a rendszer.

      renderer.setClearColor('lightcyan');


      requestAnimationFrame(animate);

  

      render();
      //cancelAnimationFrame(requestId);

    }



    function render() {
      // 3D -> 2D vetített kép kiszámítása.
      // scene 3D színtér képe a camera kamera szemszögéből.



      renderer.render(scene, camera);
    }

  }
  openDialog() {


    if (this.megoldas.length != 0) {
      this.dialogRef.open(InfoComponent, {
        data: {
          chosenMap: this.megoldas
        }
      });
    }
    else {
      return;
    }


    /*
    if (this.megoldas == 'garadna') {

      this.dialogRef.open(InfoComponent, {
        data: {
          chosenMap: this.megoldas
        }
      });
    }
    if (this.megoldas == 'kozepgaradna') {

      this.dialogRef.open(InfoComponent, {
        data: {
          chosenMap: 'kozepgaradna'
        }
      });
    }
    
    }*/


  }
  

}
