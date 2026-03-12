import { useState, useCallback } from 'react'
import LandingPage from './pages/LandingPage'
import MainGame from './pages/MainGame'
import './App.css'

function App() {
    const [gameStarted, setGameStarted] = useState(false)

    const handleStartGame = useCallback(() => {
        setGameStarted(true)
    }, [])

    const handleBackToMenu = useCallback(() => {
        setGameStarted(false)
    }, [])

    return (
        <div className="app">
            {!gameStarted ? (
                <LandingPage onStart={handleStartGame} />
            ) : (
                <MainGame onBack={handleBackToMenu} />
            )}
        </div>
    )
}

export default App
