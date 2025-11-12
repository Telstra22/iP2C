import React, { useRef, useState, useMemo } from "react";
import { ChevronDown, CalendarDays, Info } from "lucide-react";
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
  tooltip = "",
}) => {
  const dpRef = useRef(null);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const normalizedOptions = useMemo(() => {
    return (options || []).map((opt) => {
      if (typeof opt === "string" || typeof opt === "number") {
        return { label: String(opt), value: opt };
      }
      const val = opt?.value ?? opt?.label ?? ''
      const lab = opt?.label ?? String(val)
      return { label: String(lab), value: val };
    });
  }, [options]);

  const filteredOptions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return normalizedOptions;
    return normalizedOptions.filter((o) => o.label.toLowerCase().includes(q));
  }, [normalizedOptions, query]);

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
      <label
        className="text-[#505050] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px] flex items-center gap-[8px]"
        title={tooltip || undefined}
      >
        <span>{label}</span>
        {tooltip ? (
          <Info
            className="w-[24px] h-[24px] text-[#000000]"
            title={tooltip}
            aria-label={tooltip}
          />
        ) : null}
      </label>
      <div className="relative">
        {type === "dropdown" ? (
          <>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="w-full pr-[56px] pl-[20px] py-[12px] text-left text-[#050505] font-['Inter',sans-serif] text-[22px] font-normal leading-[30px] border border-[#E0E0E0] rounded-[7px] bg-white focus:outline-none focus:border-[#0D54FF]"
            >
              {(normalizedOptions.find((o) => o.value == value)?.label) || "Select"}
            </button>
            <div className="absolute right-[20px] top-1/2 -translate-y-1/2 pointer-events-none z-20">
              <ChevronDown className="w-[19px] h-[19px] aspect-ration-1/1 text-[#505050]" />
            </div>
            {open && (
              <div
                tabIndex={-1}
                onBlur={() => setTimeout(() => setOpen(false), 100)}
                className="absolute z-30 mt-[6px] w-full bg-white border border-[#E0E0E0] rounded-[7px] shadow-[0_4px_10px_rgba(0,0,0,0.08)] p-[8px]"
              >
                <input
                  autoFocus
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search here..."
                  className="mb-[8px] w-full px-[12px] py-[8px] text-[#050505] font-['Inter',sans-serif] text-[18px] font-normal leading-[24px] border border-[#E0E0E0] rounded-[7px] bg-white focus:outline-none focus:border-[#0D54FF]"
                />
                <div className="max-h-[220px] overflow-auto">
                  {filteredOptions.length === 0 ? (
                    <div className="px-[10px] py-[8px] text-[#828282] text-[16px]">No results</div>
                  ) : (
                    filteredOptions.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onMouseDown={(e) => {
                          e.preventDefault();
                          onChange({ target: { value: opt.value } });
                          setOpen(false);
                          setQuery("");
                        }}
                        className={`w-full text-left px-[12px] py-[8px] rounded-[6px] hover:bg-[#F5F5F5] text-[#050505] font-['Inter',sans-serif] text-[18px] leading-[24px]`}
                      >
                        {opt.label}
                      </button>
                    ))
                  )}
                </div>
              </div>
            )}
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
            {type === 'number' ? (
              <span className="absolute left-[20px] top-1/2 -translate-y-1/2 text-[#050505] font-['Inter',sans-serif] text-[22px] font-normal leading-[30px] pointer-events-none">$
              </span>
            ) : (
              placeholder && (
                <span className="absolute left-[20px] top-1/2 -translate-y-1/2 text-[#050505] font-['Inter',sans-serif] text-[22px] font-normal leading-[30px] pointer-events-none">
                  {placeholder}
                </span>
              )
            )}
            <input
              type={type === 'number' ? 'number' : 'text'}
              value={value}
              onChange={onChange}
              readOnly={false}
              className={`w-full ${
                type === 'number' ? "pl-[44px]" : (placeholder ? "pl-[44px]" : "pl-[20px]")
              } pr-[20px] py-[12px] font-['Inter',sans-serif] text-[22px] font-normal leading-[30px] border border-[#E0E0E0] rounded-[7px] bg-white focus:outline-none focus:border-[#0D54FF] ${
                value === "Not available" ? "text-[#B4B4B4]" : "text-[#050505]"
              }`}
              inputMode={type === 'number' ? 'decimal' : undefined}
              step={type === 'number' ? 'any' : undefined}
              pattern={type === 'number' ? '[0-9]*' : undefined}
              placeholder={type === 'number' ? placeholder : undefined}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default FormField;
