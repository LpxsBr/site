import { useEffect, useState } from 'react'
import './App.css'
import randomIntFromInterval from './utils/randomIntFromInterval'
import StyledButton from './components/StyledButton/StyledButton'

function App() {

  let text = [
    "estudante",
    "dev front-end",
    "fullstack",
    "tocador de violão",
    "resolvedor",
    "paciente",
    "empenhado",
    ""]

  const color = [
    "green",
    "blue",
    "red",
    "pink"
  ]
  const [word, setWord] = useState(text[0])
  const [dot, setDot] = useState([])

  const handleDot = (event) => {
    const objDot = {
      x: event.clientX,
      y: event.clientY,
      color: color[randomIntFromInterval(0, 2)],
      width: Number(randomIntFromInterval(10, 20))
    }

    setDot((prev) => [...prev, objDot])
    console.log(dot)
  }
  let i = 0
  useEffect(
    () => {
      let complete = setInterval(() => {
        setWord(text[i])
        i++
        if (i == text.length) { i = 0 }
      }, 3000)
    }, []
  )
  return (
    <div className='body' onClick={handleDot} id="main">
      {
        dot.map((dot) => (<span
          className='dot'
          style={{
            backgroundColor: dot.color,
            borderRadius: 50,
            width: `${dot.width}px`,
            height: `${dot.width}px`,
            left: `${dot.x}px`,
            top: `${dot.y}px`
          }}></span>))
      }

      <div className='whoiam'>
        <h1>Olá, me chamo Anselmo Lopes</h1>
      </div>
      <div className='whatiam'>
        <h1>Sou {word}</h1>
      </div>
      <div className='network'>
        <h3>Redes</h3>
        <div className='network-button'>
          <StyledButton url={'https://github.com/lpxsbr'} title={'Github'} />
          <StyledButton url={'https://linkedin.com/in/anselmolopess'} title={'Linkedin'} />
        </div>
      </div>
      {/* <section id="projetcs">
        {

        }
      </section> */}
    </div>
  )
}

export default App
