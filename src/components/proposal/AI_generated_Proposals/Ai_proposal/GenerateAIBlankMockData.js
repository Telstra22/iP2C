// Mock data for GenerateAIBlank component

export const mockRootProps = {
  isRegenerating: true,
  regeneratingMessage: "Regenerating your content...",
  agentStatus: {
    orchestrator: "Huddle in Progress..",
    proposalWriter: "Proposal Writer Agent is working..",
    proposalBuilder: {
      agents: ["OE", "CC", "OV"]
    }
  },
  chatMessages: [
    {
      id: 1,
      type: "bot",
      text: "Hey there! How can I help you today?"
    },
    {
      id: 2,
      type: "user",
      text: "Help me Identify and highlight the problem statements concerning financial dependencies."
    },
    {
      id: 3,
      type: "bot",
      text: "Sure one moment.."
    }
  ]
};