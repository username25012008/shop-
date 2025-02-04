import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <Link
      href={'products'}
        type="button"
        className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l active:ring-8 active:ring-purple-200/35 dark:active:ring-purple-800/35 font-medium rounded-lg text-3xl px-16 py-4 text-center me-2 mb-2 duration-150 ease-in-out"
      >
        Shop
      </Link>
    </div>
  );
}
