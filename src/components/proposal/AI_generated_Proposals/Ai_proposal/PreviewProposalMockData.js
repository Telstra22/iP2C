// Mock data for the preview proposal page

export const mockRootProps = {
  breadcrumbPath: [
    { label: 'Home', path: '/' },
    { label: 'Manage proposals', path: '/manage_proposals' },
    { label: 'Create New Proposal', path: '/create-new-proposal' },
    { label: 'Ai Generated Proposal', path: '/ai-proposal_page', active: true }
  ],
  proposalContent: {
    sections: [
      {
        id: 1,
        title: '1. EXECUTIVE SUMMARY',
        content: "Total Brick is Australia's diversified property group, with a portfolio that spans the ownership, management, and development of shopping centres, office and industrial properties, residential communities, and retirement living solutions. This extensive range of assets reflects Total Brick's commitment to creating sustainable and thriving communities across the country.",
        subsections: [
          {
            id: '1.1',
            title: '1.1 Background',
            content: "Total Brick is Australia's largest diversified property group, with a portfolio that spans the ownership, management, and development of shopping centres, office and industrial properties, residential communities, and retirement living solutions. The contract for Mobility services has expired and is now due for a review. This process will evaluate the current services and assess the value propositions of offerings available in the market to identify opportunities for improvement and alignment with the organisation's needs."
          },
          {
            id: '1.2',
            title: '1.2 A solution aligned with your vision',
            content: "After a careful review of your current plans, new requirements and possibilities for growth, we're proposing Adaptive Mobility to help you achieve your vision. Telstra Adaptive Mobility consists of Mobile, Mobile Broadband, and Enterprise Wireless solutions specially designed for Enterprise needs. Advance your business with flexible hardware options, month-to-month no lock-in contracts, data sharing and high-speed, low-latency 5G on Australia's best 5G network. You'll have the confidence to empower your staff to adopt new ways of working, introduce innovative services and use more intelligent enterprise applications."
          },
          {
            id: '1.3',
            title: '1.3 Next Steps',
            content: 'Content not available in source.'
          }
        ]
      },
      {
        id: 2,
        title: '2. MEETING YOUR OBJECTIVES',
        content: "Total Brick's contract for Mobility services has expired and is now due for a review. This process will evaluate the current services and assess the value propositions of offerings available in the market to identify opportunities for improvement and alignment with the organisation's needs.",
        subsections: [
          {
            id: '2.1',
            title: '2.1 Our understanding of [customer]',
            content: "At the heart of every strategic plan for change is the desire to deliver truly unique and meaningful experiences that can help open new doors for your business. To help understand the changes you need to make, we've done a review of your business goals and mobility needs and have identified ambitions we believe our solution can help you achieve."
          },
          {
            id: '2.2',
            title: '2.2 What matters to the success of [customer]',
            content: 'Technology integration: Provide seamless information flow between internal and relevant external portals. - Cost savings: Optimise expense visibility and reporting to highlight misallocation of capital and save costs. - Right-size plan allocation: Eliminate cost and inclusion variances to deliver a seamless 5G experience to all end-users. - Have experts on call: Leverage expert mobility managed services to provide users with a superior experience and free up internal resources. - Overcome CAPEX constraints: Make the most of available technology funds. - Support your hybrid workforce: Adopt new ways of working and mobilise your businesson the largest mobile network in Australia. - Maximise productivity: Equip workers with the speed, responsiveness and coverage they require to use powerful applications productively.'
          },
          {
            id: '2.3',
            title: '2.3 Our principles in developing this proposal for you',
            content: 'Content not available in source.'
          }
        ]
      },
      // ... existing code ...
      {
        id: 3,
        title: '3. SERVICE AND SOLUTION OVERVIEW',
        content: 'Content not available in source.',
        subsections: [
          {
            id: '3.1',
            title: '3.1 Quick summary of the proposed solution',
            content: "Telstra's proposal is to provide optimal value and technical currency to support Total Brick's requirements. The solution includes two options: - Option 1: Best fit Adaptive Mobility plans with 5G connectivity, web portal access, device allocation, network connectivity, staging, distribution, end-user services, repairs, security & compliance, decommission and disposal. - Option 2: All of Option 1 plus Mobile Device Management, imei Expense Manager, VIP Support, Service Delivery Management, Buffer Stock Management."
          },
          {
            id: '3.2',
            title: '3.2 Unique value Telstra can deliver',
            content: "Telstra's proven expertise and commitment to excellence position us as Total Brick's trusted partner in achieving operational excellence and market leadership. Unique value is delivered through cutting-edge 5G and IoT solutions, empowering employees with modern tools and fostering long-term sustainability."
          }
        ]
      },
      {
        id: 4,
        title: '4. COMMERCIAL',
        content: '',
        subsections: [
          {
            id: '4.1',
            title: '4.1 Commercial summary',
            content: 'Option 1 (includes 10% of monthly plan spend accrued as a technology fund): - Once-off Professional Services Charge: $0.00 - Voice Essential Plans + imei basic support: $63,731.00/month (24 months) - Data Essential Plans + imei basic support: $9,504.00/month (24 months) - Satellite Plans Monthly Charge: $110.00/month (24 months) - Total Monthly Cost: $73,345.00'
          },
          {
            id: '4.2',
            title: '4.2 Pricing details',
            content: 'Excludes technology fund accrual: - Once-off Professional Services Charge: $6,550.00 - Voice Enhanced Plans + imei Managed Service: $65,895.00/month (24 months) - Data Essential Plans + imei Managed Service: $13,392.00/month (24 months) - Satellite Plans Monthly Charge: $110.00/month (24 months) - Total Monthly Cost: $79,397.00'
          },
          {
            id: '4.3',
            title: '4.3 Assumptions',
            content: 'Minimum number of services and minimum spend to be confirmed based on final service count. - During the Minimum Service Period, Total Brick may change or cancel individual Adaptive Mobility Plans if they continue to meet the Minimum number of services and Minimum spend. - If Total Brick does not meet these Minimum Commitments, discounts may be removed.'
          }
        ]
      }
    ]
  }
}