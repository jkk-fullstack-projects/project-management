export default function Button({children, ...props}) {
    return (
        <button 
            className="px-4 py-2 text-xs md:text-base rounded-md 
                bg-blue-600 text-stone-300 hover:bg-blue-700 hover:text-stone-100
                disabled:bg-blue-300 disabled:text-stone-500 disabled:pointer-events-none"
            {...props}
        >
            {children}
        </button>

    )
}