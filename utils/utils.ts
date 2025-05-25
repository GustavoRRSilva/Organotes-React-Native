import { jwtDecode } from "jwt-decode";

export const getUserIdFromToken = (token: string) => {
  const decoded: any = jwtDecode(token);
  return decoded?.id;
};

export const formatarDiaData = (texto: string): string => {
  const [dia, data] = texto.split(" ");
  return `${dia.slice(0, 3)} ${data}`;
};
