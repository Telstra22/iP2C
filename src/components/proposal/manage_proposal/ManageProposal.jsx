import { Plus, ChevronRight } from 'lucide-react'
import { CircleAlert } from 'lucide-react'
import ProposalCard from './ManageProposalCard'
import { useNavigate } from 'react-router-dom'
import { proposalsData } from './data/manageProposalsData'
import SearchBar from './SearchBar'
import FiltersBar from './FiltersBar'
import {
  customerOptions,
  industryOptions,
  businessUnits,
  productType
} from './data/filterOptions'

import { useEffect, useState } from 'react'
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
  const [selectedBusinessUnits, setSelectedBusinessUnits] = useState([])
  const [selectedLocations, setSelectedLocations] = useState([])

  // Determine if special card (id '1') should be visible on initial load
  const shouldShowCard1 = (() => {
    try {
      // Show only when navigating from Save & Exit (flag present just for this transition)
      return !!localStorage.getItem('newProposalCard')
    } catch { return false }
  })()

  // Base proposals to use for filtering and initial render
  const baseProposals = shouldShowCard1
    ? proposalsData
    : proposalsData.filter(p => p.id !== '1')

  // Filtered proposals passed up from FiltersBar
  const [filteredProposalsState, setFilteredProposalsState] =
    useState(baseProposals)

  // Insert a one-time newly saved card from localStorage after Save & Exit
  useEffect(() => {
    try {
      const raw = localStorage.getItem('newProposalCard')
      if (raw) {
        const incoming = JSON.parse(raw)
        // Only update createdOn to current date/time for id '1'
        if (incoming?.id === '1') {
          const now = new Date()
          const month = now.toLocaleString('en-US', { month: 'short' })
          const day = String(now.getDate()).padStart(2, '0')
          const year = now.getFullYear()
          let hours = now.getHours()
          const minutes = String(now.getMinutes()).padStart(2, '0')
          const ampm = hours >= 12 ? 'PM' : 'AM'
          hours = hours % 12
          if (hours === 0) hours = 12
          const hh = String(hours).padStart(2, '0')
          const formattedNow = `${month} ${day}, ${year} ${hh}:${minutes} ${ampm}`
          incoming.createdOn = formattedNow
          incoming.updatedOn = formattedNow
        }
        setFilteredProposalsState(prev => {
          // Replace if exists to refresh timestamps and position; otherwise prepend
          const withoutIncoming = prev.filter(p => p.id !== incoming.id)
          return [incoming, ...withoutIncoming]
        })
        localStorage.removeItem('newProposalCard')
      }
    } catch {}
  }, [])

  // Options imported from data/filterOptions

  const filteredProposals = filteredProposalsState

  return (
    <>
      <div className={PAGE_WRAP_CLASS}>
        {/* Breadcrumb Navigation */}
        <div className={BREADCRUMB_BAR_CLASS}>
          <div className={`${CONTAINER_CLASS} ${BREADCRUMB_INNER_CLASS}`}>
            <div className={BREADCRUMB_ROW_CLASS}>
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
                {/* <div className={AVATARS_ROW_CLASS}>
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
                </div> */}
              </div>

              {/* Search and Filters Row */}
              <div className={SEARCH_FILTER_ROW_CLASS}>
                <SearchBar value={search} onChange={setSearch} />
                <FiltersBar
                  proposals={filteredProposalsState}
                  search={search}
                  onFiltered={setFilteredProposalsState}
                  filters={{
                    customers: selectedCustomers,
                    industries: selectedIndustries,
                    businessUnits: selectedBusinessUnits,
                    locations: selectedLocations
                  }}
                  onFiltersChange={next => {
                    if (next.customers !== undefined)
                      setSelectedCustomers(next.customers)
                    if (next.industries !== undefined)
                      setSelectedIndustries(next.industries)
                    if (next.businessUnits !== undefined)
                      setSelectedBusinessUnits(next.businessUnits)
                    if (next.locations !== undefined)
                      setSelectedLocations(next.locations)
                  }}
                  options={{
                    customers: customerOptions,
                    industries: industryOptions,
                    businessUnits: businessUnits,
                    productType: productType
                  }}
                />
              </div>

              {/* Proposals Grid */}
              <div className={GRID_CLASS}>
                {filteredProposals.length === 0 ? (
                  <div className="flex items-center justify-center w-full rounded-[9px] border border-[#D9D9D9] bg-white col-span-full min-h-[260px]">
                    <div className="flex flex-col items-center justify-center gap-3 py-8">
                      <CircleAlert size={48} color="#FB4848" strokeWidth={2} />
                      <span className="text-[#505050] font-['Inter',sans-serif] text-[18px] font-medium leading-normal">
                        No record found
                      </span>
                    </div>
                  </div>
                ) : (
                  <>
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
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ManageProposal
