import React from "react";

const SearchableSelect = ({
  value,
  onChange,
  options = [],
  placeholder = "Select",
  invalid = false,
  size = "md",
  ariaLabel,
}) => {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const containerRef = React.useRef(null);
  const inputRef = React.useRef(null);
  const listRef = React.useRef(null);
  const [highlight, setHighlight] = React.useState(-1);

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return options;
    return options.filter((o) => String(o).toLowerCase().includes(q));
  }, [options, query]);

  React.useEffect(() => {
    function onDocClick(e) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target)) {
        setOpen(false);
        setQuery("");
        setHighlight(-1);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  React.useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [open]);

  const onKeyDownButton = (e) => {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(true);
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 0);
    }
  };

  const onKeyDownList = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlight((h) => Math.min(h + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((h) => Math.max(h - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlight >= 0 && filtered[highlight] !== undefined) {
        onChange(filtered[highlight]);
        setOpen(false);
        setQuery("");
        setHighlight(-1);
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
      setQuery("");
      setHighlight(-1);
    }
  };

  const sizes = {
    md: {
      text: "text-xl",
      inputText: "text-xl",
      height: "h-16",
    },
    lg: {
      text: "text-2xl",
      inputText: "text-2xl",
      height: "h-16",
    },
  };
  const sz = sizes[size] || sizes.md;

  return (
    <div ref={containerRef} className={`relative w-full ${sz.height}`}>
      <button
        type="button"
        aria-label={ariaLabel || placeholder}
        className={`w-full px-5 py-3.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] ${invalid ? "outline-red-500" : "outline-stone-300"} flex items-center justify-between ${sz.text}`}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onKeyDownButton}
      >
        <span className="truncate text-zinc-950">
          {value ? String(value) : placeholder}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[19px] h-[19px]"
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
        >
          <path d="M0 5.85508L9.5 15.2737L19 5.85508L17.3209 4.19035L9.5 11.9442L1.67913 4.19035L0 5.85508Z" fill="#505050"/>
        </svg>
      </button>

      {open && (
        <div className="absolute z-20 mt-2 w-full bg-white rounded-lg shadow border border-zinc-200">
          <div className="p-2 border-b border-zinc-200">
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setHighlight(-1);
              }}
              onKeyDown={onKeyDownList}
              placeholder="Search..."
              className={`w-full px-3 py-2 bg-white rounded-md outline outline-1 outline-stone-300 ${sz.inputText} text-zinc-950 focus:outline-2 focus:outline-[#0d54ff]`}
            />
          </div>
          <ul
            ref={listRef}
            role="listbox"
            tabIndex={-1}
            className="max-h-64 overflow-auto py-1"
            onKeyDown={onKeyDownList}
          >
            {filtered.length === 0 && (
              <li className="px-3 py-2 text-zinc-500 text-sm">No results</li>
            )}
            {filtered.map((opt, idx) => (
              <li
                key={String(opt)}
                role="option"
                aria-selected={value === opt}
                className={`px-3 py-2 cursor-pointer ${idx === highlight ? "bg-zinc-100" : ""} ${value === opt ? "text-[#0d54ff]" : "text-zinc-900"}`}
                onMouseEnter={() => setHighlight(idx)}
                onMouseLeave={() => setHighlight(-1)}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                  setQuery("");
                  setHighlight(-1);
                }}
              >
                {String(opt)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchableSelect;
