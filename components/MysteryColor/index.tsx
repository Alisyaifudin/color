import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { MysteryColor } from "./prototype";
import { setHsv } from "../../redux/meta/metaSlice";

function MisteryColor() {
	const dispatch = useAppDispatch();
	const color = useAppSelector((state) => state.meta.color);
	const done = useAppSelector((state) => state.meta.done);
	const name = useAppSelector((state) => state.meta.name);
	const hsv = useAppSelector((state) => state.meta.hsv);

	const handleClick = () => dispatch(setHsv());
	
  return <MysteryColor name={name} color={color} done={done} hsv={hsv} onClick={handleClick} />;
}

export default MisteryColor;
