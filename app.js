function generatePrompt() {
const subject = document.getElementById("subject").value;
const style = document.getElementById("style").value;
const camera = document.getElementById("camera").value;
const mood = document.getElementById("mood").value;

const text = subject + ", " + style + ", " + camera + ", " + mood + ", ultra detailed";

document.getElementById("prompt").value = text;
}

function randomPrompt() {
["subject","style","camera","mood"].forEach(id=>{
const el = document.getElementById(id);
el.selectedIndex = Math.floor(Math.random()*el.options.length);
});
generatePrompt();
}

function generateDialog() {
const count = document.getElementById("characters").value;
const genre = document.getElementById("genre").value;

const scripts = {
Drama:{1:"Aku tak bisa berhenti sekarang…",
2:"A: Kamu percaya aku?\nB: Selalu.",
3:"A: Kita keluarga.\nB: Bertahan.\nC: Sampai akhir."},
Comedy:{1:"Kenapa hidupku kayak sinetron gagal?",
2:"A: Rencanamu?\nB: Improvisasi.",
3:"A: Ide buruk.\nB: Setuju.\nC: Gas."},
Horror:{1:"Ada sesuatu di belakangku…",
2:"A: Kamu dengar itu?\nB: Jangan lihat…",
3:"A: Kita tidak sendiri.\nB: Diam.\nC: Dia datang."},
Action:{1:"Target terkunci.",
2:"A: Serang kiri!\nB: Copy!",
3:"A: Formasi!\nB: Dorong!\nC: Maju!"}
};

document.getElementById("dialog").value = scripts[genre][count];
}

function generateScene(){
const scenes=[
"Kota neon hujan malam. Kurir berdiri di atap. \"Ini pengiriman terakhirku.\"",
"Hutan berkabut. Tim memasuki reruntuhan. \"Tempat ini hidup.\"",
"Stasiun angkasa sunyi. Astronaut masuk perlahan. \"Ada seseorang di sini.\"",
"Gurun saat fajar. Pengembara berjalan. \"Perjalanan baru dimulai.\""
];
document.getElementById("scene").value=scenes[Math.floor(Math.random()*scenes.length)];
}

function copyAll(){
const text =
document.getElementById("prompt").value+"\n\n"+
document.getElementById("dialog").value+"\n\n"+
document.getElementById("scene").value;

navigator.clipboard.writeText(text);
alert("Copied all!");
}
