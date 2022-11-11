import { Response } from "../helpers/generalHelpers.js";

export function auth(req, res, next) {
    const KEY = process.env.KEY

    if (req.headers['key'] == KEY) {
        next()
    } else {
        var response = new Response(401, 'Unauthorized')
        res.writeHead(response.code, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(response))
    }
}