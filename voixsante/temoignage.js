import React from 'react';
import { User, Bell, Search } from 'lucide-react';

const WebsiteHeader = () => {
  return (
    <header className="relative w-full h-[500px]">
      <BackgroundImage />
      <Navigation />
      <HeaderContent />
    </header>
  );
};

const BackgroundImage = () => (
  <div 
    className="absolute inset-0 bg-cover bg-center z-0" 
    style={{
      backgroundImage: 'url("/api/placeholder/1920/500")', 
      backgroundPosition: 'center bottom'
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
  </div>
);

const Navigation = () => (
  <nav className="relative z-10 flex justify-between items-center px-8 py-4">
    <Logo />
    <NavLinks />
    <NavIcons />
  </nav>
);

const Logo = () => (
  <div className="text-white text-2xl font-bold">Gooven</div>
);

const NavLinks = () => (
  <ul className="flex space-x-6 text-white">
    {['Home', 'Discover', 'Services', 'About'].map((link) => (
      <li key={link}>
        <a href="#" className="hover:text-orange-500 transition">{link}</a>
      </li>
    ))}
  </ul>
);

const NavIcons = () => (
  <div className="flex items-center space-x-4 text-white">
    <IconButton icon={<Search size={24} />} />
    <IconButton icon={<Bell size={24} />} />
    <LoginButton />
  </div>
);

const IconButton = ({ icon }) => (
  <button className="hover:text-orange-500 transition">
    {icon}
  </button>
);

const LoginButton = () => (
  <button className="flex items-center space-x-2 bg-orange-500 px-4 py-2 rounded-full hover:bg-orange-600 transition">
    <User size={20} />
    <span>Login</span>
  </button>
);

const HeaderContent = () => (
  <div className="relative z-10 text-center text-white pt-16">
    <h1 className="text-5xl font-bold mb-4">Welcome to Gooven</h1>
    <p className="text-xl mb-8">Discover amazing experiences in your city</p>
    <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full transition">
      Get Started
    </button>
  </div>
);

export default WebsiteHeader;