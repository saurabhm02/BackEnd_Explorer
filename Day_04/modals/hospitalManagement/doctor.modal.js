import mongoose from 'mongoose';

const HospitalHours = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true;
  }
});

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  salary: {
    type: String,
    required: true,
  },

  qualification:{
    type: String,
    required: true
  },
  experinceInYears: {
    type: Number,
    default: 0,
  },
  worksInHospitals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital"

    },
    {
      type: [HospitalHours]
    }
  ]
}, { timestamps: true });

export const Doctor = mongoose.modal('Doctor', doctorSchema);
