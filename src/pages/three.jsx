import { Canvas } from "@react-three/fiber";
import "../three.scss";
const three = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} />
      <ambientLight />
      <group position={[0, -1, 0]}>
        <mesh position={[1, 0, 0]}>
          <boxGeometry />
          <meshStandardMaterial color={"orange"} />
        </mesh>
        <mesh position={[-1, 0, 0]}>
          <boxGeometry />
          <meshStandardMaterial color={"orange"} />
        </mesh>
      </group>
    </Canvas>
  );
};

export default three;
