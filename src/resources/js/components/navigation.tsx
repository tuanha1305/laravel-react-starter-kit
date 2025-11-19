export const Navigation = () => {
  const navItems = [
    "GUIDES",
    "BUY SOURCE CODES",
    "BUY APPS",
    "SELL",
    "HIRE DEVELOPER",
  ];

  return (
    <nav className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <ul className="flex items-center justify-center gap-6 h-12 overflow-x-auto">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-sm font-medium whitespace-nowrap hover:opacity-80 transition-opacity"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
