import Link from "next/link";
import clsx from "clsx";
import { BsFacebook, BsTwitter, BsGithub, BsYoutube, BsLinkedin, BsInstagram } from 'react-icons/bs';

export const SocialMediaProfiles = [
    {
        title: 'Youtube',
        href: 'https://youtube.com',
        icon: BsYoutube,
    },
    {
        title: 'Github',
        href: 'https://github.com',
        icon: BsGithub,
    },
    {
        title: 'Instagram',
        href: 'https://instagram.com',
        icon: BsInstagram,
    },
    {
        title: 'Facebook',
        href: 'https://facebook.com',
        icon: BsFacebook,
    },
    {
        title: 'Twitter',
        href: 'https://x.com',
        icon: BsTwitter,
    },];

const SocialMedia = ({ className, invert = false }) => {
    return (
        <ul role="list" className={clsx('flex gap-x-10', invert ? 'text-white' : 'text-neutral-950', className)}>
            {SocialMediaProfiles.map((item) => (
                <li key={item.title}>
                    <Link href={item.href} aria-label={item.title}
                        className={clsx('transition', invert ? 'hover:text-neutral-200' : 'hover:text-neutral-700')}>
                        <item.icon className='h-6 w-6 fill-current' />
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default SocialMedia;