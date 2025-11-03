import React, { useRef } from "react";
import { ChevronDown, CalendarDays } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { parse, format } from "date-fns";

const FormField = ({
  label,
  value,
  type = "dropdown",
  onChange,
  options = [],
  placeholder = "",
}) => {
  const selectRef = useRef(null);
  const dpRef = useRef(null);

  // Parse datetime format "MM/dd/yyyy HH:mm"
  const selectedDate =
    (type === "date" || type === "datetime") &&
    typeof value === "string" &&
    value
      ? value.includes(" ")
        ? parse(value, "MM/dd/yyyy HH:mm", new Date())
        : parse(value, "MM/dd/yyyy", new Date())
      : null;
  return (
    <div className="flex flex-col gap-[10px]">
      <label className="text-[#505050] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px]">
        {label}
      </label>
      <div className="relative">
        {type === "dropdown" ? (
          <>
            <select
              ref={selectRef}
              value={value}
              onChange={onChange}
              className="w-full pr-[56px] pl-[20px] py-[12px] text-[#050505] font-['Inter',sans-serif] text-[22px] font-normal leading-[30px] border border-[#E0E0E0] rounded-[7px] bg-white cursor-pointer focus:outline-none focus:border-[#0D54FF] appearance-none"
            >
              {options.map((opt) => (
                <option
                  key={(opt && opt.value) ?? opt}
                  value={(opt && opt.value) ?? opt}
                >
                  {(opt && opt.label) ?? opt}
                </option>
              ))}
            </select>
            <div className="absolute right-[20px] top-1/2 -translate-y-1/2 pointer-events-none z-20">
              <ChevronDown className="w-[19px] h-[19px] aspect-ration-1/1 text-[#505050]" />
            </div>
          </>
        ) : type === "datetime" ? (
          <div className="relative">
            <DatePicker
              ref={dpRef}
              selected={selectedDate}
              onChange={(d) => {
                onChange({
                  target: { value: d ? format(d, "MM/dd/yyyy HH:mm") : "" },
                });
              }}
              showTimeSelect
              timeFormat="hh:mm aa"
              timeIntervals={15}
              dateFormat="hh:mm aa, MM/dd/yyyy"
              placeholderText="HH:MM AM/PM, MM/DD/YYYY"
              className="w-full pr-[56px] pl-[20px] py-[12px] text-[#050505] font-['Inter',sans-serif] text-[22px] font-normal leading-[30px] border border-[#E0E0E0] rounded-[7px] bg-white cursor-pointer focus:outline-none focus:border-[#0D54FF]"
              shouldCloseOnSelect
              popperPlacement="bottom-start"
            />
            <div
              aria-label="Open calendar"
              onClick={() => {
                if (
                  dpRef.current &&
                  typeof dpRef.current.setFocus === "function"
                ) {
                  dpRef.current.setFocus();
                }
              }}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  if (
                    dpRef.current &&
                    typeof dpRef.current.setFocus === "function"
                  ) {
                    dpRef.current.setFocus();
                  }
                }
              }}
              className="absolute right-[20px] top-1/2 -translate-y-1/2 z-20 cursor-pointer"
            >
              <CalendarDays className="w-[22px] h-[24px] text-[#505050]" />
            </div>
          </div>
        ) : type === "date" ? (
          <div className="relative">
            <DatePicker
              ref={dpRef}
              selected={selectedDate}
              onChange={(d) => {
                onChange({
                  target: { value: d ? format(d, "MM/dd/yyyy") : "" },
                });
              }}
              dateFormat="MM/dd/yyyy"
              placeholderText="MM/DD/YYYY"
              className="w-full pr-[56px] pl-[20px] py-[12px] text-[#050505] font-['Inter',sans-serif] text-[22px] font-normal leading-[30px] border border-[#E0E0E0] rounded-[7px] bg-white cursor-pointer focus:outline-none focus:border-[#0D54FF]"
              shouldCloseOnSelect
              popperPlacement="bottom-start"
            />
            <div
              aria-label="Open calendar"
              onClick={() => {
                if (
                  dpRef.current &&
                  typeof dpRef.current.setFocus === "function"
                ) {
                  dpRef.current.setFocus();
                }
              }}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  if (
                    dpRef.current &&
                    typeof dpRef.current.setFocus === "function"
                  ) {
                    dpRef.current.setFocus();
                  }
                }
              }}
              className="absolute right-[20px] top-1/2 -translate-y-1/2 z-20 cursor-pointer"
            >
              <CalendarDays className="w-[22px] h-[24px] text-[#505050]" />
            </div>
          </div>
        ) : (
          <>
            {placeholder && (
              <span className="absolute left-[20px] top-1/2 -translate-y-1/2 text-[#050505] font-['Inter',sans-serif] text-[22px] font-normal leading-[30px] pointer-events-none">
                {placeholder}
              </span>
            )}
            <input
              type="text"
              value={value}
              onChange={onChange}
              readOnly={false}
              className={`w-full ${
                placeholder ? "pl-[44px]" : "pl-[20px]"
              } pr-[20px] py-[12px] font-['Inter',sans-serif] text-[22px] font-normal leading-[30px] border border-[#E0E0E0] rounded-[7px] bg-white focus:outline-none focus:border-[#0D54FF] ${
                value === "Not available" ? "text-[#B4B4B4]" : "text-[#050505]"
              }`}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default FormField;
