import React from 'react';
import ContentLoader from 'react-content-loader'

export const HeadingLoader = () => (
  <ContentLoader
    speed={1}
    height={30}
  >
    <rect x="0" y="11" rx="4" ry="4" width="187" height="15" />
  </ContentLoader>
)

export const ParagraphLoader = () => (
  <ContentLoader
    speed={1}
    height={50}
  >
    <rect x="0" y="5" rx="3" ry="3" width="350" height="4" />
    <rect x="0" y="12" rx="3" ry="3" width="380" height="4" />
    <rect x="0" y="19" rx="3" ry="3" width="330" height="4" />
    <rect x="0" y="26" rx="3" ry="3" width="350" height="4" />
    <rect x="0" y="33" rx="3" ry="3" width="380" height="4" />
    <rect x="0" y="40" rx="3" ry="3" width="330" height="4" />
  </ContentLoader>
)