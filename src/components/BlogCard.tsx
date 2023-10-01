type CardProps = {
    slug: string;
    coverImage: string;
    title: string;
    readTime: number;
};

const BlogCard = ({ coverImage, title }: CardProps) => {
    return (
        <div className="relative bg- rounded-lg shadow-md p-4 m-4 max-w-sm">
            <img src={coverImage} alt={title} className="w-full h-auto rounded-lg" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-xl font-semibold text-white text-center">{title}</h2>
            </div>
        </div>
    );
};

export default BlogCard;
