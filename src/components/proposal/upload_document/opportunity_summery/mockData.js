// Mock data for Opportunity Summary UI

export const FIELD_CONFIGS = [
  { label: 'Customer', field: 'customer', options: ['Commonwealth Bank', 'All'], defaultValue: 'Commonwealth Bank' },
  { label: 'Archetype', field: 'archetype', options: ['1', '2'], defaultValue: '2' },
  { label: 'Industry', field: 'industry', options: ['Banking', 'All'], defaultValue: 'Banking' },
  { label: 'Product Hierarchy', field: 'productHierarchy', options: ['Mobility', 'All'], defaultValue: 'Mobility' },
  { label: 'Product', field: 'product', options: ['Mobile Devices', 'All'], defaultValue: 'Mobile Devices' },
  { label: 'Sub Product', field: 'subProduct', options: ['Apple Mobile Devices', 'All'], defaultValue: 'Apple Mobile Devices' },
  { label: 'Submission Date', field: 'submissionDate', type: 'date', defaultValue: '10/15/2025' },
  { label: 'Customer Estimated Budget', field: 'budget', options: ['50000 AUD', 'All'], defaultValue: '50000 AUD' },
]

export const INITIAL_FORM_DATA = Object.fromEntries(
  FIELD_CONFIGS.map(f => [f.field, f.defaultValue ?? ''])
)

export const PROBLEM_STATEMENT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus placerat risus at luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin rutrum nibh diam, ac eleifend justo ullamcorper eu. Integer pretium sem vel tortor tempor feugiat nec quis eros. Mauris nec erat sit amet nulla consectetur vehicula a nec dui.'

export const SCOPE_OF_WORK =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus placerat risus at luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin rutrum nibh diam, ac eleifend justo ullamcorper eu. Integer pretium sem vel tortor tempor feugiat nec quis eros. Mauris nec erat sit amet nulla consectetur vehicula a nec dui.'

export const PROGRESS_ITEMS = [
  { label: 'Analyzing requirements...', value: (p) => p, barColor: '#A8A8A8' },
  { label: 'Generating content...', value: (p) => Math.min(100, p * 0.6), barColor: '#C4C4C4' },
  { label: 'Finetuning details...', value: (p) => Math.min(100, p * 0.3), barColor: '#D4D4D4' },
]

// Static content for collapsible sections
export const SECTION_CONTENT = {
  opportunityBrief: 'Content for Opportunity Brief goes here...',
  archetype: 'Content for Archetype goes here...',
  technicalRequirements: 'Content for Technical Requirements goes here...',
  functionalRequirements: 'Content for Functional Requirements goes here...',
  vendorQuestions: 'Content for Vendor Questions goes here...',
  terms: 'Content for Terms & Conditions goes here...',
}

// Config for simple sections that display SECTION_CONTENT
export const SECTION_CONFIGS = [
  { title: 'Opportunity Brief', defaultExpanded: false, contentKey: 'opportunityBrief' },
  { title: 'Technical Requirements', defaultExpanded: false, contentKey: 'technicalRequirements' },
  { title: 'Functional Requirements', defaultExpanded: false, contentKey: 'functionalRequirements' },
  { title: 'Vendor Questions', defaultExpanded: false, contentKey: 'vendorQuestions' },
  { title: 'Terms & Conditions', defaultExpanded: false, contentKey: 'terms' },
]
