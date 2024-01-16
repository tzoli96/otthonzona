import React, { useEffect, useMemo, useState } from "react";
import ReactSwitch from "react-switch";

function Switch ({ name, defaultValue, onChange }) {

    const [checked, setChecked] = useState(defaultValue);

    useEffect(() => {
      if (onChange) {
        onChange?.(checked);
      }
    }, [checked]);

    const colors = useMemo(() => ({
            appColor: '#ec6608',
            handleOnColor: '#fff',
            handleOffColor: '#b2b2b2',
            offColor: '#fff',
    }), [])

    return (
        <span>
            <input type="hidden" name={name} value={checked} />
            <ReactSwitch
              checked={checked}
              height={checked ? 22 : 20}
              width={checked ? 42 : 40}
              checkedIcon={false}
              uncheckedIcon={false}
              handleDiameter={14}
              offHandleColor={colors.handleOffColor}
              onHandleColor={colors.handleOnColor}
              onColor={colors.appColor}
              offColor={colors.offColor}
              className={
                checked
                  ? 'filter-switch-active'
                  : 'filter-switch'
              }
              onChange={() => {
                setChecked(!checked);
              }}
            />
        </span>
    )
}

export default Switch;
