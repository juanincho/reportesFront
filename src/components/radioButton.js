function RadioButton({opcion,label,setSelectedValue, selectedValue}) {
    const handleRadioChange = (
        value
    ) => {
        setSelectedValue(value);
    };
    return (
        <div>
            <input
                type="radio"
                id={opcion}
                value={opcion}
                checked={
                    selectedValue ===
                    opcion
                }
                onChange={() =>
                    handleRadioChange(
                        opcion
                    )
                } />
            <label htmlFor={opcion} className="text-base text-gray-700 leading-relaxed">
                {label}
            </label>
        </div>
    )
}

export default RadioButton