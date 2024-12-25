import Link from "next/link";
import Counter from "../components/counter";

export default function Test() {
  return (
    <div>
      <Counter />
      <Link href="/">
        Go to Home
      </Link>
    </div>
  );
}
