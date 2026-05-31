"use client";

import { useState } from "react";

export default function FallbackImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt?: string;
  className?: string;
}) {
  const [error, setError] = useState(false);

  if (error) return null;

  return (
    <img
      src={src}
      alt={alt || ""}
      className={className}
      onError={() => setError(true)}
    />
  );
}
