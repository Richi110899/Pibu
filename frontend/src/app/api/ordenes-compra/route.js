import { NextResponse } from 'next/server';
import { getAllOrdenesCompra, createOrdenCompra } from '@/services/ordenCompra';

export async function GET() {
  const ordenes = await getAllOrdenesCompra();
  return NextResponse.json(ordenes);
}

export async function POST(request) {
  const data = await request.json();
  const created = await createOrdenCompra(data);
  return NextResponse.json(created, { status: 201 });
} 