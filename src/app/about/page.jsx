import ContactSection from '@/components/ContactSection'
import Container from '@/components/Container'
import PageIntro from '@/components/PageIntro'
import { StatList, StatListItems } from '@/components/StatList'
import React from 'react'

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow='About us' title='Our strength is collaboration'>
        <p>We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.</p>
        <div className='mt-10 max-w-2xl space-y-6 text-base'>
          <p>Thinkfull as started by two brothers who noticed that developer studios were charging clients double what an in-house team would cost. Since the beginning, we have been committed to doing things differently by charging triple instead.</p>
          <p>
            At Studio, we’re more than just colleagues — we’re a family. This means we pay very little and expect people to work late. We want our employees to bring their whole selves to work. In return, we just ask that they keep themselves there until at least 6:30pm.
          </p>
        </div>
      </PageIntro>
      <Container className='mt-16'>
        <StatList>
          <StatListItems value='2' lable='Underpaid employee' />
          <StatListItems value='2' lable='Launched Products' />
          <StatListItems value='1000s' lable='Hour Worked' />
        </StatList>
      </Container>
      <ContactSection />
    </>
  )
}

export default AboutPage