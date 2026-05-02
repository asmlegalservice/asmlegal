import "./PublishedArticles.css";
import { Link } from "react-router-dom";

const PublishedArticles = () => {
  const articles = [
    {
      id: 1,
      title: "Recent Amendments in Real Estate Law: A Comprehensive Analysis",
      author: "Adv. A.S. Shaikh",
      date: "January 2025",
      publication: "Legal Insight Journal",
      category: "Real Estate",
      summary: "An in-depth analysis of the recent amendments to the Real Estate (Regulation and Development) Act and their implications for property buyers and developers."
    },
    {
      id: 2,
      title: "Cross-Border M&A: Legal Challenges in the Indian Context",
      author: "Adv. A.S. Shaikh",
      date: "December 2024",
      publication: "Corporate Law Review",
      category: "Corporate Law",
      summary: "Exploring the regulatory framework and compliance requirements for cross-border mergers and acquisitions in India's evolving business landscape."
    },
    {
      id: 3,
      title: "Alternative Dispute Resolution: The Future of Commercial Litigation",
      author: "Adv. A.S. Shaikh",
      date: "November 2024",
      publication: "Dispute Resolution Quarterly",
      category: "Litigation",
      summary: "A comparative study of mediation, arbitration, and traditional litigation in resolving commercial disputes efficiently."
    },
    {
      id: 4,
      title: "Family Law Reforms: Protecting Rights in Modern Marriages",
      author: "Adv. A.S. Shaikh",
      date: "October 2024",
      publication: "Family Law Chronicle",
      category: "Family Law",
      summary: "Examining recent judicial pronouncements and legislative changes affecting matrimonial disputes and family rights."
    },
    {
      id: 5,
      title: "Startup Legal Compliance: Essential Framework for Founders",
      author: "Adv. A.S. Shaikh",
      date: "September 2024",
      publication: "Entrepreneur Legal Guide",
      category: "Corporate Law",
      summary: "A practical guide for startup founders on navigating regulatory requirements, intellectual property protection, and compliance obligations."
    },
    {
      id: 6,
      title: "White Collar Crime Defense: Strategies and Best Practices",
      author: "Adv. A.S. Shaikh",
      date: "August 2024",
      publication: "Criminal Law Digest",
      category: "Criminal Law",
      summary: "Insights into defending corporate fraud, financial crimes, and economic offenses in the current legal framework."
    }
  ];

  return (
    <div className="articles-page">
      {/* Hero Section */}
      <section className="articles-hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="articles-title">Published Articles</h1>
              <div className="title-underline"></div>
              <p className="articles-subtitle">
                Insights and analysis from our legal experts featured in leading law journals and publications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="articles-stats">
        <div className="container">
          <div className="row g-4">
            <div className="col-6 col-md-3">
              <div className="stat-box">
                <span className="stat-number">50+</span>
                <span className="stat-label">Articles Published</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-box">
                <span className="stat-number">15+</span>
                <span className="stat-label">Legal Journals</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-box">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years of Writing</span>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-box">
                <span className="stat-number">8</span>
                <span className="stat-label">Practice Areas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles List */}
      <section className="articles-list-section">
        <div className="container">
          <div className="section-header text-center">
            <h2>Featured Publications</h2>
            <div className="title-underline"></div>
          </div>

          <div className="articles-grid">
            {articles.map((article) => (
              <article className="article-card" key={article.id}>
                <div className="article-category">{article.category}</div>
                <h3 className="article-title">{article.title}</h3>
                <p className="article-summary">{article.summary}</p>
                <div className="article-meta">
                  <div className="article-publication">
                    <i className="bi bi-journal-text"></i>
                    <span>{article.publication}</span>
                  </div>
                  <div className="article-date-author">
                    <span><i className="bi bi-person-fill"></i> {article.author}</span>
                    <span><i className="bi bi-calendar3"></i> {article.date}</span>
                  </div>
                </div>
                <Link to="/contact" className="read-article-btn">
                  Request Full Article <i className="bi bi-arrow-right"></i>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="articles-cta">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2>Interested in Our Legal Insights?</h2>
              <p>Contact us to receive our latest publications or discuss specific legal topics.</p>
              <Link to="/contact" className="btn-contact">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PublishedArticles;
