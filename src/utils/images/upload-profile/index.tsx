
export const handleUploadProfile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
        const allowedFormats = ["image/jpeg", "image/png", "image/gif"];
        if (allowedFormats.includes(file.type) && file.size <= 800 * 1024) {
            return file
        } else {
            console.log("Invalid file format or size.");
        }
    }
};