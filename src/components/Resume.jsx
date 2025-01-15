import { useState } from "react";
import "../styles/Resume.css"
import Section from "./Section";
import { initialResumeData } from "./items";


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

    return (
        <>
        <div className="h-full w-full flex flex-col items-center">
                <div className="flex flex-col gap-2 items-center">
                    <h1 className="text-5xl font-bold dark:text-black">Resume Builder</h1>
                    {/* User Section */}
                    <Section
                        section={resumeData.sections.user}
                        inputs={
                            resumeData.sections.user.inputIds.map(
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
                        section={resumeData.sections.education}
                        inputs={
                            resumeData.sections.education.inputIds.map(
                                (id) => resumeData.inputs[id]
                            )
                        }
                        onInputChange={handleInputChange}
                        setEditableInputId={handleEditChange} // Use the same function for consistency
                        editableInputId={editableInputId}
                    >
                    </Section>

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