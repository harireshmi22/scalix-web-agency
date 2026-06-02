import { useRef, useEffect } from 'react';

export function useScrollReveal(animClass = 'animate-in', selector = '.anim', threshold = 0.1) {
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add(animClass); }),
            { threshold }
        );
        const els = ref.current?.querySelectorAll(selector);
        els?.forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, [animClass, selector, threshold]);
    return ref;
}