import React from "react";

function Input ({ placeholder, required, name, type, variant, addon, prefill, addonClass, ...props }) {

    const className = variant === "white" ? "border-2 rounded-full p-1.5 w-full px-4" : "bg-gray-200 rounded-md p-4 py-3 w-full"

    return (
        <div className="w-full flex !flex-row">
            <input 
                defaultValue={prefill?.[name]}
                {...props}
                className={className}
                placeholder={placeholder}
                type={type}
                required={required}
                name={name}
            />
            {
                addon &&
                <span className={"-ml-12 w-10 h-full lg:flex justify-center items-center text-gray-600 bg-white font-medium text-sm p-1.5 rounded-full mt-1 " + (addonClass ? addonClass : "")}>
                    {addon}
                </span>
            }
        </div>
    )
}

export default Input;
