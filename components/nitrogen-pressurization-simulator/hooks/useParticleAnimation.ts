import { useState, useEffect, useRef, useCallback } from 'react';
import type { Particle } from '../types';

const TANK_WIDTH = 500;
const TANK_HEIGHT = 300;
const NUM_PARTICLES = 150;
const PARTICLE_RADIUS = 3;
const LEAK_POSITION = { x: TANK_WIDTH, y: TANK_HEIGHT / 2 };
const LEAK_SIZE = 20;

const createParticle = (id: number): Particle => ({
  id,
  x: PARTICLE_RADIUS + Math.random() * (TANK_WIDTH - PARTICLE_RADIUS * 2),
  y: PARTICLE_RADIUS + Math.random() * (TANK_HEIGHT - PARTICLE_RADIUS * 2),
  vx: (Math.random() - 0.5) * 2,
  vy: (Math.random() - 0.5) * 2,
  radius: PARTICLE_RADIUS,
  isEscaped: false,
  opacity: 1,
});

const initializeParticles = (): Particle[] => {
  return Array.from({ length: NUM_PARTICLES }, (_, i) => createParticle(i));
};

export const useParticleAnimation = (isLeaking: boolean) => {
  const [particles, setParticles] = useState<Particle[]>(initializeParticles());
  const animationFrameId = useRef<number>();

  useEffect(() => {
    // When the leak is sealed, reset the simulation.
    if (!isLeaking) {
      setParticles(initializeParticles());
    }
  }, [isLeaking]);

  const animate = useCallback(() => {
    setParticles(prevParticles => 
      prevParticles.map(p => {
        if (p.isEscaped) {
          // Fading and moving away. Don't reset when opacity is 0.
          const newOpacity = Math.max(0, p.opacity - 0.01);
          return {
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            opacity: newOpacity,
          };
        }

        let newX = p.x + p.vx;
        let newY = p.y + p.vy;
        let newVx = p.vx;
        let newVy = p.vy;
        let escaped = false;

        // Wall collision
        if (newX - p.radius < 0 || newX + p.radius > TANK_WIDTH) {
          // Check for leak
          if (
            isLeaking &&
            newX + p.radius > TANK_WIDTH &&
            Math.abs(newY - LEAK_POSITION.y) < LEAK_SIZE / 2
          ) {
            escaped = true;
            newVx = Math.abs(newVx) * 1.5; // Propel out of leak
          } else {
            newVx = -newVx;
            newX = p.x + newVx;
          }
        }
        if (newY - p.radius < 0 || newY + p.radius > TANK_HEIGHT) {
          newVy = -newVy;
          newY = p.y + newVy;
        }

        return {
          ...p,
          x: newX,
          y: newY,
          vx: newVx,
          vy: newVy,
          isEscaped: escaped,
          opacity: escaped ? 1 : p.opacity,
        };
      })
    );
    animationFrameId.current = requestAnimationFrame(animate);
  }, [isLeaking]);

  useEffect(() => {
    animationFrameId.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [animate]);
  
  const pressure = (particles.filter(p => !p.isEscaped).length / NUM_PARTICLES) * 100;

  return { particles, pressure, tankDimensions: { width: TANK_WIDTH, height: TANK_HEIGHT, leakSize: LEAK_SIZE } };
};