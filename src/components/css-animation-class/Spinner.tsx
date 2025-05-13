export default function Spinner() {
    return (
        <div className="flex h-screen w-full items-center justify-center">
            <div>
                <img
                    className="animate-spin rounded-full"
                    width={100}
                    height={100}
                    src="https://i.namu.wiki/i/sYSJY7DwDYvqCrRvxzAgqpbm7EQzxE6jKPBhRBJGLwRzWvA-uj3YEQjgAVfR1snu3tian_0NYAtv2b06664WkA.webp"
                    alt="image"
                />
                <span>내 친구 페페</span>
            </div>
        </div>
    );
}
