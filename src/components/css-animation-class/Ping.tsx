export default function Ping() {
    return (
        <div className="flex h-screen w-full items-center justify-center">
            <div className="relative flex">
                <span className="absolute size-3 animate-ping rounded-full bg-sky-400"></span>
                <span className="size-3 rounded-full bg-sky-500"></span>
            </div>
        </div>
    );
}
