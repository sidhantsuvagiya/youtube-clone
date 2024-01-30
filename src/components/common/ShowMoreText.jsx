import { useState } from "react";
import DOMPurify from 'dompurify';

const ShowMoreText = ({ text }) => {

    const [showFullText, setShowFullText] = useState(false);

    const toggleText = () => {
        setShowFullText(!showFullText);
    };

    const description = showFullText ? text : text?.slice(0, 210);

    // Sanitize and render HTML content using DOMPurify
    const sanitizedText = DOMPurify.sanitize(description);

    return (
        <div>
            <p className="inline" dangerouslySetInnerHTML={{ __html: sanitizedText }} />
            {text?.length > 210 &&
                <button onClick={toggleText} className="inline text-blue-500 hover:underline">
                    {showFullText ? '\u00A0Show less' : '...more'}
                </button>
            }
        </div>
    )
}

export default ShowMoreText