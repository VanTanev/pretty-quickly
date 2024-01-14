import Pioppo from "pioppo"

const logger = new Pioppo({
  transports: [console]
})

async function run() {
  logger.info("Hello World!")
  logger.flush()
}

run().
  then(() => {
  logger.flush()
  })
  .catch(error => {
  logger.error(error)
  logger.flush()
  process.exit(1)
})
