import React from "react";

type SvgImgProps = {
  svgSrc: string;
  altText: string;
  styles?: React.CSSProperties;
};

export const SvgImg = ({ svgSrc, altText, styles }: SvgImgProps) => {
  return styles ? (
    <img src={svgSrc} alt={altText} style={styles} />
  ) : (
    <img src={svgSrc} alt={altText} />
  );
};
