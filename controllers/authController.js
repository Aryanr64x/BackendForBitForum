import asyncHandler from 'express-async-handler'
import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import { promisify } from 'util'

export const signUp = asyncHandler(async (req, res) => {
    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        password_repeat: req.body.password_repeat
    })
    const token = jwt.sign({ id: user._id }, "JOHAR_BOYS");
    res.json({
        user: {
            username: user.username
        }, token
    })
});


export const signIn = asyncHandler(async (req, res) => {
    const user = await User.findOne({ username: req.body.username }).select('+password')
    if (user.password == req.body.password) {
        const token = jwt.sign({ id: user._id }, "JOHAR_BOYS")
        res.json({
            user: {
                username: user.username
            }, token
        })
    } else {
        next(new Error("Username and Password Combination does not exist"))
    }
});


export const protect = asyncHandler(async(req, res, next) => {
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        const token = req.headers.authorization.split(' ')[1]
        const decoded = await promisify(jwt.verify)(token, "JOHAR_BOYS")
        const user = await User.findOne({ _id: decoded.id })
        if (!user) {
            return res.status(401).send("User no longer exists in the database");
        }
        req.body.user = user;
    
        next()
    } else {
        res.status(401).send("Your are not authorized for this request");
    }
});