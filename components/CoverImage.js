import Image from "next/image";

// Fill-based cover image. Parent must be position:relative with a set size/aspect.
export default function CoverImage({ src, alt, sizes = "100vw", priority = false, position = "center" }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      style={{ objectPosition: position }}
    />
  );
}
