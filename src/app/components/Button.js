export default function Button({ children, onClick, type = 'button', className = '' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-6 py-3
        bg-gradient-to-r from-blue-500 to-pink-600 
        text-white font-semibold 
        rounded-lg shadow-md 
        hover:from-blue-600 hover:to-pink-700 
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 
        transform transition-transform duration-200 ease-in-out
        hover:scale-105 active:scale-95
        ${className}
      `}
    >
      {children}
    </button>
  );
}
