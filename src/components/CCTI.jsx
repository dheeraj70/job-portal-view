import React from 'react'

export const CCTI = () => {
  return (
    <button className="c-catalog-item">
          <div className="ccti-t">
            <img
              className="ccti-img"
              src="/assets/building.svg"
              alt="Company"
            />
            <div className="ccti-no-jobs">
              <img
                className="ccti-no-jobs-img"
                src="/assets/experience-w.svg"
                alt="Jobs"
              />
              <p className="ccti-no-jobs-text">1 job</p>
            </div>
          </div>
          <div className="ccti-m">
            <p className="ccti-head m0">Hardware</p>
            <p className="ccti-name m0">Vertex</p>
          </div>
          <div className="ccti-d">
    <button className="ccti-va-btn">view all <i class="fa-solid fa-arrow-right ccti-va-arr"></i></button>
          </div>
        </button>
  )
}
