const mongoose = require("mongoose");

const userMedHistorySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Reference to the User model
        required: true,
    },
    age:{type:number},
    boldGroup:{type:String},
    bmi:{type:Number},
    majorDiseases: [
        {
            name: {
                type: String,
                required: true,
            },
            startDate: {
                type: Date,
                required: true, // Make Start Date mandatory
            },
            endDate: Date,   // End Date (if applicable)
            diagnosisDate: Date,
            treatingHealthcareProviders: [
                {
                    name: String,
                    contactInformation: String,
                    appointmentHistory: [
                        {
                            date: Date,
                            purpose: String,
                        },
                    ],
                },
            ],
            healthcareProvider: String,
            hospital: String,
            recoveryStatus: String,
            medications: [String],
            DocumnetsAndReports: [
                {
                public_id: {
                    type: String,
                    required: true,
                },
                url: {
                    type: String,
                    required: true,
                },
            }
            ],
            // Add more fields as needed to capture relevant information
        },
    ],
    chronicDiseases: [
        {
            name: {
                type: String,
                required: true,
            },
            startDate: {
                type: Date,
                required: true, // Make Start Date mandatory
            },
            endDate: Date,   // End Date (if applicable)
            diagnosisDate: Date,
            treatingHealthcareProviders: [
                {
                    name: String,
                    contactInformation: String,
                    appointmentHistory: [
                        {
                            date: Date,
                            purpose: String,
                        },
                    ],
                },
            ],
            healthcareProvider: String,
            hospital: String,
            recoveryStatus: String,
            medications: [String],
            DocumnetsAndReports: [
                {
                    public_id: {
                        type: String,
                        required: true,
                    },
                    url: {
                        type: String,
                        required: true,
                    },
                }
            ],
            // Add more fields as needed to capture relevant information
        },
    ],
    acuteDiseases: [
        {
            name: {
                type: String,
                required: true,
            },
            startDate: {
                type: Date,
                required: true, // Make Start Date mandatory
            },
            endDate: Date,   // End Date (if applicable)
            diagnosisDate: Date,
            treatingHealthcareProviders: [
                {
                    name: String,
                    contactInformation: String,
                    appointmentHistory: [
                        {
                            date: Date,
                            purpose: String,
                        },
                    ],
                },
            ],
            healthcareProvider: String,
            hospital: String,
            recoveryStatus: String,
            medications: [String],
            DocumnetsAndReports: [
                {
                    public_id: {
                        type: String,
                        required: true,
                    },
                    url: {
                        type: String,
                        required: true,
                    },
                }
            ],
            // Add more fields as needed to capture relevant information
        },
    ],

    allergies: [String], // Store user's allergies, sensitivities, and intolerances
    familyMedicalHistory: String, // Allow users to input family medical history


    treatingHealthcareProviders: [
        {
            name: String,
            contactInformation: String,
            appointmentHistory: [
                {
                    date: Date,
                    purpose: String,
                },
            ],
        },
    ],


    emergencyContacts: [
        {
            name: String,
            relationship: String,
            phoneNumber: String,
        },
    ],


    treatmentHistory: [
        {
            treatment: String,
            medications: [String],
            surgeries: [String],
            therapies: [String],
            otherMedicalInterventions: [String],
            // Add more fields as needed to capture relevant information
        },
    ],


    hospitalClinicInformation: [
        {
            name: String,
            location: String,
            contactInformation: String,
        },
    ],

    labTestsAndImaging: [
        {

            //for Blod test, Medical Presciption,X-Rays,result 1,X pray result 2.Diabeties Reports,alergies etc
            type: String,  // Type of test or imaging
            date: Date,    // Date of the test or imaging
            results: String, // Results or description
            file: Buffer, // Store the file content as a buffer
            fileType: String, // Store the file type (e.g., "pdf", "image/jpeg", etc.)
            // Add more fields as needed to capture relevant information

            
        },
    ],

    surgicalTransplant:[
        {
          
        }
    ],
    surgeries: [String],
    therapies: [String],
});

module.exports = mongoose.model("UserMedHistory", userMedHistorySchema);
