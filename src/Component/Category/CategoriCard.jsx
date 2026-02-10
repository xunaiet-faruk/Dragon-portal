import { format, formatDate } from 'date-fns';
import React, { useState } from 'react';
import { FaBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";
const CategoriCard = ({card}) => {

    const { author, title, thumbnail_url, details, rating, total_view } = card;
    const [showFull, setShowFull] = useState(false);
    const publishedDate = new Date(author?.published_date);

    return (
        <div>

            <div className="bg-white shadow-2xl rounded-xl  overflow-hidden mb-6">

                {/* 🔹 Author Bar */}
                <div className="flex justify-between items-center bg-gray-100 p-4">
                    <div className="flex items-center gap-3">
                        <img
                            src={author?.img}
                            className="w-10 h-10 rounded-full object-cover"
                            alt={author?.name}
                        />
                        <div className='py-1'>
                            <h4 className="font-semibold text-xl">{author?.name}</h4>
                            <p className="text-sm text-gray-500">
                                <p className="text-gray-500 text-sm text-center"> {format(publishedDate, "PPP")}</p>
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4 text-gray-500 text-xl cursor-pointer">
                        <FaBookmark />
                        <FaShareAlt />
                    </div>
                </div>

                {/* 🔹 Title */}
                <div className="p-4">
                    <h2 className="text-xl font-bold leading-snug">{title}</h2>
                </div>

                {/* 🔹 Thumbnail */}
                <img
                    src={thumbnail_url}
                    alt={title}
                    className="w-full h-full rounded-xl object-cover px-4"
                />

                {/* 🔹 Details */}
                <div className="p-4 text-gray-600 space-y-3">
                    <p>{showFull ? details : details.length > 200 ? details.slice(0,200) : details}</p>
                   {
                    details.length > 200 && (
                            <button onClick={() =>setShowFull(!showFull)} className="text-red-500 font-semibold  hover:underline">
                                {showFull ? "Show Less" : "Read More"}
                            </button>
                    )
                   }
                </div>

                <hr />

                {/* 🔹 Footer (Rating & Views) */}
                <div className="flex justify-between items-center p-4">

                    <div className="flex items-center gap-2 text-orange-400">
                        <FaStar />
                        <span className="font-semibold text-gray-700">
                            {rating?.number}
                        </span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-500">
                        <FaEye />
                        <span>{total_view}</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CategoriCard;