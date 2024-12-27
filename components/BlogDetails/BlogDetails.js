import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import BlogData from "../../data/blog.json";
import BlogTags from "../Blog/BlogItems/BlogTags";

const SingleBlog = () => {
  const router = useRouter();
  const postId = parseInt(router.query.blogId);
  let blogPosts = JSON.parse(JSON.stringify(BlogData.blog));

  const matchedBlog = blogPosts.find((post) => post.id === postId);

  useEffect(() => {
    if (postId && !matchedBlog) {
      router.push("/blog");
    }
  }, [matchedBlog, router]);

  return (
    <>
      <div className="rainbow-blog-section rainbow-section-gap-big bg-color-1">
        {matchedBlog && (
          <div className="container">
            <div className="row row--30">
              <div className="col-lg-12">
                <div className="rainbow-blog-details-area">
                  {/* Blog Banner */}
                  <div className="post-page-banner">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="content text-center">
                            <div className="thumbnail">
                              <Image
                                className="custom-image w-80 radius"
                                src={matchedBlog.blogImg}
                                width={790}
                                height={300}
                                alt="Blog Images"
                              />
                            </div>
                            <ul className="rainbow-meta-list">
                              <li>
                                {/* <i className="feather-user me-2"></i> */}
                                {/* <a href="#">Cogno</a> */}
                                {matchedBlog.cate}
                              </li>
                              <li>
                                <i className="feather-calendar me-2"></i>
                                {matchedBlog.date}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Blog Content */}
                  <div className="blog-details-content pt--40">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="content">
                            <h2 className="title">{matchedBlog.title}</h2>
                            <p>{matchedBlog.desc}</p>
                            {matchedBlog.text1 && <p>{matchedBlog.text1}</p>}
                            {/* Dynamic Content Section */}
                            {matchedBlog.content.map((section, index) => (
                              <div key={index}>
                                <h3 className="subheading">
                                  {section.heading}
                                </h3>
                                {section.text && <p>{section.text}</p>}
                                {section.text1 && <p>{section.text1}</p>}
                                {section.subpoints && (
                                  <ul>
                                    {section.subpoints.map(
                                      (subpoint, subIndex) => (
                                        <li key={subIndex}>
                                          <h6>{subpoint.subheading}</h6>
                                          <p>{subpoint.text}</p>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Blog Tags */}
                  {/* <div className="category-meta">
                    <span className="text">Tags:</span>
                    <BlogTags tags={BlogData && BlogData.tags} />
                  </div> */}

                  {/* Comment Form */}
                  {/* <div className="rainbow-comment-form pt--20">
                    <div className="inner">
                      <div className="section-title">
                        <span className="subtitle">Have a Comment?</span>
                        <h2 className="title">Leave a Reply</h2>
                      </div>
                      <form className="mt--40">
                        <div className="row">
                          <div className="col-lg-6 col-md-12 col-12">
                            <div className="rnform-group">
                              <input type="text" placeholder="Name" />
                            </div>
                            <div className="rnform-group">
                              <input type="email" placeholder="Email" />
                            </div>
                            <div className="rnform-group">
                              <input type="text" placeholder="Website" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12 col-12">
                            <div className="rnform-group">
                              <textarea placeholder="Comment"></textarea>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="blog-btn">
                              <button className="btn-default">
                                Post Comment
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div> */}
                </div>
              </div>

              {/* Sidebar (optional) */}
              {/* <div className="col-lg-4">
                Add any additional sidebar content here
              </div> */}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SingleBlog;
