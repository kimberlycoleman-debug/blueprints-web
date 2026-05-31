"use client";

interface FallbackImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function FallbackImage({ src, alt, className }: FallbackImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => (e.currentTarget.style.display = "none")}
    />
  );
}
