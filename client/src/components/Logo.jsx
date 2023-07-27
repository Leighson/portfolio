import PropTypes from "prop-types";

Logo.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.is
}

function Logo({ id, url, src, alt }) {
  return (
  <div id={id}>
    <a href={url}>
      <img src={src} alt={alt} />
    </a>
  </div>
  )
}

export default Logo;
