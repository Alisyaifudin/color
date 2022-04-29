import React from 'react'
import { useAppSelector } from '../../app/hooks';
import { MysteryColor } from "./prototype";

function MisteryColor() {
  const color = useAppSelector(state => state.meta.color)
  const done = useAppSelector(state => state.meta.done)
  const name = useAppSelector(state => state.meta.name)
  return (
    <MysteryColor name={name} color={color} done={done}/>
  )
}

export default MisteryColor