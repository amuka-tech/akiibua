import NextImage, { ImageProps } from "next/image";

export default function ImageWrapper(props: ImageProps) {
  let { src, ...rest } = props;
  
  // Use basePath for GitHub pages since unoptimized Next.js image doesn't auto-prefix it
  const basePath = "/akiibua";

  if (typeof src === "string" && src.startsWith("/") && !src.startsWith(basePath)) {
    src = `${basePath}${src}`;
  }

  return <NextImage unoptimized={true} src={src} {...rest} />;
}

