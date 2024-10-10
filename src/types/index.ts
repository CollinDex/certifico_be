import { Types } from "mongoose";

export enum UserRole {
    STUDENT = "student",
    ADMIN = "admin"
}

export interface Base {
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

export interface IUser extends Base {
    _id: string;
    username: string;
    password: string;
    email: string;
    role: UserRole;
    certificates: Types.ObjectId[];
    issued_certificates: Types.ObjectId[];
}

export interface ICertificate extends Base {
    _id: string;
    certificateId: Types.ObjectId;
    issuedBy: Types.ObjectId;  
    studentName: string;
    internshipDomain: string;
    internshipDetails: string;
    startDate: Date; 
    endDate: Date; 
    awardedOn: Date;
}

export interface IUserLogin {
    email: string;
    password: string;
}

export interface IUserSignUp {
    username: string;
    email: string;
    password: string;
    role: UserRole;
}

export interface JwtPayload {
    user_id: string;
    role?: UserRole;
}