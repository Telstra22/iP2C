// Mock data for the AI Generated Proposal page

export const mockRootProps = {
  currentPage: "Ai Generated Proposal",
  proposalTitle: "AI Generated Proposal",
  sections: [
    {
      id: 1,
      title: "1. EXECUTIVE SUMMARY",
      isExpanded: true,
      content: "Total Brick is Australia's diversified property group, with a portfolio that spans the ownership, management, and development of shopping centres, office and industrial properties, residential communities, and retirement living solutions. This extensive range of assets reflects Total Brick's commitment to creating sustainable and thriving communities across the country.",
      subsections: [
        {
          id: 11,
          title: "1.1. Background",
          content: "Total Brick is Australia's largest diversified property group, with a portfolio that spans the ownership, management, and development of shopping centres, office and industrial properties, residential communities, and retirement living solutions. The contract for Mobility services has expired and is now due for a review. This process will evaluate the current services and assess the value propositions of offerings available in the market to identify opportunities for improvement and alignment with the organisation's needs.",
          isItalic: false
        },
        {
          id: 12,
          title: "1.2 A solution aligned with your vision",
          content: "After a careful review of your current plans, new requirements and possibilities for growth, we're proposing Adaptive Mobility to help you achieve your vision. Telstra Adaptive Mobility consists of Mobile, Mobile Broadband, and Enterprise Wireless solutions specially designed for Enterprise needs. Advance your business with flexible hardware options, month-to-month no lock-in contracts, data sharing and high-speed, low-latency 5G on Australia's best 5G network. You'll have the confidence to empower your staff to adopt new ways of working, introduce innovative services and use more intelligent enterprise applications.",
          isItalic: false
        },
        {
          id: 13,
          title: "1.3 Next Steps",
          content: "Content not available in source.",
          isItalic: true
        }
      ]
    }
  ],
  allSections: [
    { id: 1, title: "1. EXECUTIVE SUMMARY", isActive: true },
    { id: 2, title: "2. TECHNICAL SOLUTION", isActive: false },
    { id: 3, title: "3. PRICING", isActive: false }
  ],
  agentStatus: {
    orchestrator: "Huddle in Progress..",
    proposalWriter: "Proposal Writer Agent is working..",
    proposalBuilder: {
      active: true,
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