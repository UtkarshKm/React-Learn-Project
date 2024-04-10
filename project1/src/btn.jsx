import * as React from 'react'
import "./style.css"

export function SolidButtons( {btncolour}) {

    // console.log(btncolour);
return (
    <div className="flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0 m-2 mr-2">
        <button
            type="button"
            style={{
                color: "white",
                backgroundColor: btncolour,
            }}
            className="text-lg font-semibold rounded-md text-center p-1 min-w-20 border-2"
        >
        {btncolour}
        </button>
    </div>
)
}

