import React, {forwardRef, useId} from "react";

const Input = forwardRef(function Input(
	{label, id, type = "text", className = "", ...props},
	ref
) {
	const inputId = useId(id);
	return (
		<div className="w-full ">
			{label && (
				<label
					htmlFor={inputId}
					className=" mb-1 pl-1 inline-block"
				>
					{label}
				</label>
			)}
			<input
				type={type}
				id={inputId}
				className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full  ${className}`}
				ref={ref}
				{...props}
			/>
		</div>
	);
});

export default Input;
