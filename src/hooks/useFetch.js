import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, gameStatus) => {
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        const source = axios.CancelToken.source();

        if (gameStatus === 0) {
            setIsLoading(true);

            axios
                .get(url, { cancelToken: source.token })
                .then(res => {
                    setData(res.data);
                    setIsLoading(false);
                })
                .catch(err => {
                    console.log(err);
                    setErrorMsg(err.message);
                    setIsLoading(false);
                });
        }

        return () => source.cancel();
    }, [url, gameStatus]);

    return [isLoading, errorMsg, data];
};

export default useFetch;
