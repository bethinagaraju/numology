import { useEffect, useRef } from 'react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  swaySpeed: number;
  swayAmplitude: number;
  swayOffset: number;
  rotation: number;
  rotationSpeed: number;
  flip: number;
  flipSpeed: number;
  opacity: number;
  type: 'rose' | 'lotus' | 'marigold' | 'jasmine' | 'goldStar';
  colorGradient: [string, string];
}

interface FlowerShowerProps {
  active?: boolean;
  duration?: number; // duration in ms (default 25000 = 25 seconds)
  density?: 'normal' | 'rich';
  className?: string;
  onComplete?: () => void;
}

export function LaunchConfetti({
  active = true,
  duration = 25000, // 25 seconds
  density = 'rich',
  className = '',
  onComplete,
}: FlowerShowerProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const onCompleteRef = useRef(onComplete);

  // Always keep ref updated without re-triggering animation effect
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (!active) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const startTime = Date.now();

    // Vibrant Auspicious Flower Palettes
    const petalPalettes: {
      type: Petal['type'];
      gradient: [string, string];
      weight: number;
    }[] = [
      // Golden Lotus petals (sacred gold shimmer)
      { type: 'lotus', gradient: ['#FFE27A', '#C5934D'], weight: 30 },
      // Deep Crimson Rose petals (auspicious red)
      { type: 'rose', gradient: ['#E63946', '#9E0031'], weight: 26 },
      // Marigold / Genda Phool petals (vibrant orange/saffron)
      { type: 'marigold', gradient: ['#FF9E00', '#D9480F'], weight: 24 },
      // Mogra / Jasmine white florets
      { type: 'jasmine', gradient: ['#FFFFFF', '#FCEECB'], weight: 12 },
      // Shimmering Golden Stars
      { type: 'goldStar', gradient: ['#FFF3B0', '#E5A93C'], weight: 8 },
    ];

    const pickPetal = () => {
      const rand = Math.random() * 100;
      let accum = 0;
      for (const item of petalPalettes) {
        accum += item.weight;
        if (rand <= accum) return item;
      }
      return petalPalettes[0];
    };

    const count = density === 'rich' ? Math.min(95, Math.floor(width / 14)) : 45;
    const petals: Petal[] = [];

    const createPetal = (customY?: number): Petal => {
      const item = pickPetal();
      return {
        x: Math.random() * width,
        y: customY !== undefined ? customY : -Math.random() * 200 - 30,
        size: item.type === 'goldStar' ? Math.random() * 9 + 7 : Math.random() * 16 + 12,
        speedY: Math.random() * 2.8 + 2.0, // active natural falling speed
        speedX: (Math.random() - 0.5) * 1.2,
        swaySpeed: Math.random() * 0.04 + 0.02,
        swayAmplitude: Math.random() * 2.8 + 1.5,
        swayOffset: Math.random() * Math.PI * 2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2.5,
        flip: Math.random() * Math.PI,
        flipSpeed: Math.random() * 0.05 + 0.02,
        opacity: Math.random() * 0.25 + 0.75,
        type: item.type,
        colorGradient: item.gradient,
      };
    };

    // Populate petals: 45% already in top half of screen so flowers are visible INSTANTLY at second 0!
    for (let i = 0; i < count; i++) {
      if (i < count * 0.45) {
        // Start within the visible upper half of the viewport
        petals.push(createPetal(Math.random() * (height * 0.55)));
      } else {
        // Start just above the top of the viewport
        petals.push(createPetal(-Math.random() * (height * 0.5) - 20));
      }
    }

    // Draw individual realistic flower petal
    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      // 3D tumbling flip effect
      ctx.scale(1, Math.cos(p.flip));

      // Petal Gradient
      const grad = ctx.createLinearGradient(0, -p.size, 0, p.size);
      grad.addColorStop(0, p.colorGradient[0]);
      grad.addColorStop(1, p.colorGradient[1]);
      ctx.fillStyle = grad;

      if (p.type === 'goldStar') {
        // 4-point sparkle star
        const spikes = 4;
        const outer = p.size;
        const inner = p.size * 0.3;
        ctx.beginPath();
        for (let i = 0; i < spikes * 2; i++) {
          const r = i % 2 === 0 ? outer : inner;
          const angle = (i * Math.PI) / spikes;
          const sx = Math.cos(angle) * r;
          const sy = Math.sin(angle) * r;
          if (i === 0) ctx.moveTo(sx, sy);
          else ctx.lineTo(sx, sy);
        }
        ctx.closePath();
        ctx.fill();

        // Star center pure white spark
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(0, 0, inner * 0.6, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.type === 'marigold') {
        // Fluffy fan-shaped curved petal
        ctx.beginPath();
        ctx.moveTo(0, p.size * 0.85);
        ctx.bezierCurveTo(p.size * 0.75, p.size * 0.45, p.size * 0.95, -p.size * 0.65, 0, -p.size);
        ctx.bezierCurveTo(-p.size * 0.95, -p.size * 0.65, -p.size * 0.75, p.size * 0.45, 0, p.size * 0.85);
        ctx.fill();
      } else {
        // Natural curved Rose & Lotus teardrop petal
        ctx.beginPath();
        ctx.moveTo(0, -p.size);
        ctx.bezierCurveTo(p.size * 0.9, -p.size * 0.5, p.size * 0.8, p.size * 0.65, 0, p.size * 0.95);
        ctx.bezierCurveTo(-p.size * 0.8, p.size * 0.65, -p.size * 0.9, -p.size * 0.5, 0, -p.size);
        ctx.fill();

        // Subtle petal spine reflection
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(0, -p.size * 0.7);
        ctx.lineTo(0, p.size * 0.6);
        ctx.stroke();
      }

      ctx.restore();
    };

    let isCompleted = false;

    const finishShower = () => {
      if (isCompleted) return;
      isCompleted = true;
      cancelAnimationFrame(animationFrameId);
      if (canvas) {
        const c = canvas.getContext('2d');
        c?.clearRect(0, 0, canvas.width, canvas.height);
      }
      onCompleteRef.current?.();
    };

    // Hard safety stop after exact duration
    const hardTimer = setTimeout(() => {
      finishShower();
    }, duration);

    const render = () => {
      const elapsed = Date.now() - startTime;

      if (elapsed >= duration) {
        finishShower();
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Stop spawning new petals 4s before duration ends
      const isNearEnd = elapsed > duration - 4000;

      // Smooth fade factor in final 3 seconds
      let fadeFactor = 1;
      if (elapsed > duration - 3000) {
        fadeFactor = Math.max(0, (duration - elapsed) / 3000);
      }

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];

        // Organic swaying physics
        p.swayOffset += p.swaySpeed;
        p.x += Math.sin(p.swayOffset) * p.swayAmplitude + p.speedX;
        p.y += p.speedY;

        p.rotation += p.rotationSpeed;
        p.flip += p.flipSpeed;

        ctx.globalAlpha = p.opacity * fadeFactor;
        drawPetal(p);

        // Reset to top when petal falls beyond screen bottom ONLY if not near the end
        if (p.y > height + 35) {
          if (!isNearEnd) {
            petals[i] = createPetal(-Math.random() * 50 - 20);
          } else {
            p.y = height + 1000; // Park off-screen
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      clearTimeout(hardTimer);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [active, duration, density]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-[9999999] ${className}`}
      style={{ width: '100vw', height: '100vh', zIndex: 9999999 }}
    />
  );
}
