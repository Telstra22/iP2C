export const customers = [
  'Commonwealth',
  'National Australia Bank',
  'Coles Group',
  'CSL',
  'Bank of Australia',
];

export const industries = [
  'Banking',
  'Telecommunication',
  'Healthcare',
  'Retail',
  'Consumer Services',
  'Industrial',
];

export const services = [
  'IoT',
  'Cloud',
  'Mobility',
  'DAC',
  'Unified Communications',
];

export const productHierarchies = [
  'IoT',
  'Mobility',
  'Cloud',
  'Unified Communications',
  'DAC',
];

export const products = [
  // IoT
  'Connected Vehicles',
  'IoT Connectivity',
  'IoT Devices',
  'IoT Network',
  'IoT Platforms',
  'IoT Exit/Migrations',

  // Mobility
  'Business Applications',
  'Mobile Devices',
  'Mobility Managed Services',
  'Mobile Networks',
  'Mobile Plans',
  'Mobile Value Added Services (VAS)',
  'Mobility Exit/Migrations',

  // Cloud
  'Cloud (General)',
  'Cloud Services',

  // Unified Communications
  'Unified Communications (General)',
  'Adaptive Collaboration',
  'Customer Contact Solutions',
  'Collaboration - Cloud',
  'Inbound Services',
  'Collaboration - On-Premise',
  'Video & Workplace Design Solutions',
  'Conferencing',
  'Unified Communications Exit/Migration',

  // DAC (Adaptive Access & Connectivity Services)
  'Adaptive Access & Connectivity Services',
  'Special Access Services',
  'Exits and Migrations',
  'Adaptive Assured Networks',
  'Adaptive Design',
  'Managed Network Services',
];

export const subProducts = [
  // IoT -> Connected Vehicles
  'Fleet Complete',
  'Teletrac Navman',
  // IoT -> IoT Connectivity
  'IoT Connection Manager',
  'M2M Control Centre',
  // IoT -> IoT Devices
  'Attentis',
  // IoT -> IoT Network
  'General Content',
  // IoT -> IoT Platforms
  'General Content',
  // IoT -> IoT Exit/Migrations
  'Telstra Track and Monitor',

  // Mobility -> Business Applications
  'GoCanvas',
  // Mobility -> Mobile Devices
  'Apple Mobile Devices',
  'HTC Mobile Devices',
  'Iridium (SAT) Mobile Devices',
  'LG Mobile Devices',
  'Motorola Mobile Devices',
  'NETGEAR Mobile Devices',
  'Sony Mobile Devices',
  'Telstra Mobile Devices',
  'ZTE Mobile Devices',
  // Mobility -> Mobility Managed Services
  'Mobile Device Management (MDM)',
  'Telstra Enterprise Mobile Protect',
  // Mobility -> Mobile Networks
  '5G',
  // Mobility -> Mobile Plans
  'General Content',
  'Adaptive Mobility',
  'Device Leasing',
  'Enterprise Wireless',
  // Mobility -> Mobile Value Added Services (VAS)
  'International Roaming',
  'Order Express',
  // Mobility -> Mobility Exit/Migrations
  '3G Network Closure',
  'BYOD',
  'Corporate Mobile Plus (CMP)',
  'Telstra Mobile Workspace (TMW)',

  // Cloud (General)
  'General content for all Cloud',
  // Cloud Services
  'Amazon Web Services (AWS)',
  'Azure VMware Solution',
  'Cloud Infrastructure Managed Backup',
  'Data Centres and Colocation',
  'Microsoft Azure',
  'Microsoft Dynamics 365',
  'Microsoft Office 365 (MS365)',
  'Microsoft Windows 365',
  'Telstra Cloud Compliance',
  'Telstra Cloud Connector',
  'Telstra Cloud Infrastructure',
  'Telstra Cloud Sight',

  // Unified Communications (General)
  'General Content for all UC',
  // Adaptive Collaboration
  'Microsoft Operator Connect (MSOC)',
  'Telstra Cloud Calling (previously Adaptive Collaboration)',
  // Customer Contact Solutions
  'Avaya Contact Centre',
  'Call IN',
  'Contact Centre Genesys Cloud',
  'Network IVR',
  // Collaboration - Cloud
  'Business SIP',
  'Liberate',
  'Telstra Business Resumption Service + (BRS +)',
  'Telstra Calling for Office 365 (TCO365)',
  'Telstra IP Telephony (TIPT)',
  // Inbound Services
  'Analyser Online',
  'Freecall 1800 and Priority 13',
  'IN-Control',
  'International Freecall',
  'Phonewords',
  // Collaboration - On-Premise
  'SIP Complete',
  'SIP Connect',
  'Telstra Business Systems (TBS)',
  'Telstra Business Systems (TBS) Care',
  // Video & Workplace Design Solutions
  'Audio Visual Solutions',
  'MS Surface Hub',
  'Pexip Interop',
  'Telstra T-Rooms',
  // Conferencing
  'Audio & Web Conferencing',
  'Dubber Call Recording And Insights',

  // DAC -> Adaptive Access & Connectivity Services
  'Business IP (BIP) Adapt',
  'Telstra Internet Direct (TID) Adapt',
  'Telstra Internet Direct (TID) Lite Adapt',
  'Adaptive Connectivity',
  'Telstra Business Broadband (TBB) on NBN and T-Biz Broadband on NBN',
  'General content for all Data & IP',
  'Internet General Content',
  'NBN General Content',
  'Private Networks General Content',
  // DAC -> Special Access Services
  'IP Wireless',
  'National Ethernet',
  'Telstra Opticwave',
  'Telstra Wavelength Service (TWS)',
  // DAC -> Exits and Migrations
  'Business IP (BIP)',
  'Cloud Gateway',
  'Connect IP (CIP)',
  'IPMAN',
  'IPWAN',
  'Other Data & IP Exit/Migrations',
  // DAC -> Adaptive Assured Networks
  'Adapt S1',
  'Adapt Assured Meraki (previously Managed Wi-Fi Cloud)',
  'Managed Wi-Fi Dedicated',
  'Managed Wi-Fi General Content',
  'MDN Bundles',
  'MDN Custom',
  "OpenRoaming with Telstra",
  'SD-WAN Adapt VMware',
  // DAC -> Adaptive Design
  'Telstra Programmable Network (TPN)',
  // DAC -> Managed Network Services
  'Adaptive Networks Centre',
  'General content for all Managed Network Services',
  'My Network',
];

// Dependency maps for cascading selection
export const hierarchyToProducts = {
  'IoT': [
    'Connected Vehicles',
    'IoT Connectivity',
    'IoT Devices',
    'IoT Network',
    'IoT Platforms',
    'IoT Exit/Migrations',
  ],
  'Mobility': [
    'Business Applications',
    'Mobile Devices',
    'Mobility Managed Services',
    'Mobile Networks',
    'Mobile Plans',
    'Mobile Value Added Services (VAS)',
    'Mobility Exit/Migrations',
  ],
  'Cloud': [
    'Cloud (General)',
    'Cloud Services',
  ],
  'Unified Communications': [
    'Unified Communications (General)',
    'Adaptive Collaboration',
    'Customer Contact Solutions',
    'Collaboration - Cloud',
    'Inbound Services',
    'Collaboration - On-Premise',
    'Video & Workplace Design Solutions',
    'Conferencing',
    'Unified Communications Exit/Migration',
  ],
  'DAC': [
    'Adaptive Access & Connectivity Services',
    'Special Access Services',
    'Exits and Migrations',
    'Adaptive Assured Networks',
    'Adaptive Design',
    'Managed Network Services',
  ],
};

export const productToSubProducts = {
  // IoT
  'Connected Vehicles': ['Fleet Complete', 'Teletrac Navman'],
  'IoT Connectivity': ['IoT Connection Manager', 'M2M Control Centre'],
  'IoT Devices': ['Attentis'],
  'IoT Network': ['General Content'],
  'IoT Platforms': ['General Content'],
  'IoT Exit/Migrations': ['Telstra Track and Monitor'],

  // Mobility
  'Business Applications': ['GoCanvas'],
  'Mobile Devices': [
    'Apple Mobile Devices',
    'HTC Mobile Devices',
    'Iridium (SAT) Mobile Devices',
    'LG Mobile Devices',
    'Motorola Mobile Devices',
    'NETGEAR Mobile Devices',
    'Sony Mobile Devices',
    'Telstra Mobile Devices',
    'ZTE Mobile Devices',
  ],
  'Mobility Managed Services': [
    'Mobile Device Management (MDM)',
    'Telstra Enterprise Mobile Protect',
  ],
  'Mobile Networks': ['5G'],
  'Mobile Plans': ['General Content', 'Adaptive Mobility', 'Device Leasing', 'Enterprise Wireless'],
  'Mobile Value Added Services (VAS)': ['International Roaming', 'Order Express'],
  'Mobility Exit/Migrations': ['3G Network Closure', 'BYOD', 'Corporate Mobile Plus (CMP)', 'Telstra Mobile Workspace (TMW)'],

  // Cloud
  'Cloud (General)': ['General content for all Cloud'],
  'Cloud Services': [
    'Amazon Web Services (AWS)',
    'Azure VMware Solution',
    'Cloud Infrastructure Managed Backup',
    'Data Centres and Colocation',
    'Microsoft Azure',
    'Microsoft Dynamics 365',
    'Microsoft Office 365 (MS365)',
    'Microsoft Windows 365',
    'Telstra Cloud Compliance',
    'Telstra Cloud Connector',
    'Telstra Cloud Infrastructure',
    'Telstra Cloud Sight',
  ],

  // Unified Communications
  'Unified Communications (General)': ['General Content for all UC'],
  'Adaptive Collaboration': [
    'Microsoft Operator Connect (MSOC)',
    'Telstra Cloud Calling (previously Adaptive Collaboration)',
  ],
  'Customer Contact Solutions': [
    'Avaya Contact Centre',
    'Call IN',
    'Contact Centre Genesys Cloud',
    'Network IVR',
  ],
  'Collaboration - Cloud': [
    'Business SIP',
    'Liberate',
    'Telstra Business Resumption Service + (BRS +)',
    'Telstra Calling for Office 365 (TCO365)',
    'Telstra IP Telephony (TIPT)',
  ],
  'Inbound Services': [
    'Analyser Online',
    'Freecall 1800 and Priority 13',
    'IN-Control',
    'International Freecall',
    'Phonewords',
  ],
  'Collaboration - On-Premise': [
    'SIP Complete',
    'SIP Connect',
    'Telstra Business Systems (TBS)',
    'Telstra Business Systems (TBS) Care',
  ],
  'Video & Workplace Design Solutions': [
    'Audio Visual Solutions',
    'MS Surface Hub',
    'Pexip Interop',
    'Telstra T-Rooms',
  ],
  'Conferencing': ['Audio & Web Conferencing', 'Dubber Call Recording And Insights'],
  'Unified Communications Exit/Migration': [],

  // DAC
  'Adaptive Access & Connectivity Services': [
    'Business IP (BIP) Adapt',
    'Telstra Internet Direct (TID) Adapt',
    'Telstra Internet Direct (TID) Lite Adapt',
    'Adaptive Connectivity',
    'Telstra Business Broadband (TBB) on NBN and T-Biz Broadband on NBN',
    'General content for all Data & IP',
    'Internet General Content',
    'NBN General Content',
    'Private Networks General Content',
  ],
  'Special Access Services': ['IP Wireless', 'National Ethernet', 'Telstra Opticwave', 'Telstra Wavelength Service (TWS)'],
  'Exits and Migrations': ['Business IP (BIP)', 'Cloud Gateway', 'Connect IP (CIP)', 'IPMAN', 'IPWAN', 'Other Data & IP Exit/Migrations'],
  'Adaptive Assured Networks': [
    'Adapt S1',
    'Adapt Assured Meraki (previously Managed Wi-Fi Cloud)',
    'Managed Wi-Fi Dedicated',
    'Managed Wi-Fi General Content',
    'MDN Bundles',
    'MDN Custom',
    'OpenRoaming with Telstra',
    'SD-WAN Adapt VMware',
  ],
  'Adaptive Design': ['Telstra Programmable Network (TPN)'],
  'Managed Network Services': ['Adaptive Networks Centre', 'General content for all Managed Network Services', 'My Network'],
};
