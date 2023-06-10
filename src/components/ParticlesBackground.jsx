import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particlesConfig from './config/particles-config';

const ParticlesBackground = () => {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);
    return (
        <Particles init={particlesInit} options={particlesConfig} />
    )
}

export default ParticlesBackground