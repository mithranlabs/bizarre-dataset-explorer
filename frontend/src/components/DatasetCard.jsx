import './DatasetCard.css';

const DatasetCard = ({ dataset }) => {
  return (
    <div className="dataset-card">
      <div className="card-header">
        <span className="card-label">// DATASET FOUND</span>
        <span className="card-id">ID: {dataset._id?.slice(-6).toUpperCase()}</span>
      </div>

      <h2 className="card-title">{dataset.title}</h2>

      <p className="card-description">{dataset.description}</p>

      <a
        href={dataset.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="card-link"
      >
        &gt; ACCESS_SOURCE &rarr;
      </a>

      <div className="card-divider"></div>

      <div className="card-challenge">
        <span className="challenge-label mern-label">[ MERN_CHALLENGE ]</span>
        <p className="challenge-text">{dataset.mernChallenge}</p>
      </div>

      <div className="card-challenge">
        <span className="challenge-label ml-label">[ ML_CHALLENGE ]</span>
        <p className="challenge-text">{dataset.mlChallenge}</p>
      </div>

      <div className="card-tags">
        {dataset.tags.map((tag) => (
          <span key={tag} className="tag">#{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default DatasetCard;