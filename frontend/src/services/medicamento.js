import { DataTypes } from 'sequelize';
import sequelize from './db';

const Medicamento = sequelize.define('Medicamento', {
  CodMedicamento: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  descripcionMed: DataTypes.STRING,
  fechaFabricacion: DataTypes.DATE,
  fechaVencimiento: DataTypes.DATE,
  Presentacion: DataTypes.STRING,
  stock: DataTypes.INTEGER,
  precioVentaUni: DataTypes.DECIMAL(10,2),
  precioVentaPres: DataTypes.DECIMAL(10,2),
  CodTipoMed: DataTypes.INTEGER,
  Marca: DataTypes.STRING,
  CodEspec: DataTypes.INTEGER,
}, { tableName: 'Medicamento', timestamps: false });

export async function getAllMedicamentos() {
  return await Medicamento.findAll();
}

export async function getMedicamentoById(id) {
  return await Medicamento.findByPk(id);
}

export async function createMedicamento(data) {
  return await Medicamento.create(data);
}

export async function updateMedicamento(id, data) {
  const med = await Medicamento.findByPk(id);
  if (!med) return null;
  await med.update(data);
  return med;
}

export async function deleteMedicamento(id) {
  const med = await Medicamento.findByPk(id);
  if (!med) return null;
  await med.destroy();
  return true;
} 