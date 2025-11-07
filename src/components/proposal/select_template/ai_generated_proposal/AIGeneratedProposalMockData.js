// Mock data for the AI Generated Proposal component

// Data passed as props to the root component
export const mockRootProps = {
  breadcrumbItems: [
    { label: "Home", path: "/" },
    { label: "Manage proposals", path: "/manage-proposals" },
    { label: "Create New Proposal", path: "/create-proposal" }
  ],
  currentPage: "Ai Generated Proposal",
  tableOfContents: [
    {
      id: "1",
      title: "Executive Summary",
      isExpanded: true,
      subsections: [
        { id: "1.1", title: "Background" },
        { id: "1.2", title: "A solution aligned with your vision" }
      ]
    },
    {
      id: "2",
      title: "Meeting your objectives",
      isExpanded: false,
      subsections: []
    },
    {
      id: "3",
      title: "Service and solution overview",
      isExpanded: false,
      subsections: []
    },
    {
      id: "4",
      title: "Commercial",
      isExpanded: false,
      subsections: []
    },
    {
      id: "5",
      title: "Detail on the proposed solution",
      isExpanded: false,
      subsections: []
    },
    {
      id: "6",
      title: "Appendices",
      isExpanded: false,
      subsections: []
    },
    {
      id: "7",
      title: "Your Telstra team",
      isExpanded: false,
      subsections: []
    }
  ],
  proposalContent: {
    title: "Executive Summary",
    sections: [
      {
        id: "1.1",
        title: "Background",
        isExpanded: true,
        showComments: true,
        content: [
          "Customer challenges and purpose|\nWhat are the challenges customer currently faces, and how critical it is to turn challenges into opportunities that align with the customer's purposes?",
          "Business outcomes that matter to the customerMessages that targeted at the decision makers' buying interests"
        ]
      },
      {
        id: "1.2",
        title: "Identifying the key problems",
        isExpanded: false,
        showComments: false,
        content: []
      },
      {
        id: "1.3",
        title: "A solution aligned with your vision",
        isExpanded: true,
        showComments: false,
        content: [
          "Concise summary of the proposed solution and unique value/tangible benefits Telstra can deliver on what matters to the customer. Be sure to provide proof points for claims of value that the solution/offer will deliver.",
          "Brief overview on topics of this proposal",
          "Telstra key message (e.g. How progress of T22 strengthen Telstra's unique ability to deliver, our commitment and promise)",
          "Summarise key call-outs"
        ]
      }
    ]
  }
};