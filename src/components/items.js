export const initialResumeData = {
    sections: {
      user: {
        id: 0,
        title: "User Information",
        inputIds: [3, 4, 5, 6],
      },
      education: {
        id: 1,
        title: "Education",
        inputIds: []
      },
      professional: {
        id: 2,
        title: "Professional Experiences",
        inputIds: []
      },
    },
    inputs: {
      3: { id: 3, title: "First Name", type: "text", value: "" },
      4: { id: 4, title: "Last Name", type: "text", value: "" },
      5: { id: 5, title: "Email", type: "email", value: "" },
      6: { id: 6, title: "Phone", type: "tel", value: "" },
    },
  };
  