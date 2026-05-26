export const CONTRACT_TEMPLATES = [
  {
    id: 'employment',
    name: 'Employment Contract',
    icon: '💼',
    fields: [
      { key: 'employerName',   label: 'Employer / Company Name',  placeholder: 'Acme Corp' },
      { key: 'employeeName',   label: 'Employee Full Name',        placeholder: 'John Doe' },
      { key: 'jobTitle',       label: 'Job Title',                 placeholder: 'Software Engineer' },
      { key: 'startDate',      label: 'Start Date',                placeholder: 'January 1, 2026', type: 'date' },
      { key: 'salary',         label: 'Monthly Salary',            placeholder: '$5,000' },
      { key: 'workHours',      label: 'Working Hours / Week',      placeholder: '40 hours' },
      { key: 'location',       label: 'Work Location',             placeholder: 'New York, NY' },
      { key: 'probation',      label: 'Probation Period',          placeholder: '3 months' },
      { key: 'noticePeriod',   label: 'Notice Period',             placeholder: '30 days' },
    ],
    generate: (f) => `EMPLOYMENT CONTRACT

This Employment Contract ("Agreement") is entered into as of ${f.startDate || '[Start Date]'},
between ${f.employerName || '[Employer Name]'} ("Employer") and ${f.employeeName || '[Employee Name]'} ("Employee").

1. POSITION AND DUTIES
   The Employer agrees to employ the Employee as ${f.jobTitle || '[Job Title]'}, based at
   ${f.location || '[Location]'}. The Employee agrees to perform all duties associated with
   this role and any other reasonable duties assigned by the Employer.

2. COMMENCEMENT AND PROBATION
   Employment shall commence on ${f.startDate || '[Start Date]'}. The first ${f.probation || '3 months'}
   shall constitute a probationary period, during which either party may terminate this
   Agreement with 1 week's written notice.

3. COMPENSATION
   The Employer shall pay the Employee a monthly salary of ${f.salary || '[Salary]'}, payable
   at the end of each calendar month. Salary shall be subject to applicable tax deductions.

4. WORKING HOURS
   The Employee's normal working hours are ${f.workHours || '40 hours'} per week. The Employer may
   require additional hours when necessary, subject to applicable labour laws.

5. LEAVE AND BENEFITS
   The Employee is entitled to statutory annual leave as prescribed by law. Additional
   benefits, including health insurance and bonuses, shall be as agreed separately.

6. CONFIDENTIALITY
   The Employee shall not, during or after employment, disclose any confidential information,
   trade secrets, or proprietary data belonging to the Employer to any third party.

7. INTELLECTUAL PROPERTY
   Any work product, invention, or creation developed by the Employee in the course of
   employment shall be the sole property of the Employer.

8. TERMINATION
   Either party may terminate this Agreement by providing ${f.noticePeriod || '30 days'} written notice.
   The Employer may terminate immediately for gross misconduct or breach of this Agreement.

9. GOVERNING LAW
   This Agreement shall be governed by and construed in accordance with applicable law.
   Any disputes shall be resolved through good-faith negotiation or, if necessary, arbitration.

10. ENTIRE AGREEMENT
    This Agreement constitutes the entire understanding between the parties and supersedes
    all prior discussions or agreements relating to the subject matter herein.

IN WITNESS WHEREOF, the parties have executed this Agreement as of the date first written above.

EMPLOYER:                                    EMPLOYEE:
${f.employerName || '[Employer Name]'}                        ${f.employeeName || '[Employee Name]'}

Signature: ____________________              Signature: ____________________

Date: _________________________              Date: _________________________
`,
  },

  {
    id: 'lease',
    name: 'Lease Agreement',
    icon: '🏠',
    fields: [
      { key: 'landlordName',  label: 'Landlord Full Name',      placeholder: 'Jane Smith' },
      { key: 'tenantName',    label: 'Tenant Full Name',         placeholder: 'John Doe' },
      { key: 'propertyAddr',  label: 'Property Address',         placeholder: '123 Main St, New York, NY' },
      { key: 'rentAmount',    label: 'Monthly Rent',             placeholder: '$2,000' },
      { key: 'deposit',       label: 'Security Deposit',         placeholder: '$4,000' },
      { key: 'leaseStart',    label: 'Lease Start Date',         placeholder: 'February 1, 2026', type: 'date' },
      { key: 'leaseEnd',      label: 'Lease End Date',           placeholder: 'January 31, 2027', type: 'date' },
      { key: 'paymentDay',    label: 'Rent Due Day',             placeholder: '1st of each month' },
    ],
    generate: (f) => `RESIDENTIAL LEASE AGREEMENT

This Lease Agreement ("Agreement") is entered into between:
Landlord: ${f.landlordName || '[Landlord Name]'}
Tenant:   ${f.tenantName || '[Tenant Name]'}

1. PREMISES
   The Landlord agrees to lease to the Tenant the property located at:
   ${f.propertyAddr || '[Property Address]'}
   for residential purposes only.

2. LEASE TERM
   This lease shall commence on ${f.leaseStart || '[Start Date]'} and expire on
   ${f.leaseEnd || '[End Date]'}, unless terminated earlier in accordance with this Agreement.

3. RENT
   The Tenant agrees to pay a monthly rent of ${f.rentAmount || '[Rent Amount]'}, due on the
   ${f.paymentDay || '1st'} of each month. Payment shall be made by bank transfer or as
   otherwise agreed by both parties.

4. SECURITY DEPOSIT
   Upon signing, the Tenant shall pay a security deposit of ${f.deposit || '[Deposit Amount]'}.
   This deposit shall be returned within 30 days of lease termination, less any deductions
   for unpaid rent or damages beyond normal wear and tear.

5. UTILITIES AND MAINTENANCE
   The Tenant is responsible for all utility bills unless otherwise agreed in writing.
   The Tenant shall maintain the premises in good condition and promptly report any
   damage or repair needs to the Landlord.

6. ALTERATIONS
   The Tenant shall not make any structural alterations or improvements to the premises
   without prior written consent from the Landlord.

7. SUBLETTING
   The Tenant shall not sublet or assign any part of the premises without the prior
   written consent of the Landlord.

8. TERMINATION
   Either party may terminate this Agreement upon 30 days' written notice prior to
   the end of the lease term. Early termination may incur a penalty of one month's rent.

9. GOVERNING LAW
   This Agreement shall be governed by applicable tenancy law. Disputes shall be resolved
   through good-faith negotiation or, if necessary, a competent court or tribunal.

IN WITNESS WHEREOF, the parties have signed this Agreement.

LANDLORD:                                    TENANT:
${f.landlordName || '[Landlord Name]'}                        ${f.tenantName || '[Tenant Name]'}

Signature: ____________________              Signature: ____________________

Date: _________________________              Date: _________________________
`,
  },

  {
    id: 'freelance',
    name: 'Freelance Contract',
    icon: '💻',
    fields: [
      { key: 'clientName',    label: 'Client Name / Company',    placeholder: 'Acme Corp' },
      { key: 'freelancerName',label: 'Freelancer Full Name',      placeholder: 'Jane Doe' },
      { key: 'projectName',   label: 'Project Name',             placeholder: 'Website Redesign' },
      { key: 'projectDesc',   label: 'Project Description',      placeholder: 'Design and develop a 5-page website', type: 'textarea' },
      { key: 'totalFee',      label: 'Total Project Fee',        placeholder: '$3,000' },
      { key: 'deposit',       label: 'Upfront Deposit',          placeholder: '$1,000' },
      { key: 'deadline',      label: 'Project Deadline',         placeholder: 'March 31, 2026', type: 'date' },
      { key: 'revisions',     label: 'Number of Revisions',      placeholder: '3' },
    ],
    generate: (f) => `FREELANCE SERVICE AGREEMENT

This Freelance Service Agreement ("Agreement") is entered into between:
Client:     ${f.clientName || '[Client Name]'}
Freelancer: ${f.freelancerName || '[Freelancer Name]'}

1. PROJECT SCOPE
   The Freelancer agrees to deliver the following project:
   Project Name: ${f.projectName || '[Project Name]'}
   Description:  ${f.projectDesc || '[Project Description]'}

2. TIMELINE
   The Freelancer shall complete and deliver the project by ${f.deadline || '[Deadline]'}.
   Any extension of this deadline must be agreed upon in writing by both parties.

3. COMPENSATION
   The Client agrees to pay a total project fee of ${f.totalFee || '[Total Fee]'}.
   Payment Schedule:
   - Upfront deposit of ${f.deposit || '[Deposit]'} due upon signing this Agreement.
   - Remaining balance due upon final delivery and Client approval.

4. REVISIONS
   This Agreement includes up to ${f.revisions || '3'} rounds of revisions at no additional cost.
   Additional revisions beyond this limit will be billed at an agreed hourly rate.

5. INTELLECTUAL PROPERTY
   Upon receipt of full payment, all intellectual property rights to the final deliverables
   shall transfer to the Client. The Freelancer retains the right to display the work
   in their portfolio unless otherwise agreed.

6. CONFIDENTIALITY
   Both parties agree to keep confidential any proprietary information shared during
   the course of this project.

7. INDEPENDENT CONTRACTOR
   The Freelancer is an independent contractor and not an employee of the Client.
   The Freelancer is responsible for their own taxes and insurance.

8. CANCELLATION
   If the Client cancels this project after work has commenced, the upfront deposit is
   non-refundable. If the Freelancer is unable to complete the project, they shall
   refund any payments received for undelivered work.

9. GOVERNING LAW
   This Agreement shall be governed by applicable law. Disputes shall be resolved through
   good-faith negotiation or arbitration.

IN WITNESS WHEREOF, the parties have signed this Agreement.

CLIENT:                                      FREELANCER:
${f.clientName || '[Client Name]'}                            ${f.freelancerName || '[Freelancer Name]'}

Signature: ____________________              Signature: ____________________

Date: _________________________              Date: _________________________
`,
  },

  {
    id: 'nda',
    name: 'Non-Disclosure Agreement',
    icon: '🔒',
    fields: [
      { key: 'partyA',      label: 'Disclosing Party Name',    placeholder: 'Acme Corp' },
      { key: 'partyB',      label: 'Receiving Party Name',     placeholder: 'John Doe / Beta LLC' },
      { key: 'purpose',     label: 'Purpose of Disclosure',    placeholder: 'Discussing a potential business partnership', type: 'textarea' },
      { key: 'duration',    label: 'NDA Duration',             placeholder: '2 years' },
      { key: 'effectDate',  label: 'Effective Date',           placeholder: 'January 1, 2026', type: 'date' },
    ],
    generate: (f) => `NON-DISCLOSURE AGREEMENT (NDA)

This Non-Disclosure Agreement ("Agreement") is entered into as of ${f.effectDate || '[Effective Date]'},
between ${f.partyA || '[Disclosing Party]'} ("Disclosing Party") and
${f.partyB || '[Receiving Party]'} ("Receiving Party").

1. PURPOSE
   The parties wish to explore: ${f.purpose || '[Purpose]'}.
   In connection with this purpose, the Disclosing Party may share confidential information
   with the Receiving Party.

2. DEFINITION OF CONFIDENTIAL INFORMATION
   "Confidential Information" means any non-public information disclosed by the Disclosing
   Party, whether orally, in writing, or by any other means, that is designated as
   confidential or that reasonably should be understood to be confidential.

3. OBLIGATIONS
   The Receiving Party agrees to:
   a) Keep all Confidential Information strictly confidential;
   b) Not disclose Confidential Information to any third party without prior written consent;
   c) Use Confidential Information solely for the purpose stated above;
   d) Protect the Confidential Information with at least the same degree of care used
      to protect its own confidential information.

4. EXCLUSIONS
   This Agreement does not apply to information that:
   a) Is or becomes publicly available through no fault of the Receiving Party;
   b) Was already known to the Receiving Party before disclosure;
   c) Is independently developed by the Receiving Party without use of Confidential Information;
   d) Is required to be disclosed by law or court order.

5. DURATION
   This Agreement shall remain in effect for ${f.duration || '2 years'} from the effective date.
   Upon expiration or termination, the Receiving Party shall destroy or return all
   Confidential Information upon request.

6. REMEDIES
   The Receiving Party acknowledges that any breach of this Agreement may cause irreparable
   harm and that the Disclosing Party may seek injunctive relief in addition to any
   other remedies available at law.

7. GOVERNING LAW
   This Agreement shall be governed by applicable law.

IN WITNESS WHEREOF, the parties have signed this Agreement.

DISCLOSING PARTY:                            RECEIVING PARTY:
${f.partyA || '[Disclosing Party]'}                           ${f.partyB || '[Receiving Party]'}

Signature: ____________________              Signature: ____________________

Date: _________________________              Date: _________________________
`,
  },

  {
    id: 'sales',
    name: 'Sales Contract',
    icon: '🤝',
    fields: [
      { key: 'sellerName',   label: 'Seller Name / Company',   placeholder: 'Acme Corp' },
      { key: 'buyerName',    label: 'Buyer Name / Company',    placeholder: 'John Doe' },
      { key: 'itemDesc',     label: 'Item / Product Description', placeholder: 'Used MacBook Pro 2023', type: 'textarea' },
      { key: 'price',        label: 'Sale Price',              placeholder: '$1,500' },
      { key: 'paymentMethod',label: 'Payment Method',          placeholder: 'Bank transfer' },
      { key: 'deliveryDate', label: 'Delivery Date',           placeholder: 'February 15, 2026', type: 'date' },
      { key: 'saleDate',     label: 'Date of Sale',            placeholder: 'January 20, 2026', type: 'date' },
    ],
    generate: (f) => `SALES CONTRACT

This Sales Contract ("Agreement") is entered into on ${f.saleDate || '[Sale Date]'},
between ${f.sellerName || '[Seller Name]'} ("Seller") and ${f.buyerName || '[Buyer Name]'} ("Buyer").

1. DESCRIPTION OF GOODS
   The Seller agrees to sell and the Buyer agrees to purchase the following:
   ${f.itemDesc || '[Item Description]'}

2. PURCHASE PRICE
   The total purchase price is ${f.price || '[Price]'}, payable via ${f.paymentMethod || '[Payment Method]'}.
   Full payment is due on or before the date of delivery.

3. DELIVERY
   The Seller shall deliver the goods to the Buyer on or before ${f.deliveryDate || '[Delivery Date]'}.
   Risk of loss or damage shall transfer to the Buyer upon delivery.

4. CONDITION OF GOODS
   The Seller warrants that the goods are as described and free from any undisclosed defects.
   The Buyer accepts the goods in their current condition upon delivery.

5. TITLE
   Title to the goods shall transfer to the Buyer upon receipt of full payment.

6. RETURNS
   Unless otherwise agreed in writing, all sales are final. No returns or refunds
   shall be accepted after delivery unless the goods are found to be materially
   different from the description in Section 1.

7. GOVERNING LAW
   This Agreement shall be governed by applicable law.

IN WITNESS WHEREOF, the parties have signed this Agreement.

SELLER:                                      BUYER:
${f.sellerName || '[Seller Name]'}                            ${f.buyerName || '[Buyer Name]'}

Signature: ____________________              Signature: ____________________

Date: _________________________              Date: _________________________
`,
  },

  {
    id: 'partnership',
    name: 'Partnership Agreement',
    icon: '🏢',
    fields: [
      { key: 'partner1',      label: 'Partner 1 Name',          placeholder: 'Alice Johnson' },
      { key: 'partner2',      label: 'Partner 2 Name',          placeholder: 'Bob Smith' },
      { key: 'businessName',  label: 'Business Name',           placeholder: 'Johnson & Smith LLC' },
      { key: 'businessDesc',  label: 'Business Description',    placeholder: 'Digital marketing agency', type: 'textarea' },
      { key: 'split1',        label: 'Partner 1 Profit Share',  placeholder: '50%' },
      { key: 'split2',        label: 'Partner 2 Profit Share',  placeholder: '50%' },
      { key: 'startDate',     label: 'Partnership Start Date',  placeholder: 'January 1, 2026', type: 'date' },
      { key: 'capital',       label: 'Initial Capital',         placeholder: '$10,000 each' },
    ],
    generate: (f) => `PARTNERSHIP AGREEMENT

This Partnership Agreement ("Agreement") is entered into on ${f.startDate || '[Start Date]'},
between ${f.partner1 || '[Partner 1]'} and ${f.partner2 || '[Partner 2]'}
(collectively referred to as the "Partners").

1. BUSINESS NAME AND PURPOSE
   The Partners agree to operate a business under the name: ${f.businessName || '[Business Name]'}
   Business Description: ${f.businessDesc || '[Description]'}

2. CAPITAL CONTRIBUTIONS
   Each partner shall contribute the following initial capital: ${f.capital || '[Capital Amount]'}
   Additional contributions may be agreed upon in writing as needed.

3. PROFIT AND LOSS SHARING
   Profits and losses shall be distributed as follows:
   ${f.partner1 || 'Partner 1'}: ${f.split1 || '50%'}
   ${f.partner2 || 'Partner 2'}: ${f.split2 || '50%'}
   Distributions shall be made quarterly unless otherwise agreed.

4. MANAGEMENT AND DECISION MAKING
   Both partners shall have equal authority in day-to-day management decisions.
   Major decisions (investments over $5,000, new contracts, loans) require
   unanimous written consent of all partners.

5. BANKING
   A joint business bank account shall be maintained. All business transactions
   shall be conducted through this account. Any withdrawal above $1,000 requires
   both partners' authorisation.

6. DUTIES
   Each partner agrees to dedicate their best efforts to the business and act in
   good faith toward the other partner and the business at all times.

7. DISSOLUTION
   The partnership may be dissolved by mutual written agreement, or upon 60 days'
   written notice by either partner. Upon dissolution, assets shall be liquidated
   and distributed according to profit-sharing ratios after settling all liabilities.

8. DISPUTE RESOLUTION
   Disputes shall first be addressed through good-faith negotiation. If unresolved
   within 30 days, parties agree to seek mediation before pursuing legal action.

9. GOVERNING LAW
   This Agreement shall be governed by applicable law.

IN WITNESS WHEREOF, the partners have signed this Agreement.

PARTNER 1:                                   PARTNER 2:
${f.partner1 || '[Partner 1]'}                                ${f.partner2 || '[Partner 2]'}

Signature: ____________________              Signature: ____________________

Date: _________________________              Date: _________________________
`,
  },
]
