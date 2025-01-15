import { useState } from "react";
import "../styles/Resume.css"
import Section from "./Section";
import { initialResumeData } from "./items";
import NewSectionButton from "./NewSectionButton";


function Resume() {
    const [resumeData, setResumeData] = useState(initialResumeData);
    const [editableInputId, setEditableInputId] = useState(null);

    // Sections
    const educationSections = Object.values(resumeData.sections).filter(
        (section) => section.title === "Education"
    );
      
    const workSections = Object.values(resumeData.sections).filter(
        (section) => section.title === "Work Experience"
    );
    

    // Functions
    const handleInputChange = (id, value) => {
        setResumeData((prev) => ({
            ...prev,
            inputs: {
                ...prev.inputs,
                [id]: { ...prev.inputs[id], value }
            }
        }));
    };

    const handleEditChange = (e, id) => {
        e.preventDefault();
        setEditableInputId(id);
    }

    const handlePrint = (e) => {
        e.preventDefault();
        console.log(resumeData);
    }

    const handleNewSection = (e, newSection) => {
        e.preventDefault();

        const sectionConfig = {
            education: {
                title: "Education",
                inputs: [
                    { title: "Institution Name", type: "text" },
                    { title: "Field(s) of Study", type: "text" },
                    { title: "Dates of Study", type: "date" },
                ],
            },
            work: {
                title: "Work Experience",
                inputs: [
                    { title: "Company Name", type: "text" },
                    { title: "Position Title Title", type: "text" },
                    { title: "Responsibilities", type: "text" },
                    { title: "Start Date", type: "date" },
                    { title: "End Date", type: "date" },
                ],
            },
        };

        const config = sectionConfig[newSection];
        if (!config) return; // ignore if newSection does not exist in mapping
        
        const newSectionId = Math.max(...Object.keys(resumeData.sections).map(Number)) + 1;

        setResumeData((prev) => {
            const lastInputId = Object.keys(prev.inputs).length > 0
                ? Math.max(...Object.keys(prev.inputs).map(Number))
                : -1;

            const newInputIds = [];
            const newInputs = {};

            config.inputs.forEach((input, index) => {
                const newId = lastInputId + index + 1;
                newInputIds.push(newId);
                newInputs[newId] = { id: newId, title: input.title, type: input.type, value: "" };
            });

            return {
                ...prev,
                inputs: {
                    ...prev.inputs,
                    ...newInputs,
                },
                sections: {
                    ...prev.sections,
                    [newSectionId]: {
                        id: newSectionId,
                        title: config.title,
                        inputIds: newInputIds,
                    },
                },
            };
        })
    }

    const handleDeleteSection = (e, section) => {
        e.preventDefault();

        const newSections = Object.fromEntries(
            Object.entries(resumeData.sections).filter(
                ([sectionId]) => Number(sectionId) !== section.id
            )
        );
        
        const newInputs = Object.fromEntries(
            Object.entries(resumeData.inputs).filter(
                ([inputId]) => !((section.inputIds || []).includes(Number(inputId)))
            )
        );
        

        setResumeData((prev) => {
            return {
                ...prev,
                inputs: newInputs,
                sections: newSections,
            };
        });
    }
    console.log(workSections)
    return (
        <>
        <div className="h-full w-full flex flex-col items-center">
            <form className="flex flex-col gap-2 items-center">
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
                    key={resumeData.sections[0].id}
                >
                </Section>

                {/* Education Section */}
                {educationSections.map((section) => (
                    <Section
                        section={section}
                        inputs={
                            section.inputIds.map(
                                (id) => resumeData.inputs[id]
                            )
                        }
                        onInputChange={handleInputChange}
                        setEditableInputId={handleEditChange} // Use the same function for consistency
                        editableInputId={editableInputId}
                        key={section.id}
                        isDeletable={true}
                        onDelete={handleDeleteSection}
                    >
                    </Section>
                ))}

                {/* Work Sections */}
                {workSections.map((section) => (
                    <Section
                        section={section}
                        inputs={
                            section.inputIds.map(
                                (id) => resumeData.inputs[id]
                            )
                        }
                        onInputChange={handleInputChange}
                        setEditableInputId={handleEditChange} // Use the same function for consistency
                        editableInputId={editableInputId}
                        key={section.id}
                        isDeletable={true}
                        onDelete={handleDeleteSection}
                    >

                    </Section>
                ))}

                {/* Add A New Section */}

                <NewSectionButton
                    handleClick={handleNewSection}
                >
                </NewSectionButton>

                <div className="w-full flex justify-end hidden">
                    {/* Hidden because I don't want to create that functionality yet */}
                    <button
                        className="btn btn-outline btn-primary"
                        type="submit"
                        onClick={(e) => handlePrint(e)}
                    >
                        Print
                    </button>
                </div>
            </form>
        </div>
        </>
    )
};

export default Resume;