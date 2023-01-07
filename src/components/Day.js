import { React, useEffect, useState } from "react";

const Day = () => {
  const [detikState, setDetikState] = useState();
  const [menitState, setMenitState] = useState();
  const [jamState, setJamState] = useState();

  const listHari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const listBulan = ["Januari", "Februari", "Maret", "April", "May", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  var getHari = new Date().getDay();
  var getBulan = new Date().getMonth();
  let getTahun = new Date().getFullYear();
  let tanggal = new Date().getDate();
  let hari = listHari[getHari];
  let bulan = listBulan[getBulan];
  useEffect(() => {
    setInterval(() => {
      let detik = new Date().getSeconds();
      let jam = new Date().getHours();
      let menit = new Date().getMinutes();
      setDetikState(detik);
      setMenitState(menit);
      setJamState(jam);
      if (detik < 10) {
        setDetikState((detik = `0${detik}`));
      }
      if (menit < 10) {
        setMenitState((menit = `0${menit}`));
      }
      if (jam < 10) {
        setJamState((jam = `0${jam}`));
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
        {jamState}.{menitState}.{detikState}
      </p>
    </div>
  );
};

export default Day;
