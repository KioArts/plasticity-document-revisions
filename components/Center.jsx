import React from "react";

/**
 * Center – a wrapper that keeps its content horizontally centred and
 * can show a small caption underneath.
 *
 * Props
 * -----
 * children       – content placed inside <Center> (image, GIF, video…)
 * caption        – optional small text shown below the content
 *                  (string or JSX, e.g. text with a link)
 * marginTop      – space above the whole block (default: "1rem")
 * width          – optional width of the centred box (e.g. "400px")
 * border         – CSS border string (e.g. "2px solid #ddd")
 * borderRadius   – CSS border-radius (e.g. "8px")
 * style          – extra inline styles for the outer wrapper
 * captionStyle   – extra inline styles for the caption
 */
export const Center = ({
  children,
  caption,
  marginTop = "1rem",
  width,
  border,
  borderRadius,
  style = {},
  captionStyle = {},
}) => {
  /* Outer wrapper: centred on the page, holds the frame and the caption */
  const wrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: `${marginTop} auto 0`, // resets default <figure> margins
    width: width || "fit-content",
    maxWidth: "100%",
    ...style,
  };

  /* Frame: the visible border/radius that clips the image */
  const frameStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    border,
    borderRadius,
    overflow: "hidden",
  };

  /* Caption: small, muted text; inherits the theme colour so it works
     in both light and dark mode */
  const captionBaseStyle = {
    marginTop: "0.5rem",
    fontSize: "0.85rem",
    lineHeight: 1.4,
    textAlign: "center",
    opacity: 0.7,
    ...captionStyle,
  };

  /* Make images (or any block) behave nicely inside the frame */
  const childExtraStyle = {
    maxWidth: "100%",
    height: "auto",
    display: "block",
  };

  const styledChild = React.isValidElement(children)
    ? React.cloneElement(children, {
        style: {
          ...(children.props?.style || {}),
          ...childExtraStyle,
        },
      })
    : children;

  return (
    <figure style={wrapperStyle}>
      <div style={frameStyle}>{styledChild}</div>
      {caption && <figcaption style={captionBaseStyle}>{caption}</figcaption>}
    </figure>
  );
};