import admin from "firebase-admin"

const verifyToken = async (req, res, next) => {
  // Verify Auth token and populate user.
  const bearerHeader = req.headers.authorization
  if (!bearerHeader) {
    return res.status(401).send({
      errors: [
        {
          message: "Authorization header not found.",
          path: ["authorization"],
        },
      ],
    })
  }
  const bearer = bearerHeader.split(" ")[1]
  if (!bearer) {
    return res.status(401).send({
      errors: [
        {
          message: "Authorization header not found.",
          path: ["authorization"],
        },
      ],
    })
  }

  //Use Firebase Admin to validate the session cookie
  let user = null
  try {
    user = await admin.auth().verifySessionCookie(bearer, true)
    if (!user) {
      return res.status(401).send({
        errors: [
          {
            message: "Invalid Authorization Header.",
            path: ["authorization"],
          },
        ],
      })
    }
  } catch (err) {
    return res.status(401).send({
      errors: [
        {
          message: "Invalid Authorization Header.",
          path: ["authorization"],
        },
      ],
    })
  }

  req.user = user
  next()
}

export { verifyToken }
