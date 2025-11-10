// Mock data for AiLoader component

// No complex mock data needed for this loading component
// The component is controlled via props:
// - onCancel: callback function
// - isVisible: boolean to show/hide the loader

export const mockRootProps = {
  isVisible: true,
  onCancel: () => {
    console.log('Cancel button clicked')
  }
}