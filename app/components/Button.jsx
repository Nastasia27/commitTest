const Button = ({ variant = "primary", size = "lg", disabled = false, text, onClick , className}) => {
    const baseStyle = {className};
    
    const variants = {
      primary: "bg-none hover:bg-[#F7F5F5] border-[#F7F5F5] border-[2px] flex items-center justify-center rounded-full text-[#F7F5F5] hover:text-[#E3000B]",
      secondary: "bg-gray-500 hover:bg-gray-700 text-white focus:ring-gray-500",
      danger: "bg-red-500 hover:bg-red-700 text-white focus:ring-red-500",
    };
  
    const sizes = {
      sm: "text-sm py-1 px-2",
      lg: "h-[64px] w-[180px] lg:w-[227px]  text-2xl uppercase font-extrabold ",
    };
  
    const disabledStyle = "opacity-50 cursor-not-allowed";
  
    const chosenVariant = variants[variant] || variants.primary;
    const chosenSize = sizes[size] || sizes.md;
  
    return (
      <button
        className={`${baseStyle} ${chosenVariant} ${chosenSize} ${disabled ? disabledStyle : ""}`}
        disabled={disabled}
        onClick={onClick}
      >
        {text}
      </button>
    );
  };
  
  export default Button;