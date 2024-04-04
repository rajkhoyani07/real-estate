import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "http://localhost:8000",
    issuerBaseURL: "dev-4l41kp24sz3kzk2r.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck