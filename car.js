import * as THREE from "three";

export function Car(){
  const car = new THREE.Group();

  const backWheel = new THREE.Mesh(
    new THREE.BoxGeometry(12,33,12),
    new THREE.MeshLambertMaterial({color: 0x333333 })
  );
  backWheel.position.z = 6;
  backWheel.position.x = -18;
  return car;
}

export default Car;