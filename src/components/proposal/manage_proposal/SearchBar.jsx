import { Search } from 'lucide-react'

function SearchBar ({ value, onChange }) {
  return (
    <div className='flex items-center gap-[14px] px-[20px] py-[14px] rounded-[9px] border border-[#D9D9D9] bg-white flex-1 max-w-[660px]'>
      <Search size={18} color='#505050' className='flex-shrink-0' />
      <input
        type='text'
        placeholder='Search for any proposals..'
        className="flex-1 min-w-0 text-black font-['Inter',sans-serif] text-[20px] font-normal leading-normal bg-transparent border-none outline-none placeholder:text-[#505050]"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
