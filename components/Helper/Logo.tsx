import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="#home"
      className="flex items-center gap-2 group"
      aria-label="Home"
    >
      <div
        className="relative w-10 h-10 rounded-xl overflow-hidden
          group-hover:scale-105 transition-transform duration-200"
      >
        <Image
          src="/images/coding1.png"
          alt="Logo"
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover"
          priority
        />
      </div>
    </Link>
  );
};

export default Logo;
