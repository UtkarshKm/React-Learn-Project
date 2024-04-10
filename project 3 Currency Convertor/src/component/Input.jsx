import React, { useId } from "react";

function InputBox({
	label,
	amount,
	onAmountChange,
	onCurrencyChange,
	currencyOptions = [],
	selectedCurrency = "usd",
	amountDisabled = false, //used to disable the amount input field generally it is used in production grade application
	currencyDisabled = false, //used to disable the currency select field generally it is used in production grade application
	className = "", // these all the props of InputBox
}) {
    const amountInputId = useId()
	return (
		<div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
			<div className="w-1/2">
				<label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                    </label>
				<input
					className="outline-none w-full bg-transparent py-1.5"
					type="number"
					placeholder="Amount"
					disabled={amountDisabled}
					value={amount}
                    id={amountInputId}
					onChange={(e) =>
						onAmountChange && onAmountChange(Number(e.target.value))
					} // changing the string to number
				/>
			</div>
			<div className="w-1/2 flex flex-wrap justify-end text-right">
				<p className="text-black/40 mb-2 w-full">Currency Type</p>
				<select
					className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
					value={selectedCurrency}
					onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} /// this is the function that will be called when the value of the select changes and it checks if it has value by using the onCurrencyChange
					disabled={currencyDisabled}
				>
					{currencyOptions.map((currency) => (
						<option
							key={currency}
							value={currency}
						>
							{currency}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}

export default InputBox;
