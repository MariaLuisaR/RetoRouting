import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Mascota from "./mascota";
import Mascotas from "./mascotas";
import { useEffect, useState } from "react";


export default function Detail() {
  const { mascotaId } = useParams();
  const [mascota, setMascota] = useState(null);

  useEffect(() => {
    const URL =
      "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        const foundMascota = data.find((masc) => masc.id === parseInt(mascotaId));
        setMascota(foundMascota);
      });
  }, [mascotaId]);

  if (!mascota) {
    return;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{mascota.nombre}</h1>
      <img
        src={mascota.foto}
        alt={mascota.nombre}
        style={{ width: "400px", height: "400px", objectFit: "cover" }}
      />
      <h3>{mascota.raza}</h3>
    </div>
  );
}


