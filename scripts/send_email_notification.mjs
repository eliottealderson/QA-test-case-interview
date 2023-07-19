import nodemailer from "nodemailer";

async function main() {
    // Obtenez les détails du compte et du dépôt à partir des variables d'environnement ou de la configuration
    const account = process.env.GITHUB_ACCOUNT;
    const repo = process.env.GITHUB_REPO;
    const docsLink = process.env.DOCS_LINK;

    // Générez l'URL de manière dynamique
    const url = `https://github.com/${account}/${repo}/${docsLink}`;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SENDER_EMAIL, // e-mail de l'expéditeur
            pass: process.env.SENDER_PASS, // mot de passe de l'expéditeur
        },
    })

    let info = await transporter.sendMail({
        from: '"Dya Lee 👻" <dyalee@live.com>', // adresse de l'expéditeur
        to: process.env.RECEIVER_EMAIL, // liste des destinataires
        subject: "Lien vers la documentation", // Sujet du courrier
        text: `Veuillez consulter la documentation mise à jour à l'adresse suivante : ${url}`, // corps du courrier en texte brut
        html: `<p>Veuillez consulter la documentation mise à jour à l'adresse suivante : <a href='${url}'>${url}</a></p>`, // corps du courrier en HTML
    });

    console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);
