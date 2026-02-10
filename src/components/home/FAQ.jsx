import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useFadeUp } from '../../hooks/useGSAP'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

const faqs = [
  {
    q: 'Do I need a real estate attorney to buy property in Dominican Republic?',
    a: 'It is crucial to pursue legal advice with a reputable real estate lawyer in the Dominican Republic to perform the property verification or due diligence and ensure you receive the title deed of the property to your name so you do not lose possession of your property. It often happens that the realtor and/or the seller pressure the buyer into a hurried closing despite the advice of legal counsel. It is imperative that an attorney performs a complete title search, including the chain of ownership to ensure the seller has the right to sell, and that no others are awaiting to take possession of the property. This search will also reveal any taxes owed or liens.',
  },
  {
    q: 'What do real estate lawyers do?',
    a: 'Real estate lawyers advise the parties in a real estate operation, making sure to complete all the necessary procedures during the purchase or sale of a property. A competent real estate lawyer is knowledgeable and must know the practices, intricacies and customs of the Dominican real estate market and if you do not speak Spanish, it is preferable that you hire a bilingual lawyer.',
  },
  {
    q: 'Can foreigners buy property in Dominican Republic?',
    a: 'There are no restrictions on foreign individuals or companies owning or leasing real estate in the Dominican Republic. The process for purchasing real estate for foreigners is exactly the same as for Dominicans.',
  },
  {
    q: 'How much are property taxes in Dominican Republic?',
    a: 'A 1% annual tax is assessed on real estate properties owned by individuals, based on the cumulative value of all the properties as appraised by government authorities. The 1% is calculated only for values exceeding US$160,000.00. Properties are valued without taking into consideration any furniture or equipment to be found in them. So, if you only have one property and it is worth less than US$160,000.00 you won\'t pay any property tax. Also, if the property you choose applies for the Tourism Incentive Law No. 158-01 (CONFOTUR) you will not pay the annual real estate tax for 15 years.',
  },
  {
    q: 'How long can I stay in Dominican Republic?',
    a: 'You can stay in the country up to 30 days but you can extend your stay up to 120 days by paying an additional fee upon departure.',
  },
  {
    q: 'What are the benefits of buying a property that has the Confotur tax benefits?',
    a: 'The properties that have the benefit of CONFOTUR (Law #158-01) are exempt from the payment of the 3% transfer tax and from the annual real estate tax (1%) for 15 years.',
  },
  {
    q: 'How long does it take to close on a house in Punta Cana, Dominican Republic?',
    a: 'Although the real estate closing timeline varies case by case, typically you can expect closing on a property to take 60–90 days.',
  },
  {
    q: 'Is it safe to invest in a pre-construction sale in Punta Cana, Dominican Republic?',
    a: 'Yes, but there are certain risks that come with it. You\'re trusting your money to the developer so it is very important to conduct a due diligence on the developer by checking licenses/permits etc., reviewing past projects completed by this company, before finally confirming if it is legit. Hiring a real estate lawyer in the Dominican Republic to review and make sure the contract is solid is essential.',
  },
  {
    q: 'Does the buyer need to be present for the real estate closing?',
    a: 'No, it is not necessary for either the buyer or the seller to be present during a real estate closing. A real estate lawyer with a Power of Attorney (POA) can handle all necessary paperwork and verify monetary transactions.',
  },
  {
    q: 'How much are the legal fees when buying a house in Dominican Republic?',
    a: 'Real Estate Lawyers\'s fees in Dominican Republic are normally based on a percentage of the purchase price of the property, which range between 1% up to 1.5% depending on the property. Make sure that the lawyer you choose is fluent in English or the language you speak, so there are no misunderstandings.',
  },
  {
    q: 'What are the closing costs in Dominican Republic?',
    a: 'Real Estate Closing Costs in Dominican Republic will vary depending on the property value and if the property applies for the CONFOTUR Tourism Incentive Law No. 158-01. If the property applies for CONFOTUR, you can expect spending only 1–1.5% of the property purchase price in closing costs. If it doesn\'t, you can expect spending up to 5% of the purchase price. This will include attorney fees, transfer tax, notary fees, stamps, checks, and any other diverse closing costs.',
  },
  {
    q: 'Can real estate be inherited in Dominican Republic?',
    a: 'Foreigners can inherit real estate in the Dominican Republic with no restrictions. Inheritance taxes have been recently lowered to 3% of the appraised value of the estate.',
  },
]

function AccordionItem({ faq, index, isOpen, onToggle }) {
  return (
    <div className="border-b border-navy/10">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left focus-visible:ring-2 focus-visible:ring-gold rounded-lg group"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-navy pr-4 group-hover:text-gold transition-colors">
          {index + 1}. {faq.q}
        </span>
        <ChevronDown
          size={18}
          className={`text-gold flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-body/70 text-sm leading-relaxed">{faq.a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const ref = useFadeUp()

  return (
    <section ref={ref} className="py-24 bg-soft-white" id="faq">
      <Container>
        <SectionHeading
          title="Got Questions? Get Professional Legal Advice"
        />

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
