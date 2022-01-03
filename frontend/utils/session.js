// create a new user
export const postUser = user => (
    $.ajax({
        url: '/api/users',
        method: 'POST',
        data: { user },
    })
);

// login a user
export const postSession = user => (
    $.ajax ({
        url: 'api/session',
        method: 'POST',
        data: { user },
    })
);

// logout a user
export const deleteSession = () => (
    $.ajax({
        url: 'api/session',
        method: 'DELETE',
    })
);