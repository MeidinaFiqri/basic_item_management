import Link from "next/link"
export default function Navbar() {
    return(
<div className="text-center">
  <nav className="flex flex-col justify-center">
    <ul className="flex justify-center items-center mt-5 mb-5">
      <li className="mr-5">
        <Link href="/">
          Home
        </Link>
      </li>
      <li className="mr-5">
        <Link href="/add-item">
          Add item
        </Link>
      </li>
      <li className="mr-5">
        <Link href="/view-items">
          View Item
        </Link>
      </li>
    </ul>
  </nav>
</div>
    )
}