import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { MysteryColor as MysteryColorProto} from "./prototype";
import { setHsv } from "../../redux/meta/metaSlice";

function MysteryColor() {
	const dispatch = useAppDispatch();
	const color = useAppSelector((state) => state.meta.mysteryColor);
	const done = useAppSelector((state) => state.meta.done);
	const name = useAppSelector((state) => state.meta.mysteryName);
	const hsv = useAppSelector((state) => state.meta.hsv);

	const handleClick = () => dispatch(setHsv());
	
  return <MysteryColorProto name={name} color={color} done={done} hsv={hsv} onClick={handleClick} />;
}

export default MysteryColor;
