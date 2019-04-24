import React from 'react';
import { HeadingLoader, ParagraphLoader } from './utils/SkeletonLoaders';
import './App.css';

export default function AboutUsSkeleton(){
  return (
    <>
      <HeadingLoader />
      <ParagraphLoader />
      <ParagraphLoader />
    </>
 );
}
