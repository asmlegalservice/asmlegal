import "./PublishedArticles.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import img1 from "../../assets/Artical/Property.jpg";
import img2 from "../../assets/Artical/Leave&License.jpg";
import img3 from "../../assets/Artical/Partition.jpg";
import img4 from "../../assets/Artical/Will.jpg";
import img5 from "../../assets/Artical/StartUps.jpg";


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
      title: "Property",
      image: img1,
      
    },
    {
      id: 2,
      title: "Leave & License",
      image: img2,
    },
    {
      id: 3,
      title: "Partition",
      image: img3,
    },
    {
      id: 4,
      title: "Will",
      image: img4,
    },
    {
      id: 5,
      title: "Start Ups",
      image: img5,
    },
    
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
          <div className="row g-4 w-75 mx-auto">
            <div className="col-6 col-md-4">
              <div className="stat-box">
                <span className="stat-number">425+</span>
                <span className="stat-label">Legal Blogs Published</span>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="stat-box">
                <span className="stat-number">21+</span>
                <span className="stat-label">Years of Legal Practice Experience</span>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="stat-box">
                <span className="stat-number">20+</span>
                <span className="stat-label">Legal Topics Covered In Blogs</span>
              </div>
            </div>
            {/* <div className="col-6 col-md-3">
              <div className="stat-box">
                <span className="stat-number">8</span>
                <span className="stat-label">Practice Areas</span>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Articles List */}
      <section className="articles-list-section">
        <div className="container">


          <div className="articles-grid">
            {/* First Row - 3 Articles */}
            <div className="row articles-row">
              {articles.slice(0, 3).map((article) => (
                <div className="col-lg-4 col-md-6 col-12" key={article.id}>
                  <article className="article-card text-center" onClick={() => openModal(article)}>
                    <h3 className="article-title">{article.title}</h3>
                    <div className="container-img">
                      <img src={article.image} className="img-fluid" alt={article.title} />
                    </div>
                  </article>
                </div>
              ))}
            </div>

            {/* Second Row - 2 Articles (centered) */}
            <div className="row articles-row justify-content-center">
              {articles.slice(3, 5).map((article) => (
                <div className="col-lg-4 col-md-6 col-12" key={article.id}>
                  <article className="article-card text-center" onClick={() => openModal(article)}>
                    <h3 className="article-title">{article.title}</h3>
                    <div className="container-img">
                      <img src={article.image} className="img-fluid" alt={article.title} />
                    </div>
                  </article>
                </div>
              ))}
            </div>
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
               
              </div>

              <div className="modal-body">
                <div className="modal-header-row">
                  <h2 className="modal-title">{selectedArticle.title}</h2>
                  <Link to="/contact" className="btn-request-article" onClick={closeModal}>
                    <i className="bi bi-envelope-fill"></i> Request
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
