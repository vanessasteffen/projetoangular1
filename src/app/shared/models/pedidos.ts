import {Clientes} from "./clientes";

export interface Pedidos {
  id: number;
  cliente_id: Clientes[] | any;
  name: string;
  size: number;
  description: string;
  created_at: string;
  updated_at: string;
}
