import { NextResponse } from 'next/server';
import { getEspecialidadById, updateEspecialidad, deleteEspecialidad } from '@/services/especialidad';

export async function GET(request, { params }) {
  const esp = await getEspecialidadById(params.id);
  if (!esp) return NextResponse.json({ error: 'No encontrado' }, { status: 404 });
  return NextResponse.json(esp);
}

export async function PUT(request, { params }) {
  const data = await request.json();
  const updated = await updateEspecialidad(params.id, data);
  if (!updated) return NextResponse.json({ error: 'No encontrado' }, { status: 404 });
  return NextResponse.json(updated);
}

export async function DELETE(request, { params }) {
  const deleted = await deleteEspecialidad(params.id);
  if (!deleted) return NextResponse.json({ error: 'No encontrado' }, { status: 404 });
  return NextResponse.json({ message: 'Eliminado' });
} 