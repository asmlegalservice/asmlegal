import "./Blogs.css";

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Real Estate Law in India",
      excerpt: "A comprehensive guide to property transactions, documentation, and legal requirements for real estate in India.",
      date: "Jan 15, 2025",
      category: "Real Estate"
    },
    {
      id: 2,
      title: "Family Law: Divorce and Custody Rights",
      excerpt: "Learn about the legal framework for divorce proceedings, child custody, and matrimonial disputes.",
      date: "Jan 10, 2025",
      category: "Family Law"
    },
    {
      id: 3,
      title: "Corporate Compliance for Startups",
      excerpt: "Essential legal compliance requirements for new businesses and startup companies in India.",
      date: "Jan 5, 2025",
      category: "Corporate Law"
    },
    {
      id: 4,
      title: "Civil Litigation Process Explained",
      excerpt: "Step-by-step guide to understanding the civil litigation process and dispute resolution.",
      date: "Dec 28, 2024",
      category: "Litigation"
    }
  ];

  return (
    <div className="blogs-page">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h1 className="page-title">Legal Insights</h1>
            <div className="title-underline"></div>
            <p className="lead">
              Stay informed with our latest legal articles and insights.
            </p>
          </div>
        </div>

        <div className="row mt-5 g-4">
          {blogPosts.map((post) => (
            <div className="col-md-6 col-lg-3" key={post.id}>
              <div className="blog-card">
                <span className="blog-category">{post.category}</span>
                <h3 className="blog-title-card">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-footer">
                  <span className="blog-date">{post.date}</span>
                  <a href="#" className="read-more">Read More →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
