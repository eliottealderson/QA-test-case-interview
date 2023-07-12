import { createLogger, format, transports } from 'winston';

const stripAnsiEscapeCodes = format.printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message.replace(/\x1B[[(?);]{0,2}(;?\d)*./g, '')}`;
});

const logger = createLogger({
    level: 'info', // Le niveau minimal des messages qui doivent être enregistrés.
    format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // Ajoute un horodatage à chaque message.
        format.errors({ stack: true }), // Si un objet de type Error est passé, log l'objet d'erreur avec le stacktrace.
        format.splat(), // Fournit un support de type util.format pour la chaîne de message.
        format.json(), // Le format de sortie des messages sera JSON.
        stripAnsiEscapeCodes // Ajout du formatteur personnalisé pour supprimer les codes d'échappement ANSI.
    ),
    defaultMeta: { service: 'user-service' }, // Les métadonnées par défaut à attribuer à chaque message de journal.
    transports: [
        new transports.File({ filename: 'error.log', level: 'error' }), // Enregistre tous les logs de niveau 'error' dans le fichier 'error.log'.
        new transports.File({ filename: 'combined.log' }), // Enregistre tous les logs (de tous les niveaux) dans le fichier 'combined.log'.
        new transports.Console() // Log les messages à la console.
    ],
});

export default logger;
