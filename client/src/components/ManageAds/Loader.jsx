import trashIcon from "../../pictures/app/trash.svg";

export function Loader() {
  return (
    <div className="loader flex items-center justify-center">
      <img src={trashIcon}></img>
    </div>
  );
}
