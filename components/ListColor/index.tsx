import React from "react";
import { ListColor as ListColorProto } from "./prototype";
import colors from "../../utils/colors";
import { LANGUAGES } from "../../utils/DICT";
import { useAppSelector } from "../../app/hooks";

function ListColor() {
	const level = useAppSelector((state) => state.meta.showLevel);
	return <ListColorProto colors={colors} langs={Object.values(LANGUAGES)} level={level} />;
}

export default ListColor;
