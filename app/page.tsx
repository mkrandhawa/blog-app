import FeaturedSlider from '@/components/FeatureSlider';

export default function HomePage() {
  return (
    // Changed background to a very light gray (slate-50)
    <div className="min-h-screen bg-slate-50">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* Background Gradient Shapes */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          {/* Changed gradient to a softer purple/blue and reduced opacity */}
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#a855f7] to-[#3b82f6] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        
        {/* Hero Content */}
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            {/* Changed heading text to a dark slate for contrast */}
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-slate-900 sm:text-7xl">
              Blogs that help you learn
            </h1>
            {/* Changed paragraph text to a softer, medium-gray */}
            <p className="mt-8 text-lg font-medium text-pretty text-slate-600 sm:text-xl/8">
              A curated space for the endlessly curious. We publish thoughtful
              articles and practical guides designed to expand your mind,
              challenge your thinking, and help you build valuable new skills.
            </p>
            <div className="mt-10 flex items-center justify-center">
              <FeaturedSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}