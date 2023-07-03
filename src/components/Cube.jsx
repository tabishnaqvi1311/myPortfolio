import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const Cube = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(60, 600 / 400, 0.1, 1000);
    camera.position.z = 4;
    scene.add(camera)

    // Create a renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(600, 400);
    renderer.setClearColor("white", 0)
    canvasRef.current.appendChild(renderer.domElement);

    // Create a geometry for the cube
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const color = "#d4f0fc"

    // Create a material for the cube
    // const materials = new THREE.MeshStandardMaterial({color: "#d4f0fc"})
    const materials = [
      new THREE.MeshStandardMaterial({ color: "#d4f0fc" }), // Red
      new THREE.MeshStandardMaterial({ color: "#d4f0fc" }), // Green
      new THREE.MeshStandardMaterial({ color: "#b2cad4" }), // Blue
      new THREE.MeshStandardMaterial({ color: "#b2cad4" }), // Yellow
      new THREE.MeshStandardMaterial({ color: "#98adb5" }), // Magenta
      new THREE.MeshStandardMaterial({ color: "#98adb5" })  // Cyan
    ];

    // const faceLabels = ['Open Source Enthusiast', 'Web Developer', 'Data Structures', 'Video Editor', 'Blogger', 'Javascript Developer'];

    // faceLabels.forEach((label, index) => {
    // const canvas = document.createElement('canvas');
    // const context = canvas.getContext('2d');
    // canvas.width = 100;
    // canvas.height = 56;
    // context.fillStyle = '#ffffff';
    // context.font = 'bold 5px Roboto';
    // context.fillText(label, 10, 30);

    // const texture = new THREE.CanvasTexture(canvas);
    // materials[index].map = texture;
    // materials[index].needsUpdate = true;
    // });


    // Create a mesh with the geometry and material
    const cube = new THREE.Mesh(geometry, materials);

    // const light = new THREE.PointLight("white", 1, 100);
    // light.position.set(0, 10, 10);
    // scene.add(light)

    const light = new THREE.AmbientLight(0xf0f0f0); // soft white light
    scene.add(light);


    // Add the cube to the scene
    scene.add(cube);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the cube
      cube.rotation.x += 0.008;
      cube.rotation.y += 0.008;

      // Render the scene with the camera
      renderer.render(scene, camera);
    };

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.enablePan = false
    controls.enableZoom = false
    // controls.autoRotate = true
    // controls.autoRotateSpeed = 5
    // cube.rotation.x += 10;
    // cube.rotation.y += 10;

    // Clean up
    return () => {
      animate();
      // Remove the renderer when the component is unmounted

    };
  }, []);


  return (
    <>
      <div className='my-20' ref={canvasRef} />
    </>
  );
};

export default Cube;