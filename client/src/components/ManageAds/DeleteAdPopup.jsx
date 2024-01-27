import React, { useState } from "react";
import { BasePopup } from "../Elements/Base/BasePopup";
import { DeleteLoader } from "../DeleteLoader";
import { archiveDelete } from "../../utils/request/archiveRequest";
export function DeleteAdPopup({
  setIsVisible,
  property,
  setProperties,
  properties,
  ReasonOptions,
}) {
  const [isCommentVisible, setIsCommentVisible] = useState(false);
  const [comment, setComment] = useState("");

  const [reasonId, setReasonId] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const options = ReasonOptions;

  const openComment = () => {
    setIsCommentVisible(true);
  };
  const hideComment = () => {
    setIsCommentVisible(false);
  };
  const _setReasonId = (key) => {
    setReasonId(key);
  };

  const submit = async () => {
    if (reasonId) {
      await handleDelete();
    }
  };

  const handleDelete = async () => {
    try {
      setDeleting(true);
      const response = await archiveDelete(property.id, reasonId);
      if (response.isSuccess) {
        setProperties(properties.filter((p) => p.id !== property.id));
      }
    } catch (err) {
    } finally {
      setDeleting(false);
      setIsVisible(false);
    }
    setDeleting(true);
  };
  const buttonClass = "-button block w-full mb-4";

  return (
    <BasePopup title="Hirdetés törlése" setIsvisible={setIsVisible}>
      <div className="delete-ad-popup">
        <div>
          {options.map((option) => (
            <button
              className={
                (reasonId === option.value ? "blue" : "orange") + buttonClass
              }
              onClick={() => {
                _setReasonId(option.value);
                if (option.openComment) {
                  openComment();
                } else {
                  hideComment();
                }
              }}
              key={option.value}
            >
              {option.name}
            </button>
          ))}
          {isCommentVisible && (
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
              (reasonId ? "" : "disabled ") +
              "delete-button uppercase font-bold mt-8 orange" +
              buttonClass
            }
            onClick={submit}
          >
            Törlés
          </button>
        </div>
        {deleting && <DeleteLoader />}
      </div>
    </BasePopup>
  );
}
