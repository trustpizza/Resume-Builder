import { useState } from "react";

function NewSectionButton({ handleClick }) {
    const [selectedSection, setSelectedSection] = useState("");

    const handleSelectChange = (e) => {
        setSelectedSection(e.target.value)
    }

    return (
        <>
        <div className="w-full flex gap-2">
            <select 
                className="select select-bordered w-full max-w-xs" 
                onChange={(e) => handleSelectChange(e)}
                value={selectedSection}
            >
                <option value="" disabled>Select Section</option>
                <option value="education">Education</option>
                <option value="work">Work Experience</option>
            </select>
            <button
                className="btn btn-primary"
                onClick={(e) => handleClick(e, selectedSection)}
                disabled={!selectedSection}
            >
                Add Section
            </button>
        </div>
        </>
    )
}

export default NewSectionButton;