import {Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {ReactNode} from "react";
import {Link} from "react-router";

type ArticleCardProps = {
  title: string;
  description: string;
  renderBottomButtons?: () => ReactNode | ReactNode[];
  titleUrl: string;
  imageSrc?: string;
  altText?: string;
}

const ArticleCard = ({ title, description, renderBottomButtons, titleUrl, imageSrc, altText }: ArticleCardProps) => {
  return (
    <Card sx={{ width: 345, minHeight: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={imageSrc}
        title={altText}
      />
      <CardContent>
        <Link to={titleUrl}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </Link>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
      { renderBottomButtons ? (
        <CardActions>
          {renderBottomButtons()}
        </CardActions>
      ) : null }
    </Card>
  )
}

export default ArticleCard
