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

export const mockProposalContent = {
  regeneratedHeader: "This content is regenerated based on your attached document",
  mainContent: "Total Brick's contract for mobility services has reached the end of its term and is now entering a strategic review phase. This review will serve as an opportunity to take a closer look at the company's existing mobility environment—assessing how well current services are supporting operational efficiency, workforce productivity, and overall business performance. As technology, connectivity demands, and ways of working continue to evolve, it has become increasingly important for Total Brick to ensure that its mobility solutions remain aligned with the organisation's broader goals and future direction.\n\nThe evaluation will include a detailed analysis of service performance, network reliability, cost structures, and user experience to identify areas where improvements can be made. At the same time, Total Brick will explore and compare the latest offerings available in the market to understand the value propositions, innovations, and scalability options each provider can deliver. The aim is to identify opportunities that strengthen service quality, enhance security and compliance, and introduce greater flexibility in managing a geographically dispersed workforce.Through this process, Total Brick seeks to establish a modern, future-ready mobility framework that not only addresses current operational needs but also supports the company's long-term ambitions—enabling improved collaboration, seamless connectivity, and sustained business growth across its national operations.",
  subsections: [
    {
      id: 1,
      title: "2.1 Our understanding of [customer]",
      content: "At the heart of every strategic plan for change lies the ambition to create experiences that are not only unique but also deeply meaningful—experiences that inspire progress, strengthen connections, and open new pathways for growth. True transformation happens when technology and strategy work together to enhance how a business operates, communicates, and delivers value to its customers. That vision underpins our approach to helping you shape the next phase of your organisation's evolution.\n\nTo gain a deeper understanding of your needs, we have conducted a comprehensive review of your business goals, operational landscape, and mobility requirements. This analysis has provided insights into the opportunities and challenges that define your current environment—ranging from connectivity and scalability to workforce empowerment and customer engagement.\n\nBased on this understanding, we have identified a set of strategic ambitions that our proposed solution is designed to help you achieve. These include improving mobility efficiency and cost transparency, enhancing collaboration across dispersed teams, strengthening security and compliance, and enabling greater flexibility to support future growth. Through this partnership, we aim to empower your organisation to embrace new ways of working, adopt innovative technologies, and create the foundation for sustained success in a connected, digital future.",
      isCollapsed: false
    },
    {
      id: 2,
      title: "2.2 What matters to the success of [customer]",
      content: "- Technology integration: Provide seamless information flow between internal and relevant external portals. - Cost savings: Optimise expense visibility and reporting to highlight misallocation of capital and save costs. - Right-size plan allocation: Eliminate cost and inclusion variances to deliver a seamless 5G experience to all end-users. - Have experts on call: Leverage expert capability management services to provide users with a superior experience and free up internal resources. - Overcome CAPEX constraints: Make the most of available technology funds. - Support your hybrid workforce: Adopt new ways of working and mobilise your business on the largest mobile network in Australia. - Maximise productivity: Equip workers with the speed, responsiveness and coverage they require to use powerful applications productively.",
      isCollapsed: false
    },
    {
      id: 3,
      title: "2.3 Our principles in developing this proposal for you",
      content: "Content not available in source.",
      isCollapsed: false,
      isItalic: true
    }
  ]
};