const students = [
	{ "id": 1, "name": "Peter Jackson", "status": false },
  { "id": 2, "name": "Paulino Leokadia", "status": false },
  { "id": 3, "name": "Soraya Sachin", "status": false },
  { "id": 4, "name": "Lys Gohar", "status": true },
  { "id": 5, "name": "Jayesh Enok", "status": true },
  { "id": 6, "name": "Xandinho Xanthi", "status": true },
  { "id": 7, "name": "Aodhagán Hanna", "status": true },
  { "id": 8, "name": "Neirin Quintino", "status": false },
  { "id": 9, "name": "Nicolao Dawa", "status": true },
  { "id": 10, "name": "Atanas Alan", "status": true },
  { "id": 11, "name": "Gogi Kari", "status": false },
  { "id": 12, "name": "Gefen Benton", "status": false },
  { "id": 13, "name": "Annamária Miran", "status": false },
  { "id": 14, "name": "Dolly Assia", "status": false },
  { "id": 15, "name": "Zalmon Antoine", "status": true },
  { "id": 16, "name": "Kuzey Mazhar", "status": true },
  { "id": 17, "name": "Kuzman Elisie", "status": false },
  { "id": 18, "name": "Jagusia Katrina", "status": true },
  { "id": 19, "name": "Slavko Jamsheed", "status": false },
  { "id": 20, "name": "Hermes Varg", "status": false },
  { "id": 21, "name": "Iris Georgie", "status": true },
  { "id": 22, "name": "Hieronymus Matilda", "status": true },
  { "id": 23, "name": "Anakoni Aroa", "status": true },
  { "id": 24, "name": "Mikayla Remigio", "status": true },
  { "id": 25, "name": "Magdaléna Friedhold", "status": true },
  { "id": 26, "name": "Hamlet Sayen", "status": true },
  { "id": 27, "name": "Prudence Jette", "status": true },
  { "id": 28, "name": "Daffodil Onisimu", "status": false },
  { "id": 29, "name": "Bibiana Pāvils", "status": false },
  { "id": 30, "name": "Adam Athanase", "status": false },
  { "id": 31, "name": "Kynthia Lotti", "status": true },
  { "id": 32, "name": "Khushi Octavia", "status": true },
  { "id": 33, "name": "Godascalc Louane", "status": false },
  { "id": 34, "name": "Taniel Byron", "status": false },
  { "id": 35, "name": "Sandhya Gautam", "status": false },
  { "id": 36, "name": "Kavita Eduard", "status": false },
  { "id": 37, "name": "Jancsi Philip", "status": true },
  { "id": 38, "name": "Robert Marketta", "status": false },
  { "id": 39, "name": "Mirka Klementina", "status": false },
  { "id": 40, "name": "Stanislav Peer", "status": true },
  { "id": 41, "name": "Ione Vishal", "status": false },
  { "id": 42, "name": "Yunuen Denton", "status": true },
  { "id": 43, "name": "Samuel Gayatri", "status": true },
  { "id": 44, "name": "Victorianus Ranka", "status": false },
  { "id": 45, "name": "Susanna Joachim", "status": true },
  { "id": 46, "name": "Aslanbek Benjamin", "status": true },
  { "id": 47, "name": "Ermentrud Bjørnar", "status": true },
  { "id": 48, "name": "Ousmane Helmut", "status": true },
  { "id": 49, "name": "Aravind Mererid", "status": true },
  { "id": 50, "name": "Younes Annette", "status": true },
  { "id": 51, "name": "Georg Albina", "status": true },
  { "id": 52, "name": "Eoghan Aleksi", "status": false },
  { "id": 53, "name": "Peter Jackson", "status": true },
  { "id": 54, "name": "Mihály Willihad", "status": true },
  { "id": 55, "name": "Ahriman Ness", "status": false },
  { "id": 56, "name": "Gulnara Alisya", "status": true },
  { "id": 57, "name": "Mireia Snorri", "status": true },
  { "id": 58, "name": "Odilie Jin", "status": true },
  { "id": 59, "name": "Kari Inti", "status": true },
  { "id": 60, "name": "Axel Yavor", "status": false },
  { "id": 61, "name": "Sommer Quintus", "status": true },
  { "id": 62, "name": "Abimbola Darko", "status": true },
  { "id": 63, "name": "Ty Voula", "status": true },
  { "id": 64, "name": "Lorenza Jam", "status": false },
  { "id": 65, "name": "Wigand Marie", "status": false },
  { "id": 66, "name": "Roffe Catalina", "status": true },
  { "id": 67, "name": "Marta Perig", "status": true },
  { "id": 68, "name": "Brady Gwendolen", "status": false },
  { "id": 69, "name": "Marius Rosanne", "status": true },
  { "id": 70, "name": "Adalwin Dagny", "status": false },
  { "id": 71, "name": "Luisa Aleksandra", "status": true },
  { "id": 72, "name": "Deniece Karthik", "status": true },
  { "id": 73, "name": "Simona Walentyna", "status": true },
  { "id": 74, "name": "Atalanta Frane", "status": true },
  { "id": 75, "name": "Odilia Meurig", "status": true },
  { "id": 76, "name": "Lurdes Suman", "status": true },
  { "id": 77, "name": "Gavrilo Gautselin", "status": false },
  { "id": 78, "name": "Ojigkwanong Kepheus", "status": true },
  { "id": 79, "name": "Gervasio Roshan", "status": false },
  { "id": 80, "name": "Fisher Aileen", "status": false },
  { "id": 81, "name": "Sharmila Wendelin", "status": true },
  { "id": 82, "name": "Suljo Wenda", "status": true },
  { "id": 83, "name": "Desdemona Veniaminu", "status": false },
  { "id": 84, "name": "Johano Patsy", "status": true },
  { "id": 85, "name": "Dietrich Nilam", "status": true },
  { "id": 86, "name": "Aureliana Branko", "status": true },
  { "id": 87, "name": "Aran Patrik", "status": true },
  { "id": 88, "name": "Sunita Thandeka", "status": true },
  { "id": 89, "name": "Cayden Igerna", "status": false },
  { "id": 90, "name": "Anja Plínio", "status": false },
  { "id": 91, "name": "Ilenia Radmila", "status": true },
  { "id": 92, "name": "Aamina Vulferam", "status": true },
  { "id": 93, "name": "Kumari Leonard", "status": true },
  { "id": 94, "name": "Kent Sosruko", "status": false },
  { "id": 95, "name": "Rishi Twyla", "status": false },
  { "id": 96, "name": "Olaug Feidlimid", "status": false },
  { "id": 97, "name": "Vedrana Aliisa", "status": true },
  { "id": 98, "name": "Demetrius Jette", "status": true },
  { "id": 99, "name": "Sofia Arman", "status": true },
  { "id": 100, "name": "Iulianus Pua", "status": true },
  { "id": 101, "name": "Lughaidh Ramesha", "status": false },
  { "id": 102, "name": "Aymeric Chedomir", "status": false },
  { "id": 103, "name": "Marni Facundus", "status": true },
  { "id": 104, "name": "Elena Ignatiy", "status": true },
  { "id": 105, "name": "Cipriano Damir", "status": false },
  { "id": 106, "name": "Aparna Anita", "status": true },
  { "id": 107, "name": "Iakobos Nethanel", "status": true },
  { "id": 108, "name": "Marianna Diadumenianus", "status": false },
  { "id": 109, "name": "Hasib Volodislavu", "status": true }
]

const express = require('express')
const app = express()

const port = 3000

app.use(express.static('../frontend'))

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
	res.send('hello world')
})

app.get('/students', (req, res) => {
	let studentlistItems = students
		.filter(student => student.name.startsWith("P"))

		.map(student => ({
			name: student.name,
			status: student.status,
		}));
	
	/* let studentlistItems = students
		.map(function(student) {
			return {
				name: student.name,
				status: student.status,
			}
		}); */
	res.send(JSON.stringify(studentlistItems))
})

app.listen(port, () => {
	console.log(`http://127.0.0.1:${port}`)
  })