'use client'

import React from 'react';
import Image from 'next/image';
import {Box, styled} from "@mui/material";
import {getImageUrl} from "@/helpers/image-url";

type ArticleImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  customHeight?: number;
}

const StyledImageWrapper = styled(Box, {
  shouldForwardProp: (props) => props !== 'customHeight',
})<{ customHeight?: number }>(({ theme, customHeight }) => ({
  position: 'relative',
  height: '100%',
  overflow: 'hidden',
  maxHeight: 800,
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: 'auto',
    aspectRatio: '1',
  },
  [theme.breakpoints.up('sm')]: {
    height: customHeight,
  },
}))

const ArticleImage = ({
  src,
  alt,
  priority = false,
  customHeight,
}: ArticleImageProps) => {
  const isFullLink = src.startsWith('http')
  const usedLink = isFullLink ? src : getImageUrl(src)

  return (
    <StyledImageWrapper customHeight={customHeight}>
      <Image
        src={usedLink}
        alt={alt}
        fill
        priority={priority}
        style={{
          borderRadius: '8px',
          objectFit: 'contain'
        }}
      />
    </StyledImageWrapper>
  );
};

export default ArticleImage;