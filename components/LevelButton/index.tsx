import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { LevelButton as LevelButtonProto } from "./prototype";
import { LEVELS } from "../../utils/DICT";
import { setLevel } from "../../redux/meta/metaSlice";
function LevelButton() {
	const dispatch = useAppDispatch();
	const level = useAppSelector((state) => state.meta.level);
	const handleChange = (level: number) => dispatch(setLevel(level));

	return <LevelButtonProto level={level} levels={LEVELS} onChange={handleChange} />;
}

export default LevelButton;
