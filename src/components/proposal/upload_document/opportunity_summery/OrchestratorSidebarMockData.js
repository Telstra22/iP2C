// Mock data for Orchestrator Agent Sidebar

// Loading state - when huddle is in progress (showing full progression)
export const mockOrchestratorDataLoading = {
  isActive: true,
  opportunityManager: {
    title: "Opportunity Manager",
    agents: ["OE", "RS", "OV", "CC"]
  },
  agentActivities: [
    {
      id: 1,
      icon: "opportunity-manager",
      title: "Opportunity Manager",
      description: "Intakes, parse, and qualifies RFx/ Opportunity requests; produces a Qualified Opportunity brief",
      hasGradientTitle: true
    },
    {
      id: 2,
      badge: "OE",
      title: "Opportunity Extractor Agent",
      description: "Pulling opportunity from RFx/CRM..",
      hasGradientTitle: false
    },
    {
      id: 3,
      badge: "OE",
      title: "Opportunity Extractor Agent",
      description: "Successfully pulled opportunity from RFx/CRM!",
      hasGradientTitle: false
    },
    {
      id: 4,
      badge: "RS",
      title: "RFI Summary Extractor",
      description: "Extracting RFI summary...",
      hasGradientTitle: false
    },
    {
      id: 5,
      badge: "RS",
      title: "RFI Summary Extractor",
      description: "RFI summary successfully extracted!",
      hasGradientTitle: false
    },
    {
      id: 6,
      badge: "OV",
      title: "Opportunity Validator",
      description: "Validating opportunity..",
      hasGradientTitle: false
    },
    {
      id: 7,
      badge: "OV",
      title: "Opportunity Validator",
      description: "Successfully validated opportunity!",
      hasGradientTitle: false
    },
    {
      id: 8,
      badge: "CC",
      title: "Customer Context Agent",
      description: "Fetching account profile, prior deals..",
      hasGradientTitle: false
    },
    {
      id: 9,
      badge: "CC",
      title: "Customer Context Agent",
      description: "Account profile, prior deals successfully fetched!",
      hasGradientTitle: false
    },
    {
      id: 10,
      badge: "RS",
      title: "RFI Summary Extractor",
      description: "Extracting RFI summary..",
      hasGradientTitle: false
    },
    {
      id: 11,
      badge: "RS",
      title: "RFI Summary Extractor",
      description: "RFI summary successfully extracted!",
      hasGradientTitle: false
    }
  ],
  huddleStatus: "Huddle in progress..",
  isHuddleInProgress: true
};

// Completed state - when huddle has ended
export const mockOrchestratorData = {
  isActive: true,
  opportunityManager: {
    title: "Opportunity Manager",
    agents: ["OE", "RS", "OV", "CC"]
  },
  agentActivities: [
    {
      id: 1,
      icon: "opportunity-manager",
      title: "Opportunity Manager",
      description: "Intakes, parse, and qualifies RFx/ Opportunity requests; produces a Qualified Opportunity brief",
      hasGradientTitle: true
    },
    {
      id: 2,
      badge: "OE",
      title: "Opportunity Extractor Agent",
      description: "Pulling opportunity from RFx/CRM..",
      hasGradientTitle: false
    },
    {
      id: 3,
      badge: "OE",
      title: "Opportunity Extractor Agent",
      description: "Successfully pulled opportunity from RFx/CRM!",
      hasGradientTitle: false
    },
    {
      id: 4,
      badge: "RS",
      title: "RFI Summary Extractor",
      description: "Extracting RFI summary...",
      hasGradientTitle: false
    },
    {
      id: 5,
      badge: "RS",
      title: "RFI Summary Extractor",
      description: "RFI summary successfully extracted!",
      hasGradientTitle: false
    },
    {
      id: 6,
      badge: "OV",
      title: "Opportunity Validator",
      description: "Validating opportunity..",
      hasGradientTitle: false
    },
    {
      id: 7,
      badge: "OV",
      title: "Opportunity Validator",
      description: "Successfully validated opportunity!",
      hasGradientTitle: false
    },
    {
      id: 8,
      badge: "CC",
      title: "Customer Context Agent",
      description: "Fetching account profile, prior deals..",
      hasGradientTitle: false
    },
    {
      id: 9,
      badge: "CC",
      title: "Customer Context Agent",
      description: "Account profile, prior deals successfully fetched!",
      hasGradientTitle: false
    },
    {
      id: 10,
      badge: "RS",
      title: "RFI Summary Extractor",
      description: "Extracting RFI summary..",
      hasGradientTitle: false
    },
    {
      id: 11,
      badge: "RS",
      title: "RFI Summary Extractor",
      description: "RFI summary successfully extracted!",
      hasGradientTitle: false
    }
  ],
  huddleStatus: "Huddle ended after 3m 56secs..",
  isHuddleInProgress: false
};