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
			[LANGUAGES.EN]: ["Light Gray"],
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
			[LANGUAGES.EN]: ["Silver"],
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
			[LANGUAGES.EN]: ["Dark Gray"],
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
			[LANGUAGES.EN]: ["Light Slate Gray"],
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
			[LANGUAGES.EN]: ["Gray"],
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
			[LANGUAGES.EN]: ["Slate Gray"],
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
			[LANGUAGES.EN]: ["Dim Gray"],
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
			[LANGUAGES.EN]: ["Dark Slate Gray"],
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
			[LANGUAGES.INA]: ["Merah Tua"],
			[LANGUAGES.EN]: ["Dark Red"],
		},
		color: {
			r: 139,
			g: 0,
			b: 0,
		},
		level: 3,
	},
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
	{
		name: {
			[LANGUAGES.INA]: ["Merah Bata", "Bata Api"],
			[LANGUAGES.EN]: ["Firebrick", "Brick Red", "Terra-cotta"],
		},
		color: {
			r: 178,
			g: 34,
			b: 34,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Lembayung", "Kirmizi", "Merah Padam"],
			[LANGUAGES.EN]: ["Crimson", "Bluish Red"],
		},
		color: {
			r: 220,
			g: 20,
			b: 60,
		},
		level: 2,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Merah Indian", "Merah Tanah Liat"],
			[LANGUAGES.EN]: ["Indian Red", "Laterite Red"],
		},
		color: {
			r: 205,
			g: 92,
			b: 92,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Koral Muda"],
			[LANGUAGES.EN]: ["Light Coral"],
		},
		color: {
			r: 240,
			g: 128,
			b: 128,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Salmon", "Bangbang"],
			[LANGUAGES.EN]: ["Salmon"],
		},
		color: {
			r: 250,
			g: 128,
			b: 114,
		},
		level: 2,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Salmon Tua", "Bangbang Tua"],
			[LANGUAGES.EN]: ["Dark Salmon"],
		},
		color: {
			r: 233,
			g: 150,
			b: 122,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Salmon Muda", "Bangbang Muda"],
			[LANGUAGES.EN]: ["Light Salmon"],
		},
		color: {
			r: 255,
			g: 160,
			b: 122,
		},
		level: 3,
	},
	//Orange
	{
		name: {
			[LANGUAGES.INA]: ["Dewangga"],
			[LANGUAGES.EN]: ["Orange Red", "Grenadine Pink", "Yellowish Red"],
		},
		color: {
			r: 255,
			g: 69,
			b: 0,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Tomat"],
			[LANGUAGES.EN]: ["Tomato"],
		},
		color: {
			r: 255,
			g: 99,
			b: 71,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Jingga Tua", "Oranye Tua"],
			[LANGUAGES.EN]: ["Dark Orange"],
		},
		color: {
			r: 255,
			g: 140,
			b: 0,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Koral"],
			[LANGUAGES.EN]: ["Coral"],
		},
		color: {
			r: 255,
			g: 127,
			b: 80,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Jingga", "Oranye"],
			[LANGUAGES.EN]: ["Orange"],
		},
		color: {
			r: 255,
			g: 165,
			b: 0,
		},
		level: 1,
	},
	//Yellow
	{
		name: {
			[LANGUAGES.INA]: ["Khaki Tua"],
			[LANGUAGES.EN]: ["Dark Khaki"],
		},
		color: {
			r: 189,
			g: 183,
			b: 107,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Emas"],
			[LANGUAGES.EN]: ["Gold"],
		},
		color: {
			r: 255,
			g: 215,
			b: 0,
		},
		level: 2,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Khaki"],
			[LANGUAGES.EN]: ["Khaki"],
		},
		color: {
			r: 240,
			g: 230,
			b: 140,
		},
		level: 2,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Kembang Persik"],
			[LANGUAGES.EN]: ["Peach Puff"],
		},
		color: {
			r: 255,
			g: 218,
			b: 185,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Kuning"],
			[LANGUAGES.EN]: ["Yellow"],
		},
		color: {
			r: 255,
			g: 255,
			b: 0,
		},
		level: 1,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Emas Pucat"],
			[LANGUAGES.EN]: ["Pale Goldenrod"],
		},
		color: {
			r: 238,
			g: 232,
			b: 170,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Mokasin"],
			[LANGUAGES.EN]: ["Moccasin"],
		},
		color: {
			r: 255,
			g: 228,
			b: 181,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Pepaya Pucat"],
			[LANGUAGES.EN]: ["Papaya Whip"],
		},
		color: {
			r: 255,
			g: 239,
			b: 213,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Kuning Emas Muda"],
			[LANGUAGES.EN]: ["Light Goldenrod Yellow"],
		},
		color: {
			r: 250,
			g: 250,
			b: 210,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Sifon Lemon"],
			[LANGUAGES.EN]: ["Lemon Chiffon"],
		},
		color: {
			r: 255,
			g: 250,
			b: 205,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Kuning Muda"],
			[LANGUAGES.EN]: ["Light Yellow"],
		},
		color: {
			r: 255,
			g: 255,
			b: 224,
		},
		level: 2,
	},
	//Brown
	{
		name: {
			[LANGUAGES.INA]: ["Merah Manggis"],
			[LANGUAGES.EN]: ["Maroon", "Violet Brown"],
		},
		color: {
			r: 128,
			g: 0,
			b: 0,
		},
		level: 2,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Cokelat"],
			[LANGUAGES.EN]: ["Brown"],
		},
		color: {
			r: 165,
			g: 42,
			b: 42,
		},
		level: 1,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Cokelat Pelana"],
			[LANGUAGES.EN]: ["Saddle Brown"],
		},
		color: {
			r: 139,
			g: 69,
			b: 19,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Sienna"],
			[LANGUAGES.EN]: ["Sienna"],
		},
		color: {
			r: 160,
			g: 82,
			b: 45,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Coklat"],
			[LANGUAGES.EN]: ["Chocolate"],
		},
		color: {
			r: 210,
			g: 105,
			b: 30,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Emas Batang Tua"],
			[LANGUAGES.EN]: ["Dark Goldenrod"],
		},
		color: {
			r: 184,
			g: 134,
			b: 11,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Peru"],
			[LANGUAGES.EN]: ["Peru"],
		},
		color: {
			r: 205,
			g: 133,
			b: 63,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Pirang Tibarau"],
			[LANGUAGES.EN]: ["Rosy Brown", "Rosy Puff", "Cigar Brown", "Havana Brown"],
		},
		color: {
			r: 188,
			g: 143,
			b: 143,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Solidago", "Batang Emas"],
			[LANGUAGES.EN]: ["Goldenrod"],
		},
		color: {
			r: 218,
			g: 165,
			b: 32,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Cokelat Pasir"],
			[LANGUAGES.EN]: ["Sandy Brown"],
		},
		color: {
			r: 244,
			g: 164,
			b: 96,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Sawo Matang"],
			[LANGUAGES.EN]: ["Tan", "Sunburnt"],
		},
		color: {
			r: 210,
			g: 180,
			b: 140,
		},
		level: 2,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Kayu Bakar"],
			[LANGUAGES.EN]: ["Burlywood"],
		},
		color: {
			r: 222,
			g: 184,
			b: 135,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Turangga"],
			[LANGUAGES.EN]: ["Wheat", "Dun"],
		},
		color: {
			r: 245,
			g: 222,
			b: 179,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Putih Navajo"],
			[LANGUAGES.EN]: ["Navajo White"],
		},
		color: {
			r: 255,
			g: 222,
			b: 173,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Bisque"],
			[LANGUAGES.EN]: ["Bisque"],
		},
		color: {
			r: 255,
			g: 228,
			b: 196,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Almond Pucat"],
			[LANGUAGES.EN]: ["Blanched Almond"],
		},
		color: {
			r: 255,
			g: 235,
			b: 205,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Sutra Jagung"],
			[LANGUAGES.EN]: ["Cornsilk"],
		},
		color: {
			r: 255,
			g: 248,
			b: 220,
		},
		level: 3,
	},
	///Green
	{
		name: {
			[LANGUAGES.INA]: ["Hijau Tua", "Balu"],
			[LANGUAGES.EN]: ["Dark Green", "Parsley Green"],
		},
		color: {
			r: 0,
			g: 100,
			b: 0,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Hijau"],
			[LANGUAGES.EN]: ["Green"],
		},
		color: {
			r: 0,
			g: 128,
			b: 0,
		},
		level: 1,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Hijau Zaitun Gelap"],
			[LANGUAGES.EN]: ["Dark Olive Green"],
		},
		color: {
			r: 85,
			g: 107,
			b: 47,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Hijau Hutan"],
			[LANGUAGES.EN]: ["Forest Green"],
		},
		color: {
			r: 34,
			g: 139,
			b: 34,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Hijau Lautan"],
			[LANGUAGES.EN]: ["Sea Green"],
		},
		color: {
			r: 46,
			g: 139,
			b: 87,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Zaitun"],
			[LANGUAGES.EN]: ["Olive"],
		},
		color: {
			r: 128,
			g: 128,
			b: 0,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Zaitun Pucat"],
			[LANGUAGES.EN]: ["Olive Drab"],
		},
		color: {
			r: 107,
			g: 142,
			b: 35,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Hijau Lautan Sedang"],
			[LANGUAGES.EN]: ["Medium Sea Green"],
		},
		color: {
			r: 60,
			g: 179,
			b: 113,
		},
		level: 3,
	},
	{
		name: {
			[LANGUAGES.INA]: ["Hijau Limau"],
			[LANGUAGES.EN]: ["Lime Green"],
		},
		color: {
			r: 50,
			g: 205,
			b: 50,
		},
		level: 3,
	},
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
