import ParticleField from './ParticleField';
import ConnectingLines from './ConnectingLines';

export default function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <ParticleField />
      <ConnectingLines />
    </>
  );
}