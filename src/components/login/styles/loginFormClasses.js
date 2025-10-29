// Shared form classes and helpers
export const LABEL_CLASS = "block text-[#505050] font-['Inter',sans-serif] text-[20px] font-medium leading-[27px] mb-[10px]";
export const INPUT_BASE_CLASS = "w-full h-[60px] rounded-[8px] border border-[#D9D9D9] bg-white text-[#050505] font-['Inter',sans-serif] text-[22px] font-normal leading-[30px] focus:border-[#0D54FF] focus:ring-1 focus:ring-[#0D54FF] focus:outline-none";
export const INPUT_EMAIL_CLASS = `${INPUT_BASE_CLASS} px-[20px] placeholder:text-[#828282] placeholder:text-[22px]`;
export const INPUT_PASSWORD_CLASS = `${INPUT_BASE_CLASS} px-[20px] pr-[60px] placeholder:text-[#828282] placeholder:text-[22px]`;
export const TOGGLE_ICON_BTN_CLASS = "absolute right-[26px] top-1/2 -translate-y-1/2 flex items-center justify-center";
export const CHECKBOX_BOX_BASE = "w-[18px] h-[18px] rounded-[3px] flex items-center justify-center transition-colors";
export const getCheckboxBoxClass = (on) => `${CHECKBOX_BOX_BASE} ${on ? 'bg-[#0D54FF] border border-[#0D54FF]' : 'border border-[#D9D9D9] bg-white'}`;