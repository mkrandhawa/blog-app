export default function LoadingPost() {
  return (
    <main className='min-h-screen bg-gray-100 p-8'>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="h-6 w-48 bg-gray-200 rounded animate-pulse"></div>
        </div>
        <article className="mt-4 bg-white p-8 rounded-lg shadow-md">
          <div className="h-10 w-3/4 bg-gray-300 rounded mb-4 animate-pulse"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </article>
      </div>
    </main>
  );
}