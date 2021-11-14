import { google } from "googleapis"
import type { NextApiHandler } from "next"
import { getToken } from "next-auth/jwt"

const secret = process.env.SECRET

const ExpenseHandler: NextApiHandler = async (req, res) => {
    if (req.method === "POST") {
        const token = await getToken({ req, secret })

        if (!token) {
            res.status(401)
        }

        const { body } = req

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
        const range = `${process.env.EXPENSES_SHEET_NAME ?? "Expenses"}!A1:C1`

        const parsedBody = JSON.parse(body)

        const values = [[parsedBody.date, parsedBody.category, parsedBody.description, parsedBody.amount]]

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.SHEET_ID,
            range,
            valueInputOption: "USER_ENTERED",
            requestBody: {
                values,
            },
        })

        res.json(response.data)
    } else {
        res.status(404)
    }
}

export default ExpenseHandler
