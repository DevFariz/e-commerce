import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={320}
    height={475}
    viewBox="0 0 320 475"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="209" y="446" rx="0" ry="0" width="2" height="3" /> 
    <rect x="16" y="10" rx="0" ry="0" width="236" height="322" /> 
    <rect x="71" y="278" rx="0" ry="0" width="5" height="3" /> 
    <rect x="15" y="347" rx="0" ry="0" width="136" height="25" /> 
    <rect x="170" y="347" rx="0" ry="0" width="80" height="26" />
  </ContentLoader>
)

export default Skeleton
