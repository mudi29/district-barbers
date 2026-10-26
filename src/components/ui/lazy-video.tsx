import { useEffect, useRef, type VideoHTMLAttributes } from "react";

// A muted looping video that only plays while it is on screen, so off-screen videos stop using the
// phone's decoder while you scroll. The poster shows at once, and reduced-motion visitors keep the poster.
export const LazyVideo = (props: VideoHTMLAttributes<HTMLVideoElement>) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // React leaves the muted flag off server-rendered video, and browsers only autoplay muted video.
    video.muted = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { rootMargin: "100px" },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return <video ref={ref} muted loop playsInline {...props} />;
};
