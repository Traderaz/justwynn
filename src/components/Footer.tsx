import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Support", href: "/support" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-[#0B0D10]/95 backdrop-blur-sm border-t border-casino-gold/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <Link 
              href="/" 
              className="text-xl text-casino-gold font-bold tracking-wide mb-2 hover:text-casino-gold/80 transition-colors"
              style={{ 
                fontFamily: 'var(--font-space-grotesk)',
                textShadow: '0 0 10px rgba(245, 158, 11, 0.3)'
              }}
            >
              JUSTWYNN
            </Link>
            <p className="text-[#A6B0BF] text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
              © {currentYear} JUSTWYNN. All rights reserved.
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#A6B0BF] hover:text-casino-gold transition-colors duration-300 text-sm"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-casino-gold/10">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-[#A6B0BF]">
            <p className="mb-2 md:mb-0" style={{ fontFamily: 'var(--font-inter)' }}>
              The gamified launchpad where every launch fuels The House
            </p>
            <p style={{ fontFamily: 'var(--font-inter)' }}>
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
