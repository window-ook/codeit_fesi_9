export default function Buttons() {
    return (
        <div className='flex justify-center gap-4'>
            <button className='px-6 py-1 rounded-md bg-blue-600 text-white'>Default</button>
            <button className='px-6 py-1 rounded-md border-1 border-black bg-white'>Alternative</button>
            <button className='px-6 py-1 rounded-md bg-black text-white'>Dark</button>
            <button className='px-6 py-1 rounded-md border-1 border-black bg-white'>Light</button>
            <button className='px-6 py-1 rounded-md bg-green-600 text-white'>Green</button>
            <button className='px-6 py-1 rounded-md bg-red-600 text-white'>Red</button>
            <button className='px-6 py-1 rounded-md bg-yellow-300 text-white'>Yellow</button>
            <button className='px-6 py-1 rounded-md bg-purple-600 text-white'>Purple</button>
        </div>
    );
}

