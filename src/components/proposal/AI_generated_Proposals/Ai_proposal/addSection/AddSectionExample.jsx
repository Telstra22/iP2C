import React, { useState } from 'react';
import ProposalActionButtons from '../proposal_section/ProposalActionButtons';
import AddSection from './AddSection';
import { mockRootProps } from './AddSectionMockData';

/**
 * Example component showing how to use AddSection with ProposalActionButtons
 * This demonstrates the integration between the action buttons and the modal
 */
const AddSectionExample = () => {
  const [isAddSectionOpen, setIsAddSectionOpen] = useState(false);

  const handleAddSection = () => {
    setIsAddSectionOpen(true);
  };

  const handleCloseAddSection = () => {
    setIsAddSectionOpen(false);
  };

  const handleDone = () => {
    console.log('Section added successfully');
    setIsAddSectionOpen(false);
  };

  const handlePreview = () => {
    console.log('Preview proposal clicked');
  };

  const handleSaveExit = () => {
    console.log('Save & Exit clicked');
  };

  return (
    <div className="p-8">
      {/* Action Buttons */}
      <ProposalActionButtons
        onAddSection={handleAddSection}
        onPreview={handlePreview}
        onSaveExit={handleSaveExit}
      />

      {/* AddSection Modal */}
      <AddSection
        isOpen={isAddSectionOpen}
        sectionNumber={mockRootProps.sectionNumber}
        onClose={handleCloseAddSection}
        onDone={handleDone}
        onCancel={handleCloseAddSection}
        chatMessages={mockRootProps.chatMessages}
      />
    </div>
  );
};

export default AddSectionExample;