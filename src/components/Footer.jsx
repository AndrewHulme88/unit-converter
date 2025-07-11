function Footer() {
  return (
    <footer className="text-sm text-gray-500 text-center pt-6 border-t border-gray-300 w-full max-w-xl mx-auto">
      © {new Date().getFullYear()} MoonFall Software. All rights reserved.
      <br />
      <a
        href="https://github.com/YOUR_USERNAME/unit-converter"
        target="_blank"
        rel="noopener noreferrer"
        className="text-emerald-600 hover:underline"
      >
        View on GitHub
      </a>
    </footer>
  );
}

export default Footer;
