import React, { ImgHTMLAttributes } from "react";
import Logo from '../../assets/logo.svg';

interface ImagePlaceholderProps extends ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
}

export default React.memo(
  ({
    src = Logo,
    alt,
    ...props
  }: ImagePlaceholderProps) => {
    return (
      <img
        {...props}
        src={src}
        alt={alt}
      />
    );
  }
);
