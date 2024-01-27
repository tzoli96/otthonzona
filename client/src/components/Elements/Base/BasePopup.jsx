import React, { useState } from "react";
export function BasePopup({ children, title, setIsvisible }) {
  return (
    <div className="base-popup">
      <div className="p-8 fixed top-0 left-0 z-40 bg-gray-600 bg-opacity-50 w-[100vw] h-[100vh] flex justify-center items-center">
        <div className="w-full md:w-[480px] min-h-[400px] rounded-lg bg-white p-8">
          <div className="mb-6 popup-header">
            <span className="text-2xl font-semibold">{title}</span>
            <span
              className="float-right text-2xl font-bold cursor-pointer"
              onClick={() => setIsvisible(false)}
              title={"Mégse"}
            >
              ✕
            </span>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
