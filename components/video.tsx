"use client";

import { useRef, useEffect } from "react";

interface AutoPlayVideoProps {
  src: string;
  type?: string;
  className?: string;
}

export default function AutoPlayVideo({
  src,
  type = "video/mp4",
  className = "",
}: AutoPlayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
    }
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      className={`w-full h-auto ${className}`.trim()}
    >
      <source src={src} type={type} />
      Your browser does not support the video tag.
    </video>
  );
}
