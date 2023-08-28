import React from 'react'
import SectionIntro from './SectionIntro'
import Container from './Container'
import FadeIn from './FadeIn'
import StyleImage from './StyleImage'
import imageLaptop from "../images/laptop.jpg";
import List, { ListItem } from './List'

const Services = () => {
    return (
        <>
            <SectionIntro eyebrow='Services' title='We help you identify, explore and respond to new opportunities.' className='my-24 sm:mt-32 lg:mt-40'>
                <p>
                    As long as those opportunities involve giving us money to re-purpose old projects — we can come up with an endless number of those.
                </p>
            </SectionIntro>

            <Container className='mt-16 items-center'>
                <div className='lg:flex lg:items-center lg:justify-end'>
                    <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
                        <FadeIn className="w-[33.75rem] flex-none lg:w-[40rem]">
                            <StyleImage src={imageLaptop} sizes="(min-width: 1024px) 41rem, 31rem" className="justify-center lg:justify-end" />
                        </FadeIn>
                    </div>
                    {/* List items */}
                    <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
                        <ListItem title='Web developement'>
                            As long as those opportunities involve giving us money to re-purpose old projects — we can come up with an endless number of those.
                        </ListItem>
                        <ListItem title="Application development">
                            We have a team of skilled developers who are experts in the latest
                            app frameworks, like Angular 1 and Google Web Toolkit.
                        </ListItem>
                        <ListItem title="E-commerce">
                            We are at the forefront of modern e-commerce development. Which
                            mainly means adding your logo to the Shopify store template we’ve
                            used for the past six years.
                        </ListItem>
                        <ListItem title="Custom content management">
                            At Studio we understand the importance of having a robust and
                            customised CMS. That’s why we run all of our client projects out
                            of a single, enormous Joomla instance.
                        </ListItem>
                    </List>
                </div>
            </Container>

        </>
    )
}

export default Services