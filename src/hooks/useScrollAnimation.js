import { useEffect, useRef } from 'react';

/**
 * useScrollAnimation
 *
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport, the class `visible` is added —
 * which triggers CSS transitions defined in animations.css (.reveal, etc.)
 *
 * @param {Object} options
 * @param {number}  options.threshold - Fraction of element visible to trigger (default 0.12)
 * @param {string}  options.rootMargin - Margin around root (default '0px 0px -40px 0px')
 * @returns {React.RefObject} — attach to the element you want to animate
 */
const useScrollAnimation = ({
  threshold = 0.12,
  rootMargin = '0px 0px -40px 0px',
} = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('visible');
          // Once visible, stop observing
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
};

export default useScrollAnimation;
