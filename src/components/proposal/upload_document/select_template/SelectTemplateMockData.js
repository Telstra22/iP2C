// Mock data for Select Template page

export const mockRootProps = {
  templates: [
    {
      id: "1",
      name: "Standard",
      description: "Word Document",
      headerColor: "#1E3A5F",
      headerText: "Create AI generated proposal for all the sections selected in outline in a Word document",
      documentType: "word",
      filePath: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
      isSelected: true
    },
    {
      id: "2",
      name: "RFP Response",
      description: "Excel Document",
      headerColor: "#0D54FF",
      headerText: "Respond to RFPs in Excel, where AI generates answers beside each question",
      documentType: "excel",
      isSelected: false
    },
    {
      id: "3",
      name: "Case study",
      description: "PPT Presentation",
      headerColor: "#E86035",
      headerText: "Insert and tailor past case studies to strengthen your proposal.",
      documentType: "powerpoint",
      isSelected: false
    },
    {
      id: "4",
      name: "Standard Template (Phoenix)",
      description: "Word Document",
      headerColor: "#4295C1",
      headerText: "Access the latest version of the Phoenix Proposal template",
      documentType: "word",
      logoType: "blue",
      isSelected: false
    },
    // {
    //   id: "5",
    //   name: "Executive summary",
    //   description: "PPT Presentation & Word Document",
    //   headerColor: "#00559f",
    //   headerText: "Executive summary for high-level overview",
    //   logoType: "blue",
    //   isSelected: false
    // },
    // {
    //   id: "6",
    //   name: "Non standard products",
    //   description: "PPT Presentation & Word Document",
    //   headerColor: "#fff3d8",
    //   headerText: "Non-standard products and custom solutions",
    //   logoType: "blue",
    //   isSelected: false
    // }
  ]
};