import React from "react"
import PropTypes from "prop-types"

import Button from "../../layout/Button/Button.component"

/**
 * Display individual portfilio projects if they match the filter passed down through props
 *
 * @param {Object} filter The filter that we apply to the component so we only displays projects from the correct category
 * @param {Object} projects The portfolio project data to display, contains name, image etc
 */
export default function ProsjektProjects({ filter, projects }) {
  return (
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
        }) =>
          // Use ternary to apply filter so we only see projects from the relevant category
          filter === category && (
            <div
              key={id}
              className="p-6 text-lg text-black transition duration-500 ease-in-out bg-white rounded shadow bg-opacity-5 hover:bg-gray-200 transform-gpu"
            >
              <p className="text-xl font-black text-center">{name}</p>
              <div className="mt-6 text-lg text-left lg:text-left md:text-left">
                <p>{description}</p>
                <p className="mt-6 text-left md:text-left lg:text-left">
                  Stikkord: 
                  {' '}
                  {subdescription}
                </p>
                <div className="flex justify-center mt-6">
                  <img src={image} alt={name} role="presentation"/>
                </div>
                <div className="flex justify-center mt-4">
                  {/* Display only Github button if not empty  */}
                  {urlgithub && (
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label={name}
                      href={urlgithub}
                    >
                      <Button>Github</Button>
                    </a>
                  )}
                  {urlwww && (
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label={name}
                      href={urlwww}
                    >
                      <Button>Besøk</Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          )
      )}
    </>
  )
}

ProsjektProjects.propTypes = {
  filter: PropTypes.string,
  projects: PropTypes.arrayOf(PropTypes.object),
}

ProsjektProjects.defaultProps = {
  filter: null,
  projects: null,
}
