'use client'
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {HiHome, HiChatBubbleBottomCenterText , HiEnvelope, HiUser, HiRectangleGroup, HiViewColumns , } from 'react-icons/hi2';


//  links
const links = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const route = useRouter();
  const pathName = usePathname();
  return <nav className='flex flex-col items-center md:justify-center  gap-y-4 fixed  left-0 right-0 bottom-0 h-auto  mt-auto md:right-[2%] z-50 top-0 w-full md:w-16 md:max-w-md md:h-screen'>
    <div className='flex w-full md:flex-col items-center justify-between md:justify-center gap-y-10 px-4  md:px-0 h-[80px] md:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl md:text-xl md:rounded-full'>
    {links.map((link, index) => {
      return <Link href={link.path} key={index} className={`${link.path === pathName && 'text-accent'}` }>
        {link.icon}
        </Link>
        <div>

        </div>
    })}
    </div>
  </nav>;
};

export default Nav;
