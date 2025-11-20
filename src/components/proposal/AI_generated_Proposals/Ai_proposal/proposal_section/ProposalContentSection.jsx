import React from 'react'

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
    // Headings
    if (block.length === 1 && block[0].startsWith('### ')) {
      const text = escapeHtml(block[0].slice(4).trim())
      htmlParts.push(`<h3 class="text-[17.57px] font-semibold mb-2">${text}</h3>`)
      return
    }
    if (block.length === 1 && block[0].startsWith('## ')) {
      const text = escapeHtml(block[0].slice(3).trim())
      htmlParts.push(`<h2 class="text-[18px] font-semibold mb-2">${text}</h2>`)
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

    // Default paragraph block
    htmlParts.push(`<p class="mb-3 whitespace-pre-wrap">${escapeHtml(block.join('\n'))}</p>`)
  })

  return htmlParts.join('')
}

const ProposalContentSection = ({ section }) => {
  return (
    <div className='flex flex-col gap-[20px]'>
      {/* Section Title */}
      <h2 className={`text-[#0D54FF] font-['Inter',sans-serif] text-[17.57px] font-bold leading-[23px]`}>
        {section.title}
      </h2>

      {/* Section Content */}
      {section.content && (
        section.isMarkdown ? (
          <div
            className="text-[#050505] font-['Inter',sans-serif] text-[17.57px] font-normal leading-[23px]"
            dangerouslySetInnerHTML={{ __html: renderMarkdownContent(section.content) }}
          />
        ) : (
          <p className="text-[#050505] font-['Inter',sans-serif] text-[17.57px] font-normal leading-[23px] whitespace-pre-line">
            {section.content}
          </p>
        )
      )}

      {/* Subsections */}
      {section.subsections && section.subsections.length > 0 && (
        <div className='flex flex-col gap-[20px] pl-[32px]'>
          {section.subsections.map((subsection) => (
            <div key={subsection.id} className='flex flex-col gap-[12px]'>
              <h3 className="text-[#050505] font-['Inter',sans-serif] text-[17.57px] font-semibold leading-[23px]">
                {subsection.title}
              </h3>
              <p className="text-[#050505] font-['Inter',sans-serif] text-[17.57px] font-normal leading-[23px] whitespace-pre-line">
                {subsection.content}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProposalContentSection
