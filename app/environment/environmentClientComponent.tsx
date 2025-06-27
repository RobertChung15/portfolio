"use client";
import React, { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

const EnvironmentClientComponent = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    //background
    // scene.background = new THREE.Color(0xffffff);
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#bg") as HTMLCanvasElement,
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);
    renderer.render(scene, camera);
    const controls = new OrbitControls(camera, renderer.domElement);
    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshStandardMaterial({
      color: 0xff6347,
      // wireframe: true,
    });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);
    
    // Add lighting
    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(5, 5, 5);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(pointLight, ambientLight);

    //wireframe of a light
    const lightHelper = new THREE.PointLightHelper(pointLight);
    scene.add(lightHelper);

    const gridHelper = new THREE.GridHelper(200, 50);
    scene.add(gridHelper)

    let animationId: number;
    function animate() {
      animationId = requestAnimationFrame(animate);
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.005;
      torus.rotation.z += 0.01;
      controls.update();
      renderer.render(scene, camera);
    }

    function addStar(){
      const geometry = new THREE.SphereGeometry(0.25, 24, 24);
      const material = new THREE.MeshStandardMaterial({color: 0xffffff});
      const star = new THREE.Mesh(geometry, material);
      const [x, y, z] = Array(3).fill(null).map(() => THREE.MathUtils.randFloatSpread(100));
      star.position.set(x, y, z);
      scene.add(star);
    }
    Array(200).fill(null).forEach(addStar);
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      renderer.dispose();
    };
  }, []);
  return (
    <div>
      <canvas id="bg" className="bg-white"></canvas>
    </div>
  );
};

export default EnvironmentClientComponent;
