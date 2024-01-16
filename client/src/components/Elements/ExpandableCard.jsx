import React, { useState } from "react";

function ExpandableCard ({ Component }) {

    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="w-full card !rounded-3xl">
            <Component 
                isExpanded={isExpanded}
                setIsExpanded={setIsExpanded}
            />
        </div>
    )
}

export default ExpandableCard;
