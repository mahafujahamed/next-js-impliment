
const SingleBlog = ({ params }) => {
    const [year, id] = params.segments || [];
    return (
        <div>
            Single blog content goes here. 
            year: {year || new Date().getFullYear()}
            Id: {id}
        </div>
    );
};

export default SingleBlog;