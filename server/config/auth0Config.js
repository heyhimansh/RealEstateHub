import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "http://localhost:8000",
    issuerBaseURL: "https://dev-zgj3pkwfhm3m5xor.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck


// dev-zgj3pkwfhm3m5xor.us.auth0.com

// tokenSigningAlg: "RS256"
// this is the default method of token sign in 