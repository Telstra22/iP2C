import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/login/Login'
import ManageProposal from './components/proposal/manage_proposal/ManageProposal'
import Header from './components/Header'
import AddOpprtunityDetails from './components/proposal/upload_document/add_opportunity-details/AddOpprtunityDetails'
import AiLoader from './components/proposal/AI_generated_Proposals/AiLoader/AiLoader'
import AiProposalPage from './components/proposal/AI_generated_Proposals/Ai_proposal/AiProposalPage'
import GeneratedWithAI from './components/proposal/AI_generated_Proposals/Ai_proposal/GeneratedWithAI'
import GenerateAIBlank from './components/proposal/AI_generated_Proposals/Ai_proposal/GenerateAIBlank'
import PreviewProposalPage from './components/proposal/AI_generated_Proposals/Ai_proposal/preview/PreviewProposalPage'
import AddSection from './components/proposal/AI_generated_Proposals/Ai_proposal/addSection/AddSection'
import OpportunityLoader from './components/proposal/upload_document/opportunity_summery/opportunity_loader/OpportunityLoader'
import OpportunityDone from './components/proposal/upload_document/opportunity_summery/opportunity_loader/OpportunityDone'
import OpportunitySummery from './components/proposal/upload_document/opportunity_summery/Opportunity_Summery'
import Source_Connection from './components/proposal/upload_document/upload_historical_proposal/Upload_Historical_Proposal'
import Create_Outline from './components/proposal/upload_document/create_outline/Create_Outline'
import SelectTemplate from './components/proposal/upload_document/select_template/SelectTemplate'

function AppContent() {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Header />
      <div className="flex-1 overflow-hidden">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/manage_proposals" element={<ManageProposal />} />
          <Route path="/add_opportunity-details" element={<AddOpprtunityDetails />} />
          <Route path="/ai_proposal_page" element={<AiProposalPage />} />
          <Route path="/generated-with-ai" element={<GeneratedWithAI />} />
          <Route path="/generate-ai-blank" element={<GenerateAIBlank />} />
          <Route path="/ai_loader" element={<AiLoader />} />
          <Route path="/preview-proposal" element={<PreviewProposalPage />} />
          <Route path="/add-section" element={<AddSection isOpen={true} />} />
          <Route path="/opportunity_loader" element={<OpportunityLoader />} />
          <Route path="/opportunity_done" element={<OpportunityDone />} />
          <Route path="/opportunity_summary" element={<OpportunitySummery />} />
          <Route path="/upload_historical_proposal" element={<Source_Connection />} />
          <Route path="/create_outline" element={<Create_Outline />} />
          <Route path="/select_template" element={<SelectTemplate />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App