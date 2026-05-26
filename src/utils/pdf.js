import jsPDF from 'jspdf'

export function exportToPDF(title, content) {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' })
  const pageWidth = doc.internal.pageSize.getWidth()
  const margin = 20
  const maxWidth = pageWidth - margin * 2

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(15)
  doc.text(title, pageWidth / 2, 22, { align: 'center' })

  doc.setFont('helvetica', 'normal')
  doc.setFontSize(9)
  doc.setTextColor(120)
  doc.text(`Generated: ${new Date().toLocaleDateString('en-US')}`, pageWidth / 2, 29, { align: 'center' })

  doc.setDrawColor(24, 95, 165)
  doc.setLineWidth(0.4)
  doc.line(margin, 33, pageWidth - margin, 33)

  doc.setTextColor(50)
  doc.setFontSize(10)

  let y = 41
  const lines = doc.splitTextToSize(content, maxWidth)
  lines.forEach(line => {
    if (y > 278) { doc.addPage(); y = 20 }
    doc.text(line, margin, y)
    y += 6.5
  })

  doc.save(`${title.replace(/[^a-z0-9]/gi, '_')}.pdf`)
}
