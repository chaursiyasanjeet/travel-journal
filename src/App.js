import Nav from "./Components/Nav"
import Article from "./Components/Article"
import data from "./data"

export default function App() {
  const dataContent = data.map(item => {
    return (
      <Article
        key={item.id}
        {...item} />
    )
  })

  return (
    <div>
      <Nav />
      <section>
        {dataContent}
      </section>
    </div>
  )
}