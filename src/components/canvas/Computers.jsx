import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {
  const { scene } = useGLTF('./desktop_pc/scene.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive object={scene}
      scale={isMobile ? 0.7 : 0.75}
      position={isMobile ? [0, -3, -2.2]:[0, -3.25, -1.5]}
      rotation={[-0.01, -0.2, -0.1]}
      />
      
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(()=>{
      const mediaQuery = window.matchMedia('(max-width: 500px')
      setIsMobile(mediaQuery.matches);
      const handleMediaQueryChange=(event)=>{
        setIsMobile(event.matches);
      }
      mediaQuery.addEventListener('change', handleMediaQueryChange);
      return () => {
        mediaQuery.removeEventListener('change', handleMediaQueryChange);
      }

  }, [])
  useEffect(() => {
    const canvasElement = document.querySelector("canvas");
    if (canvasElement) {
      // Force a redraw on load to ensure the canvas is refreshed
      canvasElement.width = window.innerWidth;
      canvasElement.height = window.innerHeight;
    }
  }, []);
  const [key, setKey] = useState(Date.now());

  useEffect(() => {
    
    // Trigger a refresh of the canvas when the page is loaded
    const handleRefresh = () => {
      setKey(Date.now()); // This will force a re-render by updating the key
    };

    // Listen for refresh on the page
    window.addEventListener('beforeunload', handleRefresh);

    return () => {
      window.removeEventListener('beforeunload', handleRefresh);
    };
  }, []);

  return (
    <Canvas
      key={key} // Changing the key will ensure a fresh load
      frameLoop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
