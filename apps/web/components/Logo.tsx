'use client';

import Link from 'next/link';
import Image from 'next/image';

type LogoSize = 'sm' | 'md' | 'lg';

interface LogoProps {
  size?: LogoSize;
  showTagline?: boolean;
  link?: boolean;
  className?: string;
}

const sizeConfig = {
  sm: {
    image: 'w-8 h-8',
    title: 'text-base',
    tagline: 'text-[10px]',
  },
  md: {
    image: 'w-9 h-9',
    title: 'text-[17px]',
    tagline: 'text-[11px]',
  },
  lg: {
    image: 'w-11 h-11',
    title: 'text-xl',
    tagline: 'text-xs',
  },
} as const;

const Logo = ({
  size = 'md',
  showTagline = true,
  link = true,
  className = '',
}: LogoProps) => {
  const config = sizeConfig[size];

  const imageSize =
    size === 'sm' ? 32 : size === 'md' ? 36 : 44;

  const logoContent = (
    <div
      className={`flex items-center gap-2.5 group ${className}`}
    >
      {/* Logo Image */}
      <div className="relative flex-shrink-0">
        <Image
          src="/logo.png"
          alt="Spurvance Labs Logo"
          width={imageSize}
          height={imageSize}
          priority
          className={`${config.image} object-contain transition-transform duration-300 group-hover:scale-105`}
        />
      </div>

      {/* Text */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-bold ${config.title} tracking-[-0.02em]`}
        >
          <span className="text-blue-600 dark:text-blue-400">
            Spurvance
          </span>

          <span className="text-gray-900 dark:text-gray-100">
            Labs
          </span>
        </span>

        {showTagline && (
          <span
            className={`${config.tagline} text-gray-500 dark:text-gray-400 font-medium mt-1`}
          >
            Building Digital Pakistan
          </span>
        )}
      </div>
    </div>
  );

  if (!link) return logoContent;

  return (
    <Link
      href="/"
      aria-label="Spurvance Labs Home"
      prefetch={false}
    >
      {logoContent}
    </Link>
  );
};

export default Logo;