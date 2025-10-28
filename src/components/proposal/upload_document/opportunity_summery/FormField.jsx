import React, { useRef, useState } from 'react'
import { ChevronDownIcon, CalendarIcon } from 'lucide-react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { parse, format } from 'date-fns'

const FormField = ({ label, value, type = 'dropdown', onChange, options = [] }) => {
  const selectRef = useRef(null)
  const [open, setOpen] = useState(false)
  const dpRef = useRef(null)
  const selectedDate = type === 'date' && typeof value === 'string' && value
    ? parse(value, 'MM/dd/yyyy', new Date())
    : null
  return (
    <div className='flex flex-col gap-[10px]'>
      <label className="text-[#505050] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
        {label}
      </label>
      <div className='relative'>
        {type === 'dropdown' ? (
          <>
            <select
              ref={selectRef}
              value={value}
              onChange={onChange}
              className="w-full pr-[56px] pl-[20px] py-[12px] text-[#050505] font-['Inter',sans-serif] text-[24px] font-normal leading-[32px] border border-[#E0E0E0] rounded-[7px] bg-white cursor-pointer focus:outline-none focus:border-[#0D54FF] appearance-none"
            >
              {options.map((opt) => (
                <option key={(opt && opt.value) ?? opt} value={(opt && opt.value) ?? opt}>
                  {(opt && opt.label) ?? opt}
                </option>
              ))}
            </select>
            <div className='absolute right-[20px] top-1/2 -translate-y-1/2 pointer-events-none z-20'>
              <ChevronDownIcon className='w-[30px] h-[30px] text-[#505050]' />
            </div>
          </>
        ) : (
          <>
            {type === 'date' ? (
              <>
                <DatePicker
                  ref={dpRef}
                  selected={selectedDate}
                  onChange={(d) => {
                    onChange({ target: { value: d ? format(d, 'MM/dd/yyyy') : '' } })
                  }}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="MM/DD/YYYY"
                  className="w-full px-[20px] py-[12px] text-[#050505] font-['Inter',sans-serif] text-[24px] font-normal leading-[32px] border border-[#E0E0E0] rounded-[7px] bg-white cursor-pointer focus:outline-none focus:border-[#0D54FF]"
                  shouldCloseOnSelect
                  popperPlacement="bottom-start"
                />
                <div
                  aria-label='Open calendar'
                  onClick={() => {
                    if (dpRef.current && typeof dpRef.current.setFocus === 'function') {
                      dpRef.current.setFocus()
                    }
                  }}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      if (dpRef.current && typeof dpRef.current.setFocus === 'function') {
                        dpRef.current.setFocus()
                      }
                    }
                  }}
                  className='absolute right-[20px] top-1/2 -translate-y-1/2 z-20 cursor-pointer'
                >
                  <CalendarIcon className='w-[30px] h-[30px] text-[#505050]' />
                </div>
              </>
            ) : (
              <input
                type='text'
                value={value}
                onChange={onChange}
                readOnly={false}
                className="w-full px-[20px] py-[12px] text-[#050505] font-['Inter',sans-serif] text-[24px] font-normal leading-[32px] border border-[#E0E0E0] rounded-[7px] bg-white cursor-pointer focus:outline-none focus:border-[#0D54FF]"
              />
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default FormField
