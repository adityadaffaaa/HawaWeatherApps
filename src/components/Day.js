import { React, useEffect, useState } from "react";

const Day = () => {
  const [detikState, setDetikState] = useState();

  const listHari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
  const listBulan = ["Januari", "Februari", "Maret", "April", "May", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  var getHari = new Date().getDay();
  var getBulan = new Date().getMonth();
  let getTahun = new Date().getFullYear();
  let jam = new Date().getHours();
  let menit = new Date().getMinutes();
  let tanggal = getHari;
  let hari = listHari[getHari];
  let bulan = listBulan[getBulan];
  useEffect(() => {
    setInterval(() => {
      let detik = new Date().getSeconds();
      setDetikState(detik);
      if (detik < 10) {
        setDetikState((detik = `0${detik}`));
      }
    }, 1000);
  });

  return (
    <div className="flex flex-row text-paragraph3 text-text3 gap-3">
      <p>
        {hari}, {tanggal} {bulan} {getTahun}
      </p>
      <span className="h-auto w-[2px] bg-text2 rounded-full"></span>
      <p>
        {jam}.{menit}.{detikState}
      </p>
    </div>
  );
};

export default Day;
