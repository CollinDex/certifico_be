import { Schema, SchemaTypes, model } from "mongoose";
import { IUser, UserRole } from "../types";

const userSchema = new Schema<IUser>({
    username: { type: SchemaTypes.String, required: true },
    password: { type: SchemaTypes.String, required: true },
    email: { type: SchemaTypes.String, minlength: 5, required: true, unique: true },
    role: { type: SchemaTypes.String, enum: UserRole, default: UserRole.STUDENT, required: true },
    certificates: [{ type: SchemaTypes.ObjectId, ref: "Certificates", required: false }],
    issued_certificates: [{ type: SchemaTypes.ObjectId, ref: "Certificates", required: false }],
    },
    {
        timestamps: true
    }
);

export const User = model<IUser>('User', userSchema);
