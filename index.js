import express from 'express';
import dotenv from 'dotenv';
import pg from 'pg';
import bcrypt from 'bcrypt';

dotenv.config();

const app = express();

app.use(express.json());


const pool = new pg.Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
});

// Test database connection
pool.connect()
    .then(() => console.log('Database connected'))
    .catch(err => console.error('Database connection error:', err));

// Create table if it doesn't exist
const initializeDatabase = async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL
);
        `);

        console.log('Users table ready');
    } catch (error) {
        console.error('Table creation error:', error);
    }
};

initializeDatabase();

const PORT = process.env.PORT || 5000;

// Home Route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// CREATE USER
app.post('/users', async (req, res) => {
    console.log(' POST/users hit');

    try {
        const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).json({
                message: 'Name and email are required'
            });
        }

        console.log('Request Body:', req.body);

        const result = await pool.query(
            `INSERT INTO users (name, email)
            VALUES ($1, $2)
             RETURNING *`,
            [name, email]
        );

        console.log('Inserted User:', result.rows[0]);

        res.status(201).json({
            message: 'User created successfully',
            user: result.rows[0]
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: 'Server error'
        });
    }
});

// GET ALL USERS
app.get('/users', async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT * FROM users ORDER BY id ASC`
        );

        res.status(200).json({
            users: result.rows
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Server error'
        });
    }
});

// GET ONE USER
app.get('/users/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);

        if (!id) {
            return res.status(400).json({
                message: 'Valid ID is required'
            });
        }

        const result = await pool.query(
            `SELECT * FROM users WHERE id = $1`,
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        res.status(200).json({
            user: result.rows[0]
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Server error'
        });
    }
});

// UPDATE USER
app.put('/users/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { name, email } = req.body;

        const result = await pool.query(
            `UPDATE users
             SET name = $1,
                 email = $2
             WHERE id = $3
             RETURNING *`,
            [name, email, id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        console.log('Updated User:', result.rows[0]);

        res.status(200).json({
            message: 'User updated successfully',
            user: result.rows[0]
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Server error'
        });
    }
});

// DELETE USER
app.delete('/users/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);

        const result = await pool.query(
            `DELETE FROM users
             WHERE id = $1
             RETURNING *`,
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: 'User not found'
            });
        }

        console.log('Deleted User:', result.rows[0]);

        res.status(200).json({
            message: 'User deleted successfully',
            user: result.rows[0]
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Server error'
        });
    }
});

//register
app.post('/register', async(req, res)=>{
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return console.log("email and password are required");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await pool.query(
            `INSERT INTO users (name, email, password)
            VALUES ($1, $2, $3)
            RETURNING id, name, email`,
            [name, email, hashedPassword]
        )

        res.status(201).json(result.rows[0])
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'server error'})
    }
})

// login
app.post('/login', async(req, res)=>{
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return console.log("email and password are required");
        }

        const result = await pool.query(
            `SELECT * FROM users WHERE email = $1`,
            [email]
        )

        if(result.rows.length === 0){
            return res.status(400).json({message: 'not found'});
        }

        const user=result.rows[0];

        const isMatch = bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({
        message: 'Invalid credentials'
            });
        }

        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'server error'})
    }
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});                                                                                                                                                 