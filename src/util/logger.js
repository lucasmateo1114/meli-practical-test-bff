import winston, { format } from 'winston'

export default winston.createLogger({
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD hh:mm:ss.SSS A',
        }),
        format.json(),
        format.align(),
    ),
    transports: [new winston.transports.Console()],
});