import Link from "next/link";
import Logout from "./logoutForm";
import LogoutForm from "./logoutForm";
import { getSession } from "@/actions/actions";

export default async function Navbar() {
  const session = await getSession()
  console.log(session)

  return (
    <nav>
        <Link href="/">Homepage</Link>
        {session.isLoggedIn && <Link href="/premium">Premium</Link>}
        {session.isLoggedIn && <Link href="/profile">Profile</Link>}
        {!session.isLoggedIn && <Link href="/login">Login</Link>}
        {session.isLoggedIn && <LogoutForm/>}
    </nav>
  )
}
