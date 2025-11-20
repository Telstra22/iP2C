// Mock data for the AI Generated Proposal page
import { mockRootProps as aiPageMock } from './proposal_section/AiProposalPageMockData'

export const mockRootProps = {
  currentPage: "Ai Generated Proposal",
  proposalTitle: "AI Generated Proposal",
  // Reuse the richer sections and allSections from AiProposalPageMockData
  sections: aiPageMock.sections,
  allSections: aiPageMock.allSections,
  agentStatus: {
    orchestrator: "Huddle in Progress..",
    proposalWriter: "Proposal Writer Agent is working..",
    proposalBuilder: {
      active: true,
      agents: ["MA", "SC", "PD", "CG"]
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

export const mockProposalContent = {
  // regeneratedHeader: "This content is regenerated based on your attached document",
};