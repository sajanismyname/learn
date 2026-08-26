import pool from "../config/db.js";

export const getAllProducts = async ({ category, search } = {}) => {
    let query = "SELECT * FROM products WHERE 1=1"
    const params = []

    if (category) {
        params.push(category)
        query += `AND category ILIKE $${params.length}`
    }
    if (search) {
        params.push(`%${search}%`)
        query += `AND name ILIKE $${params.length}`
    }

    query += " ORDER BY id";
    const result = await pool.query(query, params);
    return result.rows;
};

const ALLOWED_FIELDS = ['name', 'price', 'description', 'category', 'stock'];

export const getProductById = async (id) => {
    const result = await pool.query(`SELECT * FROM products WHERE id=$1`, [id]);
    return result.rows[0];
}

export const createProduct = async ({ name, price, description, category, stock, image }) => {
    const result = await pool.query(`INSERT INTO products(name, price, description, category, stock, image)
        VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`, [name, price, description, category, stock, image]
    )
    return result.rows[0]
}

export const updateProduct = async (id, fields) => {

    const keys = Object.keys(fields).filter((key) => ALLOWED_FIELDS.includes(key));

    if (keys.length === 0) return getProductById(id);

    // const  result = await pool.query(`
    //     UPDATE products 
    //     SET name = $1, price = $2, description=$3, category=$4, stock=$5, image=$6
    //     WHERE id = $7 RETURNING *
    //     `, [name, price, description, category, stock, image, id]);

    const setClause = keys.map((key, i) => `${key} = $${i + 1}`).join(",");
    const values = keys.map((key) => fields[key]);

    const result = await pool.query(`
        UPDATE products SET ${setClause} WHERE id = $${keys.length + 1} RETURNING *;
        `, [...values, id])

    console.log(result);

    return result.rows[0];
}

export const replaceProduct = async (id, { name, price, description, category, stock, image }) => {
    const result = await pool.query(
        `UPDATE products
        SET name = $1, price = $2, description = $3, category = $4, stock = $5, image = $6
         WHERE id = $7 RETURNING *`,
        [name, price, description, category, stock, image, id]
    );
    return result.rows[0];
};

export const deleteProduct = async (id) => {
    const result = await pool.query(`
        DELETE FROM products WHERE id = $1 RETURNING *
        `, [id])

    return result.rows[0]
}