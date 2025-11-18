// Mock data for Opportunity Summary UI

export const INITIAL_FORM_DATA = {
  customer: "Total Brick",
  businessUnit: "Telstra Business",
  partner: "Splendra Pvt Ltd",
  archetype: "2",
  industry: "Real Estate",
  newRenewal: "New",
  cidn: "8856342637",
  productHierarchy: "Mobility",
  product: "Mobile Networks",
  subProduct: "",
  submissionDate: "2025-10-01",
  budget: 0,
};

export const OPPORTUNITY_BRIEF =
  "Total Brick, a leading diversified property group in Australia, is seeking proposals for reliable and cost-effective mobile voice and data services to support its operations nationwide. The company is reviewing its mobility services to identify improvements and align with evolving business needs.";

export const PROBLEM_STATEMENT =
  "The current contract for mobility services has expired. Total Brick needs to evaluate new offerings to ensure continued service quality, security, and value, while addressing gaps or inefficiencies in the existing setup.";

export const KEY_DLIVERABLES =
  "Provision of approximately 1200 mobile voice & data services, 430 data-only services, and 2 satellite voice services. Excludes managed services such as Mobile Device Management (MDM). Services must cover ordering, reporting, billing, operational support, and scalability.";  

export const PROGRESS_ITEMS = [
  { label: "Analyzing requirements...", value: (p) => p, barColor: "#A8A8A8" },
  {
    label: "Generating content...",
    value: (p) => Math.min(100, p * 0.6),
    barColor: "#C4C4C4",
  },
  {
    label: "Finetuning details...",
    value: (p) => Math.min(100, p * 0.3),
    barColor: "#D4D4D4",
  },
];

// Shared UI strings
export const UI_STRINGS = {
  loadingTitle: 'AI is generating your summary...',
  estimatedWait: 'Estimated wait time 3-5 minutes',
  resumeNote: 'Please continue with other Proposals . You will be notified once the huddle has ended',
  toastSuccess: 'Agent Huddle Ended | Go to Opportunity Summary page to review your content',
  completionTitle: 'AI Generated Opportunity Summary Ready!',
  completionInstruction: 'Click on Done to continue to the Opportunity Summary Page',
  completionDone: 'Done',
  editableSave: 'Make Changes',
  editableDiscard: 'Discard Changes',
};

// Static content for collapsible sections
export const SECTION_CONTENT = {
  opportunityBrief:
    "Total Brick, a diversified property group in Australia, is seeking to review and potentially renew its Mobility services contract. The purpose of this RFI is to evaluate current services and explore market offerings to improve alignment with organizational needs. The objective is to identify a reliable and cost-effective provider for mobile voice and data services.",
  problemStatement:
    "Total Brick's existing contract for Mobility services has expired, necessitating a review to ensure continued reliable and cost-effective service. The organization requires a reputable provider with a strong portfolio and mature security practices. The challenge is to procure services that meet the needs of approximately 1200 mobile voice and data services, 430 data-only services, and 2 satellite voice services.",
  scopeOfWork:
    "The vendor is expected to deliver reliable mobile voice and data services, detailed pricing and cost breakdowns, operational support tools, billing processes, service-level agreements, ESG considerations, LEO satellite services, innovations in mobile services, security practices, customer support, and scalability and flexibility options.",
  technicalRequirements:
    "Vendors must provide coverage maps, including 5G availability and rural/remote support, details on LEO satellite service capabilities, and security protocols compliant with Australian regulations. They should also offer system integration options with ITSM tools and compatibility with CMDB.",
  functionalRequirements:
    "The services should include tools for ordering, reporting, and managing mobile fleets, self-service portals, consolidated billing, usage reporting, 24/7 technical support, and the ability to scale services. Flexibility to adjust plans without penalties and integration with emerging technologies like IoT or eSIM is also required.",
  vendorQuestions:
    "Vendors are required to provide information on financials, operational support, billing processes, SLAs, ESG considerations, satellite services, innovations, security practices, customer support, scalability, and flexibility. They should also address their vendor profile, cost structure, incentives, service inclusions, network coverage, and operational support.",
  terms:
    "The RFI process includes a timetable with key dates, such as the RFI issuance on December 9, 2024, and the closing date on January 31, 2025. Vendors must sign a mutual NDA before the RFI is issued. Responses should be emailed by the deadline, and Total Brick reserves the right to vary the timetable.",
};

export const customers = [
  "Total Brick",
  "Vensi",
  "Citrus Company",
  "Motivc",
  "Yost",
];

export const businessUnit = ["Telstra Business","Telstra Enterprise"];

export const partner = ["Splendra Pvt Ltd","Abc Pvt Ltd","Xyz Pvt Ltd","Def Pvt Ltd"];

export const archetype = ["2", "3", "4", "5"];

export const industries = [
  "Real Estate",
  "Banking",
  "Healthcare",
  "Retail",
  "Consumer Services",
  "Industrial",
];

export const newRenewal = ["New", "Renewal"];


export const productHierarchies = [
  "IoT",
  "Mobility",
  "Cloud",
  "Unified Communications",
  "DAC",
];

export const products = [
  // IoT
  "Connected Vehicles",
  "IoT Connectivity",
  "IoT Devices",
  "IoT Network",
  "IoT Platforms",
  "IoT Exit/Migrations",

  // Mobility
  "Business Applications",
  "Mobile Devices",
  "Mobility Managed Services",
  "Mobile Networks",
  "Mobile Plans",
  "Mobile Value Added Services (VAS)",
  "Mobility Exit/Migrations",

  // Cloud
  "Cloud (General)",
  "Cloud Services",

  // Unified Communications
  "Unified Communications (General)",
  "Adaptive Collaboration",
  "Customer Contact Solutions",
  "Collaboration - Cloud",
  "Inbound Services",
  "Collaboration - On-Premise",
  "Video & Workplace Design Solutions",
  "Conferencing",
  "Unified Communications Exit/Migration",

  // DAC (Adaptive Access & Connectivity Services)
  "Adaptive Access & Connectivity Services",
  "Special Access Services",
  "Exits and Migrations",
  "Adaptive Assured Networks",
  "Adaptive Design",
  "Managed Network Services",
];

export const subProducts = [
  // IoT -> Connected Vehicles
  "Fleet Complete",
  "Teletrac Navman",
  // IoT -> IoT Connectivity
  "IoT Connection Manager",
  "M2M Control Centre",
  // IoT -> IoT Devices
  "Attentis",
  // IoT -> IoT Network
  "General Content",
  // IoT -> IoT Platforms
  "General Content",
  // IoT -> IoT Exit/Migrations
  "Telstra Track and Monitor",

  // Mobility -> Business Applications
  "GoCanvas",
  // Mobility -> Mobile Devices
  "Apple Mobile Devices",
  "HTC Mobile Devices",
  "Iridium (SAT) Mobile Devices",
  "LG Mobile Devices",
  "Motorola Mobile Devices",
  "NETGEAR Mobile Devices",
  "Sony Mobile Devices",
  "Telstra Mobile Devices",
  "ZTE Mobile Devices",
  // Mobility -> Mobility Managed Services
  "Mobile Device Management (MDM)",
  "Telstra Enterprise Mobile Protect",
  // Mobility -> Mobile Networks
  "5G",
  // Mobility -> Mobile Plans
  "General Content",
  "Adaptive Mobility",
  "Device Leasing",
  "Enterprise Wireless",
  // Mobility -> Mobile Value Added Services (VAS)
  "International Roaming",
  "Order Express",
  // Mobility -> Mobility Exit/Migrations
  "3G Network Closure",
  "BYOD",
  "Corporate Mobile Plus (CMP)",
  "Telstra Mobile Workspace (TMW)",

  // Cloud (General)
  "General content for all Cloud",
  // Cloud Services
  "Amazon Web Services (AWS)",
  "Azure VMware Solution",
  "Cloud Infrastructure Managed Backup",
  "Data Centres and Colocation",
  "Microsoft Azure",
  "Microsoft Dynamics 365",
  "Microsoft Office 365 (MS365)",
  "Microsoft Windows 365",
  "Telstra Cloud Compliance",
  "Telstra Cloud Connector",
  "Telstra Cloud Infrastructure",
  "Telstra Cloud Sight",

  // Unified Communications (General)
  "General Content for all UC",
  // Adaptive Collaboration
  "Microsoft Operator Connect (MSOC)",
  "Telstra Cloud Calling (previously Adaptive Collaboration)",
  // Customer Contact Solutions
  "Avaya Contact Centre",
  "Call IN",
  "Contact Centre Genesys Cloud",
  "Network IVR",
  // Collaboration - Cloud
  "Business SIP",
  "Liberate",
  "Telstra Business Resumption Service + (BRS +)",
  "Telstra Calling for Office 365 (TCO365)",
  "Telstra IP Telephony (TIPT)",
  // Inbound Services
  "Analyser Online",
  "Freecall 1800 and Priority 13",
  "IN-Control",
  "International Freecall",
  "Phonewords",
  // Collaboration - On-Premise
  "SIP Complete",
  "SIP Connect",
  "Telstra Business Systems (TBS)",
  "Telstra Business Systems (TBS) Care",
  // Video & Workplace Design Solutions
  "Audio Visual Solutions",
  "MS Surface Hub",
  "Pexip Interop",
  "Telstra T-Rooms",
  // Conferencing
  "Audio & Web Conferencing",
  "Dubber Call Recording And Insights",

  // DAC -> Adaptive Access & Connectivity Services
  "Business IP (BIP) Adapt",
  "Telstra Internet Direct (TID) Adapt",
  "Telstra Internet Direct (TID) Lite Adapt",
  "Adaptive Connectivity",
  "Telstra Business Broadband (TBB) on NBN and T-Biz Broadband on NBN",
  "General content for all Data & IP",
  "Internet General Content",
  "NBN General Content",
  "Private Networks General Content",
  // DAC -> Special Access Services
  "IP Wireless",
  "National Ethernet",
  "Telstra Opticwave",
  "Telstra Wavelength Service (TWS)",
  // DAC -> Exits and Migrations
  "Business IP (BIP)",
  "Cloud Gateway",
  "Connect IP (CIP)",
  "IPMAN",
  "IPWAN",
  "Other Data & IP Exit/Migrations",
  // DAC -> Adaptive Assured Networks
  "Adapt S1",
  "Adapt Assured Meraki (previously Managed Wi-Fi Cloud)",
  "Managed Wi-Fi Dedicated",
  "Managed Wi-Fi General Content",
  "MDN Bundles",
  "MDN Custom",
  "OpenRoaming with Telstra",
  "SD-WAN Adapt VMware",
  // DAC -> Adaptive Design
  "Telstra Programmable Network (TPN)",
  // DAC -> Managed Network Services
  "Adaptive Networks Centre",
  "General content for all Managed Network Services",
  "My Network",
];

// Dependency maps for cascading selection
export const hierarchyToProducts = {
  IoT: [
    "Connected Vehicles",
    "IoT Connectivity",
    "IoT Devices",
    "IoT Network",
    "IoT Platforms",
    "IoT Exit/Migrations",
  ],
  Mobility: [
    "Business Applications",
    "Mobile Devices",
    "Mobility Managed Services",
    "Mobile Networks",
    "Mobile Plans",
    "Mobile Value Added Services (VAS)",
    "Mobility Exit/Migrations",
  ],
  Cloud: ["Cloud (General)", "Cloud Services"],
  "Unified Communications": [
    "Unified Communications (General)",
    "Adaptive Collaboration",
    "Customer Contact Solutions",
    "Collaboration - Cloud",
    "Inbound Services",
    "Collaboration - On-Premise",
    "Video & Workplace Design Solutions",
    "Conferencing",
    "Unified Communications Exit/Migration",
  ],
  DAC: [
    "Adaptive Access & Connectivity Services",
    "Special Access Services",
    "Exits and Migrations",
    "Adaptive Assured Networks",
    "Adaptive Design",
    "Managed Network Services",
  ],
};

export const productToSubProducts = {
  // IoT
  "Connected Vehicles": ["Fleet Complete", "Teletrac Navman"],
  "IoT Connectivity": ["IoT Connection Manager", "M2M Control Centre"],
  "IoT Devices": ["Attentis"],
  "IoT Network": ["General Content"],
  "IoT Platforms": ["General Content"],
  "IoT Exit/Migrations": ["Telstra Track and Monitor"],

  // Mobility
  "Business Applications": ["GoCanvas"],
  "Mobile Devices": [
    "Apple Mobile Devices",
    "HTC Mobile Devices",
    "Iridium (SAT) Mobile Devices",
    "LG Mobile Devices",
    "Motorola Mobile Devices",
    "NETGEAR Mobile Devices",
    "Sony Mobile Devices",
    "Telstra Mobile Devices",
    "ZTE Mobile Devices",
  ],
  "Mobility Managed Services": [
    "Mobile Device Management (MDM)",
    "Telstra Enterprise Mobile Protect",
  ],
  "Mobile Networks": ["5G"],
  "Mobile Plans": [
    "General Content",
    "Adaptive Mobility",
    "Device Leasing",
    "Enterprise Wireless",
  ],
  "Mobile Value Added Services (VAS)": [
    "International Roaming",
    "Order Express",
  ],
  "Mobility Exit/Migrations": [
    "3G Network Closure",
    "BYOD",
    "Corporate Mobile Plus (CMP)",
    "Telstra Mobile Workspace (TMW)",
  ],

  // Cloud
  "Cloud (General)": ["General content for all Cloud"],
  "Cloud Services": [
    "Amazon Web Services (AWS)",
    "Azure VMware Solution",
    "Cloud Infrastructure Managed Backup",
    "Data Centres and Colocation",
    "Microsoft Azure",
    "Microsoft Dynamics 365",
    "Microsoft Office 365 (MS365)",
    "Microsoft Windows 365",
    "Telstra Cloud Compliance",
    "Telstra Cloud Connector",
    "Telstra Cloud Infrastructure",
    "Telstra Cloud Sight",
  ],

  // Unified Communications
  "Unified Communications (General)": ["General Content for all UC"],
  "Adaptive Collaboration": [
    "Microsoft Operator Connect (MSOC)",
    "Telstra Cloud Calling (previously Adaptive Collaboration)",
  ],
  "Customer Contact Solutions": [
    "Avaya Contact Centre",
    "Call IN",
    "Contact Centre Genesys Cloud",
    "Network IVR",
  ],
  "Collaboration - Cloud": [
    "Business SIP",
    "Liberate",
    "Telstra Business Resumption Service + (BRS +)",
    "Telstra Calling for Office 365 (TCO365)",
    "Telstra IP Telephony (TIPT)",
  ],
  "Inbound Services": [
    "Analyser Online",
    "Freecall 1800 and Priority 13",
    "IN-Control",
    "International Freecall",
    "Phonewords",
  ],
  "Collaboration - On-Premise": [
    "SIP Complete",
    "SIP Connect",
    "Telstra Business Systems (TBS)",
    "Telstra Business Systems (TBS) Care",
  ],
  "Video & Workplace Design Solutions": [
    "Audio Visual Solutions",
    "MS Surface Hub",
    "Pexip Interop",
    "Telstra T-Rooms",
  ],
  Conferencing: [
    "Audio & Web Conferencing",
    "Dubber Call Recording And Insights",
  ],
  "Unified Communications Exit/Migration": [],

  // DAC
  "Adaptive Access & Connectivity Services": [
    "Business IP (BIP) Adapt",
    "Telstra Internet Direct (TID) Adapt",
    "Telstra Internet Direct (TID) Lite Adapt",
    "Adaptive Connectivity",
    "Telstra Business Broadband (TBB) on NBN and T-Biz Broadband on NBN",
    "General content for all Data & IP",
    "Internet General Content",
    "NBN General Content",
    "Private Networks General Content",
  ],
  "Special Access Services": [
    "IP Wireless",
    "National Ethernet",
    "Telstra Opticwave",
    "Telstra Wavelength Service (TWS)",
  ],
  "Exits and Migrations": [
    "Business IP (BIP)",
    "Cloud Gateway",
    "Connect IP (CIP)",
    "IPMAN",
    "IPWAN",
    "Other Data & IP Exit/Migrations",
  ],
  "Adaptive Assured Networks": [
    "Adapt S1",
    "Adapt Assured Meraki (previously Managed Wi-Fi Cloud)",
    "Managed Wi-Fi Dedicated",
    "Managed Wi-Fi General Content",
    "MDN Bundles",
    "MDN Custom",
    "OpenRoaming with Telstra",
    "SD-WAN Adapt VMware",
  ],
  "Adaptive Design": ["Telstra Programmable Network (TPN)"],
  "Managed Network Services": [
    "Adaptive Networks Centre",
    "General content for all Managed Network Services",
    "My Network",
  ],
};

 
