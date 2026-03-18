import jiyi from "./assets/jiyi.jpg";
import wusaqi from "./assets/wusaqi.jpg";

function HeaderIcon() {
  return (
    <div className="icon">
      <div className="header-icon-scene">
        <div className="header-icon-card">
          <div className="header-icon-face">
            <img
              src={wusaqi}
              alt="乌萨奇"
              className="size-16 rounded-full object-cover"
            />
          </div>
          <div className="header-icon-face header-icon-face-back">
            <img
              src={jiyi}
              alt="吉伊"
              className="size-16 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeaderIcon;
