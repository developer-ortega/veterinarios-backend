import nodemailer from 'nodemailer';

const emailOlvidePassword = async (datos) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    // Enviar el email
    const { email, nombre, token } = datos;

    const info = await transporter.sendMail({
        from: 'APV - Administrador de Pacientes de Veterinaria',
        to: email,
        subject: 'Restablecer Password',
        text: 'Recupera tu Password',
        html: `<p>Hola ${nombre}, has solicitado re-establecer tu password.</p>
            <p>Sigue el siguiente enlace, para generar un nuevo password:
            <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Re-establecer Password</a> </p>

            <p>Si tu no creaste esta cuenta, puedes ignorar este email </p>
        `
    })
}

export default emailOlvidePassword;