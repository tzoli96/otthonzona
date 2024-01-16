import React from "react";
import logo from "../../pictures/logo-old.png";

function Maintainence () {

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <img
                src={logo}
                className="max-w-[50%] max-h-[50%]"
            />
        </div>
    );

}

export default Maintainence;
