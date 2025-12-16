
const Menu = () => {
  return (
    <div className="group w-8 h-6 flex flex-col justify-between items-start cursor-pointer">
      <span className="block h-px w-full bg-black group-hover:animate-lineGrow group-hover:[animation-delay:0s]" />
      <span className="block h-px w-full bg-black group-hover:animate-lineGrow group-hover:[animation-delay:0.12s]" />
      <span className="block h-px w-full bg-black group-hover:animate-lineGrow group-hover:[animation-delay:0.24s]" />
    </div>
  );
};

export default Menu;
