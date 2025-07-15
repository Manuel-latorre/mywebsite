
const Ripple = () => {
    return (
        <div className="relative flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-500"></span>
            </span>
        </div>
    )
}

export default Ripple