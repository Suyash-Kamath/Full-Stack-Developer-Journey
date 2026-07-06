export const isAuthenticated = (req, res, next) => {
    console.log("isAuthenticated middleware called");
    next();
}
    