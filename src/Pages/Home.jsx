
import { Link } from "react-router-dom"

export default function Home(){
    return(
    <>
        <h1>Home</h1>
        <Link to="/home">Home</Link><br />
        <Link to="/login">Login</Link><br />
        <Link to="/stats">Stats</Link><br />
        <Link to="/account">Account</Link>
    </>
    )
}