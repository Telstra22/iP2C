// Static mock data for risk score–related components

// Used by ProposalEvaluationMetrics.jsx (section selector options)
export const sections = [
  'Executive Summary',
  'Meeting Your Objectives',
  'Service and Solution Overview',
  'Commercial',
  'Detail on the Proposed Solution',
  'Appendices',
  'Proposal Terms',
  'Your Telstra Team',
  'Terms & Conditions'
]

// Used by ProposalEvaluationMetrics.jsx (scoring criteria accordion)
export const scoringCriteria = [
  {
    title: 'Accuracy Score',
    description: 'Evaluates the precision and correctness of information, data, and claims presented in the proposal.'
  },
  {
    title: 'Risk Score',
    description: 'Assesses potential delivery, financial, or operational risks and the clarity of mitigation plans.'
  },
  {
    title: 'Compliance Score',
    description: 'Evaluates alignment with RFP requirements, internal standards, and mandatory terms.'
  },
  {
    title: 'Client Focus Score',
    description: 'Measures how well the proposal addresses client needs, value outcomes, and business impact.'
  }
]

// Used by AgentRiskScoreEvaluationMatrics.jsx (badges above Proposal Evaluator card)
export const topBadges = [
  { text: 'TR', bgColor: '#D4F1FF' },
  { text: 'CR', bgColor: '#FFE8F5' },
  { text: 'EA', bgColor: '#FFFACD' }
]

// Used by AgentRiskScoreEvaluationMatrics.jsx (agent list for huddle)
export const agents = [
  {
    id: 'proposal-evaluator',
    name: 'Proposal Evaluator',
    description: 'Creates End-to-end proposal, manages template building, solution outline, pricing integration, and draft assembly.',
    badge: null,
    hasGradientText: true,
    icon: true
  },
  {
    id: 'risk-scorer',
    name: 'Risk Scorer',
    description: 'Assessing proposal content to identify and score potential delivery, financial, or reputation risks..',
    badge: 'TR',
    badgeColor: '#D4F1FF',
    hasGradientText: false,
    icon: null
  },
  {
    id: 'compliance-checker',
    name: 'Compliance Checker',
    description: 'Evaluating alignment with RFP requirements, internal standards, and mandatory terms...',
    badge: 'CR',
    badgeColor: '#FFE8F5',
    hasGradientText: false,
    icon: null
  },
  {
    id: 'customer-centricity',
    name: 'Customer Centricity',
    description: 'Measuring how well the proposal addresses client needs, value outcomes, and business impact...',
    badge: 'CR',
    badgeColor: '#FFE8F5',
    hasGradientText: false,
    icon: null
  }
]

// Used by RiskScoreProcessCheck.jsx (Risk score step indicators)
export const riskScoreData = {
  current: 2,
  total: 3,
  statuses: [
    { label: 'High Risk', met: true },
    { label: 'Medium Risk', met: true },
    { label: 'No Risk', met: false }
  ]
}

// Used by RiskScoreProcessCheck.jsx (Compliance score indicators)
export const complianceData = {
  current: 3,
  total: 3,
  statuses: [
    { label: 'Not Met', met: true },
    { label: 'Partially Met', met: true },
    { label: 'Fully Met', met: true }
  ]
}

// Used by RiskScoreProcessCheck.jsx (Client Focus score indicators)
export const clientFocusData = {
  current: 2,
  total: 3,
  statuses: [
    { label: 'Not Compelling', met: true },
    { label: 'Somewhat Compelling', met: true },
    { label: 'Fully Compelling', met: false }
  ]
}

// Used by RiskScoreProcessCheck.jsx (Accuracy numeric score)
export const accuracyData = {
  score: 86,
  label: 'Near Accurate'
}

// Used by RiskScoreProcessCheck.jsx (Risk section summary)
export const riskSummaryContent = [
  '⦁ Financial risk is low due to comprehensive cost breakdowns, clear billing terms, and value for money through incentives like the technology fund. However, there is a need for more detailed justifications for professional services charges.',
  '⦁ Timeline risk is medium because of the lack of detailed schedules, Gantt charts, and contingency plans. The proposal mentions optimistic delivery timelines without detailed logistics support.',
  '⦁ Technical risk is low, with a strong emphasis on security practices, compliance with international standards, and innovation. However, there is a need for more explicit details on responsibilities and potential vendor lock-in risks.',
  '⦁ Contractual and legal risk is medium due to the lack of detail on contract duration, renewal terms, and ambiguity in payment terms. The proposal also lacks explicit mention of dispute resolution and governing law.'
]

// Used by RiskScoreProcessCheck.jsx (Risk section suggestions)
export const riskSuggestionsContent = [
  '⦁ For Financial risk, provide more detailed justifications for the pricing of professional services charges and clarify conditions for using the technology fund.',
  '⦁ For Timeline risk, include detailed schedules or Gantt charts, a logistics plan, and contingency plans for potential delays.',
  '⦁ For Technical risk, provide case studies of successful implementations and clarify responsibilities for technical implementation.',
  '⦁ For Contractual and Legal risk, include specific contract duration and renewal terms, enhance confidentiality clauses, and clarify payment terms and dispute resolution mechanisms.'
]

// Used by RiskScoreProcessCheck.jsx (Compliance summary)
export const complianceSummaryContent = [
  '⦁ The proposal provides comprehensive compliance information, including ISO/IEC 27001:2022 certification, which is a well-known standard for information security management systems.',
  '⦁ The proposal includes evidence of SOC2 (ASAE3150) audit reports, demonstrating adherence to security processes and controls.',
  '⦁ The proposal discusses compliance with legal and regulatory standards, including Telstra\'s Code of Conduct and Human Rights & Modern Slavery statement.',
  '⦁ The proposal is on-topic and relevant, focusing on compliance requirements and providing detailed information on how compliance will be achieved.',
  '⦁ The proposal includes necessary appendices and references, such as the Telstra ISO27001 Certification and Telstra Statement of Applicability.'
]

// Used by RiskScoreProcessCheck.jsx (Compliance suggestions)
export const complianceSuggestionsContent = [
  '⦁ Ensure that all compliance-related documents, such as the Telstra ASAE3150 (SOC2) Audit report, are easily accessible to the client, possibly by providing direct links or instructions on how to request them.',
  '⦁ Include a summary table of all certifications and compliance standards met by Telstra and imei to provide a quick reference for the client.',
  '⦁ Consider adding a section that outlines the process for maintaining compliance over time, including any regular audits or reviews that will be conducted.'
]

// Used by RiskScoreProcessCheck.jsx (Client Focus summary)
export const clientFocusSummaryContent = [
  '⦁ The proposal mentions both Telstra and Total Brick frequently, maintaining a balance between the two.',
  '⦁ The client focus is stated upfront in sections like \'Our Understanding of Your Challenges and Objectives\' and \'A solution aligned with your vision\'.',
  '⦁ The proposal is structured to address client needs, with sections dedicated to understanding client challenges and offering tailored solutions.',
  '⦁ The proposal uses some plain language and is somewhat easy to read, though it includes technical jargon and Telstra-specific terminology.',
  '⦁ There is a mix of active and passive voice, with some sentences starting with \'We\' or \'Telstra\'.',
  '⦁ The proposal includes lead-in sentences for bullet points and uses lists to break up text, though it could benefit from more visual elements like tables or graphics.',
  '⦁ The proposal provides examples and details about how Telstra\'s solutions can address Total Brick\'s needs, but lacks extensive client-specific benefits.'
]

// Used by RiskScoreProcessCheck.jsx (Client Focus suggestions)
export const clientFocusSuggestionsContent = [
  '⦁ Increase the use of visuals such as tables or graphics to illustrate key points and break up text-heavy sections.',
  '⦁ Reduce the use of technical jargon and Telstra-specific terminology to improve readability and focus more on client-specific language.',
  '⦁ Provide more client-specific benefits and examples to substantiate claims and demonstrate how the solutions directly address Total Brick\'s challenges.',
  '⦁ Use more active voice and client-focused language to enhance engagement and clarity.',
  '⦁ Include more data, facts, or statistics that directly relate to Total Brick\'s industry or specific needs to strengthen the proposal\'s relevance.'
]

// Used by RiskScoreProcessCheck.jsx (Accuracy summary)
export const accuracySummaryContent = [
  '⦁ The proposal mentions both Telstra and Total Brick frequently, maintaining a balance between the two.',
  '⦁ The client focus is stated upfront in sections like \'Our Understanding of Your Challenges and Objectives\' and \'A solution aligned with your vision\'.',
  '⦁ The proposal is structured to address client needs, with sections dedicated to understanding client challenges and offering tailored solutions.',
  '⦁ The proposal uses some plain language and is somewhat easy to read, though it includes technical jargon and Telstra-specific terminology.',
  '⦁ There is a mix of active and passive voice, with some sentences starting with \'We\' or \'Telstra\'.',
  '⦁ The proposal includes lead-in sentences for bullet points and uses lists to break up text, though it could benefit from more visual elements like tables or graphics.',
  '⦁ The proposal provides examples and details about how Telstra\'s solutions can address Total Brick\'s needs, but lacks extensive client-specific benefits.'
]