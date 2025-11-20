import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Users, ChevronRight, Trash2 } from 'lucide-react'
import { ChevronDown, Check } from 'lucide-react'

import EditorToolbar from './editorToolbar/EditorToolbar'
import Breadcrumb from '../../upload_document/Breadcrumb'
import ProposalActionButtons from './proposal_section/ProposalActionButtons'
import ChatSidebar from './agentHuddle/ChatSidebar'
import CollaborationModal from './collaborate/CollaborationModal'
import RatingModal from './rating/RatingModal'
import DocumentSourceModal from './SourceDoc/DocumentSourceModal'
import PreviewProposalPage from './preview/PreviewProposalPage'
import CommentsPanel from './comments/CommentsPanel'
import { comments as commentsData } from './comments/commentsMockData'
import { mockRootProps } from './GeneratedWithAIMockData'
import GeneratedAIHuddle from './GeneratedAIHuddle'
import { saveNewProposalCard } from './saveNewProposalCard'

const renderMarkdownContent = (markdown) => {
  if (!markdown) return ''

  const escapeHtml = (str) =>
    str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')

  const lines = markdown.split('\n')
  const blocks = []
  let currentBlock = []

  const flushBlock = () => {
    if (!currentBlock.length) return
    blocks.push(currentBlock)
    currentBlock = []
  }

  lines.forEach((line) => {
    if (line.trim() === '') {
      flushBlock()
    } else {
      currentBlock.push(line)
    }
  })
  flushBlock()

  const htmlParts = []

  blocks.forEach((block) => {
    if (block.length === 1 && block[0].startsWith('### ')) {
      const text = escapeHtml(block[0].slice(4).trim())
      htmlParts.push(`<h3 class="text-[18px] font-semibold mb-2">${text}</h3>`)
      return
    }
    if (block.length === 1 && block[0].startsWith('## ')) {
      const text = escapeHtml(block[0].slice(3).trim())
      htmlParts.push(`<h2 class="text-[20px] font-semibold mb-2">${text}</h2>`)
      return
    }

    const isTableBlock =
      block.length >= 2 &&
      block[0].trim().startsWith('|') &&
      block[1].includes('---')

    if (isTableBlock) {
      const headerLine = block[0]
      const separatorLine = block[1]
      const dataLines = block.slice(2)

      const splitRow = (line) =>
        line
          .split('|')
          .slice(1, -1)
          .map((cell) => cell.trim())

      const headers = splitRow(headerLine)
      const separators = splitRow(separatorLine)
      if (!headers.length || !separators.length) {
        htmlParts.push(`<p class="mb-3 whitespace-pre-wrap">${escapeHtml(block.join('\n'))}</p>`)
        return
      }

      htmlParts.push('<div class="overflow-x-auto mb-4"><table class="min-w-full border-collapse text-[14px]">')
      htmlParts.push('<thead>')
      htmlParts.push('<tr>')
      headers.forEach((h) => {
        htmlParts.push(`<th class="border border-[#C6C6C6] px-3 py-2 bg-[#F6F6F6] text-left font-semibold">${escapeHtml(h)}</th>`)
      })
      htmlParts.push('</tr>')
      htmlParts.push('</thead>')

      if (dataLines.length) {
        htmlParts.push('<tbody>')
        dataLines.forEach((line) => {
          if (!line.trim()) return
          const cells = splitRow(line)
          if (!cells.length) return
          htmlParts.push('<tr>')
          cells.forEach((c) => {
            htmlParts.push(`<td class="border border-[#C6C6C6] px-3 py-2 align-top">${escapeHtml(c)}</td>`)
          })
          htmlParts.push('</tr>')
        })
        htmlParts.push('</tbody>')
      }

      htmlParts.push('</table></div>')
      return
    }

    htmlParts.push(`<p class="mb-3 whitespace-pre-wrap">${escapeHtml(block.join('\n'))}</p>`)
  })

  return htmlParts.join('')
}

const GeneratedWithAI = () => {
  const navigate = useNavigate()
  const [showComments, setShowComments] = useState(false)
  const [showCollaborationModal, setShowCollaborationModal] = useState(false)
  const [showRatingModal, setShowRatingModal] = useState(false)
  const [showDocumentSourceModal, setShowDocumentSourceModal] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [showSectionsList, setShowSectionsList] = useState(false)

  const initialSectionId = (mockRootProps.allSections && (mockRootProps.allSections.find(s => s.isActive)?.id || mockRootProps.allSections[0]?.id)) || 1
  const [selectedSectionId, setSelectedSectionId] = useState(initialSectionId)

  const getContentFromSection = (section) => ({
    // regeneratedHeader: 'This content is regenerated based on your attached document',
    mainContent: section?.content || '',
    subsections: Array.isArray(section?.subsections) ? section.subsections : [],
    isMarkdown: !!section?.isMarkdown
  })

  const initialSection = mockRootProps.sections?.find(s => s.id === initialSectionId) || mockRootProps.sections?.[0] || null
  const [content, setContent] = useState(() => getContentFromSection(initialSection))

  const handleDeleteSubsection = (subsectionId) => {
    setContent(prev => ({
      ...prev,
      subsections: prev.subsections.filter(s => s.id !== subsectionId)
    }))
  }

  const handleAddSection = () => {
    navigate('/add-section')
  }

  const handlePreview = () => {
    setShowPreview(true)
  }

  const handleSaveExit = () => {
    saveNewProposalCard()
    navigate('/manage_proposals')
  }

  const handleToggleComments = () => setShowComments(!showComments)
  const handleRegenerateWithAI = () => {}
  const handleCollaborate = () => setShowCollaborationModal(true)
  const handleCloseCollaboration = () => setShowCollaborationModal(false)
  const handleRate = () => setShowRatingModal(true)
  const handleCloseRating = () => setShowRatingModal(false)
  const handleSource = () => setShowDocumentSourceModal(true)
  const handleCloseDocumentSource = () => setShowDocumentSourceModal(false)

  return (
    <div className='w-full h-screen bg-[#F6F6F6] flex flex-col overflow-hidden'>
      {/* Breadcrumb */}
      <Breadcrumb current={mockRootProps.currentPage} />

      {/* Agent Huddle Status Bar */}
      {/* <AgentHuddleBar agentStatus={mockRootProps.agentStatus} /> */}
      <GeneratedAIHuddle agentStatus={mockRootProps.agentStatus} />

      {/* Main Content Area */}
      <div className='flex-1 flex overflow-hidden min-h-0'>
        {/* Left Side - Proposal Content */}
        <div className='flex-1 overflow-y-auto px-[68px] py-[37px] pb-[120px] min-h-0'>
          {/* Title and Action Buttons */}
          <div className='flex items-center justify-between mb-[13px]'>
            <h1 className="text-[#050505] font-['Inter',sans-serif] text-[28px] font-semibold leading-[38px]">
              {mockRootProps.proposalTitle}
            </h1>
            <ProposalActionButtons
              onAddSection={handleAddSection}
              onPreview={handlePreview}
              onSaveExit={handleSaveExit}
            />
          </div>

          {/* allSections Dropdown (only dropdown UI, no section content) */}
          <div className='flex flex-col gap-[13px] w-[483px] mb-[13px]'>
            <div className='relative'>
              <div className='bg-white rounded-[9px] border border-[#C6C6C6] shadow-[0px_4px_14px_rgba(0,0,0,0.12)] px-[20px] py-[16px]'>
                <button
                  onClick={() => setShowSectionsList(!showSectionsList)}
                  className='flex items-center justify-between w-full hover:opacity-70'
                >
                  <span className="text-[#000000] font-['Inter',sans-serif] text-[21px] font-semibold leading-[28px]">
                    {(mockRootProps.allSections || []).find(s => s.id === selectedSectionId)?.title || 'Select Section'}
                  </span>
                  <ChevronDown
                    width={30}
                    height={30}
                    color='#000000'
                    className={`transform transition-transform ${showSectionsList ? 'rotate-180' : ''}`}
                  />
                </button>
              </div>

              {showSectionsList && (
                <div className='absolute right-0 top-full mt-2 z-50 bg-white rounded-[12px] border border-[#E5E5E5] shadow-[0px_4px_8px_rgba(0,0,0,0.1)] p-[24px] w-[483px]'>
                  <div className='flex flex-col gap-[20px]'>
                    {(mockRootProps.allSections || []).map((item) => (
                      <div
                        key={item.id}
                        className='flex items-center justify-between cursor-pointer hover:opacity-80'
                        onClick={() => {
                          setSelectedSectionId(item.id)
                          const section = (mockRootProps.sections || []).find(s => s.id === item.id)
                          if (section) {
                            setContent(getContentFromSection(section))
                          }
                          setShowSectionsList(false)
                        }}
                      >
                        <span className="text-[#050505] font-['Inter',sans-serif] text-[20px] font-normal leading-[27px]">
                          {item.title}
                        </span>
                        {(selectedSectionId ? item.id === selectedSectionId : item.isActive) && (
                          <Check size={24} color='#0D54FF' strokeWidth={3} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Editor Toolbar and Content (using mockProposalContent) */}
          <div className='rounded-tr-[9px] rounded-br-[9px] rounded-bl-[9px] border border-[#C6C6C6] bg-white shadow-[0px_4px_14px_rgba(0,0,0,0.12)]'>
            <EditorToolbar
              showComments={showComments}
              onToggleComments={handleToggleComments}
              onCollaborate={handleCollaborate}
              onRate={handleRate}
              onSource={handleSource}
            />

            {/* Content with optional Comments Panel */}
            <div className='px-[40px] pb-[24px]'>
              <div className={`${showComments ? 'flex gap-[24px] items-start' : 'block'}`}>
                {/* Content column */}
                <div className={`${showComments ? 'flex-1' : 'w-full'}`}>
                  {/* Header and Main Content */}
                  <div className='pb-[20px]'>
                    <p className="text-[#828282] font-['Inter',sans-serif] text-[18px] font-normal italic leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                      {content.regeneratedHeader}
                    </p>
                    <div className='mt-[21px]'>
                      {content.isMarkdown ? (
                        <div
                          className="text-[#050505] font-['Inter',sans-serif] text-[18px] font-normal leading-[24.14px] whitespace-pre-wrap"
                          dangerouslySetInnerHTML={{ __html: renderMarkdownContent(content.mainContent) }}
                        />
                      ) : (
                        <p className="text-[#050505] font-['Inter',sans-serif] text-[18px] font-normal leading-[24.14px] whitespace-pre-line">
                          {content.mainContent}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subsections */}
                  <div className='flex flex-col gap-[30px]'>
                    {content.subsections.map((subsection) => (
                      <div key={subsection.id} className='flex flex-col gap-[15px]'>
                        <div className='flex items-center gap-[13px]'>
                          <h3 className="flex-1 text-[#050505] font-['Inter',sans-serif] text-[20px] font-normal leading-[27px] underline">
                            {subsection.title}
                          </h3>
                          <button
                            onClick={() => handleDeleteSubsection(subsection.id)}
                            className='hover:opacity-70 shrink-0'
                            aria-label="Delete subsection"
                          >
                            <Trash2 width={13} height={16} color='#050505' />
                          </button>
                        </div>
                        <p
                          className={`text-[#050505] font-['Inter',sans-serif] text-[18px] font-normal leading-[24.14px] whitespace-pre-line ${subsection.isItalic ? 'italic text-[#828282]' : ''} ${subsection.isCollapsed ? 'line-clamp-3 overflow-hidden' : ''}`}
                          style={subsection.isCollapsed ? {
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 3
                          } : {}}
                        >
                          {subsection.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Comments column (right) */}
                {showComments && (
                  <CommentsPanel comments={commentsData} />
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Right Side - Chat Sidebar */}
        <ChatSidebar />
      </div>

      {/* Collaboration Modal */}
      <CollaborationModal
        isOpen={showCollaborationModal}
        onClose={handleCloseCollaboration}
      />

      {/* Rating Modal */}
      <RatingModal
        isOpen={showRatingModal}
        onClose={handleCloseRating}
      />

      {/* Document Source Modal */}
      <DocumentSourceModal
        isOpen={showDocumentSourceModal}
        onClose={handleCloseDocumentSource}
      />

      {/* Preview Overlay */}
      {showPreview && (
        <div className='fixed inset-0 bg-black/30 backdrop-blur-[1px] z-50 flex'>
          <div className='flex-1 bg-white shadow-[0_4px_16px_rgba(0,0,0,0.12)]'>
            <PreviewProposalPage embedded onClose={() => setShowPreview(false)} />
          </div>
        </div>
      )}
    </div>
  )
}

export default GeneratedWithAI