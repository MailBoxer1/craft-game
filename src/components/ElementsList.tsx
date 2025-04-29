import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

export interface ElementItem {
  id: number
  emoji: string
  name: string
}

interface ElementsListProps {
  elements: ElementItem[]
  onElementDrag: (id: number, e: React.MouseEvent<HTMLDivElement>) => void
  currentDragId: number | null
}

const ElementsList: React.FC<ElementsListProps> = ({ elements, onElementDrag, currentDragId }) => {
  const { colors } = useTheme();
  
  return (
    <aside style={{ 
      width: 180,
      minWidth: 180, 
      background: colors.sidebarBackground, 
      borderRight: `1px solid ${colors.border}`,
      height: '100%',
      overflowY: 'auto',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: '0.8rem' }}>
        {elements.map((el) => {
          // Если элемент сейчас перетаскивается, не отображаем его в списке
          if (currentDragId === el.id) return null
          return (
            <div
              key={el.id}
              onMouseDown={e => onElementDrag(el.id, e)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '10px',
                background: colors.elementBackground,
                borderRadius: 8,
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                cursor: 'grab',
                userSelect: 'none',
                border: `1px solid ${colors.border}`,
              }}
            >
              <span style={{ fontSize: 24 }}>{el.emoji}</span>
              <span style={{ 
                fontSize: 16,
                color: colors.elementText
              }}>
                {el.name}
              </span>
            </div>
          )
        })}
      </div>
    </aside>
  )
}

export default ElementsList