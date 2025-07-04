import { DataTypes } from 'sequelize';
import sequelize from './db';

const Especialidad = sequelize.define('Especialidad', {
  CodEspec: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  descripcionEsp: DataTypes.STRING,
}, { tableName: 'Especialidad', timestamps: false });

export async function getAllEspecialidades() {
  return await Especialidad.findAll();
}

export async function getEspecialidadById(id) {
  return await Especialidad.findByPk(id);
}

export async function createEspecialidad(data) {
  return await Especialidad.create(data);
}

export async function updateEspecialidad(id, data) {
  const esp = await Especialidad.findByPk(id);
  if (!esp) return null;
  await esp.update(data);
  return esp;
}

export async function deleteEspecialidad(id) {
  const esp = await Especialidad.findByPk(id);
  if (!esp) return null;
  await esp.destroy();
  return true;
} 