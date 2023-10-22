import * as THREE from "three";

export function Car(){
  const car = newTHREE.Group();

  const backWheel = new THREE.Mesh(
    new THREE.BoxBufferGeometry(12,33,12),
    new THREE.MeshLambertMaterial({color: 0x333333 })
  );
  return car;
}