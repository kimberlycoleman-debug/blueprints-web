export default function LandingPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-12">
      <h1 className="text-4xl font-bold">Blueprints Foundation</h1>
      <p className="mt-4 text-lg text-gray-600 max-w-xl text-center">
        A guided transformation system for individuals, families, and institutions.
      </p>

      <a
        href="/onboard"
        className="mt-8 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
      >
        Begin Onboarding
      </a>
    </main>
  );
}
