import { ApiError } from "./ErrorHandler.js";

export const validate = (schema) => (req, res, next) =>{
    const result = schema.safeParse(req.body);

    if(!result.success){
        const message = result.error.issues.map((issue)=>issue.message);
        throw new ApiError(400, message.join(","))
    }

    req.body = result.data;
    next();
}