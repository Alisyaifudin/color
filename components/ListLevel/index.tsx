import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ListLevel as ListLevelProto } from "./prototype";
import { LEVELS } from "../../utils/DICT";
import { setShowLevel } from "../../redux/meta/metaSlice";

function ListLevel() {
	const level = useAppSelector((state) => state.meta.showLevel);
	const dispatch = useAppDispatch();
	const handleClick = (level: number) => dispatch(setShowLevel(level));
	const style: React.CSSProperties = {
		position: "sticky",
	};
	return <ListLevelProto level={level} levels={LEVELS} onClick={handleClick} style={style} />;
}

export default ListLevel;
