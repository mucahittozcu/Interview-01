import { useState } from 'react'

function App() {
  const [nestedObjected, setNestedObject] = useState({
    taxi: 'Ücret karşılığında yolcu taşımak için lisanslı bir araç',
    food: {
      sushi:
        'Deniz ürünleri ve sebzelerle birlikte sunulan geleneksel bir Japon yemeği',
      apple: {
        Honeycrisp:
          "MAES Bahçe Araştırma Merkezi'nde geliştirilen bir elma çeşidi",
        Fuji: "Tohoku Araştırma İstasyonu'nda yetiştiriciler tarafından geliştirilen bir elma çeşidi",
      },
    },
  })

  return (
    <div style={{ margin: 'auto', width: '70%', paddingTop: 40 }}>
      <DisplayNested nestedObjected={nestedObjected} />
    </div>
  )
}

const DisplayNested = ({ nestedObjected }) => {
  return(
    <section>
      
        <pre>taxi: {nestedObjected.taxi}</pre>
      <p>food:</p><br/>
      <div style={{paddingLeft: "40px"}}>
         <pre>sushi: {nestedObjected.food.sushi}</pre><br/>
      <p>apple:</p>
        <pre style={{paddingLeft: "50px"}}>Honeycrisp: {nestedObjected.food.apple.Honeycrisp}</pre>
        <pre style={{paddingLeft: "50px"}}>Fuji: {nestedObjected.food.apple.Fuji}</pre>
      </div>

    </section>
  )
}
export default App
