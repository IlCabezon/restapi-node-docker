export const greeting = (req,res)=>{
  const status = 200
  const {method} = req.method

  res.status(status).json({
    greeting : "Hello World!",
    status
  })
}