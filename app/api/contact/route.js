import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const data = await request.json();

    const {
      name,
      email,
      phone,
      service,
      message,
    } = data;

    if (!name || !phone || !service) {
      return Response.json(
        {
          success: false,
          message: "Veuillez remplir les champs obligatoires.",
        },
        { status: 400 }
      );
    }

    const emailContent = `
Nouvelle demande depuis le site High Touch

Nom : ${name}
Téléphone : ${phone}
Email : ${email || "Non renseigné"}
Service : ${service}

Message :
${message || "Aucun message renseigné"}
    `.trim();

    const { error } = await resend.emails.send({
      from: "High Touch <onboarding@resend.dev>",
      to: ["souhirmanai9@gmail.com"],
      subject: `Nouvelle demande - ${service} - ${name}`,
      text: emailContent,
      replyTo: email || undefined,
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        {
          success: false,
          message: "Une erreur est survenue lors de l'envoi.",
        },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: "Votre demande a bien été envoyée.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      {
        success: false,
        message: "Impossible d'envoyer votre demande pour le moment.",
      },
      { status: 500 }
    );
  }
}