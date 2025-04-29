import React from 'react'
import { ElementItem } from './ElementsList'

interface MainContentProps {
  draggedElement: {
    item: ElementItem | null;
    position: { x: number; y: number };
    dragging: boolean;
  }
}

const MainContent: React.FC<MainContentProps> = ({ draggedElement }) => {
  return (
    <section style={{ 
      flex: 1, 
      position: 'relative', 
      background: '#f7f7f7',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {/* Подложка для рабочей области */}
      <div style={{
        width: '90%',
        height: '90%',
        background: '#ffffff',
        borderRadius: 8,
        boxShadow: '0 0 10px rgba(0,0,0,0.05)',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute',
          top: 10,
          left: 10,
          fontSize: '0.9rem',
          color: '#888',
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
            background: '#f0f0f0',
            borderRadius: 8,
            boxShadow: '0 3px 10px rgba(0,0,0,0.15)',
            fontSize: 20,
            border: '1px solid #e0e0e0',
            opacity: 0.9,
          }}
        >
          <span style={{ fontSize: 24 }}>{draggedElement.item.emoji}</span>
          <span style={{ fontSize: 16 }}>{draggedElement.item.name}</span>
        </div>
      )}
    </section>
  )
}

export default MainContent