import { useEffect, useState } from "react"
import BlogCard from "./BlogCard"

type BlogPost = {
  slug: string,
  coverImage: string,
  title: string,
  readTime: number
}

type HashnodeResponse = {
  data: {
    user: {
      publication: {
        posts: BlogPost[];
      }
    }
  }
}

const Blogs = () => {

  const [blogDetails, setBlogDetails] = useState<BlogPost[]>([]);

  const GET_BLOGS = {
    query: `{
      user(username: "gunhawke1311") {
        publication {
          posts(page: 0) {
            slug
            title
            coverImage
            readTime
          }
        }
      }
    }`,
  };

  useEffect(() => {

    const getBlogDetails = async () => {
      const response = await fetch(`https://api.hashnode.com/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

        },
        body: JSON.stringify(GET_BLOGS)
      })
      const json: HashnodeResponse = await response.json();

      const fetchedBlogDetails = json.data.user.publication.posts;

      console.log(fetchedBlogDetails)

      setBlogDetails(fetchedBlogDetails);
    }

    getBlogDetails();

  }, [])


  return (
    <div>
      <div className="p-10">
            <div className="">
                <h1 className="text-5xl font-bold">Blogs I've Written</h1>
            </div>
            <div className="flex justify-center items-center p-20">
                <div className="flex gap-40">
                  {blogDetails && blogDetails.map((blog) => (
                    <BlogCard slug={blog.slug} coverImage={blog.coverImage} title={blog.title} readTime={blog.readTime}/>
                  ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blogs