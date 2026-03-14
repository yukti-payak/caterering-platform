import Link from "next/link";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-5">Welcome to the Caterer App</h1>
        <Link
          href="/caterers"
          className="bg-red-600 text-white px-6 my-6 py-2 rounded-full font-medium hover:bg-red-700 transition"
        >
          Explore
        </Link>
    </div>
  );
}


