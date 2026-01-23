import c1 from "@/assets/certificados/captura-2025-01-12-203204.png";
import c2 from "@/assets/certificados/captura-2025-01-12-203221.png";
import c3 from "@/assets/certificados/captura-2025-01-12-203233.png";
import c4 from "@/assets/certificados/captura-2025-01-12-203244.png";
import c5 from "@/assets/certificados/captura-2025-01-12-203254.png";
import c6 from "@/assets/certificados/captura-2025-01-12-203313.png";
import c7 from "@/assets/certificados/captura-2025-01-12-203325.png";
import c8 from "@/assets/certificados/captura-2025-01-12-203339.png";
import c9 from "@/assets/certificados/captura-2025-01-12-203355.png";
import c10 from "@/assets/certificados/captura-2025-01-12-203428.png";
import c11 from "@/assets/certificados/captura-2025-01-12-203442.png";
import c12 from "@/assets/certificados/captura-2025-01-12-203457.png";
import c13 from "@/assets/certificados/captura-2025-01-13-125908.png";
import c14 from "@/assets/certificados/captura-2025-01-18-135509.png";
import c15 from "@/assets/certificados/captura-2025-03-09-202931.png";
import c16 from "@/assets/certificados/captura-2025-03-12-174623.png";
import c17 from "@/assets/certificados/captura-2025-03-12-175451.png";
import c18 from "@/assets/certificados/captura-2025-04-15-150525.png";
import c19 from "@/assets/certificados/captura-2025-04-15-153611.png";

export type Certificate = {
  id: string;
  title: string;
  imageSrc: string;
};

export const certificates: Certificate[] = [
  { id: "c1", title: "Certificado 2025-01-12 20:32", imageSrc: c1 },
  { id: "c2", title: "Certificado 2025-01-12 20:32", imageSrc: c2 },
  { id: "c3", title: "Certificado 2025-01-12 20:32", imageSrc: c3 },
  { id: "c4", title: "Certificado 2025-01-12 20:32", imageSrc: c4 },
  { id: "c5", title: "Certificado 2025-01-12 20:32", imageSrc: c5 },
  { id: "c6", title: "Certificado 2025-01-12 20:33", imageSrc: c6 },
  { id: "c7", title: "Certificado 2025-01-12 20:33", imageSrc: c7 },
  { id: "c8", title: "Certificado 2025-01-12 20:33", imageSrc: c8 },
  { id: "c9", title: "Certificado 2025-01-12 20:33", imageSrc: c9 },
  { id: "c10", title: "Certificado 2025-01-12 20:34", imageSrc: c10 },
  { id: "c11", title: "Certificado 2025-01-12 20:34", imageSrc: c11 },
  { id: "c12", title: "Certificado 2025-01-12 20:34", imageSrc: c12 },
  { id: "c13", title: "Certificado 2025-01-13 12:59", imageSrc: c13 },
  { id: "c14", title: "Certificado 2025-01-18 13:55", imageSrc: c14 },
  { id: "c15", title: "Certificado 2025-03-09 20:29", imageSrc: c15 },
  { id: "c16", title: "Certificado 2025-03-12 17:46", imageSrc: c16 },
  { id: "c17", title: "Certificado 2025-03-12 17:54", imageSrc: c17 },
  { id: "c18", title: "Certificado 2025-04-15 15:05", imageSrc: c18 },
  { id: "c19", title: "Certificado 2025-04-15 15:36", imageSrc: c19 },
];
