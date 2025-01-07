import { useNavigate } from "react-router-dom";

const useRedirect = (path) => {
    const history = useNavigate();
    history(`/${path}`)
};

export default useRedirect