import Loading from "@/components/css-animation-class/Loading";

export default function LoadingIndicator() {
    return (
        <div className="flex h-screen items-center justify-center gap-2">
            <div className="relative flex h-8 w-8 animate-spin">
                <Loading />
            </div>
            <span>로딩중...</span>
        </div>
    );
}
