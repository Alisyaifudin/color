import React from "react";
import { LanguageButton as LanguageButtonProto } from "./prototype";
import { LANGUAGES_NAME, LANGUAGES } from "../../utils/DICT";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setLanguage } from "../../redux/meta/metaSlice";
import { useRouter } from "next/router";

function LanguageButton() {
	const router = useRouter();
	const { pathname, asPath, query } = router;
	const dispatch = useAppDispatch();
	const lang = useAppSelector((state) => state.meta.language);
	const label = LANGUAGES_NAME[lang];
	const handleClick = (label: string) => {
		const index = Object.values(LANGUAGES_NAME).findIndex((l) => l === label);
		if (index === -1) return;
		const value = Object.keys(LANGUAGES_NAME)[index];
		dispatch(setLanguage(value));
		router.push({ pathname, query }, asPath, { locale: value });
	};
	return (
		<LanguageButtonProto
			onClick={handleClick}
			label={label}
			value={lang}
			labels={Object.values(LANGUAGES_NAME)}
		/>
	);
}

export default LanguageButton;
