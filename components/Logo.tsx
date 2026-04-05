/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (c) 2026 Spurvance Labs
 *
 * Open-source software provided by Spurvance Labs.
 * See LICENSE file for details.
 */
'use client';

import Link from "next/link";
import Image from "next/image";

type LogoSize = "sm" | "md" | "lg";

interface LogoProps {
  size?: LogoSize;
  showTagline?: boolean;
  link?: boolean;
  className?: string;
}

const sizeConfig = {
  sm: { image: "w-8 h-8", title: "text-base", tagline: "text-[10px]" },
  md: { image: "w-10 h-10", title: "text-lg", tagline: "text-xs" },
  lg: { image: "w-12 h-12", title: "text-xl", tagline: "text-xs" }
} as const;

const Logo = ({ 
  size = "md", 
  showTagline = true, 
  link = true,
  className = "" 
}: LogoProps) => {
  const config = sizeConfig[size];

  const logoContent = (
    <div className={`flex items-center gap-3 group ${className}`}>
      {/* Logo Image */}
      <div className="relative flex-shrink-0">
        <Image
          src="/logo.png"
          alt="Spurvance Labs Logo"
          width={size === "sm" ? 32 : size === "md" ? 40 : 48}
          height={size === "sm" ? 32 : size === "md" ? 40 : 48}
          className={`${config.image} object-contain transition-all duration-300 group-hover:scale-105 group-hover:rotate-3`}
          priority
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col">
        <span className={`font-bold ${config.title} tracking-tight`}>
          <span className="text-blue-600 dark:text-blue-400">Spurvance</span>
          <span className="text-gray-800 dark:text-gray-200">Labs</span>
        </span>

        {showTagline && (
          <span className={`${config.tagline} text-gray-500 dark:text-gray-400 font-medium`}>
            Building Digital Pakistan
          </span>
        )}
      </div>
    </div>
  );

  if (!link) return logoContent;

  return (
    <Link href="/" aria-label="Spurvance Labs - Home" prefetch={false}>
      {logoContent}
    </Link>
  );
};

export default Logo;