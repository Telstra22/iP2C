import { useState, useEffect, useRef } from 'react'
import { Plus, X, ChevronDown, Search } from 'lucide-react'

function FiltersBar ({
  filters,
  onFiltersChange,
  options,
  proposals = [],
  search = '',
  onFiltered
}) {
  // Dropdown sources used in UI:
  // - customerOptions: Customer dropdown
  // - industryOptions: Industry dropdown
  // - businessUnit: Business Unit dropdown
  // - productType: Product Type dropdown
  // Toggle state for filter icons
  const [customerToggled, setCustomerToggled] = useState(false)
  const [statusToggled, setStatusToggled] = useState(false)
  const [locationToggled, setLocationToggled] = useState(false)
  // industryToggled already exists below, so do not redeclare it here
  // Toggle state for Industry filter icon
  const [industryToggled, setIndustryToggled] = useState(false)
  const {
    customers = [],
    industries = [],
    businessUnits = [],
    locations = []
  } = filters || {}
  const {
    customers: customerOptions = [],
    industries: industryOptions = [],
    businessUnits: businessUnit = [],
    productType: productType = []
  } = options || {}
  const [openCustomer, setOpenCustomer] = useState(false)
  const [openIndustry, setOpenIndustry] = useState(false)
  const [openStatus, setOpenStatus] = useState(false)
  const [openLocation, setOpenLocation] = useState(false)

  const [customerQuery, setCustomerQuery] = useState('')
  const [industryQuery, setIndustryQuery] = useState('')
  const [statusQuery, setStatusQuery] = useState('')
  const [locationQuery, setLocationQuery] = useState('')

  const normalized = val => (val || '').toString().toLowerCase()

  // Compute filtered proposals inside FiltersBar and report back to parent
  const prevFilteredIdsRef = useRef('')
  const {
    customers: selCustomers = [],
    industries: selIndustries = [],
    businessUnits: selStatuses = [],
    locations: selLocations = []
  } = filters || {}

  useEffect(() => {
    if (!onFiltered) return

    const q = normalized(search)
    // Filter search applies to these proposal fields for text search:
    // - category, title, customer, createdOn, updatedOn, statusKey
    const filtered = (proposals || []).filter(p => {
      const matchesText =
        !q ||
        normalized(p.category).includes(q) ||
        normalized(p.title).includes(q) ||
        normalized(p.customer).includes(q) ||
        normalized(p.createdOn).includes(q) ||
        normalized(p.updatedOn).includes(q) ||
        normalized(p.statusKey).includes(q)

      // Dropdown filter criteria:
      // - Customer: matches p.customer
      const matchesCustomer =
        selCustomers.length === 0 ||
        selCustomers.some(
          c =>
            normalized(p.customer).includes(normalized(c)) ||
            normalized(c).includes(normalized(p.customer))
        )

      // - Industry: matches in p.category
      const matchesIndustry =
        selIndustries.length === 0 ||
        selIndustries.some(
          i =>
            normalized(p.category).includes(normalized(i)) ||
            normalized(i).includes(normalized(p.category))
        )

      // - Business Unit: reuses p.statusKey mapping
      const matchesStatus =
        selStatuses.length === 0 || selStatuses.includes(p.statusKey)

      // - Product Type: matches in p.category
      const matchesLocation =
        selLocations.length === 0 ||
        selLocations.some(
          loc =>
            normalized(p.category).includes(normalized(loc)) ||
            normalized(loc).includes(normalized(p.category))
        )

      return (
        matchesText &&
        matchesCustomer &&
        matchesIndustry &&
        matchesStatus &&
        matchesLocation
      )
    })

    // Compare by ids (order-insensitive) to avoid triggering parent setState when results are identical
    const ids = (filtered || [])
      .map(p => p.id)
      .sort()
      .join(',')
    if (ids !== prevFilteredIdsRef.current) {
      prevFilteredIdsRef.current = ids
      onFiltered(filtered)
    }
    // only re-run when relevant inputs change
  }, [
    proposals,
    search,
    selCustomers,
    selIndustries,
    selStatuses,
    selLocations,
    onFiltered
  ])

  return (
    <div className='flex items-center gap-[12px]'>
      {/* Customer */}
      <div className='relative shrink flex items-center gap-[10px] px-[12px] py-[10px] rounded-[100px] border border-[#D9D9D9] bg-white hover:bg-gray-50 transition-colors'>
        <button
          type='button'
          onClick={() => {
            if (!customerToggled) {
              setCustomerToggled(true)
              setOpenCustomer(true)
            } else {
              if (customers.length > 0) {
                onFiltersChange?.({ customers: [] })
                // keep dropdown open and X icon
              } else {
                setCustomerToggled(false)
                setOpenCustomer(false)
              }
            }
          }}
          className='inline-flex items-center justify-center w-[34px] h-[34px] rounded-full bg-[#A0A0A0] flex-shrink-0'
        >
          {customerToggled ? (
            <X size={29} color='#FFFFFF' strokeWidth={2} />
          ) : (
            <Plus size={29} color='#FFFFFF' strokeWidth={2} />
          )}
        </button>
        <span className="text-[#828282] font-['Inter',sans-serif] text-[16px] font-normal leading-normal whitespace-nowrap">
          Customer
        </span>
        <div className='w-[1px] h-[29px] bg-[#A0A0A0]' />
        <span className="text-[#0D54FF] font-['Inter',sans-serif] text-[16px] font-medium leading-normal whitespace-nowrap">
          {customers.length === 0 ? 'All' : `${customers.length} selected`}
        </span>
        <button
          type='button'
          onClick={() => setOpenCustomer(!openCustomer)}
          aria-haspopup='listbox'
          aria-expanded={openCustomer}
        >
          <ChevronDown size={25} color='#A1A1A1' />
        </button>
        {openCustomer && (
          <div className='absolute left-0 top-[calc(100%+8px)] z-50 w-[320px] max-h-[320px] overflow-hidden rounded-[10px] border border-[#D9D9D9] bg-white shadow-md'>
            {/* <div className='p-3 border-b border-[#E5E5E5]'>
              <div className='flex items-center gap-2 px-3 py-2 rounded-[8px] border border-[#D9D9D9]'>
                <Search size={25} color='#505050' />
                <input
                  type='text'
                  value={customerQuery}
                  onChange={e => setCustomerQuery(e.target.value)}
                  placeholder='Search customer'
                  className="flex-1 bg-transparent outline-none text-[20px] placeholder:text-[#000] placeholder:text-[20px] placeholder:font-semibold placeholder:leading-[1.341] placeholder:font-['Inter',sans-serif]"
                />
              </div>
            </div> */}
            <div className='max-h-[240px] overflow-auto p-2'>
              {/* All selector */}
              <label className='flex items-center gap-2 px-2 py-2 rounded hover:bg-[#F6F6F6] cursor-pointer'>
                <input
                  type='checkbox'
                  checked={
                    customerOptions.length > 0 &&
                    customers.length === customerOptions.length
                  }
                  onChange={e => {
                    if (e.target.checked)
                      onFiltersChange?.({ customers: [...customerOptions] })
                    else onFiltersChange?.({ customers: [] })
                  }}
                  className='w-6 h-6'
                />
                <span className='text-[#505050] text-[20px]'>All</span>
              </label>
              {customerOptions
                .filter(c => normalized(c).includes(normalized(customerQuery)))
                .map(c => (
                  <label
                    key={c}
                    className='flex items-center gap-2 px-2 py-2 rounded hover:bg-[#F6F6F6] cursor-pointer'
                  >
                    <input
                      type='checkbox'
                      checked={customers.includes(c)}
                      onChange={e => {
                        if (e.target.checked)
                          onFiltersChange?.({ customers: [...customers, c] })
                        else
                          onFiltersChange?.({
                            customers: customers.filter(v => v !== c)
                          })
                      }}
                      className='w-6 h-6'
                    />
                    <span className='text-[#505050] text-[20px]'>{c}</span>
                  </label>
                ))}
            </div>
          </div>
        )}
      </div>

      {/* Industry */}
      <div className='relative shrink flex items-center gap-[10px] px-[12px] py-[10px] rounded-[90px] border border-dashed border-[#D8D8D8] bg-white hover:bg-gray-50 transition-colors'>
        <button
          type='button'
          onClick={() => {
            if (!industryToggled) {
              setIndustryToggled(true)
              setOpenIndustry(true)
            } else {
              if (industries.length > 0) {
                onFiltersChange?.({ industries: [] })
                // keep dropdown open and X icon
              } else {
                setIndustryToggled(false)
                setOpenIndustry(false)
              }
            }
          }}
          className='inline-flex items-center justify-center w-[34px] h-[34px] rounded-full bg-[#A0A0A0] flex-shrink-0'
        >
          {industryToggled ? (
            <X size={29} color='#FFFFFF' strokeWidth={2} />
          ) : (
            <Plus size={29} color='#FFFFFF' strokeWidth={2} />
          )}
        </button>
        <span className="text-[#828282] font-['Inter',sans-serif] text-[16px] font-normal leading-normal whitespace-nowrap">
          Industry
        </span>
        <span className="text-[#0D54FF] font-['Inter',sans-serif] text-[16px] font-medium leading-normal whitespace-nowrap">
          {industries.length === 0 ? 'All' : `${industries.length} selected`}
        </span>
        <button
          type='button'
          onClick={() => setOpenIndustry(!openIndustry)}
          aria-haspopup='listbox'
          aria-expanded={openIndustry}
        >
          <ChevronDown size={25} color='#A1A1A1' />
        </button>
        {openIndustry && (
          <div className='absolute left-0 top-[calc(100%+8px)] z-50 w-[320px] max-h-[320px] overflow-hidden rounded-[10px] border border-[#D9D9D9] bg-white shadow-md'>
            {/* <div className='p-3 border-b border-[#E5E5E5]'>
              <div className='flex items-center gap-2 px-3 py-2 rounded-[8px] border border-[#D9D9D9]'>
                <Search size={25} color='#505050' />
                <input
                  type='text'
                  value={industryQuery}
                  onChange={e => setIndustryQuery(e.target.value)}
                  placeholder='Search industry'
                  className="flex-1 bg-transparent outline-none text-[20px] placeholder:text-[#000] placeholder:text-[20px] placeholder:font-semibold placeholder:leading-[1.341] placeholder:font-['Inter',sans-serif]"
                />
              </div>
            </div> */}
            <div className='max-h-[240px] overflow-auto p-2'>
              {/* All selector */}
              <label className='flex items-center gap-2 px-2 py-2 rounded hover:bg-[#F6F6F6] cursor-pointer'>
                <input
                  type='checkbox'
                  checked={
                    industryOptions.length > 0 &&
                    industries.length === industryOptions.length
                  }
                  onChange={e => {
                    if (e.target.checked)
                      onFiltersChange?.({ industries: [...industryOptions] })
                    else onFiltersChange?.({ industries: [] })
                  }}
                  className='w-6 h-6'
                />
                <span className='text-[#505050] text-[20px]'>All</span>
              </label>
              {industryOptions
                .filter(c => normalized(c).includes(normalized(industryQuery)))
                .map(c => (
                  <label
                    key={c}
                    className='flex items-center gap-2 px-2 py-2 rounded hover:bg-[#F6F6F6] cursor-pointer'
                  >
                    <input
                      type='checkbox'
                      checked={industries.includes(c)}
                      onChange={e => {
                        if (e.target.checked)
                          onFiltersChange?.({ industries: [...industries, c] })
                        else
                          onFiltersChange?.({
                            industries: industries.filter(v => v !== c)
                          })
                      }}
                      className='w-6 h-6'
                    />
                    <span className='text-[#505050] text-[20px]'>{c}</span>
                  </label>
                ))}
            </div>
          </div>
        )}
      </div>

      {/* Business Unit */}
      <div className='relative shrink flex items-center gap-[10px] px-[12px] py-[10px] rounded-[90px] border border-dashed border-[#D8D8D8] bg-white hover:bg-gray-50 transition-colors'>
        <button
          type='button'
          onClick={() => {
            if (!statusToggled) {
              setStatusToggled(true)
              setOpenStatus(true)
            } else {
              if (businessUnits.length > 0) {
                onFiltersChange?.({ businessUnits: [] })
                // keep dropdown open and X icon
              } else {
                setStatusToggled(false)
                setOpenStatus(false)
              }
            }
          }}
          className='inline-flex items-center justify-center w-[34px] h-[34px] rounded-full bg-[#A0A0A0] flex-shrink-0'
        >
          {statusToggled ? (
            <X size={29} color='#FFFFFF' strokeWidth={2} />
          ) : (
            <Plus size={29} color='#FFFFFF' strokeWidth={2} />
          )}
        </button>
        <span className="text-[#828282] font-['Inter',sans-serif] text-[16px] font-normal leading-normal whitespace-nowrap">
          Business Unit
        </span>
        <span className="text-[#0D54FF] font-['Inter',sans-serif] text-[16px] font-medium leading-normal whitespace-nowrap">
          {businessUnits.length === 0
            ? 'All'
            : `${businessUnits.length} selected`}
        </span>
        <button
          type='button'
          onClick={() => setOpenStatus(!openStatus)}
          aria-haspopup='listbox'
          aria-expanded={openStatus}
        >
          <ChevronDown size={25} color='#A1A1A1' />
        </button>
        {openStatus && (
          <div className='absolute left-0 top-[calc(100%+8px)] z-50 w-[320px] max-h-[320px] overflow-hidden rounded-[10px] border border-[#D9D9D9] bg-white shadow-md'>
            {/* <div className='p-3 border-b border-[#E5E5E5]'>
              <div className='flex items-center gap-2 px-3 py-2 rounded-[8px] border border-[#D9D9D9]'>
                <Search size={25} color='#505050' />
                <input
                  type='text'
                  value={statusQuery}
                  onChange={e => setStatusQuery(e.target.value)}
                  placeholder='Search business unit'
                  className="flex-1 bg-transparent outline-none text-[20px] placeholder:text-[#000] placeholder:text-[20px] placeholder:font-semibold placeholder:leading-[1.341] placeholder:font-['Inter',sans-serif]"
                />
              </div>
            </div> */}
            <div className='max-h-[240px] overflow-auto p-2'>
              {/* All selector */}
              <label className='flex items-center gap-2 px-2 py-2 rounded hover:bg-[#F6F6F6] cursor-pointer'>
                <input
                  type='checkbox'
                  checked={
                    businessUnit.length > 0 &&
                    businessUnits.length === businessUnit.length
                  }
                  onChange={e => {
                    if (e.target.checked)
                      onFiltersChange?.({ businessUnits: [...businessUnit] })
                    else onFiltersChange?.({ businessUnits: [] })
                  }}
                  className='w-6 h-6'
                />
                <span className='text-[#505050] text-[20px]'>All</span>
              </label>
              {businessUnit
                .filter(c => normalized(c).includes(normalized(statusQuery)))
                .map(c => (
                  <label
                    key={c}
                    className='flex items-center gap-2 px-2 py-2 rounded hover:bg-[#F6F6F6] cursor-pointer'
                  >
                    <input
                      type='checkbox'
                      checked={businessUnits.includes(c)}
                      onChange={e => {
                        if (e.target.checked)
                          onFiltersChange?.({
                            businessUnits: [...businessUnits, c]
                          })
                        else
                          onFiltersChange?.({
                            businessUnits: businessUnits.filter(v => v !== c)
                          })
                      }}
                      className='w-6 h-6'
                    />
                    <span className='text-[#505050] text-[20px]'>{c}</span>
                  </label>
                ))}
            </div>
          </div>
        )}
      </div>

      {/* Product Type */}
      <div className='relative shrink flex items-center gap-[10px] px-[12px] py-[10px] rounded-[90px] border border-dashed border-[#D8D8D8] bg-white hover:bg-gray-50 transition-colors'>
        <button
          type='button'
          onClick={() => {
            if (!locationToggled) {
              setLocationToggled(true)
              setOpenLocation(true)
            } else {
              if (locations.length > 0) {
                onFiltersChange?.({ locations: [] })
                // keep dropdown open and X icon
              } else {
                setLocationToggled(false)
                setOpenLocation(false)
              }
            }
          }}
          className='inline-flex items-center justify-center w-[34px] h-[34px] rounded-full bg-[#A0A0A0] flex-shrink-0'
        >
          {locationToggled ? (
            <X size={29} color='#FFFFFF' strokeWidth={2} />
          ) : (
            <Plus size={29} color='#FFFFFF' strokeWidth={2} />
          )}
        </button>
        <span className="text-[#828282] font-['Inter',sans-serif] text-[16px] font-normal leading-normal whitespace-nowrap">
          Product Type
        </span>
        <span className="text-[#0D54FF] font-['Inter',sans-serif] text-[16px] font-medium leading-normal whitespace-nowrap">
          {locations.length === 0 ? 'All' : `${locations.length} selected`}
        </span>
        <button
          type='button'
          onClick={() => setOpenLocation(!openLocation)}
          aria-haspopup='listbox'
          aria-expanded={openLocation}
        >
          <ChevronDown size={25} color='#A1A1A1' />
        </button>
        {openLocation && (
          <div className='absolute left-0 top-[calc(100%+8px)] z-50 w-[320px] max-h-[320px] overflow-hidden rounded-[10px] border border-[#D9D9D9] bg-white shadow-md'>
            {/* <div className='p-3 border-b border-[#E5E5E5]'>
              <div className='flex items-center gap-2 px-3 py-2 rounded-[8px] border border-[#D9D9D9]'>
                <Search size={25} color='#505050' />
                <input
                  type='text'
                  value={locationQuery}
                  onChange={e => setLocationQuery(e.target.value)}
                  placeholder='Search product type'
                  className="flex-1 bg-transparent outline-none text-[20px] placeholder:text-[#000] placeholder:text-[20px] placeholder:font-semibold placeholder:leading-[1.341] placeholder:font-['Inter',sans-serif]"
                />
              </div>
            </div> */}
            <div className='max-h-[240px] overflow-auto p-2'>
              {/* All selector */}
              <label className='flex items-center gap-2 px-2 py-2 rounded hover:bg-[#F6F6F6] cursor-pointer'>
                <input
                  type='checkbox'
                  checked={
                    productType.length > 0 &&
                    locations.length === productType.length
                  }
                  onChange={e => {
                    if (e.target.checked)
                      onFiltersChange?.({ locations: [...productType] })
                    else onFiltersChange?.({ locations: [] })
                  }}
                  className='w-6 h-6'
                />
                <span className='text-[#505050] text-[20px]'>All</span>
              </label>
              {productType
                .filter(c => normalized(c).includes(normalized(locationQuery)))
                .map(c => (
                  <label
                    key={c}
                    className='flex items-center gap-2 px-2 py-2 rounded hover:bg-[#F6F6F6] cursor-pointer'
                  >
                    <input
                      type='checkbox'
                      checked={locations.includes(c)}
                      onChange={e => {
                        if (e.target.checked)
                          onFiltersChange?.({ locations: [...locations, c] })
                        else
                          onFiltersChange?.({
                            locations: locations.filter(v => v !== c)
                          })
                      }}
                      className='w-6 h-6'
                    />
                    <span className='text-[#505050] text-[20px]'>{c}</span>
                  </label>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default FiltersBar
