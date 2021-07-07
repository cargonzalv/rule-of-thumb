const baseUrl = process.env.NEXT_PUBLIC_FIREBASE_URL;

export default async function handler(req, res) {
    try{
        const request = await fetch(`${baseUrl}/updateData`, {method: 'PUT', body: req.body});
        const data = await request.json();
        res.status(200).json(data)
     } catch (error) {
        console.error(error)
        return res.status(error.status || 500).end(error.message)
    }
}