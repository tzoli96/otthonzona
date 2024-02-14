import closeRedIcon from "../../icons/close-red.svg";

function TagButton({tag, checkedState, handleTagOnChange, closeBtn}) {

  return (
      <>
        <label
            className={`orange-button cursor-pointer flex !flex-row justify-center items-center !w-auto px-4 py-2 ${!checkedState.includes(tag.id) ? 'grayscale' : ''}`}
            htmlFor={`tag_${tag.id}`}
        >
          {tag.name.replace("Budapest", "Bp").replace("kerület", "ker")}
          {closeBtn ?
              <img
                  width="13"
                  height="13"
                  src={closeRedIcon}
                  className="ml-3"
                  alt=""
              />
            : ''}
        </label>
        <input
            checked={checkedState.includes(tag.id)}
            onChange={() => handleTagOnChange(tag.id)}
            className="hidden"
            type="checkbox"
            name="areaTags"
            value={tag.id}
            id={`tag_${tag.id}`}
        />
      </>
  );
}

export default TagButton;
