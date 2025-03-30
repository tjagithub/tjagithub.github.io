'use client';
import { Github, Mail, Twitter, X, Twitch } from 'lucide-react';
import Link from 'next/link';
import { Navigation } from '../components/nav';
import { Card } from '../components/card';

const socials = [
  {
    key: 0,
    icon: <Twitter size={20} />,
    href: 'https://twitter.com/_tja',
    label: 'Twitter',
    handle: '@_tja',
  },
  {
    key: 1,
    icon: <Github size={20} />,
    href: 'https://github.com/tjagithub',
    label: 'Github',
    handle: 'tjagithub',
  },
];

/**
 * Profiles
 * @description Generates a grid of profiles, containing social media links.
 * @returns JSX.Element
 */
export default function Profiles() {
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-2 mx-auto">
        <div className="grid w-full grid-cols-1 gap-3 mx-auto mt-16 sm:mt-0 sm:grid-cols-3 lg:gap-8 2xl:gap-2">
          {socials.map((s) => (
            <Card>
              <Link
                href={s.href}
                target="_blank"
                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
              >
                <span
                  className="absolute w-px h-1/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center justify-center w-8 h-8 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                  {s.icon}
                </span>{' '}
                <div className="z-10 flex flex-col items-center">
                  <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                    {s.handle}
                  </span>
                  <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {s.label}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
