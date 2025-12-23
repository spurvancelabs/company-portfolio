import { Link } from "react-router-dom";

type LogoSize = "sm" | "md" | "lg";

interface LogoProps {
  size?: LogoSize;
  showTagline?: boolean;
  link?: boolean;
}

const Logo = ({
  size = "md",
  showTagline = true,
  link = true,
}: LogoProps) => {
  const sizes: Record<LogoSize, string> = {
    sm: "w-10 h-10",
    md: "w-14 h-14",
    lg: "w-20 h-20"
  };

  const logoContent = (
    <div className="flex items-center space-x-3 group">
      <img
        src="/logo.png"
        alt="Spurvance Labs Logo"
        className={`${sizes[size]} object-contain transition-transform duration-300 group-hover:scale-105`}
      />

      <div className="flex flex-col leading-tight">
        <span className="text-lg font-bold text-gray-900">
          <span className="text-blue-600">Spurvance</span>
          <span className="text-gray-700">Labs</span>
        </span>

        {showTagline && (
          <span className="text-xs text-gray-500 font-medium">
            Building Digital Pakistan
          </span>
        )}
      </div>
    </div>
  );

  if (!link) return logoContent;

  return (
    <Link to="/" aria-label="Spurvance Labs - Home">
      {logoContent}
    </Link>
  );
};

export default Logo;
