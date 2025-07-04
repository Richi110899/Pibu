import { NextResponse } from 'next/server';
import { getOrdenCompraById, updateOrdenCompra, deleteOrdenCompra } from '@/services/ordenCompra';

export async function GET(request, { params }) {
  const orden = await getOrdenCompraById(params.id);
  if (!orden) return NextResponse.json({ error: 'No encontrado' }, { status: 404 });
  return NextResponse.json(orden);
}

export async function PUT(request, { params }) {
  const data = await request.json();
  const updated = await updateOrdenCompra(params.id, data);
  if (!updated) return NextResponse.json({ error: 'No encontrado' }, { status: 404 });
  return NextResponse.json(updated);
}

export async function DELETE(request, { params }) {
  const deleted = await deleteOrdenCompra(params.id);
  if (!deleted) return NextResponse.json({ error: 'No encontrado' }, { status: 404 });
  return NextResponse.json({ message: 'Eliminado' });
} 