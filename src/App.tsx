import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ElementsList, { ElementItem } from './components/ElementsList'
import MainContent from './components/MainContent'
import { useTheme } from './contexts/ThemeContext'

const ELEMENTS: ElementItem[] = [
  { id: 1, emoji: '🔥', name: 'Огонь' },
  { id: 2, emoji: '💧', name: 'Вода' },
  { id: 3, emoji: '🌱', name: 'Трава' },
  { id: 4, emoji: '🌪️', name: 'Воздух' },
  { id: 5, emoji: '🪨', name: 'Камень' },
]

interface DragState {
  id: number | null
  offsetX: number
  offsetY: number
  x: number
  y: number
  dragging: boolean
}

function App() {
  const { colors } = useTheme();
  const [drag, setDrag] = useState<DragState>({
    id: null,
    offsetX: 0,
    offsetY: 0,
    x: 0,
    y: 0,
    dragging: false,
  })

  // Найти текущий перетаскиваемый элемент
  const currentElement = drag.id !== null ? ELEMENTS.find(el => el.id === drag.id) || null : null

  const handleMouseDown = (id: number, e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setDrag({
      id,
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
      x: rect.left,
      y: rect.top,
      dragging: true,
    })
    document.body.style.userSelect = 'none'
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (drag.dragging && drag.id !== null) {
      setDrag(d => ({ ...d, x: e.clientX - d.offsetX, y: e.clientY - d.offsetY }))
    }
  }

  const handleMouseUp = () => {
    setDrag(d => ({ ...d, id: null, dragging: false }))
    document.body.style.userSelect = ''
  }

  useEffect(() => {
    if (drag.dragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
    } else {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [drag.dragging])

  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      overflow: 'hidden',
      background: colors.background,
      color: colors.textPrimary
    }}>
      <Header />
      <div style={{
        display: 'flex',
        flex: 1,
        overflow: 'hidden',
      }}>
        <ElementsList 
          elements={ELEMENTS} 
          onElementDrag={handleMouseDown} 
          currentDragId={drag.id} 
        />
        <MainContent 
          draggedElement={{
            item: currentElement,
            position: { x: drag.x, y: drag.y },
            dragging: drag.dragging
          }} 
        />
      </div>
      <Footer />
    </div>
  )
}

export default App
