import "./PublishedArticles.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const PublishedArticles = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const openModal = (article) => {
    setSelectedArticle(article);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedArticle(null);
    document.body.style.overflow = "auto";
  };
  const articles = [
    {
      id: 1,
      title: "Recent Amendments in Real Estate Law: A Comprehensive Analysis",
      author: "Adv. A.S. Shaikh",
      date: "January 2025",
      publication: "Legal Insight Journal",
      category: "Real Estate",
      summary: "An in-depth analysis of the recent amendments to the Real Estate (Regulation and Development) Act and their implications for property buyers and developers.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      content: "This comprehensive article examines the latest amendments to the Real Estate (Regulation and Development) Act, focusing on enhanced consumer protection measures, stricter compliance requirements for developers, and the establishment of speedy dispute resolution mechanisms. The analysis includes case studies from major metropolitan areas and recommendations for stakeholders."
    },
    {
      id: 2,
      title: "Cross-Border M&A: Legal Challenges in the Indian Context",
      author: "Adv. A.S. Shaikh",
      date: "December 2024",
      publication: "Corporate Law Review",
      category: "Corporate Law",
      summary: "Exploring the regulatory framework and compliance requirements for cross-border mergers and acquisitions in India's evolving business landscape.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      content: "This article delves into the complex regulatory landscape governing cross-border M&A transactions in India. It covers FEMA regulations, Competition Commission approvals, sector-specific restrictions, and tax implications. The piece provides practical guidance for legal practitioners and corporate advisors navigating these transactions."
    },
    {
      id: 3,
      title: "Alternative Dispute Resolution: The Future of Commercial Litigation",
      author: "Adv. A.S. Shaikh",
      date: "November 2024",
      publication: "Dispute Resolution Quarterly",
      category: "Litigation",
      summary: "A comparative study of mediation, arbitration, and traditional litigation in resolving commercial disputes efficiently.",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=800&q=80",
      content: "This scholarly work compares the effectiveness of various dispute resolution mechanisms in the commercial context. Drawing from empirical data and case studies, the article evaluates cost-efficiency, timeframes, enforceability of awards, and party satisfaction across mediation, arbitration, and traditional court litigation."
    },
    {
      id: 4,
      title: "Family Law Reforms: Protecting Rights in Modern Marriages",
      author: "Adv. A.S. Shaikh",
      date: "October 2024",
      publication: "Family Law Chronicle",
      category: "Family Law",
      summary: "Examining recent judicial pronouncements and legislative changes affecting matrimonial disputes and family rights.",
      image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&q=80",
      content: "This article analyzes landmark Supreme Court judgments and legislative amendments that have reshaped family law in India. Topics include evolving concepts of marriage, property rights of spouses, child custody determinations, and protection against domestic violence, with practical implications for practitioners."
    },
    {
      id: 5,
      title: "Startup Legal Compliance: Essential Framework for Founders",
      author: "Adv. A.S. Shaikh",
      date: "September 2024",
      publication: "Entrepreneur Legal Guide",
      category: "Corporate Law",
      summary: "A practical guide for startup founders on navigating regulatory requirements, intellectual property protection, and compliance obligations.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
      content: "Written for entrepreneurs and startup advisors, this comprehensive guide covers entity formation, funding compliance, intellectual property strategies, employment law essentials, and regulatory requirements across sectors. The article includes checklists and common pitfalls to avoid during early-stage growth."
    },
    {
      id: 6,
      title: "White Collar Crime Defense: Strategies and Best Practices",
      author: "Adv. A.S. Shaikh",
      date: "August 2024",
      publication: "Criminal Law Digest",
      category: "Criminal Law",
      summary: "Insights into defending corporate fraud, financial crimes, and economic offences in the current legal framework.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
      content: "This article provides strategic insights for defending against white-collar criminal charges, including corporate fraud, money laundering, and economic offences. It covers pre-arrest strategies, bail considerations, evidence management, and trial preparation, drawing from recent high-profile cases and evolving judicial trends."
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
              <article className="article-card" key={article.id} onClick={() => openModal(article)}>
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
                <button className="read-article-btn">
                  Read More <i className="bi bi-arrow-right"></i>
                </button>
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

      {/* Article Modal */}
      {selectedArticle && (
        <div className="article-modal-overlay" onClick={closeModal}>
          <div className="article-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              <i className="bi bi-x-lg"></i>
            </button>

            <div className="modal-content">
              <div className="modal-image-container">
                <img src={selectedArticle.image} alt={selectedArticle.title} className="modal-image" />
                <div className="modal-category">{selectedArticle.category}</div>
              </div>

              <div className="modal-body">
                <h2 className="modal-title">{selectedArticle.title}</h2>

                <div className="modal-meta">
                  <span className="modal-publication">
                    <i className="bi bi-journal-text"></i> {selectedArticle.publication}
                  </span>
                  <span className="modal-date">
                    <i className="bi bi-calendar3"></i> {selectedArticle.date}
                  </span>
                  <span className="modal-author">
                    <i className="bi bi-person-fill"></i> {selectedArticle.author}
                  </span>
                </div>

                <div className="modal-summary">
                  <h4>Summary</h4>
                  <p>{selectedArticle.summary}</p>
                </div>

                <div className="modal-full-content">
                  <h4>Full Article Preview</h4>
                  <p>{selectedArticle.content}</p>
                </div>

                <div className="modal-footer">
                  <Link to="/contact" className="btn-request-article" onClick={closeModal}>
                    <i className="bi bi-envelope-fill"></i> Request Full Article
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PublishedArticles;
