import React from 'react'
import { useAppSelector } from '../../app/hooks';
import { MysteryColor } from "./prototype";

function MisteryColor() {
  const color = useAppSelector(state => state.meta.color)
  const done = useAppSelector(state => state.meta.done)
  return (
    <MysteryColor color={color} done={done}/>
  )
}

export default MisteryColor