import { useState } from 'react'
import "./index.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-max-purple">
      <div className="container text-white text-justify break-word mx-auto pt-40 px-40 text-4xl">
        <p>
          <div className="text-5xl break-normal text-start">“Cyberspace.</div> A consensual hallucination experienced daily by billions of legitimate operators, in every nation, by children being taught mathematical concepts... A graphic representation of data abstracted from banks of every computer in the human system. Unthinkable complexity. Lines of light ranged in the nonspace of the mind, clusters and constellations of data. Like city lights, receding...” 
          <div className="text-right">- William Gibson, Neuromancer</div>
        </p>

        <div className="text-center pt-40"><br></br>Vladimir Andrade 
        <br></br> Neuromancer (not really)
        <br></br>
          But I am a Horror enthusiast, player of video games and software developer
          <br></br>
          This is where I'm going to put some of my thoughts
          
        </div>

      </div>
    </div>
  )
}

export default App
