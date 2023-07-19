const nodemailer = require("nodemailer");

async function main() {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SENDER_EMAIL, // e-mail de l'expéditeur
            pass: process.env.SENDER_PASS, // mot de passe de l'expéditeur
        },
    })

    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // adresse de l'expéditeur
        to: process.env.RECEIVER_EMAIL, // liste des destinataires
        subject: "Lien vers la documentation", // Sujet du courrier
        text: "Veuillez consulter la documentation mise à jour à l'adresse suivante : https://github.com/your-account/your-repo/your-docs-link", // corps du courrier en texte brut
        html: "<p>Veuillez consulter la documentation mise à jour à l'adresse suivante : <a href='https://github.com/your-account/your-repo/your-docs-link'>https://github.com/your-account/your-repo/your-docs-link</a></p>", // corps du courrier en HTML
    });

    console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);
