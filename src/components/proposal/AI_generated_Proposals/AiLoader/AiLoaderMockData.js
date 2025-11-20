// Mock data for AiLoader component

// No complex mock data needed for this loading component
// The component is controlled via props:
// - onCancel: callback function
// - isVisible: boolean to show/hide the loader

export const mockRootProps = {
  isVisible: true,
  onCancel: () => {
    console.log('Cancel button clicked')
  }
}


// Loading state - when huddle is in progress (showing full progression)
export const mockDataLoading = {
  isActive: true,
  opportunityBuilder: {
    title: "Proposal Builder",
    agents: ["MA", "SC", "PD", "CG"]
  },
  agentActivities: [
    {
      id: 1,
      icon: "Proposal Builder",
      title: "Proposal Builder",
      description: "Creates End-to-end proposal, manages template building, solution outline, pricing integration, and draft assembly.",
      hasGradientTitle: true
    },
    {
      id: 2,
      badge: "MA",
      title: "Metadata Architect",
      description: "Creating Metadata structures..",
      hasGradientTitle: false
    },
    {
      id: 3,
      badge: "MA",
      title: "Metadata Architect",
      description: "Metadata structures successfully created!",
      hasGradientTitle: false
    },
    {
      id: 4,
      badge: "SC",
      title: "Section Composer",
      description: "Composing and generating document sections..",
      hasGradientTitle: false
    },
    {
      id: 5,
      badge: "SC",
      title: "Section Composer",
      description: "Document sections successfully generated and composed!",
      hasGradientTitle: false
    },
    {
      id: 6,
      badge: "PD",
      title: "Prompt Designer",
      description: "Designing structured prompts for consistent generation..",
      hasGradientTitle: false
    },
    {
      id: 7,
      badge: "PD",
      title: "Prompt Designer",
      description: "Structured prompts for consistent generation successfully designed!",
      hasGradientTitle: false
    },
    {
      id: 8,
      badge: "CG",
      title: "Content Generator",
      description: "Producing narrative or structured content using AI...",
      hasGradientTitle: false
    },
    {
      id: 9,
      badge: "CG",
      title: "Content Generator",
      description: "Narrative or structured content using AI successfully produced!",
      hasGradientTitle: false
    },
  ],
  huddleStatus: "Huddle in progress..",
  isHuddleInProgress: true
};

// Completed state - when huddle has ended
export const mockDataDone = {
  isActive: true,
  opportunityBuilder: {
    title: "Proposal Builder",
    agents: ["MA", "SC", "PD", "CG"]
  },
   agentActivities: [
    {
      id: 1,
      icon: "Proposal Builder",
      title: "Proposal Builder",
      description: "Creates End-to-end proposal, manages template building, solution outline, pricing integration, and draft assembly.",
      hasGradientTitle: true
    },
    {
      id: 2,
      badge: "MA",
      title: "Metadata Architect",
      description: "Creating Metadata structures..",
      hasGradientTitle: false
    },
    {
      id: 3,
      badge: "MA",
      title: "Metadata Architect",
      description: "Metadata structures successfully created!",
      hasGradientTitle: false
    },
    {
      id: 4,
      badge: "SC",
      title: "Section Composer",
      description: "Composing and generating document sections..",
      hasGradientTitle: false
    },
    {
      id: 5,
      badge: "SC",
      title: "Section Composer",
      description: "Document sections successfully generated and composed!",
      hasGradientTitle: false
    },
    {
      id: 6,
      badge: "PD",
      title: "Prompt Designer",
      description: "Designing structured prompts for consistent generation..",
      hasGradientTitle: false
    },
    {
      id: 7,
      badge: "PD",
      title: "Prompt Designer",
      description: "Structured prompts for consistent generation successfully designed!",
      hasGradientTitle: false
    },
    {
      id: 8,
      badge: "CG",
      title: "Content Generator",
      description: "Producing narrative or structured content using AI...",
      hasGradientTitle: false
    },
    {
      id: 9,
      badge: "CG",
      title: "Content Generator",
      description: "Narrative or structured content using AI successfully produced!",
      hasGradientTitle: false
    },
  ],
  huddleStatus: "Huddle ended after 3m 56secs..",
  isHuddleInProgress: false
};