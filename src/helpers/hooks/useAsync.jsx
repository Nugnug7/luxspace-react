import { useState, useEffect, useCallback } from 'react';

const defaultState = {
    data: null,
    status: 'idle',
    error: null,
};

function useAsync(initialState = {}) {
    const [state, setState] = useState({
        ...defaultState,
        ...initialState
    });

    const { data, status, error } = state;

    const run = useCallback(
        (promise) => {
            if (!promise || !promise.then)
                throw new Error('The argument passed to useAsync().run must be a Promise');

            setState((prev) => ({ ...prev, status: 'pending' }));
            return promise.then(
                data => {
                    setState({ data, status: 'resolved', error: null });
                    return data;
                },
                error => {
                    setState({ data: null, status: 'rejected', error: JSON.parse(error.message) });
                }
            );
        },
        []
    );

    return { data, status, error, run };
}

export default useAsync;
