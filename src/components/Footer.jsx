import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 text-center border-t border-white/10 mt-10">
      <p className="text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Rifat Hossain. Designed & Built with passion.
      </p>
    </footer>
  );
};

export default Footer;
