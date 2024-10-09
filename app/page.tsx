import Link from "next/link"

const HomePage = () => {
  return (
    <div>
      <h1>This is HomePage</h1>
      <div>
        <ul>
          <li>
            <Link href="/about" target="blank">About</Link>
            
          </li>
          <li>
            <Link href="/contact" target="blank">Contact</Link>
            
          </li>
          <li>
             <Link href="/service" target="blank">Service</Link>
         
          </li>
        </ul>
      </div>
    </div>
  )
}
export default HomePage