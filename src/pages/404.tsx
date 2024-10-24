import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex flex-col justify-center items-center mt-6">
      <h1>404 - Page Not Found</h1>
      <Link href="/home">Go to Home</Link>
    </div>
  );
}
