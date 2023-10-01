import "../styles/Loading.css";

export const Loading = () => {
    return (
        <div className="loading flex h-screen justify-center items-center">
            <div className="wrapper">
                <div className="circleLoading"></div>
                <div className="circleLoading"></div>
                <div className="circleLoading"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
            </div>
        </div>
    );
};