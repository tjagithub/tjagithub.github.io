import Link from 'next/link';
import React from 'react';
import Particles from './components/particles';

const navigation = [
  { name: 'Projects', href: 'https://github.com/tjagithub?tab=repositories' },
  { name: 'Contact', href: '/contact' },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm duration-250 text-zinc-700 hover:text-zinc-300">
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
      <h1 className="z-5 text-6xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-6xl whitespace-nowrap bg-clip-text ">
        TJ APPLEBY
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          I'm a software tester and developer interested in open source, AI, and automation.
        </h2>
      </div>
    </div>
  );
}
