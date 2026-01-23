type ParallaxBackdropProps = {
  className?: string;
};

export function ParallaxBackdrop({ className }: ParallaxBackdropProps) {
  return (
    <div className={className} aria-hidden="true">
      {/* Base grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
      <div className="pointer-events-none absolute inset-0 bg-noise" />

      {/* Glow blobs */}
      <div
        className="pointer-events-none absolute -top-48 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl"
        // using CSS variables (no hard-coded colors)
        // eslint-disable-next-line react/forbid-dom-props
        style={{
          background:
            "radial-gradient(circle at 30% 30%, hsl(var(--primary)/0.38), transparent 60%)",
        }}
      />

      <div
        className="pointer-events-none absolute top-[12%] right-[-10%] h-[520px] w-[520px] rounded-full blur-3xl"
        // eslint-disable-next-line react/forbid-dom-props
        style={{
          background:
            "radial-gradient(circle at 30% 30%, hsl(var(--primary)/0.22), transparent 60%)",
        }}
      />

      <div
        className="pointer-events-none absolute bottom-[-20%] left-[-15%] h-[560px] w-[560px] rounded-full blur-3xl"
        // eslint-disable-next-line react/forbid-dom-props
        style={{
          background:
            "radial-gradient(circle at 40% 40%, hsl(var(--primary)/0.18), transparent 60%)",
        }}
      />
    </div>
  );
}
