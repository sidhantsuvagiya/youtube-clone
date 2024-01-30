import React from 'react'

const ShimmerCard = () => {
    return (
        <div className="mb-4 w-[400px]">
            <div className="w-full h-56 rounded-xl shimmer-card"></div>
            <div className="flex mt-3">
                <div className="w-9 h-9 rounded-full mr-3 shimmer-card"></div>
                <div>
                    <p className="w-80 h-4 mb-1 shimmer-card"></p>
                    <p className="w-40 h-4 shimmer-card"></p>
                </div>
            </div>
        </div>
    )
}

export default ShimmerCard