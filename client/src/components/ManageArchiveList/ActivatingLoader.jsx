import activateIcon from "../../pictures/app/activate.png";

export function ActivatingLoader() {
  return (
    <div className="activating-loader popup-loader flex items-center justify-center">
      <img src={activateIcon}></img>
    </div>
  );
}
