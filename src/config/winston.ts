import appRoot from 'app-root-path'
import winston from 'winston'

const options = {
  error: {
    level: 'error',
    filename: `${appRoot}/src/logs/error.log`,
    handleExceptions: true,
    json: false,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.printf((info) => {
        return `${info.timestamp} - [${info.level.toUpperCase()}]: ${info.message}`
      })
    )
  },
  info: {
    level: 'info',
    filename: `${appRoot}/src/logs/info.log`,
    handleExceptions: true,
    json: false,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.printf((info) => {
        return `${info.timestamp} - [${info.level.toUpperCase()}]: ${info.message}`
      })
    )
  }
}

export const infoLog = winston.createLogger({
  transports: [new winston.transports.File(options.info)],
  exitOnError: false
})

export const errorLog = winston.createLogger({
  transports: [new winston.transports.File(options.error)],
  exitOnError: false
})
