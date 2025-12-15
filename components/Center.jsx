import React from "react";

/**
 * Center – a simple wrapper that always stays horizontally centred.
 *
 * Props
 * -----
 * children       – content placed inside <Center>
 * marginTop      – space above the whole block (default: "1rem")
 * width          – optional width of the centred box (e.g. "400px")
 * border         – CSS border string (e.g. "2px solid #ddd")
 * borderRadius   – CSS border‑radius (e.g. "8px")
 * style          – extra inline styles for the wrapper itself
 */
export const Center = ({
  children,
  marginTop = "1rem",
  width,
  border,
  borderRadius,
  style = {},
}) => {
  /* -------------------------------------------------------------
   * 1️⃣ Wrapper style – the visible frame that we also want to be
   *    centred on the page.
   * ----------------------------------------------------------- */
  const wrapperStyle = {
    // When a width is supplied we keep a normal flex container.
    // When width is omitted we use `inline-flex` so the element
    // shrinks to fit its content and can still be centred via
    // margin‑auto.
    display: width ? "flex" : "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop,               // space above the block
    marginLeft: "auto",      // centre horizontally
    marginRight: "auto",
    ...(width && { width }), // only set width when it exists
    border,
    borderRadius,
    overflow: "hidden",      // clip the image to the radius
    ...style,
  };

  /* -------------------------------------------------------------
   * 2️⃣ Child style – make images (or any block) behave nicely.
   * ----------------------------------------------------------- */
  const childExtraStyle = {
    maxWidth: "100%", // keep natural size unless it would overflow
    height: "auto",
    display: "block", // removes any inline‑element gap
  };

  const styledChild = React.isValidElement(children)
    ? React.cloneElement(children, {
        style: {
          ...(children.props?.style || {}),
          ...childExtraStyle,
        },
      })
    : children; // fallback for non‑element children

  return <div style={wrapperStyle}>{styledChild}</div>;
};