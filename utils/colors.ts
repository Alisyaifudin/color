import { LANGUAGES } from "./DICT";

const colors = [
	//White
	{
		name: {
			[LANGUAGES.INA]: ["Putih"],
			[LANGUAGES.EN]: ["White"],
		},
		color: {
			r: 255,
			g: 255,
			b: 255,
		},
		level: 1,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Danta", "Semerdanta", "Putih Gading"],
			[LANGUAGES.EN]: ["Ivory"],
		},
		color: {
			r: 255,
			g: 255,
			b: 240,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Salju"],
			[LANGUAGES.EN]: ["Snow"],
		},
		color: {
			r: 255,
			g: 250,
			b: 250,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Krim Pudina", "Putih Murup"],
			[LANGUAGES.EN]: ["Mint Cream", "Shining White"],
		},
		color: {
			r: 245,
			g: 255,
			b: 250,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Azure"],
			[LANGUAGES.EN]: ["Azure"],
		},
		color: {
			r: 240,
			g: 255,
			b: 255,
		},
		level: 2,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Kinantan"],
			[LANGUAGES.EN]: ["Floral White", "White as-a-swan"],
		},
		color: {
			r: 255,
			g: 250,
			b: 240,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Nusa Indah"],
			[LANGUAGES.EN]: ["Honey Dew", "Greenish White"],
		},
		color: {
			r: 240,
			g: 255,
			b: 240,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Putih kapur", "Putih Hantu"],
			[LANGUAGES.EN]: ["Ghost White", "Chalk White"],
		},
		color: {
			r: 248,
			g: 248,
			b: 255,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Kulit Kerang", "Putih Belak"],
			[LANGUAGES.EN]: ["Seashell", "Broken White"],
		},
		color: {
			r: 255,
			g: 245,
			b: 238,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Biru Alice"],
			[LANGUAGES.EN]: ["Alice Blue"],
		},
		color: {
			r: 240,
			g: 248,
			b: 255,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Renda Tua", "Putih Bahana"],
			[LANGUAGES.EN]: ["Old Lace", "Dull White"],
		},
		color: {
			r: 253,
			g: 245,
			b: 230,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Taluki", "Merah Gandaria"],
			[LANGUAGES.EN]: ["Lavender Blush", "Pinkish White"],
		},
		color: {
			r: 255,
			g: 240,
			b: 245,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Asap Putih", "Putih Mutiara"],
			[LANGUAGES.EN]: ["White Smoke", "Pale Gray", "Pearl Gray", "Pearl White"],
		},
		color: {
			r: 245,
			g: 245,
			b: 245,
		},
		level: 2,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Kuning Air", "Putih Kuam"],
			[LANGUAGES.EN]: ["Beige"],
		},
		color: {
			r: 245,
			g: 245,
			b: 220,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Linen"],
			[LANGUAGES.EN]: ["Linen"],
		},
		color: {
			r: 250,
			g: 240,
			b: 230,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Putih Antik"],
			[LANGUAGES.EN]: ["Antique White"],
		},
		color: {
			r: 250,
			g: 235,
			b: 215,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Mawar Kerkabut"],
			[LANGUAGES.EN]: ["Misty Rose"],
		},
		color: {
			r: 255,
			g: 228,
			b: 225,
		},
		level: 2,
	},
	//Gray
	{
		name: {
			[LANGUAGES.INA]: ["Putih Perak"],
			[LANGUAGES.EN]: ["Gainsboro", "Silvery"],
		},
		color: {
			r: 220,
			g: 220,
			b: 220,
		},
		level: 2,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Abu-abu Muda"],
			[LANGUAGES.EN]: ["Light Gray",],
		},
		color: {
			r: 211,
			g: 211,
			b: 211,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Perak"],
			[LANGUAGES.EN]: ["Silver",],
		},
		color: {
			r: 192,
			g: 192,
			b: 192,
		},
		level: 2,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Nilajada"],
			[LANGUAGES.EN]: ["Dark Gray",],
		},
		color: {
			r: 169,
			g: 169,
			b: 169,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Hitam Sabak Muda"],
			[LANGUAGES.EN]: ["Light Slate Gray",],
		},
		color: {
			r: 119,
			g: 136,
			b: 153,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Kelabu"],
			[LANGUAGES.EN]: ["Gray",],
		},
		color: {
			r: 128,
			g: 128,
			b: 128,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Hitam Sabak"],
			[LANGUAGES.EN]: ["Slate Gray",],
		},
		color: {
			r: 112,
			g: 128,
			b: 144,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Abu-abu Redup"],
			[LANGUAGES.EN]: ["Dim Gray",],
		},
		color: {
			r: 105,
			g: 105,
			b: 105,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Hitam Sabak Tua"],
			[LANGUAGES.EN]: ["Dark Slate Gray",],
		},
		color: {
			r: 47,
			g: 79,
			b: 79,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Hitam"],
			[LANGUAGES.EN]: ["Black"],
		},
		color: {
			r: 0,
			g: 0,
			b: 0,
		},
		level: 1,
	},
	//Pink
	{
		name: {
			[LANGUAGES.INA]: ["Merah Muda", "Merah Jambu"],
			[LANGUAGES.EN]: ["Pink"],
		},
		color: {
			r: 255,
			g: 192,
			b: 203,
		},
		level: 2,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Merah Muda Terang"],
			[LANGUAGES.EN]: ["Light Pink"],
		},
		color: {
			r: 255,
			g: 182,
			b: 193,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Merah Muda Merona"],
			[LANGUAGES.EN]: ["Hot Pink"],
		},
		color: {
			r: 255,
			g: 105,
			b: 180,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Merah Ungu Pucat"],
			[LANGUAGES.EN]: ["Pale Violet Red"],
		},
		color: {
			r: 219,
			g: 112,
			b: 147,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Merah Mudah Tua"],
			[LANGUAGES.EN]: ["Deep Pink"],
		},
		color: {
			r: 255,
			g: 20,
			b: 147,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Merah Ungu Sedang"],
			[LANGUAGES.EN]: ["Medium Violet Red"],
		},
		color: {
			r: 199,
			g: 21,
			b: 133,
		},
		level: 3,
	},
	//Red
	{
		name: {
			[LANGUAGES.INA]: ["Merah"],
			[LANGUAGES.EN]: ["Red"],
		},
		color: {
			r: 255,
			g: 0,
			b: 0,
		},
		level: 1,
	},
	//Orange
	{
		name: {
			[LANGUAGES.INA]: ["Dewangga"],
			[LANGUAGES.EN]: ["Orange Red"],
		},
		color: {
			r: 255,
			g: 69,
			b: 0,
		},
		level: 3,
	},
	//Yellow
	//Brown
	///Green
	{
		name: {
			[LANGUAGES.INA]: ["Hijau Pupus"],
			[LANGUAGES.EN]: ["Lime"],
		},
		color: {
			r: 0,
			g: 255,
			b: 0,
		},
		level: 1,
	},
	//Cyan
	//Blue
	//Purple
];

export default colors;
