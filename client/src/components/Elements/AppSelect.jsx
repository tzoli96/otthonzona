import { useEffect, useState } from "react";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import chevrondown from "../../icons/chevrondown.svg";

function AppSelect({
  options,
  name,
  prefill,
  placeholder,
  onChange,
  isDisabled,
  isAsync,
  loadOptions,
  isClearable,
}) {
  const [value, setValue] = useState(
    options.find((option) => option.value === prefill?.[name])
  );

  useEffect(() => {
    console.log(
      ">>>",
      name,
      options,
      prefill,
      options.find((option) => option.value === prefill?.[name])
    );
  }, [prefill]);

  return (
    <div className="border-2 rounded-full p-0.5">
      <input name={name} value={value?.value} type="hidden" />
      {isAsync ? (
        <AsyncSelect
          loadOptions={loadOptions}
          onChange={(value) => {
            setValue(value);
            onChange?.(value);
          }}
          value={value}
          isClearable={true}
          isDisabled={isDisabled}
          noOptionsMessage={() => <div className='truncate'>Kezdj el gépelni a kereséshez</div>}
          styles={{
            control: (provided) => ({
              ...provided,
              background: "transparent",
              border: 0,
              fontSize: 16,
              minHeight: 20,
              fontWeight: "bold",
              boxShadow: "none",
            }),
          }}
          placeholder={placeholder || <div className='truncate'>Kezdj el gépelni a kereséshez</div>}
          components={{
            IndicatorSeparator: () => null,
            DropdownIndicator: () => (
              <div style={{ marginTop: 0 }}>
                <span
                  className={
                    "box-border h-full py-2.5 h-full inline-block w-[50px] orange-gradient rounded-full flex justify-center items-center"
                  }
                >
                  <img src={chevrondown} className="h-4 w-4" />
                </span>
              </div>
            ),
          }}
        />
      ) : (
        <Select
          options={options}
          onChange={(value) => {
            setValue(value);
            onChange?.(value);
          }}
          value={value}
          isDisabled={isDisabled}
          isClearable={true}
          noOptionsMessage={() => <div className='truncate'>Kezdj el gépelni a kereséshez</div>}
          styles={{
            control: (provided) => ({
              ...provided,
              background: "transparent",
              border: 0,
              fontSize: 16,
              minHeight: 20,
              fontWeight: "bold",
              boxShadow: "none",
            }),
          }}
          placeholder={placeholder || <div className='truncate'>Kezdj el gépelni a kereséshez</div>}
          components={{
            IndicatorSeparator: () => null,
            DropdownIndicator: () => (
              <div style={{ marginTop: 0 }}>
                <span
                  className={
                    "box-border h-full py-2.5 h-full inline-block w-[50px] orange-gradient rounded-full flex justify-center items-center"
                  }
                >
                  <img src={chevrondown} className="h-4 w-4" />
                </span>
              </div>
            ),
          }}
        />
      )}
    </div>
  );
}

export default AppSelect;
