import BackendService from "./BackendService";
import { useState, useEffect } from 'react';

export default function useBackend(name) {
    const [info, setInfo] = useState(null);
    const [error, setError] = useState(null);

    console.log(info);

    useEffect(() => {
        BackendService.postInfo({"name":name})
        .then(response => {
            setInfo(response.data)
        })
        .catch(error => {
            setError("后端错误")
        })
    }, [name]);

    return [info, error];
};