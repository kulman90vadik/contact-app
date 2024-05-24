import ContentLoader from "react-content-loader"

const MyLoader = () => (
  <ContentLoader 
    speed={3}
    width={400}
    height={102}
    viewBox="0 0 400 102"
    backgroundColor="#394867"
    foregroundColor="#ffffff"
  >
    <rect x="184" y="58" rx="0" ry="0" width="1" height="0" /> 
    <rect x="217" y="131" rx="0" ry="0" width="111" height="47" /> 
    <rect x="8" y="9" rx="50" ry="50" width="80" height="80" /> 
    <rect x="105" y="18" rx="6" ry="6" width="112" height="12" /> 
    <rect x="118" y="43" rx="6" ry="6" width="150" height="12" /> 
    <rect x="105" y="67" rx="6" ry="6" width="180" height="12" />
  </ContentLoader>
)

export default MyLoader