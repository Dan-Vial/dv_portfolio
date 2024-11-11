import pg from 'pg'
const { Pool } = pg
import 'dotenv/config'
import { exit } from 'process'

export const pool = new Pool()

try {
  if (pool) {
    console.log('Connexion à postgresql pg réussie !')

    const res = await pool.query('SELECT NOW()')
    console.log(res.rows[0].now)

  }
} catch (error) {
  console.log('Connexion à postgresql pg échouée ! Error: ', error)
}

// clear and exit
process.on('exit', async (code) => {
  console.log(`About to exit with code: ${code}`)
})

process.on('SIGINT', handleClear)
process.on('SIGTERM', handleClear)

async function handleClear() {
  await pool.end()
  console.log('\nstop pg.')
  exit()
}