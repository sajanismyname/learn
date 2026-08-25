export class ApiError extends Error{
    constructor(statusCode, message){
        super(message);
        this.statusCode=statusCode;
    }
}

export const notFound=(req, res, next)=>{
    const error = new ApiError(404, `Error : ${req.method} ${req.originalUrl}`);
    next(error);
}

export const errorHandler= (err, req, res, next)=>{
    const statusCode = err.statusCode || 500

    res.status(statusCode).json({
        success: false,
        message: err.message || "Internal server error",
        stack: process.env.NODE_ENV === "production" ? undefined :err.stack
    })
}