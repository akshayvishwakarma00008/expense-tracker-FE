const navigate = (history, path, data) => {
    history(
        `/${path}`,
        { state: { data } },
    );
};

export default navigate;