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
        }
      ]
    },
     {
      id: 2,
      title: "2. MEETING YOUR OBJECTIVES",
      isExpanded: true,
      content: "Total Brick’s contract for Mobility services has expired and is now due for a review. This process will evaluate the current services and assess the value propositions of offerings available in the market to identify opportunities for improvement and alignment with the organisation's needs.",
      subsections: [
        {
          id: "2.1",
          title: "2.1 Our understanding of [customer]",
          content: "At the heart of every strategic plan for change is the desire to deliver truly unique and meaningful experiences that can help open new doors for your business. To help understand the changes you need to make, we’ve done a review of your business goals and mobility needs and have identified ambitions we believe our solution can help you achieve."
        },
        {
          id: "2.2",
          title: "2.2 What matters to the success of [customer]",
          content: "- Find flexible solutions: Take advantage of no lock-in contracts on individual services to enable scalability of service volumes up and down. - Provide better connectivity: Today’s business solutions demand high-speed and low latency, which is what Telstra 5G can provide."
        }
      ]
    }
  ],
  comments: [
    {
      id: 1,
      author: "Andrew Bernard",
      initials: "AB",
      timestamp: "27 minutes ago",
      text: "Hey @Alex.anderson Can you have a look at this please?",
      commentNumber: "#1"
    },
    {
      id: 2,
      author: "Alex Anderson",
      initials: "AA",
      timestamp: "12 minutes ago",
      text: "Hi @Andrew.bernard looking into this now ",
      commentNumber: "#2",
      hasEmoji: true
    },
    {
      id: 3,
      author: "Andrew Bernard",
      initials: "AB",
      timestamp: "",
      text: "",
      isInput: true
    }
  ],
  chatMessages: [
    {
      id: 1,
      type: 'bot',
      text: 'Hey there! How can I help you today?'
    },
    {
      id: 2,
      type: 'user',
      text: 'Help me Identify and highlight the problem statements concerning financial dependencies.'
    },
    {
      id: 3,
      type: 'bot',
      text: 'Sure one moment..'
    }
  ]
}