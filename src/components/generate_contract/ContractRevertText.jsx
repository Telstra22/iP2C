import React from 'react';
import RevertArrowIcon from '../../assets/icons/RevertArrowIcon.svg?react';

function ContractRevertText({ onRevert, className = '' }) {
  return (
    <div className={`flex flex-col gap-[15px] ${className}`}>
      {/* AI Suggested Text Container */}
      <div className="rounded-lg border border-[#56a72b] shadow-[0px_4px_8px_rgba(0,0,0,0.10)] p-4 bg-white">
        {/* Contract Text Content */}
        <p className="contract-text mb-4">
          2.1 We agree to supply the Services to you, and you agree to acquire them from us, at the prices and on
          the terms of this Agreement. The Services may be delivered to, and used by, your locations both 
          within and outside Australia, subject to the terms set out herein.
          <br /><br />
          2.2 We may provide the Services using personnel or resources located outside of Australia. Regardless of
          the location from which the Services are delivered or supported, we will ensure that all Services 
          comply with the requirements of this Agreement, including applicable Australian laws, data privacy, 
          and security standards. Any cross-border data transfers or offshore service delivery will be 
          conducted in accordance with your data protection requirements and relevant regulatory obligations,
          and will not diminish our obligations or your rights under this Agreement.
          <br /><br />
          <span className="block ml-8">This wording clarifies:</span>
          <span className="block ml-8">Services can be delivered and used both within and outside Australia.</span>
          <span className="block ml-8">Telstra's obligations remain unchanged regardless of delivery location.</span>
          <span className="block ml-8">Compliance with Australian law, data privacy, and security is explicitly required for offshore delivery.</span>
        </p>

        {/* Divider */}
        <div className="border-t border-[#c6c6c6] mb-4"></div>

        {/* Revert Section */}
        <div className="flex items-center justify-between">
          <span className="revert-label-text">Replaced with AI Suggestion</span>
          <button 
            onClick={onRevert}
            className="flex items-center gap-[5px] hover:opacity-80 transition-opacity"
          >
            <RevertArrowIcon width={19} height={15} className="text-black" />
            <span className="revert-button-text">Revert text</span>
          </button>
        </div>
      </div>

      {/* Original Contract Text */}
      <p className="contract-text">
        2.3 You acknowledge and agree that we use a global services delivery model to deliver our Services to you 
        under this Agreement cost effectively and efficiently. For these purposes, our global services delivery    
        model means that:  
        <br /><br />
        <span className="block ml-8">Certain Services are delivered by Personnel located in Australia, while other kinds of Services are delivered</span>
        <span className="block ml-8">by Personnel located outside of Australia (including the Philippines, India and Malaysia); and</span>
        <span className="block ml-8">Personnel located in Australia and outside of Australia may need to access your Customer Data and    </span>
        <span className="block ml-8">our Service Related Data to provide Services to you.</span>
        <br />
        2.4 From time to time, we may subcontract our obligations under this Agreement and where we subcontract 
        any of our obligations under this Agreement, we will:  
        <br /><br />
        <span className="block ml-8">ensure that the subcontractor has all the necessary skills and resources to perform the work they  </span>
        <span className="block ml-8">TELSTRA LIMITED (ABN 64 086 174 781) | COMPANY 4 AUSTRALIA PTY LTD CONFIDENTIAL undertake;  </span>
        <span className="block ml-8">and not be relieved of our obligations to you under this Agreement for such work.</span>
        <br />
        2.5 We may, without your consent:  
        <br /><br />
        <span className="block ml-8">directly or indirectly (including by way of intra-group arrangements) subcontract all or any part of this </span>
        <span className="block ml-8">Agreement to another Telstra Group Entity that has the sufficient financial capacity to perform our </span>
        <span className="block ml-8">obligations under this Agreement; and do all things reasonably required to give effect to paragraph </span>
        <span className="block ml-8">(a) above.</span>
      </p>
    </div>
  );
}

export default ContractRevertText;