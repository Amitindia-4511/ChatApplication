function logoutUser(req,res){
    console.log('logout');
    return res.clearCookie('authUser', {
        httpOnly: true,    // Cookie is not accessible via JavaScript
        secure: process.env.NODE_ENV === 'production', // Use secure cookie only in production (HTTPS)
        sameSite: 'Strict' // For CSRF protection
    }).status(200).json({ message: 'Logged out successfully' });

    //can be use this without option but options make cookie more secure although we are clearing it but still
    // return res.clearCookie('authUser').status(200).json({ message: 'Logged out successfully' })
}

export default logoutUser;