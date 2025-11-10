// Mock data for AI Proposal Page
export const mockRootProps = {
  currentPage: "Ai Generated Proposal",
  proposalTitle: "AI Generated Proposal",
  allSections: [
    { id: 1, title: "1. EXECUTIVE SUMMARY", isActive: true },
    { id: 2, title: "2. MEETING YOUR OBJECTIVES" },
    { id: 3, title: "3. SERVICE AND SOLUTION OVERVIEW" },
    { id: 4, title: "4. COMMERCIAL" },
    { id: 5, title: "5. DETAIL ON THE PROPOSED SOLUTION" },
    { id: 6, title: "6. APPENDICES" },
    { id: 7, title: "7. PROPOSAL TERMS" },
    { id: 8, title: "8. YOUR TELSTRA TEAM" },
    { id: 9, title: "9. TERMS & CONDITIONS" }
  ],
  sections: [
    {
      id: 1,
      title: "1. EXECUTIVE SUMMARY",
      isExpanded: true,
      content: "Total Brick is Australia's diversified property group, with a portfolio that spans the ownership, management, and development of shopping centres, office and industrial properties, residential communities, and retirement living solutions. This extensive range of assets reflects Total Brick's commitment to creating sustainable and thriving communities across the country.",
      subsections: [
        {
          id: "1.1",
          title: "1.1. Background",
          content: "Total Brick is Australia's largest diversified property group, with a portfolio that spans the ownership, management, and development of shopping centres, office and industrial properties, residential communities, and retirement living solutions. The contract for Mobility services has expired and is now due for a review. This process will evaluate the current services and assess the value propositions of offerings available in the market to identify opportunities for improvement and alignment with the organisation's needs."
        },
        {
          id: "1.2",
          title: "1.2 A solution aligned with your vision",
          content: "After a careful review of your current plans, new requirements and possibilities for growth, we're proposing Adaptive Mobility to help you achieve your vision. Telstra Adaptive Mobility consists of Mobile, Mobile Broadband, and Enterprise Wireless solutions specially designed for Enterprise needs. Advance your business with flexible hardware options, month-to-month no lock-in contracts, data sharing and high-speed, low-latency 5G on Australia's best 5G network. You'll have the confidence to empower your staff to adopt new ways of working, introduce innovative services and use more intelligent enterprise applications."
        },
        {
          id: "1.3",
          title: "1.3 Next Steps",
          content: "Content not available in source.",
          isItalic: true
        }
      ]
    }
  ]
}