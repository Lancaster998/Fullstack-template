const loggerMiddleware = (req,res,next) => {
    console.log(`Method: ${req.method}`)
    console.log(`URL: ${req.url}`);
    console.log(`Body: ${req.body}`);

    next()
}

export default loggerMiddleware