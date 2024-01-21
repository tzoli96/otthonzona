import React, {useRef, useState} from 'react';

const TextWithTooltip = ({text, classes, breakWord}) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    if (!breakWord) {
      setIsTooltipVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (!breakWord) {
      setIsTooltipVisible(false);
    }
  };

  return (
      <div
          className={`${classes} ${isTooltipVisible ? 'cursor-help' : ''} relative ${breakWord ? 'break-all' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
      >
        {(text.length > 12 && !breakWord) ? <><span className="underline">...</span>&nbsp;{text.substring(text.length - 12)}</> : text}

        {!breakWord ?
        (
            <div
                className={`${isTooltipVisible ? 'opacity-100 visible' : 'opacity-0 invisible'} text-tooltip top-0 card !rounded-none absolute bg-white p-2 transition-all mt-2 text-sm`}>
              {text}
            </div>
        ) : ''}
      </div>
  );
}

export default TextWithTooltip;
