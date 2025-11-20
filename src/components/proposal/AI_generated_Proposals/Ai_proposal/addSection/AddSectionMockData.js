// Mock data for the AddSection component

export const mockRootProps = {
  sectionNumber: "13",
  isOpen: true,
  onClose: () => console.log("Close modal"),
  onDone: () => console.log("Done clicked"),
  onCancel: () => console.log("Cancel clicked"),
  chatMessages: [
    {
      id: "1",
      type: "bot",
      message: "Hey there! How can I help you today?"
    },
    {
      id: "2", 
      type: "user",
      message: "Help me Identify and highlight the problem statements concerning financial dependencies."
    },
    {
      id: "3",
      type: "bot",
      message: "Sure one moment.."
    }
  ]
};