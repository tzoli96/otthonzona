import React, { useState, useRef } from "react";
import { BasePopup } from "../Elements/Base/BasePopup";
import { disabled } from "../../res/options";

export function DeleteAdPopup({ setIsVisible, property }) {
  const [isCommentVisible, setIsCommentVisible] = useState(false);
  const [comment, setComment] = useState("");

  const [choice, setChoice] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const options = [
    { name: "Test", value: 1, openComment: false },
    { name: "Test2", value: 2, openComment: false },
    { name: "Tes3", value: 3, openComment: false },
    { name: "Egyéb", value: 4, openComment: true },
  ];

  const openComment = () => {
    setIsCommentVisible(true);
  };

  const _setChoice = (key) => {
    setChoice(key);
    console.log("choice: " + key);
  };

  const handleSubmit = (event) => {
    console.log("handleSubmit ran");
    event.preventDefault();
  };

  const submit = async () => {
    if (choice) {
      console.log("submit");
      console.log("choice: " + choice);
      console.log("comment: " + comment);
      await handleDelete();
    }
  };

  const handleDelete = async () => {
    // try {
    //     setDeleting(true);
    //     const response = await request(`/api/property/${property.id}`, {
    //       method: "DELETE",
    //     });
    //     if (response?.data?.isArchived) {
    //       setProperties(properties.filter((p) => p.id !== property.id));
    //     }
    // } catch (err) {
    // } finally {
    //     setDeleting(false);
    // }
    setDeleting(true)
    setTimeout(function (){
      console.log('deleted');
      setIsVisible(false);
      setDeleting(false);
    },2000);
  };
  const buttonClass = "-button block w-full mb-4";

  return (
    <BasePopup title="Hirdetés törlése" setIsvisible={setIsVisible}>
      <div className="delete-ad-popup">
        <div>
          {options.map((option) => (
            <button
              className={
                (choice === option.value ? "blue" : "orange") + buttonClass
              }
              onClick={() => {
                _setChoice(option.value);
                if (option.openComment) {
                  openComment();
                }
              }}
              key={option.value}
            >
              {option.name}
            </button>
          ))}
          {isCommentVisible && choice === options[3].value && (
            <>
              <label htmlFor="comment">Megjegyzés:</label>
              <textarea
                id="comment"
                className="bg-gray-200 rounded-md p-4 py-3 w-full outline-none"
                type="text"
                autoFocus={true}
                onChange={(event) => {
                  setComment(event.target.value);
                }}
                value={comment}
              />
            </>
          )}
          <button
            type="submit"
            value="Törlés"
            className={
              (choice ? "" : "disabled ") +
              "delete-button uppercase font-bold mt-8 orange" +
              buttonClass
            }
            onClick={submit}
          >
            Törlés
          </button>
        </div>
        {deleting && <div className="loader"></div>}
      </div>
    </BasePopup>
  );
}
