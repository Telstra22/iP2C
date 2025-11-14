// Mock data for Orchestrator Agent Sidebar

// Loading state - when huddle is in progress
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
      badge: "RS",
      title: "RFI Summary Extractor",
      description: "ExtractingRFI summary successfully...",
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
      badge: "OE",
      title: "Opportunity Extractor Agent",
      description: "Successfully pulled opportunity from RFx/CRM!",
      hasGradientTitle: false
    },
    {
      id: 2,
      badge: "RS",
      title: "RFI Summary Extractor",
      description: "RFI summary successfully extracted!",
      hasGradientTitle: false
    },
    {
      id: 3,
      badge: "OV",
      title: "Opportunity Validator",
      description: "Successfully validated opportunity!",
      hasGradientTitle: false
    },
    {
      id: 4,
      badge: "CC",
      title: "Customer Context Agent",
      description: "Account profile, prior deals successfully fetched!",
      hasGradientTitle: false
    }
  ],
  huddleStatus: "Huddle ended after 3m 56secs..",
  isHuddleInProgress: false
};