import { useState } from 'react'

export default function Home() {
  const [search, setSearch] = useState()
  //03:44
  return (
    <div>
      <h1>Search</h1>

      <form onSubmit={handleSearch}>
        <input type="text" />
      </form>
    </div>
  )
}
