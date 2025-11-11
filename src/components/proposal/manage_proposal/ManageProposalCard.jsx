import { useNavigate } from "react-router-dom";
import { STATUS_COLORS } from "./data/manageProposalsData";
import { Plus, MoreVertical,SquarePen,Eye } from "lucide-react";
import PreviewEyeIcon from "../../../assets/icons/PreviewEyeIcon.jsx";
import EditPencilIcon from "../../../assets/icons/EditPencilIcon.jsx";

const ProposalCard = ({
  isCreateCard = false,
  onClick,
  title,
  category,
  customer,
  template,
  createdOn,
  updatedOn,
  statusKey,
}) => {
  const navigate = useNavigate();
  if (isCreateCard) {
    return (
      <>
        <div className="flex items-center justify-center w-full rounded-[9px] border border-[#D9D9D9] bg-white overflow-hidden transition duration-200 ease-out hover:bg-[#F0F7FF] hover:shadow-lg hover:-translate-y-0.5">
          <button
            type="button"
            onClick={onClick}
            className="flex items-center gap-[10px] px-2 py-2 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0D54FF]/50"
            aria-label="Create Proposal"
          >
            <Plus size={32} color="#0D54FF" strokeWidth={3} />
            <span className="text-[#0D54FF] font-['Inter',sans-serif] text-[24px] font-medium leading-[32.184px]">
              Create New Proposal
            </span>
          </button>
        </div>
      </>
    );
  }
  const palette = (statusKey && STATUS_COLORS?.[statusKey]) || STATUS_COLORS.active;
  const statusLabel = palette.label;
  const statusStyles = {
    color: palette.color,
    border: palette.border,
    bg: palette.bg,
  };
  return (
    <>
      <div className="flex w-full flex-col rounded-[9px] border border-[#D9D9D9] bg-white overflow-hidden transition duration-200 ease-out hover:shadow-lg hover:-translate-y-0.5">
        {/* Card Header */}
        <div className="flex flex-col gap-[6px] px-[42px] pt-[29px] pb-[17px] bg-white">
          <div className="flex items-center gap-[10px] min-w-0">
            <h3 className="text-[#050505] font-['Inter',sans-serif] text-[28px] font-semibold leading-[38px] flex-1 min-w-0 whitespace-nowrap overflow-hidden text-ellipsis">
              {customer}
            </h3>
            <div className="flex items-center gap-[10px] flex-shrink-0">
              <div
                className="flex h-[34px] px-[20px] items-center justify-center rounded-[30px] border [border-color:var(--status-border)] [background-color:var(--status-bg)]"
                style={{
                  "--status-border": statusStyles.border,
                  "--status-bg": statusStyles.bg,
                }}
              >
                <span
                  className="text-[16px] font-medium font-['Inter',sans-serif] leading-[21px] whitespace-nowrap [color:var(--status-color)]"
                  style={{ "--status-color": statusStyles.color }}
                >
                  {statusLabel}
                </span>
              </div>
              <button
                type="button"
                aria-label="More options"
                className="inline-flex items-center justify-center w-[41px] h-[41px] flex-shrink-0 rounded-full bg-[#F6F6F6]"
              >
                <MoreVertical size={24} color="#0D54FF" strokeWidth={2} />
              </button>
            </div>
          </div>
          <p className="text-[#0D54FF] font-['Inter',sans-serif] text-[16px] font-normal leading-[21px] whitespace-nowrap overflow-hidden text-ellipsis">
            {category}
          </p>
        </div>

        {/* Card Content */}
        <div className="flex flex-col gap-[18px] px-[42px] py-[20px] bg-[#F6F6F6]">
          <div className="flex items-start gap-[54px]">
            <div className="flex flex-col gap-[1px] flex-1 min-w-0">
              <span className="text-[#A0A0A0] font-['Inter',sans-serif] text-[16px] font-normal leading-[21px]">
                Opportunity ID
              </span>
              <p className="text-[#050505] font-['Inter',sans-serif] text-[18px] font-normal leading-[24px] whitespace-nowrap overflow-hidden text-ellipsis">
                {title}
              </p>
            </div>
            <div className="flex flex-col gap-[1px] flex-1 min-w-0">
              <span className="text-[#A0A0A0] font-['Inter',sans-serif] text-[16px] font-normal leading-[21px]">
                Template
              </span>
              <p className="text-[#050505] font-['Inter',sans-serif] text-[18px] font-normal leading-[24px] whitespace-nowrap overflow-hidden text-ellipsis">
                {template}
              </p>
            </div>
          </div>

          <hr className="border-t border-[#D9D9D9]" />

          <div className="flex items-start gap-[54px]">
            <div className="flex flex-col gap-[1px] flex-1 min-w-0">
              <span className="text-[#A0A0A0] font-['Inter',sans-serif] text-[16px] font-normal leading-[21px]">
                Created on
              </span>
              <p className="text-[#050505] font-['Inter',sans-serif] text-[18px] font-normal leading-[24px] whitespace-nowrap overflow-hidden text-ellipsis">
                {createdOn}
              </p>
            </div>
            <div className="flex flex-col gap-[1px] flex-1 min-w-0">
              <span className="text-[#A0A0A0] font-['Inter',sans-serif] text-[16px] font-normal leading-[21px]">
                Updated on
              </span>
              <p className="text-[#050505] font-['Inter',sans-serif] text-[18px] font-normal leading-[24px] whitespace-nowrap overflow-hidden text-ellipsis">
                {updatedOn}
              </p>
            </div>
          </div>
        </div>

        {/* Card Footer Button */}
        <div className="flex items-center justify-center gap-[54px] w-full px-[20px] py-[14px] bg-[#0D54FF]">
          <button
            type="button"
            className="flex items-center gap-[14px] hover:opacity-90 transition-opacity"
            onClick={() => navigate('/ai-proposal_page')}
          >
            <Eye width={24} height={24} color="#FFFFFF" />
            <span className="text-white font-['Inter',sans-serif] text-[20px] font-semibold leading-[27px]">
              Preview
            </span>
          </button>
          <div className="w-[2px] h-[39px] bg-white/41" />
          <button
            type="button"
            className="flex items-center gap-[14px] hover:opacity-90 transition-opacity"
            onClick={() => navigate('/ai-proposal_page')}
          >
            <SquarePen width={24} height={24} color="#FFFFFF" />
            <span className="text-white font-['Inter',sans-serif] text-[20px] font-semibold leading-[27px]">
              Edit Proposal
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProposalCard;
