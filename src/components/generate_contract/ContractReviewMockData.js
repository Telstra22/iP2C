export const contractIssues = [
  {
    id: '1',
    title: 'Ambiguity in service delivery locations',
    issueNumber: 'Issue#1',
    status: 'Open'
  },
  {
    id: '2',
    title: 'Unclear agreement duration due to open ended term',
    issueNumber: 'Issue#2',
    status: 'Open'
  },
  {
    id: '3',
    title: 'Automatice renewal of service schedules',
    issueNumber: 'Issue#3',
    status: 'Open'
  },
  {
    id: '5',
    title: 'Subcontracting without consent',
    issueNumber: 'Issue#5',
    status: 'Open'
  },
  {
    id: '6',
    title: 'Ambiguity in service levels and maintanence',
    issueNumber: '#Issue6',
    status: 'Open'
  },
  {
    id: '7',
    title: 'Data Privacy and cross border data handling',
    issueNumber: 'Issue#7',
    status: 'Open'
  },
  {
    id: '8',
    title: 'Customer responsibilities and liabilities',
    issueNumber: 'Issue#8',
    status: 'Open'
  },
  {
    id: '9',
    title: 'Unilateral pricing adjustments',
    issueNumber: 'Issue#9',
    status: 'Open'
  },
  {
    id: '10',
    title: 'Termination and early exit charges',
    issueNumber: 'Issue#10',
    status: 'Open'
  }
];

export const contractContent = [
  {
    sectionId: 1,
    id: '1.1',
    title: '1.1 THIS AGREEMENT',
    content:
      'This Agreement consists of: Price Schedule; each Service Order Form; Service Terms and Service Schedules; these Head Terms; any Attachment to the Head Terms; Our Customer Terms as they apply to the Services (except for the General Terms section of Our Customer Terms). These are available at http://www.telstra.com.au/customer-terms/ or you can obtain a copy from us; and if applicable, a Data Protection Addendum for the Service available at www.telstra.com/DPA (DPA).',
  },
  {
    sectionId: 1,
    id: '1.2',
    title: '1.2 INCONSISTENCY',
    content:
      'If there is an inconsistency between the parts of this Agreement, unless specified otherwise the document listed earlier in clause 1.1 prevails to the extent of the inconsistency.',
  },
  {
    sectionId: 2,
    id: '2.1',
    title: '2.1 SERVICES SUPPLY',
    content:
      'We agree to supply the Services to you, and you agree to acquire them from us, at the prices and on the terms of this Agreement.',
  },
  {
    sectionId: 2,
    id: '2.2',
    title: '2.2 SERVICE LOCATIONS',
    content:
      'We may provide the Services from locations outside of Australia, however this will not reduce our obligations under this Agreement.',
  },
  {
    sectionId: 2,
    id: '2.3',
    title: '2.3 GLOBAL SERVICES DELIVERY MODEL',
    content:
      'You acknowledge and agree that we use a global services delivery model to deliver our Services to you under this Agreement cost effectively and efficiently. For these purposes, our global services delivery model means that certain Services are delivered by Personnel located in Australia, while other kinds of Services are delivered by Personnel located outside of Australia (including the Philippines, India and Malaysia); and Personnel located in Australia and outside of Australia may need to access your Customer Data and our Service Related Data to provide Services to you.',
  },
  {
    sectionId: 2,
    id: '2.4',
    title: '2.4 SUBCONTRACTING OBLIGATIONS',
    content:
      'From time to time, we may subcontract our obligations under this Agreement and where we subcontract any of our obligations under this Agreement, we will ensure that the subcontractor has all the necessary skills and resources to perform the work they undertake; and not be relieved of our obligations to you under this Agreement for such work.',
  },
  {
    sectionId: 2,
    id: '2.5',
    title: '2.5 SUBCONTRACTING WITHOUT CONSENT',
    content:
      'We may, without your consent, directly or indirectly (including by way of intra-group arrangements) subcontract all or any part of this Agreement to another Telstra Group Entity that has the sufficient financial capacity to perform our obligations under this Agreement; and do all things reasonably required to give effect to paragraph (a) above.',
  },
];

export const contractSections = [
  { id: 1, code: '1', title: 'THIS AGREEMENT' },
  { id: 2, code: '2', title: 'SERVICE' },
  { id: 3, code: '3', title: 'TERM' },
  { id: 4, code: '4', title: 'OUR COMMITMENT TO YOU' },
  { id: 5, code: '5', title: 'YOUR COMMITMENT TO US' },
  { id: 6, code: '6', title: 'PAYMENT AND INVOICES' },
  { id: 7, code: '7', title: 'TAXES' },
  { id: 8, code: '8', title: 'TRUSTEE ACKNOWLEGEMENT' },
];

export const contractMockRootProps = {
  currentPage: 'Contract Review',
  contractTitle: 'AI Generated Contract',
  allSections: [
    {
      id: 1,
      title: '1. THIS AGREEMENT',
      isActive: true,
    },
    {
      id: 2,
      title: '2. SERVICE',
    },
    {
      id: 3,
      title: '3. TERM',
    },
    {
      id: 4,
      title: '4. OUR COMMITMENT TO YOU',
    },
    {
      id: 5,
      title: '5. YOUR COMMITMENT TO US',
    },
    {
      id: 6,
      title: '6. PAYMENT AND INVOICES',
    },
    {
      id: 7,
      title: '7. TAXES',
    },
    {
      id: 8,
      title: '8. TRUSTEE ACKNOWLEGEMENT',
    },
  ],
  sections: [
    {
      id: 1,
      title: '1. THIS AGREEMENT',
      isExpanded: true,
      content:
        'This Agreement consists of: Price Schedule; each Service Order Form; Service Terms and Service Schedules; these Head Terms; any Attachment to the Head Terms; Our Customer Terms as they apply to the Services (except for the General Terms section of Our Customer Terms). These are available at http://www.telstra.com.au/customer-terms/ or you can obtain a copy from us; and if applicable, a Data Protection Addendum for the Service available at www.telstra.com/DPA (DPA).',
      subsections: [
        {
          id: '1.1',
          title: '1.1 THIS AGREEMENT',
          content:
            'This Agreement consists of: Price Schedule; each Service Order Form; Service Terms and Service Schedules; these Head Terms; any Attachment to the Head Terms; Our Customer Terms as they apply to the Services (except for the General Terms section of Our Customer Terms). These are available at http://www.telstra.com.au/customer-terms/ or you can obtain a copy from us; and if applicable, a Data Protection Addendum for the Service available at www.telstra.com/DPA (DPA).',
        },
        {
          id: '1.2',
          title: '1.2 INCONSISTENCY',
          content:
            'If there is an inconsistency between the parts of this Agreement, unless specified otherwise the document listed earlier in clause 1.1 prevails to the extent of the inconsistency.',
        },
      ],
    },
    {
      id: 2,
      title: '2. SERVICE',
      isExpanded: true,
      content:
        '2.1. We agree to supply the Services to you, and you agree to acquire them from us, at the prices and on the terms of this Agreement. 2.2 We may provide the Services from locations outside of Australia, however this will not reduce our obligations under this Agreement. 2.3 You acknowledge and agree that we use a global services delivery model to deliver our Services to you under this Agreement cost effectively and efficiently. For these purposes, our global services delivery model means that certain Services are delivered by Personnel located in Australia, while other kinds of Services are delivered by Personnel located outside of Australia (including the Philippines, India and Malaysia); and Personnel located in Australia and outside of Australia may need to access your Customer Data and our Service Related Data to provide Services to you. 2.4 From time to time, we may subcontract our obligations under this Agreement and where we subcontract any of our obligations under this Agreement, we will ensure that the subcontractor has all the necessary skills and resources to perform the work they undertake; and not be relieved of our obligations to you under this Agreement for such work. 2.5 We may, without your consent, directly or indirectly (including by way of intra-group arrangements) subcontract all or any part of this Agreement to another Telstra Group Entity that has the sufficient financial capacity to perform our obligations under this Agreement; and do all things reasonably required to give effect to paragraph (a) above.',
      subsections: [
        {
          id: '2.1',
          title: '2.1 SERVICES SUPPLY',
          content:
            'We agree to supply the Services to you, and you agree to acquire them from us, at the prices and on the terms of this Agreement.',
        },
        {
          id: '2.2',
          title: '2.2 SERVICE LOCATIONS',
          content:
            'We may provide the Services from locations outside of Australia, however this will not reduce our obligations under this Agreement.',
        },
        {
          id: '2.3',
          title: '2.3 GLOBAL SERVICES DELIVERY MODEL',
          content:
            'You acknowledge and agree that we use a global services delivery model to deliver our Services to you under this Agreement cost effectively and efficiently. For these purposes, our global services delivery model means that certain Services are delivered by Personnel located in Australia, while other kinds of Services are delivered by Personnel located outside of Australia (including the Philippines, India and Malaysia); and Personnel located in Australia and outside of Australia may need to access your Customer Data and our Service Related Data to provide Services to you.',
        },
        {
          id: '2.4',
          title: '2.4 SUBCONTRACTING OBLIGATIONS',
          content:
            'From time to time, we may subcontract our obligations under this Agreement and where we subcontract any of our obligations under this Agreement, we will ensure that the subcontractor has all the necessary skills and resources to perform the work they undertake; and not be relieved of our obligations to you under this Agreement for such work.',
        },
        {
          id: '2.5',
          title: '2.5 SUBCONTRACTING WITHOUT CONSENT',
          content:
            'We may, without your consent, directly or indirectly (including by way of intra-group arrangements) subcontract all or any part of this Agreement to another Telstra Group Entity that has the sufficient financial capacity to perform our obligations under this Agreement; and do all things reasonably required to give effect to paragraph (a) above.',
        },
      ],
    },
    {
      id: 3,
      title: '3. TERM',
      isExpanded: false,
      content: '',
      subsections: [],
    },
    {
      id: 4,
      title: '4. OUR COMMITMENT TO YOU',
      isExpanded: false,
      content: '',
      subsections: [],
    },
    {
      id: 5,
      title: '5. YOUR COMMITMENT TO US',
      isExpanded: false,
      content: '',
      subsections: [],
    },
    {
      id: 6,
      title: '6. PAYMENT AND INVOICES',
      isExpanded: false,
      content: '',
      subsections: [],
    },
    {
      id: 7,
      title: '7. TAXES',
      isExpanded: false,
      content: '',
      subsections: [],
    },
    {
      id: 8,
      title: '8. TRUSTEE ACKNOWLEGEMENT',
      isExpanded: false,
      content: '',
      subsections: [],
    },
  ],
};