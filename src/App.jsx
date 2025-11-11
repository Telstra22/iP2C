import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/login/Login'
import ManageProposal from './components/proposal/manage_proposal/ManageProposal'
import Header from './components/Header'
import AddOpprtunityDetails from './components/proposal/upload_document/add_opportunity-details/AddOpprtunityDetails'
import AiLoader from './components/proposal/AI_generated_Proposals/AiLoader'
import AiProposalPage from './components/proposal/AI_generated_Proposals/Ai_proposal/AiProposalPage'

function AppContent() {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Header />
      <div className="flex-1 overflow-hidden">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/manage_proposals" element={<ManageProposal />} />
          <Route path="/add_opportunity-details" element={<AddOpprtunityDetails />} />
          <Route path="/ai-proposal_page" element={<AiProposalPage />} />
          <Route path="/ai_loader" element={<AiLoader />} />
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