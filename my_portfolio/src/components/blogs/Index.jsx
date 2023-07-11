// eslint-disable-next-line no-unused-vars
import React from "react";
import "./style.scss";
import blog1 from "../../images/blogs/blog-thumb-1.jpg";
import blog2 from "../../images/blogs/blog-thumb-2.jpg";
import blog3 from "../../images/blogs/blog-thumb-3.jpg";
import Section from "../shared/section/Index";
import BlogsCard from "./blogCard/Index";

const Blogs = () => {
  return (
    <Section 
        id="blogs" 
        title="blogs & Articles" 
        background="dark"
        >
            <div className="blogs-content">
              <BlogsCard  
              user="Mr Nex"
              date="12/12/12"
              image={blog1}
              title="Today News"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sapiente provident quis voluptatibus debitis id iste."
              />
              <BlogsCard  
              user="Mr Nex"
              date="12/12/12"
              image={blog2}
              title="Today News"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sapiente provident quis voluptatibus debitis id iste."
              />
              <BlogsCard  
              user="Mr Nex"
              date="12/12/12"
              image={blog3}
              title="Today News"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sapiente provident quis voluptatibus debitis id iste."
              />
            </div>
        </Section>
  );
};

export default Blogs;
