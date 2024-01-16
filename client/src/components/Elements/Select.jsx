import React from "react";
import chevrondown from "../../icons/chevrondown.svg";

function Select ({ placeholder, small }) {

    return (
        <div className="rounded-full overflow-hidden flex border-4">
            <input 
                placeholder={placeholder}
                className={"box-border h-10 font-bold inline-block w-full h-full border-0 px-4 py-3 pr-[76px] mr-[-64px] text-md " + (small ? "-mr-10" : "")}
            />
            <span className={"box-border h-10 py-3 h-full inline-block w-[64px] orange-gradient rounded-full flex justify-center items-center " + (small ? "w-10" : "")}>
                <img 
                    src={chevrondown}
                    className="h-4 w-4"
                />
            </span>
        </div>
    )

}

export default Select;
