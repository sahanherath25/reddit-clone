export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900">
            <div className="animate-pulse text-center">
                <div className="h-10 w-10 bg-amber-500 rounded-full mx-auto mb-4"></div>
                <p className="text-gray-700 dark:text-gray-200 text-lg">Loading snippet...</p>
            </div>
        </div>
    );
}