import { DataTypes } from 'sequelize';
import sequelize from './db';

const Laboratorio = sequelize.define('Laboratorio', {
  CodLab: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  razonSocial: DataTypes.STRING,
  direccion: DataTypes.STRING,
  telefono: DataTypes.STRING,
  email: DataTypes.STRING,
  contacto: DataTypes.STRING,
}, { tableName: 'Laboratorio', timestamps: false });

export async function getAllLaboratorios() {
  return await Laboratorio.findAll();
}

export async function getLaboratorioById(id) {
  return await Laboratorio.findByPk(id);
}

export async function createLaboratorio(data) {
  return await Laboratorio.create(data);
}

export async function updateLaboratorio(id, data) {
  const lab = await Laboratorio.findByPk(id);
  if (!lab) return null;
  await lab.update(data);
  return lab;
}

export async function deleteLaboratorio(id) {
  const lab = await Laboratorio.findByPk(id);
  if (!lab) return null;
  await lab.destroy();
  return true;
} 