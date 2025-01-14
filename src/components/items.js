export const initialResumeData = {
    sections: {
      user: {
        id: 0,
        title: "User Information",
        inputIds: [1,2,3,4],
      },
      education: {
        id: 1,
        title: "Education",
        inputIds: [5,6,7]
      },
      professional: {
        id: 2,
        title: "Professional Experiences",
        inputIds: []
      },
    },
    inputs: {
      1: { id: 1, title: "First Name", type: "text", value: "" },
      2: { id: 2, title: "Last Name", type: "text", value: "" },
      3: { id: 3, title: "Email", type: "email", value: "" },
      4: { id: 4, title: "Phone", type: "tel", value: "" },
      5: { id: 5, title: "Institution Name", type: "text", value: "" },
      6: { id: 6, title: "Field(s) of Study", type: "text", value: "" },
      7: { id: 7, title: "Dates of Study", type: "date", value: "" }
    },
  };
  