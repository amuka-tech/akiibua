import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-bold text-arena-navy mb-4">404</h1>
      <p className="text-xl text-arena-muted mb-8">Page not found</p>
      <Link href="/" className="bg-arena-red text-white px-8 py-3 font-semibold uppercase tracking-wide hover:bg-red-700 transition">
        Back to homepage
      </Link>
    </div>
  );
}
