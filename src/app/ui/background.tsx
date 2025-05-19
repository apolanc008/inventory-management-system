import React from "react";

export default function Background() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-yellow-50 px-4">
            
            {/* Background image chart */}
            <img
                src="/line-chart.png"
                className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-0 opacity-50"
            />

            {/* Background image warehouse */}
            <img 
                src="/warehouse.png" 
                className="absolute bottom-0 left-0 w-90 h-100 m-4 pointer-events-none" 
            />
       </div>
    )
}