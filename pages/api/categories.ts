import { google } from "googleapis"
import type { NextApiHandler } from "next"
import { getToken } from "next-auth/jwt"

const secret = process.env.SECRET

const CategoriesHandler: NextApiHandler = async (req, res) => {
    const token = await getToken({ req, secret })

    if (!token) {
        res.status(401)
    }

    const clientId = process.env.GOOGLE_CLIENT_ID
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET
    const accessToken = token?.accessToken as string | undefined

    const auth = new google.auth.OAuth2({
        clientId,
        clientSecret,
    })

    auth.setCredentials({
        access_token: accessToken ?? "",
    })

    const sheets = google.sheets({ version: "v4", auth })

    const range = `${process.env.CATEGORIES_SHEET_NAME ?? "Categories"}!A2:B`

    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range,
    })

    res.json(response.data)
}

export default CategoriesHandler
