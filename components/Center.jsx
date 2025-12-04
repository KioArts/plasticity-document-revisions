import React from "react";

/**
 * Props
 *   children       – content placed inside <Center>
 *   marginTop      – space above the whole block (default: "1rem")
 *   width          – width of the centered box (e.g. "400px")
 *   border         – CSS border string (e.g. "2px solid #ddd")
 *   borderRadius   – CSS border‑radius (e.g. "8px")
 *   style          – extra inline styles for the wrapper itself
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
   * 1️⃣ Wrapper style – this is the visible frame that we also
   *    want to be centered on the page.
   * ----------------------------------------------------------- */
  const wrapperStyle = {
    display: "flex",                 // keep inner flex centering
    justifyContent: "center",
    marginTop,                       // space above the block
    marginLeft: "auto",              // <-- center the wrapper horizontally
    marginRight: "auto",
    width,                           // e.g. "400px"
    border,                          // e.g. "2px solid #ddd"
    borderRadius,                    // e.g. "8px"
    overflow: "hidden",              // clip the image to the radius
    ...style,
  };

  /* -------------------------------------------------------------
   * 2️⃣ Child style – make the image fill the wrapper
   * ----------------------------------------------------------- */
  const childExtraStyle = {
    width: "100%",
    height: "auto",
    display: "block",                // remove any inline‑element gap
  };

  const styledChild = React.isValidElement(children)
    ? React.cloneElement(children, {
        style: {
          ...(children.props.style || {}),
          ...childExtraStyle,
        },
      })
    : children; // fallback for non‑element children

  return <div style={wrapperStyle}>{styledChild}</div>;
};