import React, {forwardRef, useId} from "react";

const Select = ({options, label, className = "", ...props}, ref) => {
	const Id = useId();
	return (
		<div>
			{label && (
				<label
					htmlFor={Id}
					className=""
				>
					<select
						className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                    {...props}
						id={Id}
                        ref={ref}
					>
						{options?.map((option) => (
							<option
								key={option}
								value={option}
							>
								{option}
							</option>
						))}
					</select>
				</label>
			)}
		</div>
	);
};

export default  forwardRef(Select);
