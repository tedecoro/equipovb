import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nombre, telefono, email, tipoPropiedad, ubicacion, mensaje } = body;

    // Validate required fields
    if (!nombre || !telefono || !email || !tipoPropiedad || !ubicacion) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const emailContent = `
      Nueva consulta de presupuesto
      
      Nombre: ${nombre}
      Teléfono: ${telefono}
      Email: ${email}
      Tipo de propiedad: ${tipoPropiedad}
      Ubicación: ${ubicacion}
      
      Mensaje:
      ${mensaje || 'Sin mensaje adicional'}
    `;

    await resend.emails.send({
      from: 'Equipo VB <contacto@equipovb.com.ar>',
      to: 'info@equipovb.com.ar', // Replace with actual recipient
      subject: `Nueva consulta de presupuesto - ${nombre}`,
      text: emailContent,
    });

    return NextResponse.json(
      { message: 'Email enviado correctamente' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Error al enviar el email' },
      { status: 500 }
    );
  }
}
