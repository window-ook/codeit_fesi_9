export default function Shake() {
    return (
        <div className="flex h-screen items-center justify-center gap-2">
            <button className="animate-shake rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                흔들리는 버튼
            </button>
        </div>
    );
}
