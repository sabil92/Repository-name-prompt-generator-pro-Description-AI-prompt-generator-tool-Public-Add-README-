// Generate pilihan karakter
function generateKarakterOptions(){
  const container = document.getElementById("karakterOptions");
  container.innerHTML = "";
  const count = document.getElementById("charCount").value;
  for(let i=1;i<=count;i++){
    container.innerHTML += `
    <h3>DETAIL KARAKTER ${i}</h3>
    <p>Identitas:</p>
    <p>Penampilan: sesuai gambar referensi</p>
    <label>Pakaian</label>
    <select id="pakaian${i}">
      <option>Casual</option>
      <option>Formal</option>
      <option>Armor</option>
      <option>Jubah</option>
      <option>Pakaian tradisional</option>
      <option>Pakaian futuristik</option>
    </select>
    <label>Ekspresi</label>
    <select id="ekspresi${i}">
      <option>Bahagia</option>
      <option>Sedih</option>
      <option>Marah</option>
      <option>Takut</option>
      <option>Kaget</option>
      <option>Serius</option>
      <option>Santai</option>
    </select>
    <label>Gerakan</label>
    <select id="gerakan${i}">
      <option>Berdiri</option>
      <option>Duduk</option>
      <option>Berjalan</option>
      <option>Melompat</option>
      <option>Berlari</option>
      <option>Menunduk</option>
      <option>Memegang objek</option>
    </select>
    <hr>
    `;
  }
}

// Update saat jumlah karakter berubah
document.getElementById("charCount").addEventListener("change", generateKarakterOptions);
generateKarakterOptions();

// Generate prompt master
function generateMasterPro(){
  const count = document.getElementById("charCount").value;
  let karakterText = "";
  for(let i=1;i<=count;i++){
    const pakaian = document.getElementById("pakaian"+i).value;
    const ekspresi = document.getElementById("ekspresi"+i).value;
    const gerakan = document.getElementById("gerakan"+i).value;
    karakterText += `
DETAIL KARAKTER ${i} :
Identitas:
Penampilan: sesuai gambar referensi
Pakaian: ${pakaian}
Ekspresi: ${ekspresi}
Gerakan: ${gerakan}
`;
  }

  const prompt = `
PRIORITAS REFERENSI GAMBAR:
Karakter harus sangat mirip dengan gambar referensi. Pertahankan struktur wajah, proporsi tubuh, pose, dan identitas visual.

DESKRIPSI ADEGAN:

Dialog (${document.getElementById("dialogNada").value}):
${document.getElementById("dialogText").value}

${karakterText}

LINGKUNGAN:
Lokasi: ${document.getElementById("lokasi").value}
Latar belakang: ${document.getElementById("latar").value}
Waktu: ${document.getElementById("waktu").value}
Cuaca: ${document.getElementById("cuaca").value}
Suasana: ${document.getElementById("suasana").value}

KAMERA SINEMATIK:
Jenis shot: ${document.getElementById("shot").value}
Sudut kamera: ${document.getElementById("sudut").value}
Gerakan kamera: ${document.getElementById("gerakCam").value}
Kedalaman fokus: ${document.getElementById("focus").value}

PENCACAHAYAAN & GAYA VISUAL:
Tone warna: ${document.getElementById("tone").value}
Gaya visual: ${document.getElementById("style").value}

KUALITAS OUTPUT:
8K ultra HD
masterpiece quality
ultra detail
rasio vertikal 9:16
`;

  document.getElementById("output").value = prompt;
}

// Copy semua
function copyAll(){
  const text = document.getElementById("output").value;
  navigator.clipboard.writeText(text);
  alert("Copied!");
}

// Random semua
function randomMasterPro(){
  // Karakter
  const count = document.getElementById("charCount");
  count.selectedIndex = Math.floor(Math.random()*count.options.length);
  generateKarakterOptions();
  const charCount = count.value;
  for(let i=1;i<=charCount;i++){
    ["pakaian","ekspresi","gerakan"].forEach(type=>{
      const el = document.getElementById(type+i);
      el.selectedIndex = Math.floor(Math.random()*el.options.length);
    });
  }
  // Lingkungan & Kamera & Visual
  ["lokasi","latar","waktu","cuaca","suasana","shot","sudut","gerakCam","focus","tone","style","dialogNada"].forEach(id=>{
    const el = document.getElementById(id);
    el.selectedIndex = Math.floor(Math.random()*el.options.length);
  });
  generateMasterPro();
}
