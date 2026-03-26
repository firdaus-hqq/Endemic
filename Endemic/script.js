const ENDEMIC_DATA = {
  Aceh: { fauna: "Cempala Kuneng", flora: "Bunga Jeumpa" },
  "Sumatera Utara": { fauna: "Beo Nias", flora: "Kenanga" },
  "Sumatera Barat": { fauna: "Kuau Raja", flora: "Pohon Andalas" },
  Riau: { fauna: "Burung Serindit", flora: "Nibung" },
  Jambi: { fauna: "Harimau Sumatera", flora: "Pinang Merah" },
  "Sumatera Selatan": { fauna: "Ikan Belida", flora: "Duku" },
  Bengkulu: { fauna: "Beruang Madu", flora: "Suweg raksasa (Bunga Bangkai)" },
  Lampung: { fauna: "Gajah Sumatera", flora: "Bunga Ashar" },
  "Bangka Belitung": { fauna: "Mentilin", flora: "Nagasari" },
  "Kepulauan Riau": { fauna: "Ikan Kakap", flora: "Sirih" },
  "DKI Jakarta": { fauna: "Elang Bondol", flora: "Salak Condet" },
  "Jawa Barat": { fauna: "Macan Tutul Jawa", flora: "Gandaria" },
  "Jawa Tengah": { fauna: "Burung Kepodang", flora: "Bunga Kantil" },
  "DI Yogyakarta": { fauna: "Burung Perkutut", flora: "Pohon Kepel" },
  "Jawa Timur": { fauna: "Ayam Bekisar", flora: "Bunga Sedap Malam" },
  Banten: { fauna: "Badak Jawa", flora: "Kokoleceran" },
  Bali: { fauna: "Jalak Bali", flora: "Majegau" },
  "Nusa Tenggara Barat": { fauna: "Rusa Timor", flora: "Ajan Kelicung" },
  "Nusa Tenggara Timur": { fauna: "Komodo", flora: "Cendana" },
  "Kalimantan Barat": {
    fauna: "Burung Enggang Gading",
    flora: "Tengkawang Tungkul",
  },
  "Kalimantan Tengah": { fauna: "Burung Kuau Kerdil", flora: "Tenggaring" },
  "Kalimantan Selatan": { fauna: "Bekantan", flora: "Kasturi" },
  "Kalimantan Timur": { fauna: "Pesut Mahakam", flora: "Anggrek Hitam" },
  "Kalimantan Utara": { fauna: "Rangkok Badak", flora: "Bakau" },
  "Sulawesi Utara": { fauna: "Tangkasi", flora: "Longusei" },
  "Sulawesi Tengah": { fauna: "Burung Maleo", flora: "Eboni" },
  "Sulawesi Selatan": {
    fauna: "Burung Julang Sulawesi",
    flora: "Pohon Lontar",
  },
  "Sulawesi Tenggara": { fauna: "Anoa", flora: "Anggrek Serat" },
  Gorontalo: { fauna: "Ikan Bulalao", flora: "Gofasa" },
  "Sulawesi Barat": {
    fauna: "Burung Mandar Dengkur",
    flora: "Pohon Cempaka Hutan Kasar",
  },
  Maluku: { fauna: "Burung Nuri Raja", flora: "Anggrek Larat" },
  "Maluku Utara": { fauna: "Bidadari Halmahera", flora: "Cengkeh" },
  "Papua Barat": { fauna: "Cendrawasih Merah", flora: "Matoa" },
  Papua: { fauna: "Burung Cendrawasih", flora: "Buah Merah" },
  "Papua Selatan": { fauna: "Burung Kasuari", flora: "Sagu" },
  "Papua Tengah": { fauna: "Hiu Paus", flora: "Pisang Tongka Langit" },
};


const PHOTO_DATA = {
  Aceh: {
    fauna: "../Foto/Fauna/Ceumpla-kuneng-aceh-sumatra.jpg",
    flora: "../Foto/Flora/Jeumpa-CempakaKuning_Aceh.jpeg",
  },
  "Sumatera Utara": {
    fauna: "../Foto/Fauna/beo-nias-SumatraUtara.jpg",
    flora: "../Foto/Flora/Kenanga-SumateraUtara.jpg",
  },
  "Sumatera Barat": {
    fauna: "../Foto/Fauna/burung-kuau-raja-SumatraBarat.jpg",
    flora: "../Foto/Flora/Andalasp_SumateraBarat.jpg",
  },
  Riau: {
    fauna: "../Foto/Fauna/serindit-melayu-Riau.jpg",
    flora: "../Foto/Flora/Riau – Bunga Tanjung.jpeg",
  },
  Jambi: {
    fauna: "../Foto/Fauna/harimau-sumatera-jambi.webp",
    flora: "../Foto/Flora/Jambi – Pinang Merah.jpg",
  },
  "Sumatera Selatan": {
    fauna: "../Foto/Fauna/Ikan_belida-SumateraSelatan.jpg",
    flora: "../Foto/Flora/Sumatera Selatan – Duku.jpg",
  },
  Bengkulu: {
    fauna: "../Foto/Fauna/beruang-madu-Bengkulu.jpg",
    flora: "../Foto/Flora/Bengkulu – Rafflesia Arnoldii.jpg",
  },
  Lampung: {
    fauna: "../Foto/Fauna/gajah-sumatera-Lampung.jpg",
    flora: "../Foto/Flora/Lampung – Kopi Robusta.jpeg",
  },
  "Bangka Belitung": {
    fauna: "../Foto/Fauna/mentilin-BangkaBelitung.jpg",
    flora: "../Foto/Flora/Nagasari-BangkaBelitung.jpg",
  },
  "Kepulauan Riau": {
    fauna: "../Foto/Fauna/Kakap-Merah-KepulauanRiau.webp",
    flora: "../Foto/Flora/Riau – Bunga Tanjung.jpeg",
  },
  "DKI Jakarta": {
    fauna: "../Foto/Fauna/elang-bondol-Jakarta.jpg",
    flora: "../Foto/Flora/DKI Jakarta – SalakCondet.jpg",
  },
  "Jawa Barat": {
    fauna: "../Foto/Fauna/Macan-tutul-jawabarat.jpg",
    flora: "../Foto/Flora/Jawa Barat – Gandaria.jpg",
  },
  "Jawa Tengah": {
    fauna: "../Foto/Fauna/Kepodang-emas-JawaTengah.webp",
    flora: "../Foto/Flora/Jawa Tengah – Kantil.jpg",
  },
  "DI Yogyakarta": {
    fauna: "../Foto/Fauna/Burung-tekukur-Yogyakarta.webp",
    flora: "../Foto/Flora/DI Yogyakarta – Kepel.jpg",
  },
  "Jawa Timur": {
    fauna: "../Foto/Fauna/Ayam-Bekisar-JawaTimur.webp",
    flora: "../Foto/Flora/Jawa Timur – Sedap Malam.jpeg",
  },
  Banten: {
    fauna: "../Foto/Fauna/badak-jawa-Banten.jpg",
    flora: "../Foto/Flora/Banten-Kokoleceran.webp",
  },
  Bali: {
    fauna: "../Foto/Fauna/Jalak-Bali-Bali.jpg",
    flora: "../Foto/Flora/Bali – Majegau.webp",
  },
  "Nusa Tenggara Barat": {
    fauna: "../Foto/Fauna/Rusa-Timor-NTB.webp",
    flora: "../Foto/Flora/NTT – Cendana.jpg",
  },
  "Nusa Tenggara Timur": {
    fauna: "../Foto/Fauna/Komodo-NTT.jpg",
    flora: "../Foto/Flora/NTT – Cendana.jpg",
  },
  "Kalimantan Barat": {
    fauna: "../Foto/Fauna/Enggang-Gading-KalimantanBarat.jpg",
    flora: "../Foto/Flora/Kalimantan Barat - Tengkawang Tungkul.jpg",
  },
  "Kalimantan Tengah": {
    fauna: "../Foto/Fauna/Kuau-Kerdil-KalimantanTengah.png",
    flora: "../Foto/Flora/Kalimantan Tengah - Tenggaring.png",
  },
  "Kalimantan Selatan": {
    fauna: "../Foto/Fauna/bekantan-KalimantanSelatan.jpg",
    flora: "../Foto/Flora/Kalimantan Selatan-mangga_kasturi.jpg",
  },
  "Kalimantan Timur": {
    fauna: "../Foto/Fauna/pesut-mahakam-KalimantanTimur.jpg",
    flora: "../Foto/Flora/Kalimantan Timur - Anggrek Hitam.jpeg",
  },
  "Kalimantan Utara": {
    fauna: "../Foto/Fauna/Gajah-borneo-kalimantanutara.jpg",
    flora: "../Foto/Flora/Kalimantan Utara – Kayu Hitam.jpg",
  },
  "Sulawesi Utara": {
    fauna: "../Foto/Fauna/Tarsius-SulawesiUtara.webp",
    flora: "../Foto/Flora/Longusei.webp",
  },
  "Sulawesi Tengah": {
    fauna: "../Foto/Fauna/Burung-Maleo-SulawesiTengah.jpg",
    flora: "../Foto/Flora/sulawesi tengah. - pohon eboni.jpg",
  },
  "Sulawesi Selatan": {
    fauna: "../Foto/Fauna/Burung-Julang-SulawesiSelatan.jpg",
    flora: "../Foto/Flora/Sulawesi Selatan - buah-lontar.jpg",
  },
  "Sulawesi Tenggara": {
    fauna: "../Foto/Fauna/Anoa-SulawesiTenggara.jpg",
    flora: "../Foto/Flora/Sulawesi – Anggrek Serat.webp",
  },
  Gorontalo: {
    fauna: "../Foto/Fauna/Ikan_bulalao-Gorontalo.jpg",
    flora: "../Foto/Flora/gofasa-daun-bunga.webp",
  },
  "Sulawesi Barat": {
    fauna: "../Foto/Fauna/Mandar-Dengkur-sulawesiBarat.webp",
    flora: "../Foto/Flora/Sulawesi Barat – Cempaka Hutan Kasar.jpg",
  },
  Maluku: {
    fauna: "../Foto/Fauna/Nuri-rajaAmbon-Maluku.jpg",
    flora: "../Foto/Flora/Maluku - Anggrek Larat.jpg",
  },
  "Maluku Utara": {
    fauna: "../Foto/Fauna/Bidadari-Halmahera-MalukuUtara.jpeg",
    flora: "../Foto/Flora/Maluku Utara – Cengkeh.jpg",
  },
  "Papua Barat": {
    fauna: "../Foto/Fauna/Cendrawasih-Merah-PapuaBarat.jpg",
    flora: "../Foto/Flora/Papua Barat – Matoa.jpg",
  },
  Papua: {
    fauna: "../Foto/Fauna/Cendrawasih-Papua.jpg",
    flora: "../Foto/Flora/Papua – Buah Merah.jpg",
  },
  "Papua Selatan": {
    fauna: "../Foto/Fauna/BurungKasuari-PapuaSelatan.jpg",
    flora: "../Foto/Flora/Papua Selatan – Sagu.jpg",
  },
  "Papua Tengah": {
    fauna: "../Foto/Fauna/whale-shark.webp",
    flora: "../Foto/Flora/Pisang Tongka Langit.jpg",
  },
};


const GEOJSON_TO_KEY = {
  "DI. ACEH": "Aceh",
  "SUMATERA UTARA": "Sumatera Utara",
  "SUMATERA BARAT": "Sumatera Barat",
  RIAU: "Riau",
  JAMBI: "Jambi",
  "SUMATERA SELATAN": "Sumatera Selatan",
  BENGKULU: "Bengkulu",
  LAMPUNG: "Lampung",
  "BANGKA BELITUNG": "Bangka Belitung",
  "KEPULAUAN RIAU": "Kepulauan Riau",
  "DKI JAKARTA": "DKI Jakarta",
  "JAWA BARAT": "Jawa Barat",
  "JAWA TENGAH": "Jawa Tengah",
  "DI YOGYAKARTA": "DI Yogyakarta",
  "DAERAH ISTIMEWA YOGYAKARTA": "DI Yogyakarta",
  "JAWA TIMUR": "Jawa Timur",
  BANTEN: "Banten",
  PROBANTEN: "Banten",
  BALI: "Bali",
  "NUSA TENGGARA BARAT": "Nusa Tenggara Barat",
  "NUSA TENGGARA TIMUR": "Nusa Tenggara Timur",
  "NUSATENGGARA BARAT": "Nusa Tenggara Barat",
  "NUSATENGGARA TIMUR": "Nusa Tenggara Timur",
  "KALIMANTAN BARAT": "Kalimantan Barat",
  "KALIMANTAN TENGAH": "Kalimantan Tengah",
  "KALIMANTAN SELATAN": "Kalimantan Selatan",
  "KALIMANTAN TIMUR": "Kalimantan Timur",
  "KALIMANTAN UTARA": "Kalimantan Utara",
  "SULAWESI UTARA": "Sulawesi Utara",
  "SULAWESI TENGAH": "Sulawesi Tengah",
  "SULAWESI SELATAN": "Sulawesi Selatan",
  "SULAWESI TENGGARA": "Sulawesi Tenggara",
  GORONTALO: "Gorontalo",
  "SULAWESI BARAT": "Sulawesi Barat",
  MALUKU: "Maluku",
  "MALUKU UTARA": "Maluku Utara",
  "PAPUA BARAT": "Papua Barat",
  PAPUA: "Papua",
  "PAPUA SELATAN": "Papua Selatan",
  "IRIAN JAYA TIMUR": "Papua Selatan",
  "IRIAN JAYA BARAT": "Papua Barat",
  "IRIAN JAYA TENGAH": "Papua Tengah",
  "IRIAN JAYA UTARA": "Papua",

  "JAKARTA RAYA": "DKI Jakarta",
  YOGYAKARTA: "DI Yogyakarta",
};

function resolveProvName(rawName) {
  return (
    GEOJSON_TO_KEY[rawName] || GEOJSON_TO_KEY[rawName.toUpperCase()] || rawName
  );
}


class EndemicMapApp {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.width = this.container.clientWidth;
    this.height = this.container.clientHeight;
    this.activeProv = null;
    this.init();
  }

  async init() {

    this.svg = d3
      .select(this.container)
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .attr("viewBox", [0, 0, this.width, this.height])
      .style("width", "100%")
      .style("height", "100%");

    this.g = this.svg.append("g");


    this.zoom = d3
      .zoom()
      .scaleExtent([0.5, 8])
      .on("zoom", (e) => {
        this.g.attr("transform", e.transform);
      });
    this.svg.call(this.zoom);

    await this.loadMap();
    window.addEventListener("resize", () => this.handleResize());
  }

  async loadMap() {
    try {

      const geoData = await d3.json(
        "https://raw.githubusercontent.com/superpikar/indonesia-geojson/master/indonesia-province-simple.json",
      );


      const projection = d3.geoMercator().fitExtent(
        [
          [50, 50],
          [this.width - 100, this.height - 100],
        ],
        geoData,
      );

      const path = d3.geoPath().projection(projection);


      this.g
        .selectAll("path")
        .data(geoData.features)
        .enter()
        .append("path")
        .attr("class", "province-path")
        .attr("d", path)
        .on("click", (e, d) => {
          const rawName =
            d.properties.Propinsi ||
            d.properties.NAME_1 ||
            d.properties.name ||
            "Indonesia";
          const name = resolveProvName(rawName);
          this.activeProv = name;


          this.g.selectAll(".province-path").classed("active", false);
          d3.select(e.currentTarget).classed("active", true);

          this.showInfoPanel(name);
        });
    } catch (err) {
      console.error("Failed to load map data:", err);
    }
  }

  showInfoPanel(provName) {
    const info = ENDEMIC_DATA[provName] || {
      fauna: "Fauna Endemik (Tidak Diketahui)",
      flora: "Flora Endemik (Tidak Diketahui)",
    };
    const photos = PHOTO_DATA[provName] || { fauna: null, flora: null };

    document.getElementById("info-title").innerText = provName;
    document.getElementById("info-fauna").innerText = info.fauna;
    document.getElementById("info-flora").innerText = info.flora;


    const faunaPlaceholder = document.getElementById("fauna-img-box");
    if (photos.fauna) {
      faunaPlaceholder.innerHTML = `<img src="${photos.fauna}" alt="${info.fauna}" class="panel-photo">`;
    } else {
      faunaPlaceholder.innerHTML = `<span class="placeholder-text">Ilustrasi Fauna</span>`;
    }


    const floraPlaceholder = document.getElementById("flora-img-box");
    if (photos.flora) {
      floraPlaceholder.innerHTML = `<img src="${photos.flora}" alt="${info.flora}" class="panel-photo">`;
    } else {
      floraPlaceholder.innerHTML = `<span class="placeholder-text">Ilustrasi Flora</span>`;
    }


    document.getElementById("btn-detail-fauna").dataset.prov = provName;
    document.getElementById("btn-detail-flora").dataset.prov = provName;


    document.getElementById("info-panel").classList.remove("hidden");
  }

  handleResize() {
    this.width = this.container.clientWidth;
    this.height = this.container.clientHeight;
    this.svg
      .attr("width", this.width)
      .attr("height", this.height)
      .attr("viewBox", [0, 0, this.width, this.height]);
  }
}


document.getElementById("close-info").addEventListener("click", () => {
  document.getElementById("info-panel").classList.add("hidden");

  d3.selectAll(".province-path").classed("active", false);
});


const app = new EndemicMapApp("map-container");


const overlayDetail = document.getElementById("detail-overlay");

function openDetailView(type, provName) {
  const info = ENDEMIC_DATA[provName] || {
    fauna: "Satwa Bebas",
    flora: "Tumbuhan Liar",
  };
  const photos = PHOTO_DATA[provName] || { fauna: null, flora: null };
  const itemName = type === "fauna" ? info.fauna : info.flora;
  const photoSrc = type === "fauna" ? photos.fauna : photos.flora;


  document.getElementById("detail-badge-type").innerText =
    type === "fauna" ? "Fauna Endemik" : "Flora Endemik";
  document.getElementById("detail-title").innerText = itemName;
  document.getElementById("detail-subtitle").innerText =
    `Karakteristik Langka | Habitat Asli di Provinsi ${provName}`;


  const detailImgBox = document.getElementById("detail-img-box");
  if (photoSrc) {
    detailImgBox.innerHTML = `<img src="${photoSrc}" alt="${itemName}" class="detail-photo">`;
  } else {
    detailImgBox.innerHTML = `<span class="placeholder-text" style="font-size:1.2rem;">Foto Resolusi Tinggi</span>`;
  }


  const article =
    type === "fauna"
      ? `<strong>${itemName}</strong> merupakan satwa purba atau spesies istimewa yang hanya dapat ditemukan hidup bebas dan sejahtera murni di ekosistem asli dari wilayah <strong>${provName}</strong>. Populasinya terus berjuang di alam liar di tengah ancaman modernisasi dan hilangnya keragaman hutan hujan tropis.`
      : `<strong>${itemName}</strong> tumbuh dan mekar sebagai sebuah permata hidup di hutan belantara wilayah <strong>${provName}</strong>. Adaptasi tinggi tanaman ini terhadap iklim tropis menjadikannya tidak tergantikan dan menjadi ikon membanggakan bagi kekayaan botani Indonesia di mata dunia.`;

  document.getElementById("detail-text").innerHTML =
    `<p>${article}</p><p>Mari terus berupaya menjaga keanekaragaman flora & fauna ini agar keseimbangan alam tetap terjaga abadi dan bisa diwariskan ke generasi selanjutnya kelak.</p>`;


  overlayDetail.classList.remove("hidden");
}

document.querySelectorAll(".btn-detail").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const type = e.target.dataset.type;
    const prov = e.target.dataset.prov;
    openDetailView(type, prov);
  });
});

document.getElementById("close-detail").addEventListener("click", () => {
  overlayDetail.classList.add("hidden");
});


const GALLERY_POOL = [

  { src: "../Foto/Fauna/Anoa-SulawesiTenggara.jpg", label: "Anoa (Sulawesi Tenggara)" },
  { src: "../Foto/Fauna/Ayam-Bekisar-JawaTimur.webp", label: "Ayam Bekisar (Jawa Timur)" },
  { src: "../Foto/Fauna/Bidadari-Halmahera-MalukuUtara.jpeg", label: "Bidadari Halmahera (Maluku Utara)" },
  { src: "../Foto/Fauna/Burung-Julang-SulawesiSelatan.jpg", label: "Julang Sulawesi (Sulawesi Selatan)" },
  { src: "../Foto/Fauna/Burung-Maleo-SulawesiTengah.jpg", label: "Burung Maleo (Sulawesi Tengah)" },
  { src: "../Foto/Fauna/Burung-tekukur-Yogyakarta.webp", label: "Burung Perkutut (Yogyakarta)" },
  { src: "../Foto/Fauna/BurungKasuari-PapuaSelatan.jpg", label: "Burung Kasuari (Papua Selatan)" },
  { src: "../Foto/Fauna/Cendrawasih-Merah-PapuaBarat.jpg", label: "Cendrawasih Merah (Papua Barat)" },
  { src: "../Foto/Fauna/Cendrawasih-Papua.jpg", label: "Burung Cendrawasih (Papua)" },
  { src: "../Foto/Fauna/Ceumpla-kuneng-aceh-sumatra.jpg", label: "Cempala Kuneng (Aceh)" },
  { src: "../Foto/Fauna/Enggang-Gading-KalimantanBarat.jpg", label: "Enggang Gading (Kalimantan Barat)" },
  { src: "../Foto/Fauna/Gajah-borneo-kalimantanutara.jpg", label: "Gajah Borneo (Kalimantan Utara)" },
  { src: "../Foto/Fauna/Ikan_belida-SumateraSelatan.jpg", label: "Ikan Belida (Sumatera Selatan)" },
  { src: "../Foto/Fauna/Ikan_bulalao-Gorontalo.jpg", label: "Ikan Bulalao (Gorontalo)" },
  { src: "../Foto/Fauna/Jalak-Bali-Bali.jpg", label: "Jalak Bali (Bali)" },
  { src: "../Foto/Fauna/Kakap-Merah-KepulauanRiau.webp", label: "Ikan Kakap (Kepulauan Riau)" },
  { src: "../Foto/Fauna/Kepodang-emas-JawaTengah.webp", label: "Burung Kepodang (Jawa Tengah)" },
  { src: "../Foto/Fauna/Komodo-NTT.jpg", label: "Komodo (NTT)" },
  { src: "../Foto/Fauna/Kuau-Kerdil-KalimantanTengah.png", label: "Kuau Kerdil (Kalimantan Tengah)" },
  { src: "../Foto/Fauna/Macan-tutul-jawabarat.jpg", label: "Macan Tutul Jawa (Jawa Barat)" },
  { src: "../Foto/Fauna/Mandar-Dengkur-sulawesiBarat.webp", label: "Mandar Dengkur (Sulawesi Barat)" },
  { src: "../Foto/Fauna/Mentilin-BangkaBelitung.jpg", label: "Mentilin (Bangka Belitung)" },
  { src: "../Foto/Fauna/Nuri-rajaAmbon-Maluku.jpg", label: "Nuri Raja Ambon (Maluku)" },
  { src: "../Foto/Fauna/Rusa-Timor-NTB.webp", label: "Rusa Timor (NTB)" },
  { src: "../Foto/Fauna/Tarsius-SulawesiUtara.webp", label: "Tangkasi (Sulawesi Utara)" },
  { src: "../Foto/Fauna/Walabi-PapuaSelatan.jpg", label: "Walabi (Papua Selatan)" },
  { src: "../Foto/Fauna/badak-jawa-Banten.jpg", label: "Badak Jawa (Banten)" },
  { src: "../Foto/Fauna/bekantan-KalimantanSelatan.jpg", label: "Bekantan (Kalimantan Selatan)" },
  { src: "../Foto/Fauna/beo-nias-SumatraUtara.jpg", label: "Beo Nias (Sumatera Utara)" },
  { src: "../Foto/Fauna/beruang-madu-Bengkulu.jpg", label: "Beruang Madu (Bengkulu)" },
  { src: "../Foto/Fauna/burung-kuau-raja-SumatraBarat.jpg", label: "Kuau Raja (Sumatera Barat)" },
  { src: "../Foto/Fauna/elang-bondol-Jakarta.jpg", label: "Elang Bondol (DKI Jakarta)" },
  { src: "../Foto/Fauna/gajah-sumatera-Lampung.jpg", label: "Gajah Sumatera (Lampung)" },
  { src: "../Foto/Fauna/harimau-sumatera-jambi.webp", label: "Harimau Sumatera (Jambi)" },
  { src: "../Foto/Fauna/pesut-mahakam-KalimantanTimur.jpg", label: "Pesut Mahakam (Kalimantan Timur)" },
  { src: "../Foto/Fauna/serindit-melayu-Riau.jpg", label: "Burung Serindit (Riau)" },
  { src: "../Foto/Fauna/whale-shark.webp", label: "Hiu Paus (Papua Tengah)" },

  { src: "../Foto/Flora/Andalasp_SumateraBarat.jpg", label: "Pohon Andalas (Sumatera Barat)" },
  { src: "../Foto/Flora/Bali \u2013 Majegau.webp", label: "Majegau (Bali)" },
  { src: "../Foto/Flora/Banten-Kokoleceran.webp", label: "Kokoleceran (Banten)" },
  { src: "../Foto/Flora/Bengkulu \u2013 Rafflesia Arnoldii.jpg", label: "Rafflesia Arnoldii (Bengkulu)" },
  { src: "../Foto/Flora/DI Yogyakarta \u2013 Kepel.jpg", label: "Pohon Kepel (Yogyakarta)" },
  { src: "../Foto/Flora/DKI Jakarta \u2013 SalakCondet.jpg", label: "Salak Condet (Jakarta)" },
  { src: "../Foto/Flora/Jambi \u2013 Pinang Merah.jpg", label: "Pinang Merah (Jambi)" },
  { src: "../Foto/Flora/Jawa Barat \u2013 Gandaria.jpg", label: "Gandaria (Jawa Barat)" },
  { src: "../Foto/Flora/Jawa Tengah \u2013 Kantil.jpg", label: "Bunga Kantil (Jawa Tengah)" },
  { src: "../Foto/Flora/Jawa Timur \u2013 Sedap Malam.jpeg", label: "Sedap Malam (Jawa Timur)" },
  { src: "../Foto/Flora/Jeumpa-CempakaKuning_Aceh.jpeg", label: "Bunga Jeumpa (Aceh)" },
  { src: "../Foto/Flora/Kalimantan Barat - Tengkawang Tungkul.jpg", label: "Tengkawang Tungkul (Kalimantan Barat)" },
  { src: "../Foto/Flora/Kalimantan Selatan-mangga_kasturi.jpg", label: "Mangga Kasturi (Kalimantan Selatan)" },
  { src: "../Foto/Flora/Kalimantan Tengah - Tenggaring.png", label: "Tenggaring (Kalimantan Tengah)" },
  { src: "../Foto/Flora/Kalimantan Timur - Anggrek Hitam.jpeg", label: "Anggrek Hitam (Kalimantan Timur)" },
  { src: "../Foto/Flora/Kalimantan \u2013 Ulin (Kayu Besi).JPG", label: "Kayu Ulin / Kayu Besi (Kalimantan)" },
  { src: "../Foto/Flora/Kenanga-SumateraUtara.jpg", label: "Kenanga (Sumatera Utara)" },
  { src: "../Foto/Flora/Lampung \u2013 Kopi Robusta.jpeg", label: "Kopi Robusta (Lampung)" },
  { src: "../Foto/Flora/Longusei.webp", label: "Longusei (Sulawesi Utara)" },
  { src: "../Foto/Flora/Maluku - Anggrek Larat.jpg", label: "Anggrek Larat (Maluku)" },
  { src: "../Foto/Flora/Maluku Utara \u2013 Cengkeh.jpg", label: "Cengkeh (Maluku Utara)" },
  { src: "../Foto/Flora/Maluku \u2013 Pala.jpeg", label: "Pala (Maluku)" },
  { src: "../Foto/Flora/NTT \u2013 Cendana.jpg", label: "Cendana (NTT)" },
  { src: "../Foto/Flora/Nagasari-BangkaBelitung.jpg", label: "Nagasari (Bangka Belitung)" },
  { src: "../Foto/Flora/Papua Barat \u2013 Matoa.jpg", label: "Matoa (Papua Barat)" },
  { src: "../Foto/Flora/Papua Selatan \u2013 Sagu.jpg", label: "Sagu (Papua Selatan)" },
  { src: "../Foto/Flora/Pisang Tongka Langit.jpg", label: "Pisang Tongka Langit (Papua Tengah)" },
  { src: "../Foto/Flora/Riau \u2013 Bunga Tanjung.jpeg", label: "Bunga Tanjung (Riau)" },
  { src: "../Foto/Flora/Sulawesi Selatan - buah-lontar.jpg", label: "Pohon Lontar (Sulawesi Selatan)" },
  { src: "../Foto/Flora/Sulawesi \u2013 Anggrek Serat.webp", label: "Anggrek Serat (Sulawesi Tenggara)" },
  { src: "../Foto/Flora/Sumatera Selatan \u2013 Duku.jpg", label: "Duku (Sumatera Selatan)" },
  { src: "../Foto/Flora/gofasa-daun-bunga.webp", label: "Gofasa (Gorontalo)" },
  { src: "../Foto/Flora/sulawesi tengah. - pohon eboni.jpg", label: "Pohon Eboni (Sulawesi Tengah)" },
];

function shuffleGallery() {
  const grid = document.getElementById("gallery-grid");
  if (!grid) return;


  const pool = [...GALLERY_POOL];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }


  grid.innerHTML = pool.slice(0, 6).map(({ src, label }) => `
    <div class="gallery-item">
      <div class="g-img" style="background-image:url('${src}')"></div>
      <p>${label}</p>
    </div>
  `).join("");
}


document.addEventListener("DOMContentLoaded", () => {
  const linkExplore = document.getElementById("link-explore");
  const linkGallery = document.getElementById("link-gallery");
  const linkConservation = document.getElementById("link-conservation");
  const linkAbout = document.getElementById("link-about");

  const hamburgerMenu = document.getElementById("hamburger-menu");
  const navLinks = document.getElementById("nav-links");

  if (hamburgerMenu && navLinks) {
    hamburgerMenu.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  const modalContainer = document.getElementById("modal-container");
  const btnCloseModal = document.getElementById("close-modal");

  const modals = {
    gallery: document.getElementById("modal-gallery"),
    conservation: document.getElementById("modal-conservation"),
    about: document.getElementById("modal-about"),
  };

  function hideAllModals() {
    Object.values(modals).forEach((m) => m.classList.add("hidden"));
  }

  function showModal(type) {
    hideAllModals();
    if (modals[type]) {
      modals[type].classList.remove("hidden");
      modalContainer.classList.remove("hidden");
    }

    if (type === "gallery") shuffleGallery();

    if (navLinks) navLinks.classList.remove("active");

    document
      .querySelectorAll(".nav-links a")
      .forEach((a) => a.classList.remove("active"));
    if (type === "gallery") linkGallery.classList.add("active");
    if (type === "conservation") linkConservation.classList.add("active");
    if (type === "about") linkAbout.classList.add("active");
  }

  if (linkExplore) {
    linkExplore.addEventListener("click", (e) => {
      e.preventDefault();
      modalContainer.classList.add("hidden");
      document
        .querySelectorAll(".nav-links a")
        .forEach((a) => a.classList.remove("active"));
      linkExplore.classList.add("active");
      if (navLinks) navLinks.classList.remove("active");
    });
  }

  if (linkGallery)
    linkGallery.addEventListener("click", (e) => {
      e.preventDefault();
      showModal("gallery");
    });
  if (linkConservation)
    linkConservation.addEventListener("click", (e) => {
      e.preventDefault();
      showModal("conservation");
    });
  if (linkAbout)
    linkAbout.addEventListener("click", (e) => {
      e.preventDefault();
      showModal("about");
    });

  if (btnCloseModal) {
    btnCloseModal.addEventListener("click", () => {
      modalContainer.classList.add("hidden");
      document
        .querySelectorAll(".nav-links a")
        .forEach((a) => a.classList.remove("active"));
      if (linkExplore) linkExplore.classList.add("active");
    });
  }
});
