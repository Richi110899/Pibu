import { DataTypes } from 'sequelize';
import sequelize from './db';

const OrdenCompra = sequelize.define('OrdenCompra', {
  NroOrdenC: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  fechaEmision: DataTypes.DATE,
  Situacion: DataTypes.STRING,
  Total: DataTypes.DECIMAL(10,2),
  CodLab: DataTypes.INTEGER,
  NrofacturaProv: DataTypes.STRING,
}, { tableName: 'OrdenCompra', timestamps: false });

export async function getAllOrdenesCompra() {
  return await OrdenCompra.findAll();
}

export async function getOrdenCompraById(id) {
  return await OrdenCompra.findByPk(id);
}

export async function createOrdenCompra(data) {
  return await OrdenCompra.create(data);
}

export async function updateOrdenCompra(id, data) {
  const orden = await OrdenCompra.findByPk(id);
  if (!orden) return null;
  await orden.update(data);
  return orden;
}

export async function deleteOrdenCompra(id) {
  const orden = await OrdenCompra.findByPk(id);
  if (!orden) return null;
  await orden.destroy();
  return true;
} 