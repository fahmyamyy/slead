import User from '../models/users.js';
import { countTime, Response, ymdNow } from '../helpers/generalHelpers.js';


export const getUsers = async (req, res) => {
    var start = new Date();
    var finish, response;
    try {
        const user = await User.find({});

        finish = new Date();
        response = new Response(200, "OK", countTime(start, finish), user.length, user)

        res.writeHead(response.code, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(response))

    } catch (err) {
        response = new Response(500, err.message)

        res.writeHead(response.code, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(response))
    }
}

export const getUser = async (req, res) => {
    var start = new Date();
    var finish, response;
    var id = req.params.id
    try {
        const user = await User.findOne({ id: id }).exec();

        finish = new Date();
        response = new Response(200, "OK", countTime(start, finish), user.length, user)

        res.writeHead(response.code, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(response))

    } catch (err) {
        response = new Response(500, err.message)

        res.writeHead(response.code, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(response))
    }
}

export const insertUser = async (req, res) => {
    var start = new Date();
    var finish, response;
    console.log('as')
    // return
    // var values = req.body;
    var values = {
        "name": "fahmy",
        "age": 22,
        "created_at": ymdNow(),
    }

    try {
        // var exist = await User.exists({ shortUrl: values.shortUrl });

        // if (exist) {
        //     throw new Error('Your Short URL already used :(')
        // }

        const newUser = new User(values)
        await newUser.save();

        finish = new Date();
        response = new Response(200, "OK", countTime(start, finish), undefined, values)

        res.writeHead(response.code, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(response))

    } catch (err) {
        response = new Response(500, err.message)

        res.writeHead(response.code, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(response))
    }
}
