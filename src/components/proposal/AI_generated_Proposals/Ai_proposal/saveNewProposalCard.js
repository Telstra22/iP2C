// Shared helper to save the new proposal card for Manage Proposals
export const saveNewProposalCard = () => {
  try {
    const card = {
      id: '1',
      title: 'A-01284889',
      category: 'Real Estate | Melbourne',
      customer: 'Total Bricks Pvt. Ltd',
      template: 'Standard',
      createdOn: 'Sep 25, 2025 06:29 AM',
      updatedOn: 'Sep 25, 2025 06:47 AM',
      statusKey: 'active'
    }
    localStorage.setItem('newProposalCard', JSON.stringify(card))
  } catch {}
}
