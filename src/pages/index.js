import Link from 'next/link';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-white bg-black">
            <h1 className="text-4xl font-bold">Welcome to Eclips</h1>
            <p className="text-lg text-gray-400 mt-4">AI-powered privacy protection</p>
            <Link href="/dashboard">
                <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-800 rounded-lg text-lg">
                    Go to Dashboard
                </button>
            </Link>
        </div>
    );
}
