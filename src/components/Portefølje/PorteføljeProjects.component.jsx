import React from "react"
import { v4 as uuidv4 } from "uuid"

/**
 * Display individual portfilio projects if they match the filter passed down through props
 *
 * @param {Object} filter The filter that we apply to the component so we only displays projects from the correct category
 * @param {Object} projects The portfolio project data to display, contains name, image etc
 */
const Portfolio = ({ filter, projects }) => (
  <>
    {projects.map(
      ({
        id,
        name,
        description,
        subdescription,
        category,
        urlwww,
        urlgithub,
        image,
      }) => {
        // Use ternary to apply filter so we only see projects from the relevant category
        return filter === category ? (
          <div
            key={id}
            className="p-6 text-lg text-black bg-white rounded shadow xl:p-12 lg:p-12 md:p-12"
          >
            <p className="text-xl font-black text-center">{name}</p>
            <div className="mt-6 text-lg text-left">
              <p>{description}</p>
              <p className="mt-6">{subdescription}</p>
              <p className="mt-6">
                <img src={image} alt="React" />
              </p>
              <div className="flex justify-center mt-4">
                {/* Display only Github button if not empty  */}
                {urlgithub && (
                  <a href={urlgithub}>
                    <button className="p-4 m-4 text-white rounded bg-button hover:shadow-outline hover:bg-gray-700">
                      Github
                    </button>
                  </a>
                )}
                <a href={urlwww}>
                  <button className="p-4 m-4 text-white rounded bg-button hover:shadow-outline hover:bg-gray-700">
                    Besøk
                  </button>
                </a>
              </div>
            </div>
          </div>
        ) : null
      }
    )}
  </>
)

export default Portfolio
