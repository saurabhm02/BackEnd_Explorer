const File = require("../models/File.Model");
const cloudinary = require("cloudinary").v2;

exports.localFileUpload = async (req, res) => {
    try{
        const file = req.files.file;
        console.log("file uploaded", file);

        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`; // created a path for server where we will stores files
        console.log("path: ", path);

        file.mv(path, (err) => {
            console.log(err);
        });

        res.status(200).json({
            success: true,
            message: "Local File uploaded successfully",
        });

    } catch(error){
        res.status(500).json({
            message: error.message
        });
    }
}

const isFileTypeSupported = (type, supportedTypes) => {
    return supportedTypes.includes(type);
};

const uploadFilesToCloudinary = async (file, folder, quality) => {
    const options = { folder };

    if (quality) {
        options.quality = quality;
    }

    options.resource_type = "auto";

    return await cloudinary.uploader.upload(file.tempFilePath, options);
}


exports.imageUpload = async(req, res) =>{
    try{
        const { name, tags, email } = req.body;
        console.log(name, tags, email);

        const file = req.files.imageFile;
        console.log(file);

        const supportedTypes = ["jpg", "png", "jpeg"];
        const currentFileTypes = file.name.split('.')[1].toLowerCase();
        
        if(!isFileTypeSupported(currentFileTypes, supportedTypes)){
            return res.status(400).json({
                message: "File type not supported"
            });
        }

        console.log("uploading to saurabhData");
        const response = await uploadFilesToCloudinary(file, 'saurabh');
        console.log(response);

        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl: response.secure_url,
        });

        res.status(200).json({
            success: true,
            imageUrl: response.secure_url,
            message: "Image uploaded successfully",
        });

    }
    catch(e){
        console.error(e);
        res.status(500).json({
            success: false,
            error:e.message,
            message: "Facing Error while uploading image"
        });
    }
}

exports.videoUpload = async(req, res) =>{
    try{
        const { name, tags, email } = req.body;
        console.log(name, tags, email);

        const file = req.files.videoFile;

        const supportedTypes = ["mp4", "mov"];
        const currentFileTypes = file.name.split('.')[1].toLowerCase();
        console.log("file type: ", currentFileTypes);

        if(!isFileTypeSupported(currentFileTypes, supportedTypes)){
            return res.status(400).json({
                message: "File type not supported"
            });
        }

        const maxSize = 5 * 1024 * 1024; 
        if (file.size > maxSize) {
            return res.status(400).json({
                message: "File size exceeds 5MB limit"
            });
        }

        console.log("uploading to saurabhData");
        const response = await uploadFilesToCloudinary(file, 'saurabh');
        console.log(response);

        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl: response.secure_url,
        });

        res.status(200).json({
            success: true,
            imageUrl: response.secure_url,
            message: "video uploaded successfully",
        });


    }
    catch(error){
        console.error(error);
        res.status(500).json({
            success: false,
            error:error.message,
            message: "Facing Error while uploading video"
        });
    }
}

exports.imageSizeReducer = async (req, res) => {
    try {
        const { name, tags, email } = req.body;
        const file = req.files.imageFile;

        const supportedTypes = ["jpg", "png", "jpeg"];
        const currentFileType = file.name.split('.').pop().toLowerCase();
        
        if (!isFileTypeSupported(currentFileType, supportedTypes)) {
            return res.status(400).json({
                message: "File type not supported"
            });
        }

        console.log("Uploading to Cloudinary with size reduction");
        const response = await uploadFilesToCloudinary(file, 'saurabh', 10);
        console.log("Cloudinary response:", response);

        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl: response.secure_url,
        });

        res.status(200).json({
            success: true,
            imageUrl: response.secure_url,
            message: "Image uploaded successfully with size reduction",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Facing Error while reducing image size",
        });
    }
};




