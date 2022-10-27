import { useEffect, useState } from "react"
import axios from 'axios'
const useApi = (url) => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const getApi = () => {
        axios.get(url).then(res => {
            setLoading(false)
            setData(res.data)
        })
    }
    useEffect(() => {
        getApi()
    }, [])
    return { loading, data }
}
export default useApi