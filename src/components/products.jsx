import logopictureperfectai from '../images/products/picture-perfect-ai/logo-picture-perfect-ai.svg'
import logogravityblogs from '../images/products/gravityblogs/gravityblogs.svg'
import Container from './Container'
import FadeIn, { FadeInStagger } from './FadeIn'
import Image from 'next/image'


const products = [
    ['PicturePerfectAI', logopictureperfectai],
    ['GravityBlogs', logogravityblogs],
    // ['Ahrefs DR & Rank Checker', ]
]

const Products = () => {
    return (
        <div className='mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56'>
            <Container>
                <FadeIn className='flex items-center gap-x-8'>
                    <h2 className='text-center font-display text-lg font-semibold tracking-wider text-white sm:text-left'>
                        Take a look at the products we have build.
                    </h2>
                    <div className='h-px flex-auto bg-neutral-200' />
                </FadeIn>
                <FadeInStagger faster>
                    <ul role='list' className='mt-10 grid grid-cols-3 gap-x-8 gap-y-10 lg:grid-cols-3'>
                        {
                            products.map(([product, logo]) => (
                                <li key={product}>
                                    <FadeIn>
                                        <Image src={logo} alt={product} unoptimized />
                                    </FadeIn>
                                </li>
                            ))}
                        <h1 className='text-white text-2xl'>Ahrefs DR & Rank Checker</h1>
                    </ul>
                </FadeInStagger>
            </Container>
        </div>
    )
}

export default Products