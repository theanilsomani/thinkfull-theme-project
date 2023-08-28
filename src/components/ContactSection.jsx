import React from 'react'
import Container from './Container'
import FadeIn from './FadeIn'
import Button from './Button'

const ContactSection = () => {
    return (
        <Container className='mt-24 sm:mt-32  lg:mt-40 items-center max-w-5xl px-6'>
            <FadeIn className='mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12'>
                <div className=" flex flex-col items-center">
                    <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
                        Tell us about your projects
                    </h2>
                    <div className="mt-6">
                        <Button href={'/contact'} invert className='px-5 py-3 '>
                            Say Hello
                        </Button>
                    </div>
                </div>
            </FadeIn>
        </Container>
    )
}

export default ContactSection