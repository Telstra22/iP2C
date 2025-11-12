// Utilities for exporting the Preview Proposal in various formats

// Build Word-compatible HTML (downloaded with .doc extension)
export const buildDocHtml = (sections = []) => {
  const sectionHtml = sections
    .map((sec, idx) => {
      const subs = (sec.subsections || [])
        .map(
          (sub) => `
        <h3 style="font-family: Inter, Arial; font-size:16px; margin:12px 0 6px;">${sub.title || ''}</h3>
        <p style="font-family: Inter, Arial; font-size:14px; line-height:1.4; white-space:pre-wrap;">${(sub.content || '').replace(/\n/g, '<br/>')}</p>
      `
        )
        .join('')

      return `
        <h2 style="color:#0D54FF; font-family: Inter, Arial; font-size:18px; margin:18px 0 8px;">${sec.title || ''}</h2>
        ${sec.content ? `<p style=\"font-family: Inter, Arial; font-size:14px; line-height:1.5; white-space:pre-wrap;\">${(sec.content || '').replace(/\n/g, '<br/>')}</p>` : ''}
        ${subs}
        ${idx < sections.length - 1 ? '<hr style="border:none;border-top:2px solid #BDBDBD;margin:24px 0;" />' : ''}
      `
    })
    .join('')

  return `<!DOCTYPE html>
  <html><head><meta charset="utf-8"><title>Proposal</title></head>
  <body style="margin:32px;">
    <h1 style="font-family: Inter, Arial; font-size:22px;">Preview Proposal</h1>
    ${sectionHtml}
  </body></html>`
}

// Build CSV content
export const buildCsv = (sections = []) => {
  const rows = []
  rows.push(['Section', 'Subsection', 'Title', 'Content'])
  sections.forEach((sec, idx) => {
    if (sec.content) {
      rows.push([sec.title || '', '', sec.title || '', (sec.content || '').replace(/\n/g, ' ')])
    }
    ;(sec.subsections || []).forEach((sub) => {
      rows.push([sec.title || '', sub.id || '', sub.title || '', (sub.content || '').replace(/\n/g, ' ')])
    })
    if (idx < sections.length - 1) {
      rows.push(['-----', '', '', ''])
    }
  })
  return rows
    .map((r) =>
      r
        .map((field) => {
          const f = String(field ?? '')
          if (f.includes(',') || f.includes('"') || f.includes('\n')) {
            return '"' + f.replace(/"/g, '""') + '"'
          }
          return f
        })
        .join(',')
    )
    .join('\n')
}

// Trigger a browser download from a Blob
export const downloadBlob = (data, mime, filename) => {
  const blob = new Blob([data], { type: mime })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}

// Perform the download based on the chosen type
export const performDownload = (choice, sections = []) => {
  const fmt = String(choice || '').toLowerCase()
  if (fmt === 'csv') {
    const csv = buildCsv(sections)
    downloadBlob(csv, 'text/csv;charset=utf-8', 'proposal.csv')
    return
  }
  if (fmt === 'pdf') {
    const html = buildDocHtml(sections)
    const win = window.open('', '_blank')
    if (win) {
      win.document.open()
      win.document.write(html)
      win.document.close()
      win.focus()
      setTimeout(() => win.print(), 300)
    }
    return
  }
  // default to Word-compatible .doc
  const html = buildDocHtml(sections)
  downloadBlob(html, 'application/msword', 'proposal.doc')
}
