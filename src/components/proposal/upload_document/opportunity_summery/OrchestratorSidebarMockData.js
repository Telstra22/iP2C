// Mock data for Orchestrator Agent Sidebar

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
      badge: "RS",
      title: "RFI Summary Extractor",
      description: "ExtractingRFI summary successfully...",
      hasGradientTitle: false
    }
  ],
  huddleStatus: "Huddle in progress..",
  isHuddleInProgress: true
};