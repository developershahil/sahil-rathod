import { useState, useEffect } from 'react';

/**
 * useMousePosition
 *
 * Tracks the mouse cursor position as normalised values (-1 to 1)
 * relative to the centre of the viewport. Used for subtle parallax effects
 * in the Hero section.
 *
 * @returns {{ x: number, y: number }} — normalised mouse coords
 */
const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return position;
};

export default useMousePosition;
