import { useState } from "react";
import "../styles/Resume.css"
import Section from "./Section";
import { initialResumeData } from "./items";


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
                onChange={handleSelectChange}
                value={selectedSection}
            >
                <option value="" disabled>Select Section</option>
                <option value="education">Education</option>
                <option value="work">Professional Experience</option>
            </select>
            <button
                className="btn"
                onClick={() => handleClick(selectedSection)}
                disabled={!selectedSection}
            >
                Add Section
            </button>
        </div>
        </>
    )
}


function Resume() {
    const [resumeData, setResumeData] = useState(initialResumeData);
    const [editableInputId, setEditableInputId] = useState(null);

    const handleInputChange = (id, value) => {
        setResumeData((prev) => ({
            ...prev,
            inputs: {
                ...prev.inputs,
                [id]: { ...prev.inputs[id], value }
            }
        }));
    };

    const handleEditChange = (id) => {
        setEditableInputId(id);
    }

    const handlePrint = () => {
        console.log(resumeData)
    }

    const handleNewSectionClick = (newSection) => {
        const newSectionId = Object.keys(resumeData.sections).length;

        setResumeData((prev) => ({
            ...prev,
            sections: {
                ...prev.sections,
                [newSectionId]: {
                    id: newSectionId,
                    title: newSection === "education" ? "Education" : "Professional Experience",
                    inputIds: []
                },
            },
        }))
    }

    return (
        <>
        <div className="h-full w-full flex flex-col items-center">
                <div className="flex flex-col gap-2 items-center">
                    <h1 className="text-5xl font-bold dark:text-black">Resume Builder</h1>
                    {/* User Section */}
                    <Section
                        section={resumeData.sections[0]}
                        inputs={
                            resumeData.sections[0].inputIds.map(
                                (id) => resumeData.inputs[id]
                            )
                        }
                        onInputChange={handleInputChange}
                        setEditableInputId={handleEditChange}
                        editableInputId={editableInputId}
                    >
                    </Section>

                    {/* Education Section */}
                    <Section
                        section={resumeData.sections[1]}
                        inputs={
                            resumeData.sections[1].inputIds.map(
                                (id) => resumeData.inputs[id]
                            )
                        }
                        onInputChange={handleInputChange}
                        setEditableInputId={handleEditChange} // Use the same function for consistency
                        editableInputId={editableInputId}
                    >
                    </Section>

                    {/* Add A New Section */}

                    <NewSectionButton
                        handleClick={handleNewSectionClick}
                    >
                    </NewSectionButton>

                    <div className="w-full flex justify-end">
                        <button
                            className="btn btn-outline btn-primary"
                            type="button"
                            onClick={handlePrint}
                        >
                            Print
                        </button>
                    </div>
                </div>
            </div>
        <div>

        </div>
        </>
    )
};

export default Resume;