export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Blueprints Foundation
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          A guided transformation system for individuals, families, and institutions—built on the Solavian OS.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="/onboard"
            className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800"
          >
            Begin Institution Onboarding
          </a>
          <a
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50"
          >
            Go to Dashboard
          </a>
        </div>
      </div>
    </main>
  );
}
