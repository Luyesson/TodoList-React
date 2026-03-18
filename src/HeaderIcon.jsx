import jiyi from "./assets/jiyi.jpg";
import wusaqi from "./assets/wusaqi.jpg";

function HeaderIcon() {
  const sceneStyle = {
    width: "4rem",
    height: "4rem",
    perspective: "1000px",
    overflow: "hidden",
    borderRadius: "9999px",
    fontSize: 0,
    lineHeight: 0,
  };

  const cardStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    transformStyle: "preserve-3d",
    WebkitTransformStyle: "preserve-3d",
    animation: "header-icon-flip 24s infinite ease-in-out",
    willChange: "transform",
  };

  const faceStyle = {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    transform: "translateZ(0)",
  };

  return (
    <div className="icon">
      <span
        aria-hidden="true"
        className="header-icon-debug-char pointer-events-none absolute font-bold text-yellow-400 select-none"
      >
        到
      </span>
      <div className="header-icon-scene" style={sceneStyle}>
        <div className="header-icon-card" style={cardStyle}>
          <div className="header-icon-face" style={faceStyle}>
            <img
              src={wusaqi}
              alt=""
              aria-hidden="true"
              draggable="false"
              className="size-16 rounded-full object-cover block select-none"
            />
          </div>
          <div
            className="header-icon-face header-icon-face-back"
            style={{ ...faceStyle, transform: "rotateY(180deg) translateZ(0)" }}
          >
            <img
              src={jiyi}
              alt=""
              aria-hidden="true"
              draggable="false"
              className="size-16 rounded-full object-cover block select-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeaderIcon;
