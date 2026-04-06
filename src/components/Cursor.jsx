import { useEffect, useRef } from 'react';

const styles = {
  cursor: {
    position: 'fixed',
    top: 0, left: 0,
    width: 12, height: 12,
    background: 'var(--black)',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 9999,
    transform: 'translate(-50%, -50%)',
    transition: 'transform 0.15s ease',
  },
  ring: {
    position: 'fixed',
    top: 0, left: 0,
    width: 40, height: 40,
    border: '1px solid var(--black)',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 9998,
    transform: 'translate(-50%, -50%)',
    transition: 'width 0.3s, height 0.3s, opacity 0.3s',
  },
};

export default function Cursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };

    const animate = () => {
      const { mx, my } = pos.current;
      pos.current.rx += (mx - pos.current.rx) * 0.12;
      pos.current.ry += (my - pos.current.ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = pos.current.rx + 'px';
        ringRef.current.style.top = pos.current.ry + 'px';
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '60px';
        ringRef.current.style.height = '60px';
        ringRef.current.style.opacity = '0.5';
      }
    };
    const onLeave = () => {
      if (ringRef.current) {
        ringRef.current.style.width = '40px';
        ringRef.current.style.height = '40px';
        ringRef.current.style.opacity = '1';
      }
    };

    document.addEventListener('mousemove', onMove);
    rafRef.current = requestAnimationFrame(animate);

    const els = document.querySelectorAll('a, button, .hoverable');
    els.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} style={styles.cursor} />
      <div ref={ringRef} style={styles.ring} />
    </>
  );
}
