
export async function registerUser(req, res) {
    const { firstName, lastName, email, password, mobileNumber } = req.body;

    if (!firstName || !lastName || !email || !password || !mobileNumber) {
        return res.status(400).json({
            message: "all fields are required"
        })
    }

    return res.status(200).json({
        success: true,
        message: "User Registered successfully!",
        data: {
            firstName,
            lastName,
            email,
            password,
            mobileNumber
        }
    })
}

export async function getAllUsers(req, res) {
    return res.status(201).json({
        success: true,
        message: "All user fetched!!"
    })
}