import React from 'react'
import { ElementItem } from './ElementsList'
import { useTheme } from '../contexts/ThemeContext'

interface MainContentProps {
  draggedElement: {
    item: ElementItem | null;
    position: { x: number; y: number };
    dragging: boolean;
  }
}

const MainContent: React.FC<MainContentProps> = ({ draggedElement }) => {
  const { colors } = useTheme();
  
  return (
    <section style={{ 
      flex: 1, 
      position: 'relative', 
      background: colors.mainContentBackground,
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {/* Подложка для рабочей области */}
      <div style={{
        width: '90%',
        height: '90%',
        background: colors.workAreaBackground,
        borderRadius: 8,
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        position: 'relative',
        border: `1px solid ${colors.border}`,
      }}>
        <div style={{
          position: 'absolute',
          top: 10,
          left: 10,
          fontSize: '0.9rem',
          color: colors.textSecondary,
        }}>
          Рабочая область
        </div>
      </div>
      
      {/* Перетаскиваемый элемент */}
      {draggedElement.dragging && draggedElement.item && (
        <div
          style={{
            position: 'fixed',
            left: draggedElement.position.x,
            top: draggedElement.position.y,
            pointerEvents: 'none',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '8px 12px',
            background: colors.elementBackground,
            borderRadius: 8,
            boxShadow: '0 3px 10px rgba(0,0,0,0.15)',
            fontSize: 20,
            border: `1px solid ${colors.border}`,
            opacity: 0.9,
          }}
        >
          <span style={{ fontSize: 24 }}>{draggedElement.item.emoji}</span>
          <span style={{ 
            fontSize: 16,
            color: colors.elementText
          }}>
            {draggedElement.item.name}
          </span>
        </div>
      )}
    </section>
  )
}

export default MainContent