import React from 'react'
import { ImageType } from '../../../dal/axios'
import { PaginationContainer } from './pagination/PaginationContainer'
import { SearchFieldMemo } from './searchField/SearchFieldMemo'
import { useLocation } from 'react-router-dom'
import { ImageContainerMemo } from './imageContainer/ImageContainerMemo'
import { makeStyles } from 'tss-react/mui'
import { Container, Grid, Typography } from '@mui/material'

const useStyles = makeStyles()({
  container: {
    marginTop: '5em',
  },
  text: {
    fontWeight: 'bold',
    color: '#A69500',
  },
})

export type ImagesContainerPropsType = {
  images: Array<ImageType> | null
}

export const ImagesContainer = ({ images }: ImagesContainerPropsType) => {
  const location = useLocation()
  const { classes } = useStyles()

  return (
    <>
      <Container className={classes.container}>
        {location.pathname === '/search' && <SearchFieldMemo />}
        {images?.length !== undefined && images.length > 19 && location.pathname === '/search' && (
          <PaginationContainer />
        )}
        {location.pathname === '/bookmarks' || images?.length !== 0 ? (
          <Grid container spacing={4}>
            {images && images.map((el, i) => <ImageContainerMemo key={i} image={el} />)}
          </Grid>
        ) : (
          <Typography className={classes.text}>
            No images here.Would you try to search for anything else ?
          </Typography>
        )}
      </Container>
    </>
  )
}
