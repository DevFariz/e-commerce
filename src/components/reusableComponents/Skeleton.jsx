import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={320}
    height={475}
    viewBox="0 0 320 475"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="209" y="446" rx="0" ry="0" width="2" height="3" /> 
    <rect x="71" y="278" rx="0" ry="0" width="5" height="3" /> 
    <rect x="18" y="450" rx="0" ry="0" width="148" height="25" /> 
    <rect x="217" y="450" rx="0" ry="0" width="100" height="26" /> 
    <rect x="18" y="-35px" rx="0" ry="0" width="320" height="470" /> 
    <rect x="101" y="215" rx="0" ry="0" width="12" height="11" />
  </ContentLoader>
)

export default Skeleton