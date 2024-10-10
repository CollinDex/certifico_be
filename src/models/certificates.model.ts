import { Schema, SchemaTypes, model } from "mongoose";
import { ICertificate } from "../types";

const certificateSchema = new Schema<ICertificate>({
    certificateId: { type: SchemaTypes.ObjectId, required: true, unique: true },
    issuedBy: { type: SchemaTypes.ObjectId, ref: 'User', required: true },
    studentName: { type: SchemaTypes.String, required: true },
    internshipDomain: { type: SchemaTypes.String, required: true },
    internshipDetails: { type: SchemaTypes.String, required: true },
    startDate: { type: SchemaTypes.Date, required: true },
    endDate: { type: SchemaTypes.Date, required: true },
    awardedOn: { type: SchemaTypes.Date, required: true },
    },
    {
        timestamps: true
    }
);

export const Certificate = model<ICertificate>('Certificates', certificateSchema);