import Link from "next/link";
import Counter from "./components/counter";

export default function Home() {
  return (
    <div>
      <Counter />
      <Link href="/test">
        Go to Test Page
      </Link>
    </div>
  );
}
