export const initialResumeData = {
    sections: {
      0: {
        id: 0,
        title: "User Information",
        inputIds: [0,1,2,3],
      },
      1: {
        id: 1,
        title: "Education",
        inputIds: [4,5,6]
      },
      2: {
        id: 2,
        title: "Professional Experiences",
        inputIds: []
      },
    },
    inputs: {
      0: { id: 0, title: "First Name", type: "text", value: "" },
      1: { id: 1, title: "Last Name", type: "text", value: "" },
      2: { id: 2, title: "Email", type: "email", value: "" },
      3: { id: 3, title: "Phone", type: "tel", value: "" },
      4: { id: 4, title: "Institution Name", type: "text", value: "" },
      5: { id: 5, title: "Field(s) of Study", type: "text", value: "" },
      6: { id: 6, title: "Dates of Study", type: "date", value: "" },
    },
  };
  