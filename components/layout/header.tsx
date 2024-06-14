import ThemeToggle from '@/components/layout/ThemeToggle/theme-toggle';
import { cn } from '@/lib/utils';
import { MobileSidebar } from './mobile-sidebar';
import { UserNav } from './user-nav';
import Link from 'next/link';
import { Package2, Search } from 'lucide-react';
import { Button } from '../ui/button';
import Image from 'next/image';


export default function Header() {
  return (
    <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
      <nav className="flex h-14 items-center justify-between px-4">
        <div className="hidden lg:flex items-center gap-2 ">
          <Link
            className="flex items-center gap-1"
            href="/"
          >
             <Image alt="Osho pedia nepal" src="/logo.png" height="50" width="120"/> 
            
          </Link>
        </div>
        <div className={cn('block lg:!hidden')}>
          <MobileSidebar />
        </div>
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="/about-osho"
            className="text-foreground transition-colors hover:text-foreground"
          >
            Biography of Osho
          </Link>
          <Link
            href="/meditation"
            className="text-foreground transition-colors hover:text-foreground"
          >
            Meditation
          </Link>
        </nav>
        {/* <div className="flex-grow flex justify-center">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300">
              <Search size={20} />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 bg-white dark:bg-gray-800 h-10 pl-10 pr-4 rounded-lg text-sm focus:outline-none w-full"
            />
          </div>
        </div> */}

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {/* <Button>
            <span>Login</span>
          </Button> */}
        </div>
      </nav>
    </div>
  );
}
