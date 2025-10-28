import { Plus, ChevronRight } from 'lucide-react'
import ProposalCard from './ManageProposalCard'
import { useNavigate } from 'react-router-dom'
import { proposalsData } from './data/manageProposalsData'
import SearchBar from './SearchBar'
import FiltersBar from './FiltersBar'
import {
  customerOptions,
  industryOptions,
  statusOptions,
  locationOptions
} from './data/filterOptions'

import { useState } from 'react'
import {
  PAGE_WRAP_CLASS,
  BREADCRUMB_BAR_CLASS,
  CONTAINER_CLASS,
  BREADCRUMB_INNER_CLASS,
  BREADCRUMB_ROW_CLASS,
  MAIN_SCROLL_CLASS,
  PAGE_INNER_STACK_CLASS,
  HEADER_ROW_CLASS,
  TITLE_CLASS,
  AVATARS_ROW_CLASS,
  AVATAR_CIRCLE_CLASS,
  ADD_MEMBER_BTN_CLASS,
  SEARCH_FILTER_ROW_CLASS,
  GRID_CLASS,
} from './styles/Manage_Proposal_Styles'

function ManageProposal () {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  // Multi-select filters
  const [selectedCustomers, setSelectedCustomers] = useState([])
  const [selectedIndustries, setSelectedIndustries] = useState([])
  const [selectedStatuses, setSelectedStatuses] = useState([])
  const [selectedLocations, setSelectedLocations] = useState([])

  // Filtered proposals passed up from FiltersBar
  const [filteredProposalsState, setFilteredProposalsState] =
    useState(proposalsData)

  // Options imported from data/filterOptions

  const filteredProposals = filteredProposalsState

  return (
    <>
      <div className={PAGE_WRAP_CLASS}>
        {/* Breadcrumb Navigation */}
        <div className={BREADCRUMB_BAR_CLASS}>
          <div className={`${CONTAINER_CLASS} ${BREADCRUMB_INNER_CLASS}`}>
            <div className={BREADCRUMB_ROW_CLASS}>
              <span className="text-[#505050] font-['Inter',sans-serif] text-[18px] font-normal leading-normal">
                Home
              </span>
              <ChevronRight size={35} color='#E2E1E0' strokeWidth={2} />
              <span className="text-[#000000] font-['Inter',sans-serif] text-[18px] font-medium leading-normal">
                Manage proposals
              </span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className={MAIN_SCROLL_CLASS}>
          <div className={`${CONTAINER_CLASS} px-[66px] py-[41px]`}>
            <div className={PAGE_INNER_STACK_CLASS}>
              {/* Header Section */}
              <div className={HEADER_ROW_CLASS}>
                {/* Title */}
                <h1 className={TITLE_CLASS}>
                  Manage Proposals
                </h1>

                {/* Right Section - Avatars */}
                <div className={AVATARS_ROW_CLASS}>
                  <div className={`${AVATAR_CIRCLE_CLASS} z-30`}>
                    <span className="text-white font-['Inter',sans-serif] text-[20px] font-medium leading-normal">
                      AM
                    </span>
                  </div>
                  <div className={`${AVATAR_CIRCLE_CLASS} z-20`}>
                    <span className="text-white font-['Inter',sans-serif] text-[20px] font-medium leading-normal">
                      +2
                    </span>
                    <div className='absolute top-0 right-0 w-[14px] h-[14px] rounded-full bg-[#FF0000] border-2 border-[#F6F6F6]' />
                  </div>
                  <button
                    type='button'
                    className={ADD_MEMBER_BTN_CLASS}
                    aria-label='Add member'
                  >
                    <Plus size={24} color='#505050' />
                  </button>
                </div>
              </div>

              {/* Search and Filters Row */}
              <div className={SEARCH_FILTER_ROW_CLASS}>
                <SearchBar value={search} onChange={setSearch} />
                <FiltersBar
                  proposals={proposalsData}
                  search={search}
                  onFiltered={setFilteredProposalsState}
                  filters={{
                    customers: selectedCustomers,
                    industries: selectedIndustries,
                    statuses: selectedStatuses,
                    locations: selectedLocations
                  }}
                  onFiltersChange={next => {
                    if (next.customers !== undefined)
                      setSelectedCustomers(next.customers)
                    if (next.industries !== undefined)
                      setSelectedIndustries(next.industries)
                    if (next.statuses !== undefined)
                      setSelectedStatuses(next.statuses)
                    if (next.locations !== undefined)
                      setSelectedLocations(next.locations)
                  }}
                  options={{
                    customers: customerOptions,
                    industries: industryOptions,
                    statuses: statusOptions,
                    locations: locationOptions
                  }}
                />
              </div>

              {/* Proposals Grid */}
              <div className={GRID_CLASS}>
                {/* Create Proposal Card */}
                <ProposalCard
                  isCreateCard
                  onClick={() => {
                    console.log(
                      'Create Proposal clicked — navigating to upload page'
                    )
                    navigate('/add_opportunity-details')
                  }}
                />
                {/* Proposal Cards */}
                {filteredProposals.map(proposal => (
                  <ProposalCard key={proposal.id} {...proposal} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ManageProposal
